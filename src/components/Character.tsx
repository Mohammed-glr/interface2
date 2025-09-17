import React from 'react';
import { characterData } from '../data/characterData';
import '../styles/Characters.css';
import { Variants, motion, AnimatePresence } from 'framer-motion';

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
}: CharacterProps) => {
  const character: CharacterData | undefined = characterData.find(
    (char) => char.CharacterName.toLowerCase() === characterName.toLowerCase()
  );

  if (!character) {
    return (
      <motion.div 
        className="character-error"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Karakter '{characterName}' niet gevonden
        </motion.p>
      </motion.div>
    );
  }

  const CharacterFloatingEffect: Variants = {
    initial: { 
      y: -10,
      opacity: 0,
      scale: 0.8
    },
    animate: {
      y: [10, -5, 10],
      opacity: 1,
      scale: 1,
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.6,
          ease: "easeOut"
        },
        scale: {
          duration: 0.8,
          ease: "backOut"
        }
      } 
    }
  }

  const ImageVariants: Variants = {
    initial: { 
      scale: 0
    },
    animate: {
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 1
      }
    }
  };

  const TextBoxVariants: Variants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const CreateSpeechBox = (text: string) => {
    if (!text.trim() || !showSpeechBox) return null;
    
    return (
      <motion.div 
        className="speech-box"
        variants={TextBoxVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }}
      >
        <motion.p 
          className="speech-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {text}
        </motion.p>
      </motion.div>
    );
  };

  return (
    <motion.div 
      className="character-container"
      initial="initial"
      animate="animate"
      variants={CharacterFloatingEffect}
      whileHover={{ 
        scale: 1.08,
        y: -15,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img 
        src={character.characterImagePath} 
        alt={`${character.CharacterName} karakter`}
        className="character-image"
        draggable="false"
        loading="lazy"
        variants={ImageVariants}
        whileHover={{ 
          rotateZ: [0, -5, 5, 0],
          filter: "brightness(1.1)"
        }}
        transition={{
          rotateZ: {
            duration: 0.6,
            ease: "easeInOut"
          },
          filter: {
            duration: 0.3
          }
        }}
      />
      <AnimatePresence mode="wait">
        {CreateSpeechBox(speechText)}
      </AnimatePresence>
    </motion.div>
  );
};

export default Character;