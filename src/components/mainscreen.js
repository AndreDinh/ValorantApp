
// import { useState,useEffect } from "react";
import AgentPicker from "./agentpicker";
import MapPicker from "./mapPicker";
import Wrapper from "./UI/wrapper";
const mainScreen = () => {
//   const [agentClick, setAgentClick] = useState(false);
//   const [mapClick, setMapClick] = useState(false);

//   function AgentShowHandler() {
//     setAgentClick(true);
//   }
//   function mapShowHandler() {
//     setMapClick(true);
//   }
  return (
    <Wrapper>
     <AgentPicker />

     <MapPicker />
   {/* {!agentClick ? <AgentPicker/> : <h1> Pick a randomizer</h1>}
   {!mapClick ? <Mappicker/> : <></>} */}
     
      {/* {agentClick ? (
        <AgentPicker />
      ) : mapClick ? (
        <MapPicker />
      ) : (
        <h2>Choose agent or map randomizer</h2>
      )} */}
      {/* <button onClick={() => AgentShowHandler}>Pick a map</button>
      <button onClick={() => mapShowHandler}>Pick a map</button> */}
    </Wrapper>
  );
};

export default mainScreen;
