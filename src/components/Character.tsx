import React from 'react';
import { characterData } from '../data/characterData';
import '../styles/Characters.css';
import { Variants, motion } from 'framer-motion';

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
        <p>Karakter '{characterName}' niet gevonden</p>
      </div>
    );
  }


  const CharacterFloatingEffect: Variants = {
    initial: { y: -10 },
    animate: {
      y: 10,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      } 
    }
  }

  const TextBoxVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const CreateSpeechBox = (text: string) => {
    if (!text.trim() || !showSpeechBox) return null;
    
    return (
      <div className="speech-box">
        <p className="speech-text">{text}</p>
      </div>
    );
  };

  


  return (
    <motion.div 
    className="character-container"
    initial="initial"
    animate="animate"
    variants={CharacterFloatingEffect}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    >
      <motion.img 
        src={character.characterImagePath} 
        alt={`${character.CharacterName} karakter`}
        className="character-image"
        draggable="false"
        loading="lazy"


      />
      {CreateSpeechBox(speechText)}
    </motion.div>
  );
};

export default Character;