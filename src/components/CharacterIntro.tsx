import React from 'react';
import { characterData } from '../data/characterData';
import '../styles/Characters.css';

interface CharacterData {
  id: number;
  CharacterName: string;
  characterImagePath: string;
}

export default function CharacterIntro() {
    return (
        <div className="character-intro-container">
            <div className="intro-header">
                <h1 className="intro-title">Meet Our Characters</h1>
                <p className="intro-subtitle">Get to know the heroes of our story</p>
            </div>
            
            <div className="characters-grid">
                {characterData.map((character: CharacterData) => (
                    <div key={character.id} className="character-card">
                        <div className="character-image-wrapper">
                            <img 
                                src={character.characterImagePath} 
                                alt={`${character.CharacterName} character`}
                                className="intro-character-image"
                            />
                        </div>
                        <div className="character-info">
                            <h3 className="character-name">{character.CharacterName}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}