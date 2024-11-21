import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext";
const App = ()=>{
  const {audioRef,track,songsData} = useContext(PlayerContext); // gets audioref context value from useContext hook
  
  
  return(
    <div className="h-screen bg-black">
      {
        songsData.length !== 0 ?
        <>
          <div className="h-[90%] flex">
            <Sidebar/>
            <Display/>
          </div>
            <Player/>  
        </>
        :null
      }
      
      {/* linked audio ref with audio tag */}
      
      
      <audio ref={audioRef} preload="auto" src={track? track.file : ""}></audio> 
    </div>
  )
}

export default App