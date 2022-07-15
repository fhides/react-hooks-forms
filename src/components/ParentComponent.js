import React,{useState} from 'react'
import DisplayData from './DisplayData';
import Form from './Form';

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

  const handleFirstNameChange=(event)=>{
    event.preventDefault();
    setFirstName(event.target.value);
  }

  const handleLastNameChange=(event)=>{
    event.preventDefault();
    setLastName(event.target.value);
    console.log(lastName);
  }

  return (
    <div>
    <Form 
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
    />
    <DisplayData 
        firstName={firstName}
        lastName={lastName}

     />
    </div>
  )
  }
export default ParentComponent; 