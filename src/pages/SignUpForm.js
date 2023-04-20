import React, {useState} from 'react';
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

function SignUpForm() {
  const navigate = useNavigate();
  const [firstName,setFirst] = useState('');
  const [lastName,setLast] = useState('');
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

  async function submitAccount()
  {
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    
    if(!firstName.trim())
    {
      console.log("First name not filled");
      handleOpen();
      setMessage("Please enter the \"First Name\" field in a proper format and click \"Sign Up\" again.");
      return;
    }
    if(!lastName.trim()){
      console.log("Last name not filled");
      handleOpen();
      setMessage("Please enter the \"Last Name\" field in a proper format and click \"Sign Up\" again.");
      return;
    }
    if(!email.trim() || !regexExp.test(email.trim()))
    {
      console.log(!regexExp.test(email.trim()));
      console.log(!email.trim())
      console.log("Incorrect format for email");
      handleOpen();
      setMessage("Please enter the \"Email\" field in a proper format and click \"Sign Up\" again.");
      return;
    }
    if(!password.trim())
    {
      console.log("Password not entered");
      handleOpen();
      setMessage("Please enter the \"Password\" field in a proper format and click \"Sign Up\" again.");
      return;
    }

    const response = await fetch("http://127.0.0.1:5000/sign_up", requestOptions);
    const data = await response.json();
    if(!response.ok)
    {
      setMessage(data.msg);
      handleOpen();
      return;
    }
    window.location.replace("http://127.0.0.1:3000/login_form");

    
  }

  return ( 
    <>
      <Dialog
        open={open}
        onClose={handleClose}
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
            {"There was an error trying to make a new account..."}
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

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>
            <Link 
            href="/login_form"
            underline="hover"
            >
              <Typography
              align='center'
              color='#20df7f'
              >
                Already have an account? Click here!
              </Typography>
              
            </Link>
          </Grid>

          <Grid item xs={4}>

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