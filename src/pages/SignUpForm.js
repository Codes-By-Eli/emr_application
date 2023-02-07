import React from 'react';

import { Box, Button, Grid, Typography, TextField, InputLabel } from '@mui/material';

function SignUpForm() {
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
        <Grid container>
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

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>
            <TextField 
              required
              
              id='first_name'
              label="First Name"
              variant='filled'
              margin='dense'
            />
          </Grid>

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>
            <TextField 
              required
              
              id='last_name'
              label="Last Name"
              variant='filled'
            />
          </Grid>

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>
            <TextField 
              required
              
              id='email'
              label="Email"
              variant='filled'
            />
          </Grid>

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>
            <TextField 
              required
              id='password'
              label="Password"
              variant='filled'
            />
          </Grid>

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>

          </Grid>

          <Grid item xs={4}>
            <Button
              variant='contained'
              size='medium'>
                Sign Up
            </Button>
          </Grid>

          <Grid item xs={4}>

          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SignUpForm