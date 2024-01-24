import React, { useState } from "react";
import "./../styles/App.css";
import Axios from "axios";

const App = () => {
  let [value, setValue] = useState(false);
  let [data, setData] = useState([]);

  function callFunction() {
    Axios.get("https://reqres.in/api/users")
      .then((r) => {
        setValue(true);
        setData(r.data.data);
        console.log(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Blue Whales</h1>
        <button className="btn" onClick={callFunction}>
          Get User List
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {(value === true &&
            data.map((elem) => {
              return (
                <tr key={elem.first_name + elem.id}>
                  <td>{elem.first_name}</td>
                  <td>{elem.last_name}</td>
                  <td>{elem.email}</td>
                  <td>
                    <img src={elem.avatar} alt="" />
                  </td>
                </tr>
              );
            })) || (
            <tr>
              <td colSpan="55">No data found to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
