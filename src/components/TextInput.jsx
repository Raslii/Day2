import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
const TextInput = () => {
 var [data, SetData] = useState();
 var [output, setOutput] = useState();
    const getName =(e) =>{
        console.log(e.target.value);
        SetData(e.target.value);
   };
   const setName =() => {
    setOutput(data);
   }
  return (
    <div>
        <Typography variant="h3">Welcome {output}</Typography><br />
      <TextField variant="outlined" label="username" onChange={getName}/><br /><br />
      <Button variant="contained" onClick={setName}>GetName</Button>
    </div>
  )
}

export default TextInput;
