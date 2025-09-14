import React from 'react';
import { characterData } from '../data/characterData';
import Character from './Character';
import '../styles/Characters.css';

interface CharacterData {
  id: number;
  CharacterName: string;
  characterImagePath: string;
}

// Fantasy character descriptions
const characterDescriptions: { [key: string]: string } = {
  'Lena': 'The Brave Warrior',
  'Sam': 'The Wise Scholar',
  'Amir': 'The Swift Ranger'
};

export default function CharacterIntro() {
    return (
        <div className="character-intro-container fantasy-theme">
            
            <div className="intro-header">
                <h1 className="intro-title fantasy-title">Behold Our Noble Heroes</h1>
                <div className="title-underline"></div>
                <p className="intro-subtitle fantasy-subtitle">Brave souls who shall guide thee through this ancient tale</p>
            </div>
            
            <div className="characters-showcase">
                {characterData.map((character: CharacterData) => (
                    <div key={character.id} className="character-display fantasy-character-display">
                        <div className="character-portrait-wrapper">
                            <Character 
                                characterName={character.CharacterName}
                                showSpeechBox={false}
                            />
                        </div>
                        <div className="character-nameplate">
                            <h3 className="character-name">{character.CharacterName}</h3>
                            <p className="character-title">
                                {characterDescriptions[character.CharacterName] || 'The Adventurer'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="fantasy-border-bottom"></div>
            <div className="scroll-decoration">
                <div className="scroll-text">~ Ancient Chronicles ~</div>
            </div>
        </div>
    );
}