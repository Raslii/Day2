import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const DataForm = () => {
    var[input, setInput] = useState({});
    const inputHandler = (e) => {
    setInput({...input,[e.target.name]: e.target.value})
    console.log(input)
  }
  return (
    <div>
     <TextField variant='outlined' label= "Username" onChange={inputHandler} name="userame"/><br /><br />
     <TextField variant='outlined' label= 'Password' onChange={inputHandler} name="password"/><br /><br />
     <Button variant='contained'> Login</Button>
 </div>
  )
}

export default DataForm;
