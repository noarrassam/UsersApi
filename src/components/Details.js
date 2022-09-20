import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "../store/store";

export default function Details(props) {
  const Context = useContext(GlobalContext);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const arr = Context.arr;
    let filteredData = arr.filter((index) => {
      return index.id === parseInt(Context.id);
    });
    setStates(filteredData);
  }, [Context.id]);

  return (
    <>
      <div>
        {states.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.address.city}</p>
              <p>{item.address.street}</p>
              <p>{item.address.suite}</p>
              <p>{item.address.zipcode}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
