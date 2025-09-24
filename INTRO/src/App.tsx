import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../src/styles/App.css';
import { scenarioData } from './data/scenarioData';
import { characterData } from './data/characterData';
import { storyData } from './data/storyData';
import CharacterIntro from './components/CharacterIntro';
import DialogueManager from './components/DialogueManager';

const MagicalOrbs = () => {
  return (
    <motion.div 
      className="magical-orbs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {[...Array(6)].map((_, index) => (
        <motion.div 
          key={index} 
          className="magical-orb" 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5
          }}
          whileHover={{ scale: 1.1 }}
        />
      ))}
    </motion.div>
  );
};

const GLRLogo = () => {
  return (
    <motion.div 
      className="glr-logo-container"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.img 
        src="/imgs/GLR.svg" 
        alt="GLR Logo" 
        className="glr-logo"
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      />
    </motion.div>
  );
};

const SpeakerIndicator = ({ speakerName, characterImage }: { speakerName: string; characterImage?: string }) => {
  if (!speakerName || speakerName === 'narrator' || speakerName === 'narratorClosing') {
    return null;
  }

  const getCharacterImage = (speaker: string) => {
    switch (speaker.toLowerCase()) {
      case 'sam': return '/imgs/Sam.png';
      case 'lena': return '/imgs/Lena.png';
      case 'amir': return '/imgs/Amir.png';
      default: return characterImage || '/imgs/default-character.png';
    }
  };

  const getDisplayName = (speaker: string) => {
    switch (speaker.toLowerCase()) {
      case 'sam': return 'Sam';
      case 'lena': return 'Lena';
      case 'amir': return 'Amir';
      case 'raven': return 'Raven';
      case 'piratecaptain': return 'Pirate Captain';
      case 'dragon': return 'Dragon';
      case 'templevoice': return 'Temple Voice';
      case 'treewhisper': return 'Tree Whisper';
      case 'dragongift': return 'Dragon Gift';
      default: return speaker;
    }
  };

  return (
    <motion.div 
      className="speaker-indicator"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {(speakerName === 'sam' || speakerName === 'lena' || speakerName === 'amir') && (
        <motion.img 
          src={getCharacterImage(speakerName)} 
          alt={getDisplayName(speakerName)} 
          className="speaker-portrait"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
        />
      )}
      <motion.span 
        className="speaker-label"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {getDisplayName(speakerName)}
      </motion.span>
    </motion.div>
  );
}

const ScenarioIndicator = ({ currentScenario, totalScenarios }: { currentScenario: number; totalScenarios: number }) => {
  return (
    <motion.div 
      className="scenario-indicator"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div 
        className="scenario-number"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut", delay: 0.3 }}
      >
        <motion.span 
          className="current-scenario"
          key={currentScenario}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {currentScenario}
        </motion.span>
        <span className="scenario-divider">/</span>
        <span className="total-scenarios">{totalScenarios}</span>
      </motion.div>
      <motion.span 
        className="scenario-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Scenario
      </motion.span>
    </motion.div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  

  const currentScenario = scenarioData[currentScenarioIndex];
  const currentStory = storyData.find(story => story.scenarioID === currentScenario.scenarioID);

  useEffect(() => {
    if (showIntro) {
      const introTimer = setTimeout(() => {
        setShowIntro(false);
        setShowDialogue(true);
      }, 10000); 

      return () => clearTimeout(introTimer);
    }
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro && !showDialogue) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        
        setTimeout(() => {
          setCurrentScenarioIndex((prevIndex: number) => {
            return prevIndex < scenarioData.length - 1 ? prevIndex + 1 : 0;
          });
          setIsTransitioning(false);
          setShowDialogue(true);
        }, 800);
        
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [currentScenarioIndex, showIntro, showDialogue]);

  const handleDialogueComplete = () => {
    setShowDialogue(false);
  };

  if (showIntro) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <MagicalOrbs />
        <GLRLogo />
        <CharacterIntro />
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={currentScenarioIndex}
        className={`scenario-container ${isTransitioning ? 'transitioning' : 'visible'}`}
        style={{
          backgroundImage: `url(${currentScenario.backgroundScenarioPath})`
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeInOut"
        }}
      >
        <MagicalOrbs />
        <GLRLogo />
        <motion.div 
          className="content-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="scenario-header"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ScenarioIndicator 
              currentScenario={currentScenarioIndex + 1} 
              totalScenarios={scenarioData.length}
            />
            <motion.h1 
              className="scenario-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              key={currentStory?.title || currentScenario.ScenarioName}
            >
              {currentStory?.title || currentScenario.ScenarioName}
            </motion.h1>
          </motion.div>
          <motion.div 
            className="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {!showDialogue && (
                <motion.div 
                  className="story-description"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div 
                    className="content-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.p 
                      className="content-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                    >
                      {currentStory?.content || currentScenario.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
              
              {showDialogue && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <DialogueManager
                    scenarioId={currentScenario.scenarioID}
                    onDialogueComplete={handleDialogueComplete}
                    autoAdvance={true}
                    dialogueSpeed={5000} 
                    renderSpeakerIndicator={(speaker: string) => (
                      <SpeakerIndicator speakerName={speaker} />
                    )}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;




