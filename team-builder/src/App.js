import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";
const teamList = {
  firstName: "Firsty",
  lastName: "McFirst",
  role: "frontend",
  firstName: "Secondy",
  lastName: "McSecond",
  role: "backend",
  firstName: "Thirdy",
  lastName: "McThird",
  role: "designer",
};

const initialFormValues = { firstName: "", lastName: "", role: "" };

function App() {
  const [teamMembers, setTeamMembers] = useState(teamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });

    const submit = (event) => {
      event.preventDefault();
      const newTeamMember = {
        firstName: formValues.firstName.trim(),
        lastName: formValues.lastName.trim(),
        role: formValues.role.trim(),
      };
      //setPets(pets.concat(newPet))
      setTeamMembers([...teamMembers, newTeamMember]);
      setFormValues(initialFormValues);
    };
    return (
      <div className="App">
        <h1>Team Builder</h1>
        {teamMembers.map((teamMember, idx) => {
          return (
            <div key={idx}>
              {teamMember.firstName}
              {teamMember.lastName} has a role as {teamMember.role}
            </div>
          );
        })}
        <form onSubmit={submit}>
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={change}
          />
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={change}
          />
          <input
            type="text"
            name="role"
            value={formValues.role}
            onChange={change}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  };
}

render(
  <>
    <App />
  </>
),
  document.querySelector("#root");
export default App;
