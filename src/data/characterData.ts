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
    { scenarioId: 1, line: "Wauw… jongens, zien jullie dat? De bibliotheek is… levend!" },
    { scenarioId: 2, line: "Misschien vertelt er eentje me hoe ik voor altijd computerspelletjes kan winnen." },
    { scenarioId: 3, line: "Hou je vast aan iets!" },
    { scenarioId: 4, line: "Gelukkig zijn de bomen vriendelijk. Hallo, meneer Boom—heb je WiFi?" },
    { scenarioId: 6, line: "Yes! Piraten! Dit is geweldig!" },
    { scenarioId: 7, line: "Goed dat we Amir hebben meegenomen." },
    { scenarioId: 8, line: "Eh, Lena? Draken betekenen meestal: wegrennen." },
    { scenarioId: 9, line: "Dan doen we het—samen!" },
    { scenarioId: 10, line: "Ga, ga, ga!" }
  ],
  lena: [
    { scenarioId: 1, line: "Laten we gaan kijken! Misschien verbergt hij een geheim." },
    { scenarioId: 2, line: "'De Geheime Kaart van Verborgen Werelden'… 'Het Boek dat Jouw Naam Weet'… dit zijn geen gewone boeken!" },
    { scenarioId: 3, line: "Het… zuigt ons naar binnen!" },
    { scenarioId: 4, line: "Praatte die boom net?" },
    { scenarioId: 5, line: "Dan moeten we dit oplossen voor zonsopgang." },
    { scenarioId: 6, line: "Daar—op die kaart! Dat is de aanwijzing die we nodig hebben!" },
    { scenarioId: 8, line: "Hij is… eenzaam." },
    { scenarioId: 9, line: "De tekens! Ze vormen een patroon… we moeten ze op één lijn zetten!" },
    { scenarioId: 10, line: "Spring!" }
  ],
  amir: [
    { scenarioId: 1, line: "Eh, geheimen in gloeiende bibliotheken betekenen meestal problemen." },
    { scenarioId: 2, line: "Sst. Luister. De boeken zijn aan het… fluisteren." },
    { scenarioId: 3, line: "Dit was een verschrikkelijk slecht idee!" },
    { scenarioId: 5, line: "V-verdwijnen? Voor altijd?!" },
    { scenarioId: 6, line: "Eh, ik weet echt niet waar de schat is!" },
    { scenarioId: 7, line: "Deze symbolen… het is een code. Als ik gewoon… dit stukje verplaats—" },
    { scenarioId: 9, line: "Het zand is bijna op!" },
    { scenarioId: 10, line: "We hebben geen tijd meer!" }
  ]
};

