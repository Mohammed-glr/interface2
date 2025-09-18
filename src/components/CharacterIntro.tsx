import React from 'react';
import { motion } from 'framer-motion';
import { characterData } from '../data/characterData';
import Character from './Character';
import '../styles/Characters.css';

interface CharacterData {
  id: number;
  CharacterName: string;
  characterImagePath: string;
}

const characterDescriptions: { [key: string]: string } = {
  'Lena': 'De Dappere Krijger',
  'Sam': 'De Slimme Geleerde',
  'Amir': 'De Snelle Verkenner'
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 50, 
    opacity: 0,
    scale: 0.8
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8
    } as const
  } 
};

const titleVariants = {
  hidden: { 
    y: -30, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
      duration: 1
    } as const
  }
};

export default function CharacterIntro() {
    return (
        <motion.div 
          className="character-intro-container fantasy-theme"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="intro-header"
            variants={titleVariants}
          >
            <motion.h1 
              className="intro-title fantasy-title"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5
              }}
            >
              Ontmoet Onze Avonturiers!
            </motion.h1>
            <motion.div 
              className="title-underline"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <motion.p 
              className="intro-subtitle fantasy-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Dappere vrienden die je meenemen op een magisch avontuur
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="characters-showcase"
            variants={containerVariants}
          >
            {characterData.map((character: CharacterData, index: number) => (
              <motion.div 
                key={character.id} 
                className="character-display fantasy-character-display"
                variants={itemVariants}
              >
                <motion.div 
                  className="character-portrait-wrapper"
                  initial={{ rotate: -10, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 1.2 + (index * 0.2)
                  }}
                >
                  <Character 
                    characterName={character.CharacterName}
                    showSpeechBox={false}
                  />
                </motion.div>
                <motion.div 
                  className="character-nameplate"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.5 + (index * 0.2) 
                  }}
                >
                  <motion.h3 
                    className="character-name"
                    initial={{ letterSpacing: "0.2em" }}
                    animate={{ letterSpacing: "0.05em" }}
                    transition={{ duration: 0.8, delay: 1.8 + (index * 0.2) }}
                  >
                    {character.CharacterName}
                  </motion.h3>
                  <motion.p 
                    className="character-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 + (index * 0.2) }}
                  >
                    {characterDescriptions[character.CharacterName] || 'De Avonturier'}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
    ); 
}