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
      <div className="table-responsive-md">
        <table className="table table-bordered table-hover table-striped table-info">
          <thead>
            <tr className="tr">
              <th scope="col">City</th>
              <th scope="col">Street</th>
              <th scope="col">Suite</th>
              <th scope="col">ZipCode</th>
            </tr>
          </thead>
          <tbody>
            {states.map((item, i) => {
              return (
                <tr>
                  <td>{item.address.city}</td>
                  <td>{item.address.street}</td>
                  <td>{item.address.suite}</td>
                  <td>{item.address.zipcode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
