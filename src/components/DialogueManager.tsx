import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scenarioScripts } from '../data/characterData';
import Character from './Character';
import '../styles/App.css';

interface DialogueLine {
  speaker: string;
  line: string;
  isCharacter: boolean;
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
  dialogueSpeed = 3000,
  renderSpeakerIndicator
}: DialogueManagerProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDialogueActive, setIsDialogueActive] = useState(false);
  const [dialogueLines, setDialogueLines] = useState<DialogueLine[]>([]);
  const [isComplete, setIsComplete] = useState(false);

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
          isCharacter: ['sam', 'lena', 'amir'].includes(speaker)
        });
      }
    });

    return lines;
  };

  useEffect(() => {
    const lines = getDialogueLines(scenarioId);
    setDialogueLines(lines);
    setCurrentLineIndex(0);
    setIsDialogueActive(lines.length > 0);
    setIsComplete(false);
  }, [scenarioId]);

  useEffect(() => {
    if (isDialogueActive && autoAdvance && dialogueLines.length > 0) {
      const timer = setTimeout(() => {
        if (currentLineIndex < dialogueLines.length - 1) {
          setCurrentLineIndex((prev: number) => prev + 1);
        } else {
          setIsDialogueActive(false);
          setIsComplete(true);
          onDialogueComplete?.();
        }
      }, dialogueSpeed);

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, isDialogueActive, autoAdvance, dialogueSpeed, dialogueLines.length, onDialogueComplete]);

  const advanceDialogue = () => {
    if (currentLineIndex < dialogueLines.length - 1) {
      setCurrentLineIndex((prev: number) => prev + 1);
    } else {
      setIsDialogueActive(false);
      setIsComplete(true);
      onDialogueComplete?.();
    }
  };

  const resetDialogue = () => {
    setCurrentLineIndex(0);
    setIsDialogueActive(true);
    setIsComplete(false);
  };

  if (dialogueLines.length === 0) {
    return null;
  }

  const currentLine = dialogueLines[currentLineIndex];
  const isNarrator = currentLine.speaker === 'narrator' || currentLine.speaker === 'narratorClosing';

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
        <motion.span
          key={currentLineIndex}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="dialogue-progress-text"
        >
          {currentLineIndex + 1} / {dialogueLines.length}
        </motion.span>
        <div className="dialogue-progress-bar">
          <motion.div
            variants={progressVariants}
            initial="hidden"
            animate="visible"
            className="dialogue-progress-fill"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DialogueManager;