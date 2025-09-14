import React from 'react';
import { characterData } from '../data/characterData';
import '../styles/Characters.css';

interface CharacterProps {
  characterName: string;
  speechText?: string;
  showSpeechBox?: boolean;
}

interface CharacterData {
  id: number;
  CharacterName: string;
  characterImagePath: string;
}

const Character: React.FC<CharacterProps> = ({ 
  characterName, 
  speechText = "", 
  showSpeechBox = true 
}) => {
  const character: CharacterData | undefined = characterData.find(
    (char) => char.CharacterName.toLowerCase() === characterName.toLowerCase()
  );

  if (!character) {
    return (
      <div className="character-error">
        <p>Character '{characterName}' not found</p>
      </div>
    );
  }

  const CreateSpeechBox = (text: string) => {
    if (!text.trim() || !showSpeechBox) return null;
    
    return (
      <div className="speech-box">
        <p className="speech-text">{text}</p>
      </div>
    );
  };

  return (
    <div className="character-container">
      <img 
        src={character.characterImagePath} 
        alt={`${character.CharacterName} character`}
        className="character-image"
      />
      {CreateSpeechBox(speechText)}
    </div>
  );
};

export default Character;