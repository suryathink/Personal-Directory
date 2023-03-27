import React, { useState } from "react";

const AddContact = (props) => {

  const [state, setState] = useState({
    name: "",
    email: "",
  });


  const add = (e) => {
    e.preventDefault();

    if (state.name === "" || state.email === "") {
      alert("All the fields are Mandatory");
      return;
    }else{
      props.addContactHandler(state);
      setState({name:"",email:""})
    }
  };
  return (
    <div className="ui main">
      <br />
      <br />
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => {
              setState({ ...state, name: e.target.value });
            }}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
            }}
          />
        </div>
        <button className="ui button blue" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
