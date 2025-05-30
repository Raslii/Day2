import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
const Example = () => {
    var [val,setVa1] = useState()

  return (
    <div>
      <Typography variant='h3'>Welcome to {val} </Typography>      
      <Button variant="contained" onClick={() => {setVa1("Gallery")}}> Gallery</Button> &nbsp;
      <Button variant="contained" color='Secondary' onClick={() => {setVa1("Home")}}>Home</Button> &nbsp;      
      <Button variant="contained" color='error' onClick={() => {setVa1("Contact")}}>Contact</Button> &nbsp;
 </div>
  )
}

export default Example
