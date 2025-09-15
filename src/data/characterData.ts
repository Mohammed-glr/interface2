export const characterData = [
  { id: 1, CharacterName: 'Lena', characterImagePath: '/imgs/Lena.png' },
  { id: 2, CharacterName: 'Sam', characterImagePath: '/imgs/Sam.png' },
  { id: 3, CharacterName: 'Amir', characterImagePath: '/imgs/Amir.png' },
];

export const scenarioScripts = [
  {
    scenarioId: 1,
    title: "The Midnight Glow",
    scripts: {
      narrator: "One quiet night, the town slept peacefully… but the old library glowed under the moonlight.",
      sam: "Whoa… guys, do you see that? The library's… alive!",
      lena: "Let's check it out! Maybe it's hiding a secret.",
      amir: "Uh, secrets in glowing libraries usually mean trouble."
    }
  },
  {
    scenarioId: 2,
    title: "The Whispering Bookshelves",
    scripts: {
      narrator: "Inside, bookshelves stretched higher than ever before, and strange whispers filled the air.",
      lena: "'The Secret Map of Hidden Worlds'… 'The Book That Knows Your Name'… these aren't normal books!",
      sam: "Maybe one will tell me how to win video games forever.",
      amir: "Shhh. Listen. The books are… whispering."
    }
  },
  {
    scenarioId: 3,
    title: "The Book That Pulls Them In",
    scripts: {
      narrator: "Suddenly, one book glowed brighter, its pages flipping open by themselves.",
      lena: "It's… pulling us in!",
      sam: "Hold onto something!",
      amir: "This was a terrible idea!"
    }
  },
  {
    scenarioId: 4,
    title: "The Magical Forest",
    scripts: {
      narrator: "They landed in a magical forest, where the trees whispered and shadows seemed alive.",
      sam: "At least the trees are friendly. Hello, Mr. Tree—do you have WiFi?",
      treeWhisper: "Time… is running…",
      lena: "Did that tree just talk?"
    }
  },
  {
    scenarioId: 5,
    title: "The Floating Hourglass",
    scripts: {
      narrator: "Above the forest floated a giant golden hourglass, its sand nearly gone.",
      raven: "Every night, the stories come alive. But when the sand runs out, you will vanish… forever.",
      amir: "V-vanish? Forever?!",
      lena: "Then we need to solve this before sunrise."
    }
  },
  {
    scenarioId: 6,
    title: "The Pirate Escape",
    scripts: {
      narrator: "The children were swept into a new story—onto a pirate ship in the middle of a storm!",
      sam: "Yes! Pirates! This is awesome!",
      pirateCaptain: "Grab 'em, lads! They know where the treasure is!",
      amir: "Uh, I definitely don't know where the treasure is!",
      lena: "There—on that map! That's the clue we need!"
    }
  },
  {
    scenarioId: 7,
    title: "The Riddle of the Ancient Temple",
    scripts: {
      narrator: "Next, they found themselves in a sunlit desert, standing before a temple covered in glowing runes.",
      amir: "These symbols… they're a code. If I just… move this piece—",
      templeVoice: "Only the wise may pass…",
      sam: "Good thing we brought Amir."
    }
  },
  {
    scenarioId: 8,
    title: "The Lonely Dragon",
    scripts: {
      narrator: "Deep in a misty mountain cave, a huge green dragon with sad eyes appeared.",
      sam: "Uh, Lena? Dragons usually mean run.",
      dragon: "Do not fear me. I am not your enemy.",
      lena: "He's… lonely.",
      dragonGift: "Take this. It is the key to your journey."
    }
  },
  {
    scenarioId: 9,
    title: "The Race Against Time",
    scripts: {
      narrator: "Back in the forest, the hourglass was nearly empty. The ground shook, the whispers grew louder.",
      amir: "The sand's almost gone!",
      raven: "Only by solving the final riddle will the portal open!",
      lena: "The runes! They form a pattern… we have to align them!",
      sam: "Then let's do it—together!"
    }
  },
  {
    scenarioId: 10,
    title: "The Portal of Stories",
    scripts: {
      narrator: "Just as the last grain of sand fell, the runes glowed and a giant open book appeared as a portal.",
      sam: "Go, go, go!",
      amir: "We're out of time!",
      lena: "Jump!",
      narratorClosing: "And with a flash of golden light, the children tumbled back into the library… as dawn broke and the magic faded. But the question remained—what if the stories called them back again… one night?"
    }
  }
];

export const characterScripts = {
  sam: [
    { scenarioId: 1, line: "Whoa… guys, do you see that? The library's… alive!" },
    { scenarioId: 2, line: "Maybe one will tell me how to win video games forever." },
    { scenarioId: 3, line: "Hold onto something!" },
    { scenarioId: 4, line: "At least the trees are friendly. Hello, Mr. Tree—do you have WiFi?" },
    { scenarioId: 6, line: "Yes! Pirates! This is awesome!" },
    { scenarioId: 7, line: "Good thing we brought Amir." },
    { scenarioId: 8, line: "Uh, Lena? Dragons usually mean run." },
    { scenarioId: 9, line: "Then let's do it—together!" },
    { scenarioId: 10, line: "Go, go, go!" }
  ],
  lena: [
    { scenarioId: 1, line: "Let's check it out! Maybe it's hiding a secret." },
    { scenarioId: 2, line: "'The Secret Map of Hidden Worlds'… 'The Book That Knows Your Name'… these aren't normal books!" },
    { scenarioId: 3, line: "It's… pulling us in!" },
    { scenarioId: 4, line: "Did that tree just talk?" },
    { scenarioId: 5, line: "Then we need to solve this before sunrise." },
    { scenarioId: 6, line: "There—on that map! That's the clue we need!" },
    { scenarioId: 8, line: "He's… lonely." },
    { scenarioId: 9, line: "The runes! They form a pattern… we have to align them!" },
    { scenarioId: 10, line: "Jump!" }
  ],
  amir: [
    { scenarioId: 1, line: "Uh, secrets in glowing libraries usually mean trouble." },
    { scenarioId: 2, line: "Shhh. Listen. The books are… whispering." },
    { scenarioId: 3, line: "This was a terrible idea!" },
    { scenarioId: 5, line: "V-vanish? Forever?!" },
    { scenarioId: 6, line: "Uh, I definitely don't know where the treasure is!" },
    { scenarioId: 7, line: "These symbols… they're a code. If I just… move this piece—" },
    { scenarioId: 9, line: "The sand's almost gone!" },
    { scenarioId: 10, line: "We're out of time!" }
  ]
};

