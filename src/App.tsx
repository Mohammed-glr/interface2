import React, { useState, useEffect } from 'react';
import '../src/styles/App.css';
import { scenarioData } from './data/scenarioData';
import { characterData } from './data/characterData';
import { storyData } from './data/storyData';
import CharacterIntro from './components/CharacterIntro';
import DialogueManager from './components/DialogueManager';

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
      }, 8000); // Increased intro time

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
    return <CharacterIntro />;
  }

  return (
    <div 
      className={`scenario-container ${isTransitioning ? 'transitioning' : 'visible'}`}
      style={{
        backgroundImage: `url(${currentScenario.backgroundScenarioPath})`
      }}
    >
      <div className="content-container">
        {/* Fixed Header for Scenario Title */}
        <div className="scenario-header">
          <h1 className="scenario-title">
            {currentStory?.title || currentScenario.ScenarioName}
          </h1>
        </div>

        {/* Main Content Area */}
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
            <DialogueManager
              scenarioId={currentScenario.scenarioID}
              onDialogueComplete={handleDialogueComplete}
              autoAdvance={true}
              dialogueSpeed={5000} 
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;




