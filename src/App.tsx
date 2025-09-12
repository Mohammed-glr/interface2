import React, { useState, useEffect } from 'react';
import './output.css';
import { scenarioData } from './data/scenarioData';
import { characterData } from './data/characterData';
import { storyData } from './data/storyData';

function App() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get current scenario and story data
  const currentScenario = scenarioData[currentScenarioIndex];
  const currentStory = storyData.find(story => story.scenarioID === currentScenario.scenarioID);

  useEffect(() => {
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
  }, [currentScenarioIndex]);

  return (
    <div 
      className={`fixed top-0 left-0 w-screen h-screen overflow-hidden transition-opacity duration-1000 ease-in-out ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${currentScenario.backgroundScenarioPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/** Content container */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/** Story content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            {currentStory?.title || currentScenario.ScenarioName}
          </h1>
          <div className="bg-black bg-opacity-60 rounded-lg p-6 md:p-8 max-w-3xl">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              {currentStory?.content || currentScenario.description}
            </p>
          </div>
        </div>

        {/** Debug info - bottom corner */}
        <div className="text-white text-sm bg-black bg-opacity-30 p-2 rounded w-fit self-end">
          Scenario {currentScenarioIndex + 1}/{scenarioData.length} | ID: {currentScenario.scenarioID}
        </div>
      </div>
    </div>
  );
}

export default App;
