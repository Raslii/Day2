import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const StateBasics = () => {
    var [name, setName] =useState("Luttappi");
    const nameChange =()=>{
        setName("kuttusan")
    }
  return (
    <div>
      <Typography variant="h3">Welcome {name}</Typography>
      <Button variant="contained" onClick={nameChange}>Change</Button> &nbsp;
      <Button variant="contained" onClick={()=>{setName("Mayavi")}}>Change</Button>
    </div>
  )
}

export default StateBasics

