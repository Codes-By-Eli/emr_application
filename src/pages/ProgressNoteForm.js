import React, { useState } from 'react'
import { Box, Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import  'react-router-dom';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter, Sidebar, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from '../iona.png';
import Divider from '@mui/material/Divider';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import {Dialog, 
  DialogTitle, 
  DialogContentText, 
  DialogContent, 
  DialogActions } from '@mui/material';
import { useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


function ProgressNoteForm() {

  const  [name,setName] = useState('');
  const  [DOB,setDOB] = useState('');
  const  [sex,setSex] = useState('');
  const  [diagnosis,setDiagnosis] = useState('');
  const  [precautions, setPrecautions] = useState(''); 
  const  [contraindications,setContraindications] = useState('');
  const  [summaryOfServices,setSummaryOfServices] = useState('');
  const  [clientPerformace, setClientPerformance] = useState('');
  const  [planOrReccomendations,setPlanOrReccomendations] = useState('');
  const  [therapistSignature, setTherapistSignature] = useState('');
  const  [date, setDate] = useState ('');
  const  [billingCodes, setBillingCodes] = useState ('');
  const  [open, setOpen] = React.useState(false);
  const  [units,setUnits] = useState('');
  const [dialogOpen, setDialogOpen] = useState('');
  const[color, setColor] = useState('');
  const[title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeDOB = (event) => {
    setDOB(event.target.value);
  };

  const changeSex = (event) => {
    setSex(event.target.value);
  };
  
  const changeDiagnosis = (event) => {
    setDiagnosis(event.target.value);
  };

  const changePrecautions = (event) => {
    setPrecautions(event.target.value);
  };

  const changeContraindications = (event) => {
    setContraindications(event.target.value);
  };

  const changeSummaryOfServices = (event) => {
    setSummaryOfServices(event.target.value);
  };

  const changeClientPerformace = (event) => {
    setClientPerformance(event.target.value); 
  }

  const changePlanOrReccomendations = (event) => {
    setPlanOrReccomendations(event.target.value);
  };

  const changeTherapistSignature = (event) => {
    setTherapistSignature(event.target.value);
  };

  const changeDate = (event) => {
    setDate(event.target.value);
  };

  const changeBillingCodes = (event) =>{
    setBillingCodes(event.target.value);
  };

 const changeUnits = (event) => {
  setUnits(event.target.value);
};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };


  //JSON with all of the fields for the proogress note
  async function submitEval(){
  
    var progressFields = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      
      },
      body: JSON.stringify({
          "name": name,
          "DOB": DOB,
          "sex": sex,
          "diagnosis": diagnosis,
          "precautions": precautions,
          "contraindications": contraindications,
          "summaryOfServices": summaryOfServices,
          "clientPerformance": clientPerformace,
          "planOrReccomendations": planOrReccomendations,
          "therapistSignature": therapistSignature,
          "date": date,
          "billingCodes": billingCodes,
          "units": units,
      })

      

    }//end progressFields

    const hasEmptyValue = Object.values(JSON.parse(progressFields.body)).some(value => !value);
    if(hasEmptyValue) {
      setColor("#f55d7a");
      setTitle("Not all of the fields were entered for the Progress Note!");
      setMessage("Please enter all the fields and click \"Submit\" again.");
      handleOpen();
      return;
    }

    
    const response = await fetch("http://127.0.0.1:5000/submit_progress",progressFields)
    const data = await response.json()
    console.log(data)
  }

  const [username, setUserName] = useState('');
  const [email,setEmail] = useState('');

  async function getProfile()
  {
    var requestOptions = {
      method: "GET",
      headers: {"Authorization": `Bearer ${sessionStorage.getItem('token')}`}
    };

    const response = await fetch("http://127.0.0.1:5000/profile", requestOptions);
    const data = await response.json();
    setUserName(`${data.first} ${data.last}`);
    setEmail(data.email);
  }

  useEffect(() => {
    getProfile();
   
  },[])

  // Starts front end code for the sidebar and filds
  const { collapseSidebar } = useProSidebar();
 
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
    <Grid item xs zeroMinWidth>
      <Typography
      align='center'
      >
        {username}
      </Typography>
      <Typography
      align='center'>
        {email}
      </Typography>
    </Grid>
  
          <MenuItem component = {<Link to = "/" />} icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <Divider></Divider>
          <MenuItem 
            component = {<Link to = "/initial_evaluation" />}
            icon={<NoteAddIcon />}>Initial Evaluation</MenuItem>
          <MenuItem component = {<Link to = "/progress_form" />}icon={<StickyNote2Icon />}>Progress Note</MenuItem>
          <MenuItem component = {<Link to = "/discharge_evaluation" />}icon={<NoteAltIcon/>}>Discharge Evaluation</MenuItem>
          <Divider></Divider>
          {/*<MenuItem component = {<Link to = "/old_form" />}icon={< DescriptionIcon/>}>View Old Forms</MenuItem>
          <Divider></Divider>*/}
          <Grid item xs zeroMinWidth>
            <br />
            <Typography
            align='center'
            >
              Helpful Tip:
            </Typography>
            <Typography
            align='center'>
              Check your "Downloads" Folder after completing an Evaluation to see your PDF!
            </Typography>
          </Grid>
        </Menu>
      </Sidebar>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#f55d7a",
            
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
            {title}
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
      <main>
      <Box
    bgcolor= "">
      <Grid container spacing={1}>


        

       {/**Orignal spaces from the top */}
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
           onChange={changeName}
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
         onChange={changeDOB}
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
         onChange={changeSex}
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
         label="Diagnosis"
         id="filled-basic"
         variant="filled"
         onChange={changeDiagnosis}
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
            onChange={changePrecautions}
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
           onChange={changeContraindications}
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
           label="Summary of Services"
           multiline
           fullWidth
           rows={3}
           placeholder="Enter summary"
           variant="filled"
           onChange={changeSummaryOfServices}
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
           onChange={changeClientPerformace}
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
           label="Plan or Recommendations"
           multiline
           fullWidth
           rows={3}
           placeholder="Enter Recommendations"
           variant="filled"
           onChange={changePlanOrReccomendations}
        />
        </Grid>


        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>



        <Grid item xs = {1}>
        </Grid>

        <Grid item xs = {3}>
          
          <TextField
           fullWidth
           label="Therapist Signature"
           id="filled-basic"
           variant="filled"
           onChange={changeTherapistSignature}
         />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3}
          >
          <TextField
           fullWidth
         label="Date"
         id="filled-basic"
         variant="filled"
         onChange={changeDate}
        />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3.1}
          >
          <TextField
           fullWidth
         label="Units"
         id="filled-basic"
         variant="filled"
         onChange={changeUnits}
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
        <Grid item xs = {12}>
        </Grid>
        <Grid item xs = {12}>
        </Grid>


        {/* Space to the left of the submit button */}
        <Grid item xs = {1}>
        </Grid>
        <Grid item xs = {4}>
          <Button
           onClick={handleClickOpen}
            variant="contained" 
            color="primary"
            align = "center"
            style = {{
            minHeight: "28px",
            maxHeight: "76px",
            minWidth: "50%",
            maxWidth: "76px"
            }}
           > 
          <Typography
              style={{
               color: "black",
               align: "center",
               minHeight: "28px",
               maxHeight: "76px",
               minWidth: "30px",
               maxWidth: "100%",
               fontSize: "12px",
              fontWeight: "light"
              }}
              >
                Billing Codes
          </Typography>
          </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select a billing code or type one in.</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Code</InputLabel>
              <Select
                native
                value={billingCodes}
                onChange={changeBillingCodes}
                input={<OutlinedInput label="billingCodes" id="billingCodes" />}
              >
                <option aria-label="None" value="" />
                <option value={97165}>97165</option>
                <option value={97166}>97166</option>
                <option value={97167}>97167</option>
                <option value={97168}>97168</option>
                <option value={97533}>97533</option>
                <option value={97535}>97535</option>
                <option value={97537}>97537</option>
                <option value={97542}>97542</option>
                <option value={97110}>97110</option>
                <option value={97112}>97112</option>
                <option value={97129}>97129</option>
                <option value={97150}>97150</option>
                <option value={97530}>97530</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField
               fullWidth
               label="Code"
               variant="filled"
               value = {billingCodes}
               onChange = {changeBillingCodes}
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={handleClickClose}>Ok</Button>
        </DialogActions>
      </Dialog>
        </Grid>

        <Grid item xs = {4}>
        </Grid>

        <Grid item xs = {2}
          >
          <Button 
            fullWidth 
            variant="contained" 
            color="primary"
            align = "center"
            size='small'
            onClick={submitEval}
            
            >
           SUBMIT
          </Button>
        </Grid>

        <Grid item xs = {1}>

        
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