import React, {useState, useEffect} from 'react';
import { Box, 
  Button, 
  Grid, 
  Typography, 
  TextField, 
  Link, 
  Dialog, 
  DialogTitle, 
  DialogContentText, 
  DialogContent, 
  DialogActions } from '@mui/material';


import {useNavigate} from 'react-router-dom';

import wave from "../wave.png";

function LoginForm() {
    const navigate = useNavigate();
    const [token,setToken] = useState(null);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
  
    

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const changeEmail = (event) => {
      setEmail(event.target.value);
    };

    const changePassword = (event) => {
      setPassword(event.target.value);
    };

    //implement functionality of storing token
    function saveToken (userToken){
      sessionStorage.setItem('token', userToken);
      localStorage.setItem('token', userToken);
      setToken(userToken);

    }

    //implement functionality of hitting login API endpoint endpoint:/token
    async function attemptLogin() {
      if(!email.trim())
      {
        setMessage("Please enter the \"Email\" field in a proper format and click \"Log In\" again.");
        handleOpen();
        return;
      }
      if(!password.trim())
      {
        setMessage("Please enter the \"Password\" field in a proper format and click \"Log In\" again.");
        handleOpen();
        return;
      }
      
      var requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          "email": email,
          "password": password
        })
      };


    const response = await fetch("http://127.0.0.1:5000/token", requestOptions);
    const data = await response.json();
    if(!response.ok)
    {
      setMessage(data.msg);
      handleOpen();
      return;
    }
    
    saveToken(data.access_token);
    }

    useEffect(() => {
      if(!token)
      {
        return;
      }
      //window.location.href = "http://127.0.0.1:3000/";
      navigate("/landing_page");
    },[token])


  return (
    <>
    <Dialog
        open={open}
        onClose={() => handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor:"#f55d7a",
            
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
        <Typography 
            component={"span"}
            variant='h4'
            align='center'
            color='#f5f6f7'
            >
            {"There was an error attempting to login into your account..."}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography
              component={"span"} 
              align='center'
              color='#f5f6f7'
              style={{
                fontSize: "1.1vw"
            }}
            >
              {message}
            </Typography>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
          sx={{
            bgcolor: "#F8DE7E",
            ':hover':{
              bgcolor: "#FADA5E"
            },
            color: "black"
          }}
          fullWidth
          variant='contained'
          size='medium'
          onClick={handleClose}>
            Understood!
          </Button>
        </DialogActions>

      </Dialog>
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
              Sign In
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
              Sign in and start your evaluations
            </Typography>
          </Grid>

          <Grid item xs={4}>
            
          </Grid>

          <Grid item xs={4.5}>

          </Grid>

          <Grid item xs={3}  display="flex" justifyContent="center">
            <TextField 
              required
              fullWidth
              InputLabelProps={{style: {color: 'white'}}}
              InputProps={{style: {color: 'white'}}}
              id='email'
              label="Email"
              variant='filled'
              margin='dense'
              onChange={changeEmail}
            />
          </Grid>

          <Grid item xs={4.5}>

          </Grid>

          <Grid item xs={4.5}>

          </Grid>

          <Grid item xs={3}  display="flex" justifyContent="center">
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

          <Grid item xs={4.5}>

          </Grid>

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>
            <Link 
            href="/sign_up"
            underline="hover"
            >
              <Typography
              align='center'
              color='#20df7f'
              >
                Don't have an account? Click here!
              </Typography>
              
            </Link>
          </Grid>

          <Grid item xs={4}>

          </Grid>
          
          <Grid item xs={5}>

          </Grid>

          <Grid item xs={2}  display="flex" justifyContent="center">
            <Button
              onClick={attemptLogin}
              sx={{
                bgcolor: "#20df7f",
                ':hover':{
                  bgcolor: "#20af7f"
                }
              }}
              fullWidth
              variant='contained'
              size='medium'
              >
                Log In
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

export default LoginForm