import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  scenarioScripts, 
  getCharacterAudio, 
  hasCharacterAudio, 
  getLineDuration, 
  calculateAutoAdvanceDelay 
} from '../data/characterData';
import Character from './Character';
import '../styles/App.css';

interface DialogueLine {
  speaker: string;
  line: string;
  isCharacter: boolean;
  duration: number; // in seconds
}

interface DialogueManagerProps {
  scenarioId: number;
  onDialogueComplete?: () => void;
  autoAdvance?: boolean;
  dialogueSpeed?: number;
  renderSpeakerIndicator?: (speaker: string) => React.ReactNode;
}

const DialogueManager: React.FC<DialogueManagerProps> = ({ 
  scenarioId, 
  onDialogueComplete,
  autoAdvance = true,
  dialogueSpeed = 3000, // This is now used as fallback only
  renderSpeakerIndicator
}: DialogueManagerProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDialogueActive, setIsDialogueActive] = useState(false);
  const [dialogueLines, setDialogueLines] = useState<DialogueLine[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getDialogueLines = (scenarioId: number): DialogueLine[] => {
    const scenario = scenarioScripts.find(s => s.scenarioId === scenarioId);
    if (!scenario) return [];

    const lines: DialogueLine[] = [];
    const { scripts } = scenario;

    const speakerOrder = ['narrator', 'sam', 'lena', 'amir', 'raven', 'pirateCaptain', 'dragon', 'templeVoice', 'treeWhisper', 'dragonGift', 'narratorClosing'];

    speakerOrder.forEach(speaker => {
      if (scripts[speaker as keyof typeof scripts]) {
        lines.push({
          speaker,
          line: scripts[speaker as keyof typeof scripts] as string,
          isCharacter: ['sam', 'lena', 'amir'].includes(speaker),
          duration: getLineDuration(speaker, scenarioId)
        });
      }
    });

    return lines;
  };

  const playAudioForLine = async (speaker: string, scenarioId: number) => {
    try {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
      }

      const audioPath = getCharacterAudio(speaker, scenarioId);
      
      if (audioPath) {
        const audio = new Audio(audioPath);
        currentAudioRef.current = audio;
        
        audio.addEventListener('canplaythrough', () => {
          console.log(`Audio loaded for ${speaker} in scenario ${scenarioId}`);
        });
        
        audio.addEventListener('ended', () => {
          currentAudioRef.current = null;
        });
        
        audio.addEventListener('error', () => {
          console.error(`Failed to load audio file: ${audioPath}`);
          currentAudioRef.current = null;
        });
        
        await audio.play();
      } else {
        console.warn(`No audio found for ${speaker} in scenario ${scenarioId}`);
      }
    } catch (error) {
      console.error(`Failed to play audio for ${speaker} in scenario ${scenarioId}:`, error);
    }
  };




  useEffect(() => {
    const lines = getDialogueLines(scenarioId);
    setDialogueLines(lines);
    setCurrentLineIndex(0);
    setIsDialogueActive(lines.length > 0);
    setIsComplete(false);
  }, [scenarioId]);

  useEffect(() => {
    if (isDialogueActive && dialogueLines.length > 0) {
      const currentLine = dialogueLines[currentLineIndex];
      playAudioForLine(currentLine.speaker, scenarioId);
    }
  }, [currentLineIndex, isDialogueActive, dialogueLines, scenarioId]);

  useEffect(() => {
    if (isDialogueActive && autoAdvance && dialogueLines.length > 0) {
      const currentLine = dialogueLines[currentLineIndex];
      const delay = calculateAutoAdvanceDelay(currentLine.speaker, scenarioId);
      
      setTimeRemaining(delay / 1000);
      
      const countdownInterval = setInterval(() => {
        setTimeRemaining(prev => {
          const newTime = prev - 0.1;
          return newTime > 0 ? newTime : 0;
        });
      }, 100);
      
      const advanceTimer = setTimeout(() => {
        if (currentLineIndex < dialogueLines.length - 1) {
          setCurrentLineIndex((prev: number) => prev + 1);
        } else {
          setIsDialogueActive(false);
          setIsComplete(true);
          onDialogueComplete?.();
        }
      }, delay);

      timerRef.current = advanceTimer;

      return () => {
        clearInterval(countdownInterval);
        clearTimeout(advanceTimer);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      };
    }
  }, [currentLineIndex, isDialogueActive, autoAdvance, dialogueLines.length, onDialogueComplete, scenarioId]);

  const advanceDialogue = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    if (currentLineIndex < dialogueLines.length - 1) {
      setCurrentLineIndex((prev: number) => prev + 1);
    } else {
      setIsDialogueActive(false);
      setIsComplete(true);
      onDialogueComplete?.();
    }
  };

  const resetDialogue = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setCurrentLineIndex(0);
    setIsDialogueActive(true);
    setIsComplete(false);
    setTimeRemaining(0);
  };

  useEffect(() => {
    return () => {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current = null;
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  if (dialogueLines.length === 0) {
    return null;
  }

  const currentLine = dialogueLines[currentLineIndex];
  const isNarrator = currentLine.speaker === 'narrator' || currentLine.speaker === 'narratorClosing';
  const hasAudio = hasCharacterAudio(currentLine.speaker, scenarioId);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const characterVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      } as const
    },
    exit: {
      x: 100,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const narratorVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      } as const
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4
      }
    }
  };

  const specialDialogueVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      rotateX: 0,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      } as const
    },
    exit: {
      rotateX: 90,
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${((currentLineIndex + 1) / dialogueLines.length) * 100}%`,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.div 
      className="dialogue-manager"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence mode="wait">
        {currentLine.isCharacter && (
          <motion.div 
            key={`character-${currentLineIndex}`}
            className="active-character"
            variants={characterVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Character
              characterName={currentLine.speaker}
              speechText={currentLine.line}
              showSpeechBox={true}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {renderSpeakerIndicator && (
          <motion.div
            key={`speaker-${currentLineIndex}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.1 }}
          >
            {renderSpeakerIndicator(currentLine.speaker)}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isNarrator && (
          <motion.div 
            key={`narrator-${currentLineIndex}`}
            className="narrator-container"
            variants={narratorVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="narrator-box"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
              }}
            >
              <motion.p 
                className="narrator-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut"
                }}
              >
                {currentLine.line}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!currentLine.isCharacter && !isNarrator && (
          <motion.div 
            key={`special-${currentLineIndex}`}
            className="special-dialogue-container"
            variants={specialDialogueVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="special-dialogue-box"
              whileHover={{ 
                scale: 1.03,
                rotateY: [0, 2, -2, 0]
              }}
              transition={{
                rotateY: {
                  duration: 0.6,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.div 
                className="speaker-name"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {currentLine.speaker}
              </motion.div>
              <motion.p 
                className="special-dialogue-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 1,
                  delay: 0.4,
                  ease: "easeOut"
                }}
              >
                {currentLine.line}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="dialogue-progress-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="dialogue-progress-info">
          <motion.span
            key={currentLineIndex}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="dialogue-progress-text"
          >
            {currentLineIndex + 1} / {dialogueLines.length}
          </motion.span>
          {autoAdvance && timeRemaining > 0 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="dialogue-time-remaining"
            >
              {Math.ceil(timeRemaining)}s
            </motion.span>
          )}
          {hasAudio && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="audio-indicator"
              title="Audio available"
            >
              🔊
            </motion.span>
          )}
        </div>
        <div className="dialogue-progress-bar">
          <motion.div
            variants={progressVariants}
            initial="hidden"
            animate="visible"
            className="dialogue-progress-fill"
          />
          {autoAdvance && (
            <motion.div
              className="dialogue-time-progress"
              initial={{ width: "100%" }}
              animate={{ 
                width: `${(timeRemaining / (currentLine.duration + 1)) * 100}%` 
              }}
              transition={{ duration: 0.1 }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DialogueManager;