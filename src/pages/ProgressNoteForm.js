import React, { Component } from 'react'
import logo from '../iona.png';
import { Box, Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function ProgressNoteForm() {

  return (
    <Box
    bgcolor= "">
      <Grid container spacing={1}>




        <Grid item xs = {8}>
        
        </Grid>
        <Grid item xs={4}>
          <Button 
            fullWidth 
            variant="contained" 
            color="primary"
            align = "center"
            size='small'
            component= {Link}
            to = "/">
            Click here to go back to the home page

          </Button>
        </Grid>


        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        
        {/** FIRST ROW*/}
        <Grid item xs = {1}>
        </Grid>

        <Grid item xs = {3}
          >
          <TextField
          
           fullWidth
           label="Name"
           id="filled-basic"
           variant="filled"
        />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3}
          >
          <TextField
           fullWidth
         label="DOB"
         id="filled-basic"
         variant="filled"
        />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3.1}
          >
          <TextField
           fullWidth
         label="SEX"
         id="filled-basic"
         variant="filled"
        />
        </Grid>

        <Grid item xs = {.9}>
        </Grid>




        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>





        <Grid item xs = {1}>
        </Grid>

        <Grid item xs = {3}
          >
          <TextField
           fullWidth
         label="Diagnostics"
         id="filled-basic"
         variant="filled"
        />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3}
          >
          <TextField
            fullWidth
            label="Precautions"
            id="filled-basic"
            variant="filled" 
        />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3.1}
          >
          <TextField
           fullWidth
           label="Contraindications"
           id="filled-basic"
           variant="filled"
        />
        </Grid>

        <Grid item xs = {.9}>
        </Grid>



        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>






        <Grid item xs = {1}>
        </Grid>

        <Grid item xs = {10.1}
          >
          <TextField
           id="filled-multiline-static"
           label="Summary of services"
           multiline
           fullWidth
           rows={3}
           placeholder="Enter summary"
           variant="filled"
        />
        </Grid>

        <Grid item xs = {.9}>
        </Grid>


        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>


        <Grid item xs = {1}>
        </Grid>

        <Grid item xs = {10.1}
          >
          <TextField
           id="filled-multiline-static"
           label="Client Performance"
           multiline
           fullWidth
           rows={3}
           placeholder="Enter Client Performace"
           variant="filled"
        />
        </Grid>

        <Grid item xs = {.9}>
        </Grid>

        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>


        <Grid item xs = {1}>
        </Grid>

        <Grid item xs = {10.1}
          >
          <TextField
           id="filled-multiline-static"
           label="Plan or recommendations"
           multiline
           fullWidth
           rows={3}
           placeholder="Enter Recommendations"
           variant="filled"
        />
        </Grid>

        <Grid item xs = {.9}>
        </Grid>

       
       
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>



        <Grid item xs = {9}>
        
        </Grid>

        <Grid item xs = {2.15}
          >
          <Button 
            fullWidth 
            variant="contained" 
            color="primary"
            align = "center"
            size='small'
            component= {Link}
            to = "/">
           SUBMIT
          </Button>
        </Grid>

        <Grid item xs = {.85}>
        
        </Grid>








      </Grid>
            
        

    </Box>
    
  )
}

export default ProgressNoteForm;


/*
export default function ProgressNoteForm(){
  return(
<Box sx={{
            width: '100%',
            height: '100vh',
            bgcolor: "silver",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>    
      <Grid item xs={2}>
          <Button 
              variant="contained" 
              size="medium"
              style={{
              maxWidth: "90%",
              minWidth: "90%",

                                          
              }}
            component={Link}
            to="/"
          >
              <Typography 
                align='center'
                style={{
                fontSize: "1vw",
                
                }}
                >
                Click here to go back to the home page
                </Typography>
            </Button>
      </Grid>

      

</Box>



        )
      }
      */