import React from "react";
import user from '../images/user.png'
const ContactCard = ({contacts}) => {
  console.log("surya",contacts);
  const{name,email} = contacts.ele
  console.log(name,email);
  return (

    <div className="item" key={contacts.i} >
 
      <img className="ui avatar image" src={user} alt="user"/>
  
      <div className="content">
        <div className="header">{name}</div>
        <div> {email} </div>
      </div>
      <i className="trash alternate outline icon" style={{color:"red" , marginTop:"7px" , display:"flex", justifyContent:"center" ,alignItems:"center"}}> </i>
    </div>
  );
};

export default ContactCard;
