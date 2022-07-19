import { useState } from "react";

/**
 * @function Picker - A component designed for picking items from a list, with randomization button
 * @param {{title: string, itemClass: string, items: string[], maxPickCount: number}} props
 * @param {string} props.title - Title of the item list
 * @param {string} props.itemClass - Classname for each item
 * @param {string[]} pros.items - A list of all selectable items
 * @param {number} props.maxPickCount - The total maximum number of items that can be picked
 */
export default function Picker({
  title = "Items",
  itemClass = "",
  items = [],
  maxPickCount = 5,
}) {
  const [currentItemPool, setCurrentItemPool] = useState([]);
  const [userSelectedItems, setUserSelectedItems] = useState([]);

  return (
    <>
      <h1>{title}</h1>
      <h3>Choose {title}</h3>

      <ul className="">
        {currentItemPool.map((item, i) => (
          <div
            key={i}
            className="agents-container mb-3 d-inline-flex"
            onClick={() => {
              setCurrentItemPool(currentItemPool.filter((i) => i !== item));
              setUserSelectedItems(userSelectedItems.filter((i) => i !== item));
            }}
          >
            <img className="fa-4x" alt={item} src={`/icons/${item}_icon.webp`} />
            <li>{item}</li>
          </div>
        ))}
      </ul>


      <ul className="item-group">
        {items.map((item, i) => (
          <li
            key={i}
            className={`${itemClass} d-inline-flex`}
            onClick={() => {
              if (
                currentItemPool.length < maxPickCount &&
                !currentItemPool.includes(item)
              ) {
                setCurrentItemPool([...currentItemPool, item]);
                setUserSelectedItems([...userSelectedItems, item]);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>

     

      <button
        onClick={() => {
          let newItemPool = new Set(userSelectedItems);

          while (newItemPool.size < maxPickCount)
            newItemPool.add(
              items[Math.round(Math.random() * (items.length - 1))]
            );

          setCurrentItemPool([...newItemPool]);
        }}
        className="primary"
        type="button"
      >
        <div className="label">
          <span className="hover-effect"></span>
          <span className="label-text">random</span>
        </div>
      </button>
    </>
  );
}
