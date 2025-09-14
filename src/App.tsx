import React, { useState, useEffect } from 'react';
import '../src/styles/App.css';
import { scenarioData } from './data/scenarioData';
import { characterData } from './data/characterData';
import { storyData } from './data/storyData';
import CharacterIntro from './components/CharacterIntro';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentScenario = scenarioData[currentScenarioIndex];
  const currentStory = storyData.find(story => story.scenarioID === currentScenario.scenarioID);

  useEffect(() => {
    if (showIntro) {
      const introTimer = setTimeout(() => {
        setShowIntro(false);
      }, 60000); 

      return () => clearTimeout(introTimer);
    }
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        
        setTimeout(() => {
          setCurrentScenarioIndex((prevIndex) => {
            return prevIndex < scenarioData.length - 1 ? prevIndex + 1 : 0;
          });
          setIsTransitioning(false);
        }, 500); 
        
      }, scenarioData[currentScenarioIndex].ScenarioDuration * 1000);

      return () => clearTimeout(timer);
    }
  }, [currentScenarioIndex, showIntro]);

  if (showIntro) {
    return <CharacterIntro />;
  }

  return (
    <div 
      className={`scenario-container ${isTransitioning ? 'transitioning' : 'visible'}`}
      data-background={currentScenario.backgroundScenarioPath}
    >
      <div className="content-container">
        <div className="story-content">
          <h1 className="story-title">
            {currentStory?.title || currentScenario.ScenarioName}
          </h1>
          <div className="content-box">
            <p className="content-text">
              {currentStory?.content || currentScenario.description}
            </p>
          </div>
        </div>

        <div className="debug-info">
          Scenario {currentScenarioIndex + 1}/{scenarioData.length} | ID: {currentScenario.scenarioID}
        </div>
      </div>
    </div>
  );
}

export default App;
