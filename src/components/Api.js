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
    <div className="table-responsive-md">
      <input type="text" placeholder="Search" onChange={handleOnChange} />
      <table className="table table-bordered table-hover table-striped table-info">
        <thead>
          <tr className="tr">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {state.length > 0 &&
            state.map((item, i) => {
              return (
                <tr onClick={(e) => rowDetails(e, item)} key={i}>
                  <td>
                    <Link to={"/details/" + `${item.id}`}>{item.id}</Link>
                  </td>
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

      {/* {Context.id && (
        <div className="con">
          <Details />
        </div>
      )} */}
    </div>
  );
}
