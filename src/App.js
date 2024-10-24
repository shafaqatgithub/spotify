import React, {  useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import DisplayComp from "./components/DisplayComp";
import { PlayerContext } from "./context/PlayerContext";



function App() {

  const {audioRef, track} = useContext(PlayerContext)
  return (
    <div className="bg-black h-screen" >
      <div className="h-[90%] flex">
      <Sidebar/>
      <DisplayComp/>
      </div>
      <Player/>
      <audio ref = {audioRef} src={track.file} preload="auto"></audio>
      
    </div>
  );
}

export default App;
