import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
  
  const renderContactList = props.contacts.map((ele,i)=>{
    return (
     <ContactCard contacts={{ele,i}}/>
    );
  })

  return <div className='ui celled list'>Contact List
     {renderContactList}
    </div>
  
}

export default ContactList