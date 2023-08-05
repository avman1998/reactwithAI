import "./App.css";
import { useState } from "react";
function App() {
  //From State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    interest: [
      {
        name: "Singing",
        checked: false,
      },
      {
        name: "Dancing",
        checked: false,
      },
      {
        name: "Theatre",
        checked: false,
      },
    ],
    country: "",
  });
  // Submit state
  const [submitted, setSubmitted] = useState(false);

  // Common Change Function
  const handleChange = (e) => {
    setFormState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  //Specific fucntion for Checkbox Change
  const handleCheckBoxChange = (e, id) => {
    setFormState((prev) => {
      prev.interest[id].checked = !prev.interest[id].checked;
      return { ...prev };
    });
  };

  //Array for Checked Checkbox
  const checkboxStatuArray = formState.interest.filter((item) => item.checked);
  console.log(formState);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          required
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formState.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={formState.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <label htmlFor="above_18">Above 18</label>
        <input
          type="radio"
          name="age"
          id="above_18"
          checked={formState.age === "Above 18"}
          value="Above 18"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="less_or_18">18 or less</label>
        <input
          type="radio"
          name="age"
          id="less_or_18"
          checked={formState.age === "18 or less"}
          value="18 or less"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="">Interest</label>
        <label htmlFor="singing">Singing</label>
        <input
          type="checkbox"
          name="singing"
          id="singing"
          checked={formState.interest[0].checked}
          onChange={(e) => {
            handleCheckBoxChange(e, 0);
          }}
        />
        <label htmlFor="dancing">Dancing</label>

        <input
          type="checkbox"
          id="dancing"
          checked={formState.interest[1].checked}
          onChange={(e) => {
            handleCheckBoxChange(e, 1);
          }}
        />
        <label htmlFor="theatre">Theatre</label>
        <input
          type="checkbox"
          id="theatre"
          checked={formState.interest[2].checked}
          onChange={(e) => {
            handleCheckBoxChange(e, 2);
          }}
        />

        <label htmlFor="country">Country</label>
        <select
          name="country"
          id="country"
          value={formState.country}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="Australia">Australia</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>

        <input type="submit" value="Submit" />
      </form>

      {submitted && (
        <div>
          <h1>Summary</h1>
          <ul>
            <li>{formState.name}</li>
            <li>{formState.email}</li>
            <li>{formState.password}</li>
            <li>{formState.age}</li>-
            {checkboxStatuArray.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
            <li>{formState.country}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
