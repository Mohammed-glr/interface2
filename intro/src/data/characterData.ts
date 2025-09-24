export const characterData = [
  { id: 1, CharacterName: 'Lena', characterImagePath: '/imgs/Lena.png' },
  { id: 2, CharacterName: 'Sam', characterImagePath: '/imgs/Sam.png' },
  { id: 3, CharacterName: 'Amir', characterImagePath: '/imgs/Amir.png' },
];

export const scenarioScripts = [
  {
    scenarioId: 1,
    title: "Het Magische Licht van Middernacht",
    scripts: {
      narrator: "Op een rustige nacht sliep het stadje vredig… maar de oude bibliotheek gloeide onder het maanlicht.",
      sam: "Wauw… jongens, zien jullie dat? De bibliotheek is… levend!",
      lena: "Laten we gaan kijken! Misschien verbergt hij een geheim.",
      amir: "Eh, geheimen in gloeiende bibliotheken betekenen meestal problemen."
    }
  },
  {
    scenarioId: 2,
    title: "De Fluisterende Boekenplanken",
    scripts: {
      narrator: "Binnen strekten boekenplanken zich hoger uit dan ooit tevoren, en vreemd gefluister vulde de lucht.",
      lena: "'De Geheime Kaart van Verborgen Werelden'… 'Het Boek dat Jouw Naam Weet'… dit zijn geen gewone boeken!",
      sam: "Misschien vertelt er eentje me hoe ik voor altijd computerspelletjes kan winnen.",
      amir: "Sst. Luister. De boeken zijn aan het… fluisteren."
    }
  },
  {
    scenarioId: 3,
    title: "Het Boek dat Hen Meezuigt",
    scripts: {
      narrator: "Plotseling gloeide één boek feller, zijn pagina's sloegen vanzelf open.",
      lena: "Het… zuigt ons naar binnen!",
      sam: "Hou je vast aan iets!",
      amir: "Dit was een verschrikkelijk slecht idee!"
    }
  },
  {
    scenarioId: 4,
    title: "Het Betoverde Bos",
    scripts: {
      narrator: "Ze landden in een magisch bos, waar de bomen fluisterden en schaduwen levend leken.",
      sam: "Gelukkig zijn de bomen vriendelijk. Hallo, meneer Boom—heb je WiFi?",
      treeWhisper: "Tijd… loopt… weg…",
      lena: "Praatte die boom net?"
    }
  },
  {
    scenarioId: 5,
    title: "De Zwevende Zandloper",
    scripts: {
      narrator: "Boven het bos zweefde een reusachtige gouden zandloper, het zand was bijna op.",
      raven: "Elke nacht komen de verhalen tot leven. Maar als het zand op is, verdwijnen jullie… voor altijd.",
      amir: "V-verdwijnen? Voor altijd?!",
      lena: "Dan moeten we dit oplossen voor zonsopgang."
    }
  },
  {
    scenarioId: 6,
    title: "De Grote Piraten Ontsnapping",
    scripts: {
      narrator: "De kinderen werden meegesleurd in een nieuw verhaal—op een piratenschip midden in een storm!",
      sam: "Yes! Piraten! Dit is geweldig!",
      pirateCaptain: "Pak ze, jongens! Ze weten waar de schat is!",
      amir: "Eh, ik weet echt niet waar de schat is!",
      lena: "Daar—op die kaart! Dat is de aanwijzing die we nodig hebben!"
    }
  },
  {
    scenarioId: 7,
    title: "Het Raadsel van de Oude Tempel",
    scripts: {
      narrator: "Vervolgens bevonden ze zich in een zonovergoten woestijn, staand voor een tempel bedekt met gloeiende tekens.",
      amir: "Deze symbolen… het is een code. Als ik gewoon… dit stukje verplaats—",
      templeVoice: "Alleen de wijzen mogen passeren…",
      sam: "Goed dat we Amir hebben meegenomen."
    }
  },
  {
    scenarioId: 8,
    title: "De Eenzame Draak",
    scripts: {
      narrator: "Diep in een mistige berggrot verscheen een enorme groene draak met verdrietige ogen.",
      sam: "Eh, Lena? Draken betekenen meestal: wegrennen.",
      dragon: "Wees niet bang voor mij. Ik ben niet jullie vijand.",
      lena: "Hij is… eenzaam.",
      dragonGift: "Neem dit. Het is de sleutel tot jullie reis."
    }
  },
  {
    scenarioId: 9,
    title: "De Race Tegen de Klok",
    scripts: {
      narrator: "Terug in het bos was de zandloper bijna leeg. De grond schudde, het gefluister werd luider.",
      amir: "Het zand is bijna op!",
      raven: "Alleen door het laatste raadsel op te lossen zal de poort opengaan!",
      lena: "De tekens! Ze vormen een patroon… we moeten ze op één lijn zetten!",
      sam: "Dan doen we het—samen!"
    }
  },
  {
    scenarioId: 10,
    title: "De Poort van Verhalen",
    scripts: {
      narrator: "Net toen het laatste zandkorretje viel, gloeiden de tekens en verscheen een reusachtig open boek als een poort.",
      sam: "Ga, ga, ga!",
      amir: "We hebben geen tijd meer!",
      lena: "Spring!",
      narratorClosing: "En met een flits van gouden licht tuimelden de kinderen terug in de bibliotheek… terwijl de dageraad aanbrak en de magie wegstierf. Maar de vraag bleef—wat als de verhalen hen weer zouden roepen… op een nacht?"
    }
  }
];

export const characterScripts = {
  sam: [
    { scenarioId: 1, line: "Wauw… jongens, zien jullie dat? De bibliotheek is… levend!", duration: 5 }, 
    { scenarioId: 2, line: "Misschien vertelt er eentje me hoe ik voor altijd computerspelletjes kan winnen.", duration: 5 },
    { scenarioId: 3, line: "Hou je vast aan iets!", duration: 2 },
    { scenarioId: 4, line: "Gelukkig zijn de bomen vriendelijk. Hallo, meneer Boom—heb je WiFi?", duration: 5 },
    { scenarioId: 6, line: "Yes! Piraten! Dit is geweldig!", duration: 5 },
    { scenarioId: 7, line: "Goed dat we Amir hebben meegenomen.", duration: 5 },
    { scenarioId: 8, line: "Eh, Lena? Draken betekenen meestal: wegrennen.", duration: 3 },
    { scenarioId: 9, line: "Dan doen we het—samen!", duration: 3 },
    { scenarioId: 10, line: "Ga, ga, ga!", duration: 2 }
  ],
  lena: [
    { scenarioId: 1, line: "Laten we gaan kijken! Misschien verbergt hij een geheim.", duration: 4 },
    { scenarioId: 2, line: "'De Geheime Kaart van Verborgen Werelden'… 'Het Boek dat Jouw Naam Weet'… dit zijn geen gewone boeken!", duration: 7 },
    { scenarioId: 3, line: "Het… zuigt ons naar binnen!", duration: 2 },
    { scenarioId: 4, line: "Praatte die boom net?", duration: 2 },
    { scenarioId: 5, line: "Dan moeten we dit oplossen voor zonsopgang.", duration: 3 },
    { scenarioId: 6, line: "Daar—op die kaart! Dat is de aanwijzing die we nodig hebben!", duration: 5 },
    { scenarioId: 8, line: "Hij is… eenzaam.", duration: 2 },
    { scenarioId: 9, line: "De tekens! Ze vormen een patroon… we moeten ze op één lijn zetten!", duration: 4 },
    { scenarioId: 10, line: "Spring!", duration: 2 }
  ],
  amir: [
    { scenarioId: 1, line: "Eh, geheimen in gloeiende bibliotheken betekenen meestal problemen.", duration: 5 },
    { scenarioId: 2, line: "Sst. Luister. De boeken zijn aan het… fluisteren.", duration: 4 },
    { scenarioId: 3, line: "Dit was een verschrikkelijk slecht idee!", duration: 4 },
    { scenarioId: 5, line: "V-verdwijnen? Voor altijd?!", duration: 2 },
    { scenarioId: 6, line: "Eh, ik weet echt niet waar de schat is!", duration: 3 },
    { scenarioId: 7, line: "Deze symbolen… het is een code. Als ik gewoon… dit stukje verplaats—", duration: 5 },
    { scenarioId: 9, line: "Het zand is bijna op!", duration: 2 },
    { scenarioId: 10, line: "We hebben geen tijd meer!", duration: 2 }
  ],
  narrator: [
    { scenarioId: 1, line: "Op een rustige nacht sliep het stadje vredig… maar de oude bibliotheek gloeide onder het maanlicht.", duration: 7 },
    { scenarioId: 2, line: "Binnen strekten boekenplanken zich hoger uit dan ooit tevoren, en vreemd gefluister vulde de lucht.", duration: 7 },
    { scenarioId: 3, line: "Plotseling gloeide één boek feller, zijn pagina's sloegen vanzelf open.", duration: 5 },
    { scenarioId: 4, line: "Ze landden in een magisch bos, waar de bomen fluisterden en schaduwen levend leken.", duration: 6 },
    { scenarioId: 5, line: "Boven het bos zweefde een reusachtige gouden zandloper, het zand was bijna op.", duration: 6 },
    { scenarioId: 6, line: "De kinderen werden meegesleurd in een nieuw verhaal—op een piratenschip midden in een storm!", duration: 7 },
    { scenarioId: 7, line: "Vervolgens bevonden ze zich in een zonovergoten woestijn, staand voor een tempel bedekt met gloeiende tekens.", duration: 7 },
    { scenarioId: 8, line: "Diep in een mistige berggrot verscheen een enorme groene draak met verdrietige ogen.", duration: 6 },
    { scenarioId: 9, line: "Terug in het bos was de zandloper bijna leeg. De grond schudde, het gefluister werd luider.", duration: 6 },
    { scenarioId: 10, line: "Net toen het laatste zandkorretje viel, gloeiden de tekens en verscheen een reusachtig open boek als een poort.", duration: 7 },
  ],
  narratorClosing: [
    { scenarioId: 10, line: "En met een flits van gouden licht tuimelden de kinderen terug in de bibliotheek… terwijl de dageraad aanbrak en de magie wegstierf. Maar de vraag bleef—wat als de verhalen hen weer zouden roepen… op een nacht?", duration: 15 }
  ],
  treeWhisper: [
    { scenarioId: 4, line: "Tijd… loopt… weg…", duration: 3 }
  ],
  raven: [
    { scenarioId: 5, line: "Elke nacht komen de verhalen tot leven. Maar als het zand op is, verdwijnen jullie… voor altijd.", duration: 6 },
    { scenarioId: 9, line: "Alleen door het laatste raadsel op te lossen zal de poort opengaan!", duration: 4 }
  ],
  templeVoice: [
    { scenarioId: 7, line: "Alleen de wijzen mogen passeren…", duration: 3 }
  ],
  dragon: [
    { scenarioId: 8, line: "Wees niet bang voor mij. Ik ben niet jullie vijand.", duration: 4 }
  ],
  dragonGift: [
    { scenarioId: 8, line: "Neem dit. Het is de sleutel tot jullie reis.", duration: 4 }
  ],
  pirateCaptain: [
    { scenarioId: 6, line: "Pak ze, jongens! Ze weten waar de schat is!", duration: 4 }
  ]
};

interface DialogueLine {
  scenarioId: number;
  line: string;
  duration: number; // in seconds
}

interface CharacterDialogue {
  [characterName: string]: DialogueLine[];
}

interface AudioMapping {
  [scenarioId: number]: string;
}

interface CharacterLinesAudio {
  [characterName: string]: AudioMapping;
}

export const characterLinesAudio: CharacterLinesAudio = {
  sam: {
    1: '/audio/sam1.mp3',
    2: '/audio/sam2.mp3',
    3: '/audio/sam3.mp3',
    4: '/audio/sam4.mp3',
    6: '/audio/sam5.mp3', 
    7: '/audio/sam6.mp3',
    8: '/audio/sam7.mp3',
    9: '/audio/sam8.mp3',
    10: '/audio/sam9.mp3',
  },
  lena: {
    1: '/audio/lena1.mp3',
    2: '/audio/lena2.mp3',
    3: '/audio/lena3.mp3',
    4: '/audio/lena4.mp3',
    5: '/audio/lena5.mp3',
    6: '/audio/lena6.mp3',
    8: '/audio/lena7.mp3',
    9: '/audio/lena8.mp3',
    10: '/audio/lena9.mp3',
  },
  amir: {
    1: '/audio/amir1.mp3' ,
    2: '/audio/amir2.mp3',
    3: '/audio/amir3.mp3',
    5: '/audio/amir4.mp3', 
    6: '/audio/amir5.mp3',
    7: '/audio/amir6.mp3',
    9: '/audio/amir7.mp3',
    10: '/audio/amir8.mp3',
  },
  narrator: {
    1: '/audio/narrator1.mp3',
    2: '/audio/narrator2.mp3',
    3: '/audio/narrator3.mp3',
    4: '/audio/narrator4.mp3',
    5: '/audio/narrator5.mp3',
    6: '/audio/narrator6.mp3',
    7: '/audio/narrator7.mp3',
    8: '/audio/narrator8.mp3',
    9: '/audio/narrator9.mp3',
    10: '/audio/narrator10.mp3',
    11: '/audio/narrator11.mp3',
  },
  raven: {
    5: '/audio/raven1.mp3', 
    9: '/audio/raven2.mp3', 
  },
  treeWhisper: {
    4: '/audio/tree1.mp3',
  },
  templeVoice: {
    7: '/audio/tamplevoice1.mp3',
  },
  dragon: {
    8: '/audio/dragon1.mp3',
  },
  dragonGift: {
    8: '/audio/dragon2.mp3',
  },
  pirateCaptain: {
    6: '/audio/pirate1.mp3',
  }
};

// Helper functions for better data management
export const getCharacterAudio = (character: string, scenarioId: number): string | null => {
  return characterLinesAudio[character]?.[scenarioId] || null;
};

export const hasCharacterAudio = (character: string, scenarioId: number): boolean => {
  return !!characterLinesAudio[character]?.[scenarioId];
};

export const getCharacterLine = (character: string, scenarioId: number): DialogueLine | null => {
  const characterLines = characterScripts[character as keyof typeof characterScripts];
  if (!characterLines) return null;
  return characterLines.find(line => line.scenarioId === scenarioId) || null;
};

export const getLineDuration = (character: string, scenarioId: number): number => {
  const line = getCharacterLine(character, scenarioId);
  if (line?.duration) {
    return line.duration;
  }
  
  const scenario = scenarioScripts.find(s => s.scenarioId === scenarioId);
  if (scenario && scenario.scripts[character as keyof typeof scenario.scripts]) {
    const text = scenario.scripts[character as keyof typeof scenario.scripts] as string;
    const words = text.split(' ').length;
    const readingTime = Math.max(2, (words / 150) * 60); 
    return Math.ceil(readingTime);
  }
  
  return 3;
};

export const calculateAutoAdvanceDelay = (character: string, scenarioId: number): number => {
  const duration = getLineDuration(character, scenarioId);
  return (duration * 1000) + 1000; 
};

export const getScenarioSpeakers = (scenarioId: number): string[] => {
  const scenario = scenarioScripts.find(s => s.scenarioId === scenarioId);
  if (!scenario) return [];
  
  const speakerOrder = ['narrator', 'sam', 'lena', 'amir', 'raven', 'pirateCaptain', 'dragon', 'templeVoice', 'treeWhisper', 'dragonGift', 'narratorClosing'];
  
  return speakerOrder.filter(speaker => scenario.scripts[speaker as keyof typeof scenario.scripts]);
};

export const validateDurationData = (): { missing: string[], suggestions: string[] } => {
  const missing: string[] = [];
  const suggestions: string[] = [];
  
  scenarioScripts.forEach(scenario => {
    Object.keys(scenario.scripts).forEach(speaker => {
      const line = getCharacterLine(speaker, scenario.scenarioId);
      if (!line?.duration) {
        missing.push(`${speaker} in scenario ${scenario.scenarioId}`);
        const text = scenario.scripts[speaker as keyof typeof scenario.scripts] as string;
        const words = text.split(' ').length;
        const suggestedDuration = Math.max(2, Math.ceil((words / 150) * 60));
        suggestions.push(`${speaker} scenario ${scenario.scenarioId}: suggest ${suggestedDuration}s`);
      }
    });
  });
  
  return { missing, suggestions };
};
