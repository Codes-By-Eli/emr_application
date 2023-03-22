import React, { Component, useState } from 'react'
import { Box, Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material';
//import { Link } from 'react-router-dom';//import React from 'react'
import  'react-router-dom';
//import Grid from '@mui/material/Grid';
//import React, {useState} from 'react';



import { Link } from 'react-router-dom';
import { ProSidebarProvider } from "react-pro-sidebar";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter, Sidebar, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from '../iona.png';
import Divider from '@mui/material/Divider';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DescriptionIcon from '@mui/icons-material/Description';


function ProgressNoteForm() {

  const  [name,setName] = useState('');
  const  [DOB,setDOB] = useState('');
  const  [sex,setSex] = useState('');
  const  [diagnostics,setDiagnostics] = useState('');
  const  [precautions, setPrecautions] = useState(''); 
  const  [contradictions,setContradictions] = useState('');
  const  [summaryOfServices,setSummaryOfServices] = useState('');
  const  [planOrReccomendations,setPlanOrReccomendations] = useState('');

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeDOB = (event) => {
    setDOB(event.target.value);
  };

  const changeSex = (event) => {
    setSex(event.target.value);
  };
  
  const changeDiagnostics = (event) => {
    setDiagnostics(event.target.value);
  };

  const changePrecautions = (event) => {
    setPrecautions(event.target.value);
  };

  const changeContradictions = (event) => {
    setContradictions(event.target.value);
  };

  const changeSummaryOfServices = (event) => {
    setSummaryOfServices(event.target.value);
  };

  const changePlanOrReccomendations = (event) => {
    setPlanOrReccomendations(event.target.value);
  };
  


  const { collapseSidebar } = useProSidebar();1
 
  return (

    <>
    <Box
    sx={{
      width: "100%",
      height: "100vh",
      background: "linear-gradient(to right bottom, #d8deee, #324e84)"
    }}
    
    >
      
    
    <div id="app" style={({ height: "75vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
          </MenuItem>
          <div id="container" style={{ whiteSpace: "nowrap" }}>
      <div id="image" style={{ display: "inline" }}>
        <img
          src={logo}
          loading="lazy"
          style={{ width: "50px", height: "50px" }}
          alt=""
        />
      </div>
      <div id="texts" style={{ display: "inline", whiteSpace: "nowrap", textAlign: "right" }}>
        <strong>Iona University </strong>
      </div>
    </div>
    <Grid item xs zeroMinwidth>
      <item>Welcome Student</item>
      <item>Student Email</item>
    </Grid>
    
    
    

  

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <Divider></Divider>
          <MenuItem 
            //component={<Link to="sign_up"}
            icon={<NoteAddIcon />}>Initial Evaluation</MenuItem>
          <MenuItem component = {<Link to = "/progress_form" />}icon={<StickyNote2Icon />}>Progress Note</MenuItem>
          <MenuItem icon={<NoteAltIcon/>}>Discharge Evaluation</MenuItem>
          <Divider></Divider>
          <MenuItem icon={< DescriptionIcon/>}>View Old Forms</MenuItem>
        </Menu>
      </Sidebar>
      <main>
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
      </main>
    </div>
    </Box>
    </>
  );

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