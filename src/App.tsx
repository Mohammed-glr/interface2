import React, { useState, useEffect } from 'react';
import '../src/styles/App.css';
import { scenarioData } from './data/scenarioData';
import { characterData } from './data/characterData';
import { storyData } from './data/storyData';
import CharacterIntro from './components/CharacterIntro';
import DialogueManager from './components/DialogueManager';

const MagicalOrbs = () => {
  return (
    <div className="magical-orbs">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="magical-orb" />
      ))}
    </div>
  );
};

const GLRLogo = () => {
  return (
    <div className="glr-logo-container">
      <img 
        src="/imgs/GLR.svg" 
        alt="GLR Logo" 
        className="glr-logo"
      />
    </div>
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
    <div className="speaker-indicator">
      {(speakerName === 'sam' || speakerName === 'lena' || speakerName === 'amir') && (
        <img 
          src={getCharacterImage(speakerName)} 
          alt={getDisplayName(speakerName)} 
          className="speaker-portrait"
        />
      )}
      <span className="speaker-label">{getDisplayName(speakerName)}</span>
    </div>
  );
}

const ScenarioIndicator = ({ currentScenario, totalScenarios }: { currentScenario: number; totalScenarios: number }) => {
  return (
    <div className="scenario-indicator">
      <div className="scenario-number">
        <span className="current-scenario">{currentScenario}</span>
        <span className="scenario-divider">/</span>
        <span className="total-scenarios">{totalScenarios}</span>
      </div>
      <span className="scenario-label">Scenario</span>
    </div>
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
      }, 8000); 

      return () => clearTimeout(introTimer);
    }
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro && !showDialogue) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        
        setTimeout(() => {
          setCurrentScenarioIndex((prevIndex) => {
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
      <>
        <MagicalOrbs />
        <GLRLogo />
        <CharacterIntro />
      </>
    );
  }

  return (
    <div 
      className={`scenario-container ${isTransitioning ? 'transitioning' : 'visible'}`}
      style={{
        backgroundImage: `url(${currentScenario.backgroundScenarioPath})`
      }}
    >
      <MagicalOrbs />
      <GLRLogo />
      <div className="content-container">
        <div className="scenario-header">
          <ScenarioIndicator 
            currentScenario={currentScenarioIndex + 1} 
            totalScenarios={scenarioData.length}
          />
          <h1 className="scenario-title">
            {currentStory?.title || currentScenario.ScenarioName}
          </h1>
        </div>
        <div className="main-content">
          {!showDialogue && (
            <div className="story-description">
              <div className="content-box">
                <p className="content-text">
                  {currentStory?.content || currentScenario.description}
                </p>
              </div>
            </div>
          )}
          
          {showDialogue && (
            <>
              <DialogueManager
                scenarioId={currentScenario.scenarioID}
                onDialogueComplete={handleDialogueComplete}
                autoAdvance={true}
                dialogueSpeed={5000} 
                renderSpeakerIndicator={(speaker: string) => (
                  <SpeakerIndicator speakerName={speaker} />
                )}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;




