import React, {useState} from 'react';

import { Box, Button, Grid, Typography, TextField } from '@mui/material';

import wave from "../wave.png";

function SignUpForm() {

  const [firstName,setFirst] = useState('');
  const [lastName,setLast] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function changeFirst(event) 
  {
      console.log(event.target.value);
      setFirst(event.target.value);
  }

  function changeLast(event) 
  {
      console.log(event.target.value);
      setLast(event.target.value);
  }
  
  function changeEmail(event) 
  {
      console.log(event.target.value);
      setEmail(event.target.value);
  }
  
  function changePassword(event) 
  {
      console.log(event.target.value);
      setPassword(event.target.value);
  }

  var requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "password": password
    })
  };

  function submitAccount()
  {
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    
    if(!firstName.trim())
    {
      console.log("First name not filled");
      return;
    }
    if(!lastName.trim()){
      console.log("Last name not filled");
      return;
    }
    if(!email.trim() || !regexExp.test(email.trim()))
    {
      console.log(!regexExp.test(email.trim()));
      console.log(!email.trim())
      console.log("Incorrect format for email");
      return;
    }
    if(!password.trim())
    {
      console.log("Password not entered");
      return;
    }

    fetch("http://127.0.0.1:5000/sign_up", requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }
      
        console.log(`Response: ${data.msg}`);
        window.location.replace("http://127.0.0.1:3000/login_form");
    })
  .catch(error => {
      this.setState({ errorMessage: error.toString() });
      console.error('There was an error!', error);
  });

  }

  return ( 
    <>
      <Box sx={{
        width: '100%',
        height: '100vh',
        bgcolor: '#093545',
        justifyContent: "center",
        display: "flex",
        alignItems: "center"
      }}>
        <Grid container spacing={1}>
          <Grid item xs={5}>

          </Grid>

          <Grid item xs={2}>
            <Typography
            variant='h4'
            align='center'
            color='#f5f6f7'
            >
              Sign Up
            </Typography>
          </Grid>

          <Grid item xs={5}>

          </Grid>

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>
            <Typography
            align='center'
            color='#f5f6f7'
            >
              Sign up here and start your evaluations
            </Typography>
          </Grid>

          <Grid item xs={4}>
            
          </Grid>

          <Grid item xs={5}>

          </Grid>

          <Grid item xs={2}  display="flex" justifyContent="center">
            <TextField 
              required
              fullWidth
              InputLabelProps={{style: {color: 'white'}}}
              InputProps={{style: {color: 'white'}}}
              id='first_name'
              label="First Name"
              variant='filled'
              margin='dense'
              onChange={changeFirst}
            />
          </Grid>

          <Grid item xs={5}>

          </Grid>

          <Grid item xs={5}>

          </Grid>

          <Grid item xs={2}  display="flex" justifyContent="center">
            <TextField 
              required
              fullWidth
              InputLabelProps={{style: {color: 'white'}}}
              InputProps={{style: {color: 'white'}}}
              id='last_name'
              label="Last Name"
              variant='filled'
              margin='dense'
              onChange={changeLast}
            />
          </Grid>

          <Grid item xs={5}>

          </Grid>

          <Grid item xs={5}>

          </Grid>

          <Grid item xs={2}  display="flex" justifyContent="center">
            <TextField 
              required
              fullWidth
              InputLabelProps={{style: {color: 'white'}}}
              InputProps={{style: {color: 'white'}}}
              id="email"
              label="Email"
              variant="filled"
              margin="dense"
              type="email"
              onChange={changeEmail}
            />
          </Grid>

          <Grid item xs={5}>

          </Grid>

          <Grid item xs={5}>

          </Grid>

          <Grid item xs={2}  display="flex" justifyContent="center">
            <TextField 
              required
              fullWidth
              InputLabelProps={{style: {color: 'white'}}}
              InputProps={{style: {color: 'white'}}}
              id='password'
              label="Password"
              variant='filled'
              margin='dense'
              type="password"
              onChange={changePassword}
            />
          </Grid>

          <Grid item xs={5}>

          </Grid>

          <Grid item xs={5}>

          </Grid>

          <Grid item xs={2}  display="flex" justifyContent="center">
            <Button

              sx={{
                bgcolor: "#20df7f",
                ':hover':{
                  bgcolor: "#20af7f"
                }
              }}
              fullWidth
              variant='contained'
              size='medium'
              onClick={submitAccount}>
                Sign Up
            </Button>
          </Grid>

          <Grid item xs={5}>

          </Grid>

          <Grid item xs={12}>
              <Box
              component="img"
              sx = {{
                minWidth: "100%",
                maxWidth: "100%"
              }}
              src={wave}

              />

          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SignUpForm