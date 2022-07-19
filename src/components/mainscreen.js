
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
      <h1 className="text-center mb-5 main-header_title">Valorant <br/> Randomizer</h1>
     <AgentPicker />
     <MapPicker />
   
    </Wrapper>
  );
};

export default mainScreen;
