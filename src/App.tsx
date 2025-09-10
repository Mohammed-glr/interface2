import React from 'react';
import './output.css';


// array of objects

const kioskData = [
  { id: 1, videoName: '', videoUrl: '', duration: 0, artist: '' },
  { id: 2, videoName: '', videoUrl: '', duration: 0, artist: '' },
  { id: 3, videoName: '', videoUrl: '', duration: 0, artist: '' },
  { id: 4, videoName: '', videoUrl: '', duration: 0, artist: '' },
  { id: 5, videoName: '', videoUrl: '', duration: 0, artist: '' },
  { id: 6, videoName: '', videoUrl: '', duration: 0, artist: '' },
]

function App(
  props: { kioskData: typeof kioskData }
) {

  function handleVideoSwitch(kioskId: number, videoUrl: string) {
    // todo
  }

  function handleProgressBarUpdate(kioskId: number, progress: number) {
    // todo
  }

  

  return (
    <div>
    </div>
  );
}

export default App;
