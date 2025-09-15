import React, { useState, useEffect } from 'react';
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
}

const DialogueManager: React.FC<DialogueManagerProps> = ({ 
  scenarioId, 
  onDialogueComplete,
  autoAdvance = true,
  dialogueSpeed = 3000 
}) => {
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
          setCurrentLineIndex(prev => prev + 1);
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
      setCurrentLineIndex(prev => prev + 1);
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

  return (
    <div className="dialogue-manager">
      <div className="characters-container">
        {currentLine.isCharacter && (
          <div className="active-character">
            <Character
              characterName={currentLine.speaker}
              speechText={currentLine.line}
              showSpeechBox={true}
            />
          </div>
        )}
      </div>

      {isNarrator && (
        <div className="narrator-container">
          <div className="narrator-box">
            <p className="narrator-text">{currentLine.line}</p>
          </div>
        </div>
      )}

      {!currentLine.isCharacter && !isNarrator && (
        <div className="special-dialogue-container">
          <div className="special-dialogue-box">
            <div className="speaker-name">{currentLine.speaker}</div>
            <p className="special-dialogue-text">{currentLine.line}</p>
          </div>
        </div>
      )}
{/* 
      <div className="dialogue-controls">
        <div className="dialogue-progress">
          <span>{currentLineIndex + 1} / {dialogueLines.length}</span>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentLineIndex + 1) / dialogueLines.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="dialogue-buttons">
          {!autoAdvance && !isComplete && (
            <button onClick={advanceDialogue} className="dialogue-btn next-btn">
              Next →
            </button>
          )}
          
          {isComplete && (
            <button onClick={resetDialogue} className="dialogue-btn replay-btn">
              Replay Dialogue
            </button>
          )}
        </div>
      </div> */}

      
    </div>
  );
};

export default DialogueManager;