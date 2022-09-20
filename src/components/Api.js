import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../store/store";
import "../index.css";
import Details from "./Details";

export default function Api() {
  const Context = useContext(GlobalContext);
  const [state, setState] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const item = {
          email: "Chaim_McDermott@dana.io1",
          id: 12,
          name: "Glenna Reichert1",
          phone: "(775)976-6794 x41206",
          username: "Delphine",
          website: "conrad.com",
        };
        Context.arr = [...data];
        Context.arr.push(item);
        setState([...data]);
        setUsers([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOnChange = (e) => {
    let value = e.target.value;

    if (value === "") {
      setState(users);
    } else {
      console.log(state);
      let filteredUser = users.filter((item) => {
        if (
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.name.toLowerCase() === value.toLowerCase()
        ) {
          return true;
        }
      });
      setState(filteredUser);
    }
  };

  const rowDetails = (e, item) => {
    Context.setState({ id: item.id });
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="con">
        <input type="text" placeholder="Search" onChange={handleOnChange} />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {state.length > 0 &&
              state.map((item, i) => {
                return (
                  <tr onClick={(e) => rowDetails(e, item)} key={i}>
                    <Link to={"/details/" + `${item.id}`}>
                      <td>{item.id}</td>{" "}
                    </Link>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                  </tr>
                );
              })}
            {!state.length && (
              <tr>
                <td colSpan={4}>No Records Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {Context.id && (
        <div className="con">
          <Details />
        </div>
      )}
    </div>
  );
}
