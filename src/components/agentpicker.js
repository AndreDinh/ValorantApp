import { useState } from "react";
export default function Agentpicker() {
  const agents = [
    "Astra",
    "Breach",
    "Brimstone",
    "Chamber",
    "Cypher",
    "Jett",
    "KayO",
    "Killjoy",
    "Neon",
    "Omen",
    "Phoenix",
    "Raze",
    "Reyna",
    "Sage",
    "Skye",
    "Sova",
    "Viper",
    "Yoru",
  ];

  const [agentPool, setAgentPool] = useState([]);
 
  function agentPickerRandomizer(agents) {
    let newAgentPool = [];
    for (let i = 0; i < 5; i++) {
      let RandomAgent = agents[Math.floor(Math.random() * agents.length)];
      if (newAgentPool.includes(RandomAgent)) {
        RandomAgent = agents[Math.floor(Math.random() * agents.length)];
      }
      newAgentPool.push(RandomAgent);
    }
    // return agentPool;
    setAgentPool(newAgentPool);
    console.log(agentPool);
  }

  return (
    <>
      <h2>Agents</h2>
      <ul>
        {agentPool.map((agents, i) => (
          <li key={i}> {agents}</li>
        ))}
      </ul>
      <button onClick={() => agentPickerRandomizer(agents)} className="primary" type="button">
          <div className="label">
            <span className="hover-effect"></span>
            <span className="label-text">random</span>
          </div>
        </button>
    </>
  );
}
