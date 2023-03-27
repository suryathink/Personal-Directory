import "./App.css";

import React , {useState,useEffect} from "react";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";

function App() {
  const [contacts,setContacts] = useState([])

  const addContactHandler =(contact)=>{
  // console.log( "App", contact);
  setContacts([...contacts,contact ])
}

useEffect(()=>{
  const retrieveContacts = JSON.parse(localStorage.getItem("contacts"))
 if (retrieveContacts) setContacts(retrieveContacts);
},[])


useEffect(()=>{
  localStorage.setItem("contacts",JSON.stringify(contacts))
},[contacts])

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={ contacts } />
    </div>
  );
}

export default App;
