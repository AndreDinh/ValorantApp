import { useState } from "react";
export default function Mappicker() {
  const maps = [
    "Bind", "Haven", "Split", "Ascent", "Icebox", "Breeze","Pearl"
  ];

  const [MapPool, setMapPool] = useState([]);
 
  function MapPickerRandomizer(maps) {
    let newMapPool = [];
    for (let i = 0; i < 3; i++) {
      let RandomMap = maps[Math.floor(Math.random() * maps.length)];
      if (newMapPool.includes(RandomMap)) {
        RandomMap = maps[Math.floor(Math.random() * maps.length)];
      }
      newMapPool.push(RandomMap);
    }
    // return MapPool;
    setMapPool(newMapPool);
    console.log(MapPool);
  }

  return (
    <>
      <h2>Maps</h2>
      <ul>
        {MapPool.map((Maps, i) => (
          <li key={i}> {Maps}</li>
        ))}
      </ul>
      <button onClick={() => MapPickerRandomizer(maps)} className="primary" type="button">
          <div className="label">
            <span className="hover-effect"></span>
            <span className="label-text">random</span>
          </div>
        </button>
    </>
  );
}
