import React, { useState } from 'react'
import { Box, Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import  'react-router-dom';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import {useNavigate} from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from '../iona.png';
import Divider from '@mui/material/Divider';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
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
import {MenuItem as Option} from "@mui/material";


function ProgressNoteForm() {
  const navigate = useNavigate();
  /*
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
  const  [units,setUnits] = useState('');
  const[choice, setChoice] = useState('');
  const [med_num, setMedNum] = useState('');
  */
  const [dialogOpen, setDialogOpen] = useState('');
  const[title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [record_numbers, setRecordNumbers] = useState([]);
  const  [open, setOpen] = React.useState(false);

  const [allValues, setAllValues] = useState({
    choice: '',
    name: '',
    DOB: '',
    sex: '',
    diagnosis: '',
    precautions: '',
    contraindications: '',
    summaryOfServices: '',
    clientPerformace: '',
    planOrReccomendations: '',
    therapistSignature: '',
    date: '',
    billingCodes: '',
    units: '',
    med_num: ''
  });

  const populateHandler = json => {
    const keys = Object.keys(json);
    for(const key in keys)
    {
      setAllValues (prevValues => {
        return { ...prevValues,[keys[key]]: json[keys[key]]};
      });
    }
  };

  const changeHandler = e => { 
    const key = e.target.id || e.target.name;
    setAllValues (prevValues => {
      return { ...prevValues,[key]: e.target.value}
    });
    //console.log(allValues);
  }
/*
  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeMedNum = (event) => {
    setMedNum(event.target.value);
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

const changeChoice = (event) => {
  setChoice(event.target.value);
};
*/
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
      body: JSON.stringify(allValues)
      /*
      body: JSON.stringify({
          "name": name,
          "med_num": med_num,
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
      })*/
    };//end progressFields
    /*
    const hasEmptyValue = Object.values(JSON.parse(progressFields.body)).some(value => !value);
    if(hasEmptyValue) {
      setColor("#f55d7a");
      setTitle("Not all of the fields were entered for the Progress Note!");
      setMessage("Please enter all the fields and click \"Submit\" again.");
      handleOpen();
      return;
    }
    */

    
    const response = await fetch("http://127.0.0.1:5000/submit_progress",progressFields)
    const data = await response.json();
    if(!response.ok)
    {
      console.log(data);
      return;
    }
    navigate("/landing_page");
  }

  async function getRecordNumbers()
  {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      }
    };

    const response = await fetch("http://127.0.0.1:5000/get_progress_numbers", requestOptions);
    const data = await response.json();
    setRecordNumbers(data.data);
  }

  async function getEvalInformation()
  {
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify({
        "record": allValues.choice
      })
    };
    const response = await fetch("http://127.0.0.1:5000/get_chosen_progress", requestOptions);
    const data = await response.json();
    if(!response.ok)
    {
      return;
    }
    populateHandler(data.data);
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
    getRecordNumbers();
  },[])

  useEffect(() => {
    getEvalInformation();
  },[allValues.choice])

  // Starts front end code for the sidebar and filds
  const { collapseSidebar } = useProSidebar();
 
  return (

    <>
    <Box
    sx={{
      width: "100%",
      height: "110vh",
      background: "linear-gradient(to right bottom, #d8deee, #324e84)"
    }}
    
    >
      
    
    <div id="app" style={({ height: "75vh" }, { display: "flex" })}>
    <Sidebar style={{ height: "110vh" }}>
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
        <Grid item xs={1/2}></Grid>
        <Grid item xs={5.25}>
          <TextField
          
           fullWidth
           label="Medical Record #"
           id="med_num"
           variant="filled"
           value={allValues.med_num || ''}
           onChange={changeHandler}
        />
        </Grid>

        <Grid item xs={1/2}></Grid>

              <Grid item xs={5.25}>
              <FormControl fullWidth>
                  <InputLabel id="init_med">Edit Previous Progres Note Medical Record #</InputLabel>
                  <Select
                    labelId="choice"
                    id="choice"
                    inputProps={{
                      name: 'choice',
                      id: 'choice',
                      align: "center"
                  }}
                    label="Evaluation Type"
                    onChange={changeHandler}
                  >
                    <Option value="">
                      <em>None</em>
                    </Option>
                    {record_numbers?.map((record_number) => {
                      return <Option value={record_number.id}>{record_number.id} </Option>
                    })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1/2}></Grid>
        
        
        {/** FIRST ROW*/}
        <Grid item xs = {1}>
        </Grid>

        <Grid item xs = {3}
          >
          <TextField
          
           fullWidth
           label="Name"
           id="name"
           variant="filled"
           value={allValues.name || ''}
           onChange={changeHandler}
        />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3}
          >
          <TextField
           fullWidth
         label="DOB"
         id="DOB"
         variant="filled"
         value={allValues.DOB || ''}
         onChange={changeHandler}
        />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3.1}
          >
          <TextField
           fullWidth
         label="SEX"
         id="sex"
         variant="filled"
         value={allValues.sex || ''}
         onChange={changeHandler}
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
         id="diagnosis"
         variant="filled"
         value={allValues.diagnosis || ''}
         onChange={changeHandler}
        />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3}
          >
          <TextField
            fullWidth
            label="Precautions"
            id="precautions"
            variant="filled" 
            value ={allValues.precautions || ''}
            onChange={changeHandler}
        />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3.1}
          >
          <TextField
           fullWidth
           label="Contraindications"
           id="contraindications"
           variant="filled"
           value={allValues.contraindications || ''}
           onChange={changeHandler}
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
           id="summaryOfServices"
           label="Summary of Services"
           multiline
           fullWidth
           rows={3}
           placeholder="Enter summary"
           variant="filled"
           value={allValues.summaryOfServices || ''}
           onChange={changeHandler}
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
           id="clientPerformace"
           label="Client Performance"
           multiline
           fullWidth
           rows={3}
           placeholder="Enter Client Performace"
           variant="filled"
           value={allValues.clientPerformace || ''}
           onChange={changeHandler}
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
           id="planOrReccomendations"
           label="Plan or Recommendations"
           multiline
           fullWidth
           rows={3}
           placeholder="Enter Recommendations"
           variant="filled"
           value={allValues.planOrReccomendations || ''}
           onChange={changeHandler}
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
           id="therapistSignature"
           variant="filled"
           value={allValues.therapistSignature || ''}
           onChange={changeHandler}
         />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3}
          >
          <TextField
           fullWidth
         label="Date"
         id="date"
         variant="filled"
         onChange={changeHandler}
         value={allValues.date || ''}
        />
        </Grid>

        <Grid item xs = {.5}>
        </Grid>

        <Grid item xs = {3.1}
          >
          <TextField
           fullWidth
         label="Units"
         id="units"
         variant="filled"
         onChange={changeHandler}
         value={allValues.units || ''}
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
                id='billingCodes'
                value={allValues.billingCodes}
                onChange={changeHandler}
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
               id='billingCodes'
               label="Code"
               variant="filled"
               value = {allValues.billingCodes}
               onChange = {changeHandler}
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