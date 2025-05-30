import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Counter = () => {
    var [Val, setVal] = useState(0);
    const inc = () => {
        setVal(++Val);
    };
    const dec = () => {
        setVal(--Val);
    };
  return (
    <div>
      <Typography variant= 'h3'> {Val}</Typography>    
      <Button variant="contained" color= "success" onClick={inc}> + </Button> &nbsp;
      <Button variant="contained" color= "errr" onClick={dec}> - </Button> &nbsp;


    </div>
  );
};

export default Counter
