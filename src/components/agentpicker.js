import { agentsList } from "./items";
import "./UI/agentpicker.css";
import Picker from "./pickerComponent";
export default function Agentpicker() {
  // const [agentPool, setAgentPool] = useState([]);
  // const [userSelectedAgents, setUserSelectedAgents] = useState([]);

  // function agentPickerRandomizer(agents) {
  //   // let newAgentPool = [...userSelectedAgents];
  //   // while(newAgentPool.length < 5)
  //   // {
  //   //   let randomAgent = agents[Math.round( Math.random() * (agents.length - 1))];
  //   //   if(!newAgentPool.includes(randomAgent))
  //   //     newAgentPool.push(randomAgent);
  //   // }
  //   // for (let i = 0; i < 5; i++) {
  //   //   let RandomAgent = agents[Math.floor(Math.random() * agents.length)];
  //   //   if (newAgentPool.includes(RandomAgent)) {
  //   //     RandomAgent = agents[Math.floor(Math.random() * agents.length)];
  //   //   }
  //   //   newAgentPool.push(RandomAgent);
  //   // }
  //   // return agentPool;
  //   // setAgentPool(newAgentPool);
  //   // console.log(agentPool);
  //   // /**
  //   //  * @param {string} agentToAdd
  //   //  */
  //   // function selectorHandler(agentToAdd) {
  //   //   ;
  //   //   console.log(agentToAdd);
  // }

  return (
    <>
      <Picker
        title="Agents"
        itemClass="agents-class"
        items={agentsList}
        maxPickCount={5}
      />
      {/* <h2>Agents</h2>
      <h3>Choose agents</h3>
      <ul>
        {agentsList.map(
          (agent, i) => (
            <li
              className={`agents ${userSelectedAgents.includes(agent) ? 'userSelected' : ''}`}
              key={i}
              onClick={() => {
                setAgentPool([...agentPool, agent]);
                setUserSelectedAgents([...userSelectedAgents, agent]);
              }}
            >
              {agent}
            </li>
          ),
          this
        )}
      </ul>

      <ul className="Random-container">
        {agentPool.map((agents, i) => (
          <div key={i} className="agents-container">
            <img alt={agents} src={`/icons/${agents}_icon.webp`} />
            <li>{agents}</li>
          </div>
        ))}
      </ul> */}

      {/* <button
        onClick={() => agentPickerRandomizer(agentsList)}
        className="primary"
        type="button"
      >
        <div className="label">
          <span className="hover-effect"></span>
          <span className="label-text">random</span>
        </div>
      </button> */}
    </>
  );
}
