

import  'react-router-dom';
import Grid from '@mui/material/Grid';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import {MenuItem as Option} from "@mui/material";
import logo from '../iona.png';
import Divider from '@mui/material/Divider';
import { Box,Button, Container, Paper, TextField, Typography, TableHead, TableContainer, Select } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import styled from 'styled-components';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import { NativeSelect } from '@mui/material';
import { useEffect } from 'react';
import './TableStyling.css';
import {Dialog, 
DialogTitle, 
DialogContentText, 
DialogContent, 
DialogActions } from '@mui/material';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {useNavigate} from 'react-router-dom';


const TabContent = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justifyContent: center;
  margin-top: 20px;  
`;

const TabButton = styled.button`
border: solid;
border-width: 1px;
border-color: gray;
background-color: ${(props) => (props.active ? '#B3F2FF' : '#fff')};
padding: 20px;
border-radius: 10px;
cursor: pointer;
width: 100%;
height: 85px;
font-family: Lucida Sans;
font-size: 11px;
`;


function InitialEvaluationForm() {
  const navigate = useNavigate();
  const { collapseSidebar } = useProSidebar();
  const [activeTab, setActiveTab] = useState(0);
  const [record_numbers, setRecordNumbers] = useState([]);

 const [allValues, setAllValues] = useState({
  /* Client and Medical Tab */
  choice: '',
  name : '',
  dob:'',
  sex:'',
  date:'',
  med_num:'',
  med_hx:'',
  diagnosis:'',
  prior_lev:'',
  prior_liv:'',
  hearing:'',
  visual_perception:'',
  AO:'',
  memory:'',
  mmse:'',
  
  blood_pressure : '',
  heart_rate : '',
  oxygen : '',
  respiratory_rate : '',
  pain_assessment : '',

  /* Fim Score Tab */
  
  
  eat_init:'',
  eat_goal:'',
  groom_init:'',
  groom_goal:'',
  bath_init:'',
  bath_goal:'',
  upper_init:'',
  upper_goal:'',
  lower_init:'',
  lower_goal:'',
  toilet_init:'',
  toilet_goal:'',
  toilet_transfer_init:'',
  toilet_transfer_goal:'',
  shower_transfer_init:'',
  shower_transfer_goal:'',
  tub_transfer_init:'',
  tub_transfer_goal:'',

  /* Dom Hand / UE Scores */
  hand_dom:'',
  
  lue_shoulder_ev_rom:'',
  lue_shoulder_ev_mmt:'',
  rue_shoulder_ev_rom:'',
  rue_shoulder_ev_mmt:'',

  lue_shoulder_flex_rom:'',
  lue_shoulder_flex_mmt:'',
  rue_shoulder_flex_rom:'',
  rue_shoulder_flex_mmt:'',
  
  lue_shoulder_ext_rom:'',
  lue_shoulder_ext_mmt:'',
  rue_shoulder_ext_rom:'',
  rue_shoulder_ext_mmt:'',
  
  lue_shoulder_abd_rom:'',
  lue_shoulder_abd_mmt:'',
  rue_shoulder_abd_rom:'',
  rue_shoulder_abd_mmt:'',
  
  lue_hor_abd_rom:'',
  lue_hor_abd_mmt:'',
  rue_hor_abd_rom:'',
  rue_hor_abd_mmt:'',

  lue_hor_add_rom:'',
  lue_hor_add_mmt:'',
  rue_hor_add_rom:'',
  rue_hor_add_mmt:'',

  lue_intern_rot_rom:'',
  lue_intern_rot_mmt:'',
  rue_intern_rot_rom:'',
  rue_intern_rot_mmt:'',

  lue_extern_rot_rom:'',
  lue_extern_rot_mmt:'',
  rue_extern_rot_rom:'',
  rue_extern_rot_mmt:'',

  lue_elbow_flex_rom:'',
  lue_elbow_flex_mmt:'',
  rue_elbow_flex_rom:'',
  rue_elbow_flex_mmt:'',

  lue_elbow_ext_rom:'',
  lue_elbow_ext_mmt:'',
  rue_elbow_ext_rom:'',
  rue_elbow_ext_mmt:'',

  lue_fore_sup_rom:'',
  lue_fore_sup_mmt:'',
  rue_fore_sup_rom:'',
  rue_fore_sup_mmt:'',

  lue_fore_pro_rom:'',
  lue_fore_pro_mmt:'',
  rue_fore_pro_rom:'',
  rue_fore_pro_mmt:'',

  lue_wrist_flex_rom:'',
  lue_wrist_flex_mmt:'',
  rue_wrist_flex_rom:'',
  rue_wrist_flex_mmt:'',


  lue_wrist_ext_rom:'',
  lue_wrist_ext_mmt:'',
  rue_wrist_ext_rom:'',
  rue_wrist_ext_mmt:'',

  lue_grip_str:'',
  rue_grip_str:'',

  lue_lat_pinch:'',
  rue_lat_pinch:'',

  lue_tri_pinch:'',
  rue_tri_pinch:'',
  
  lue_tip_pinch:'',
  rue_tip_pinch:'',

  lue_light_touch:'',
  rue_light_touch:'',

  lue_sh_du:'',
  rue_sh_du:'',

  lue_temp:'',
  rue_temp:'',

  lue_prop:'',
  rue_prop:'',

  lue_ster:'',
  rue_ster:'',

  lue_peg:'',
  rue_peg:'',

  lue_edema:'',
  rue_edema:'',

  lue_pain:'',
  rue_pain:'',


  /*Observation Tab */
  ADL:'',
  current_transfer:'',
  init_assess:'',
  observations:'',
  equip_needs:'',
  
 /* Discharge Tab */
  dis_rec:'',
  patient_goals:'',
  short_term_goals:'',
  overall_goals:'',
  justification:'',
  billing:'',
  est_len:'',
  units:'',
  signature:'',
  date_of_sig:'',

  




  });
  useEffect(() => {
    console.log(allValues.AO);
  }, [allValues.AO]);

  useEffect(() => {
    getEvalInformation();
  },[allValues.choice])

  const changeHandler = e => { 
    const key = e.target.id || e.target.name;
    setAllValues (prevValues => {
      return { ...prevValues,[key]: e.target.value}
    });
    
  }

  const populateHandler = json => {
    const keys = Object.keys(json);
    for(const key in keys)
    {
      setAllValues (prevValues => {
        return { ...prevValues,[keys[key]]: json[keys[key]]};
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  const [ProcessOpen,set_Process_Open] = useState(false);
  const handleProcessOpen = () => {
    set_Process_Open(true);
  };
  const handleProcessClose = () => {
    set_Process_Open(false);
  }
  
  const isNotEmpty = Object.values(allValues).every(value => value !== '');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');

  async function getRecordNumbers()
  {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      }
    };

    const response = await fetch("http://127.0.0.1:5000/get_initial_numbers", requestOptions);
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
    const response = await fetch("http://127.0.0.1:5000/get_chosen_eval", requestOptions);
    const data = await response.json();
    if(!response.ok)
    {
      return;
    }
    populateHandler(data.data);
  }

  async function getProfile()
  {
    var requestOptions = {
      method: "GET",
      headers: {"Authorization": `Bearer ${sessionStorage.getItem('token')}`}
    };

    const response = await fetch("http://127.0.0.1:5000/profile", requestOptions);
    const data = await response.json();
    setName(`${data.first} ${data.last}`);
    setEmail(data.email);
  }

  useEffect(() => {
    getProfile();
    getRecordNumbers();
  },[])
  
 

  var requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    
    },
    body: JSON.stringify({ allValues }),
  }
  

  async function submitInitEval() {
    console.log('submitInitEval called');
    /*
    const emptyEntries = getEmptyEntries();
    if (emptyEntries.length > 0) {
      setMessage(`Please enter data into ALL fields before submitting.`);
      handleOpen();
      return;
    }
    if (!checkValidRecord()) {
      setMessage("That medical record number is currently in use. Please enter a different number for the medical record number.");
      handleOpen();
      return;
    }
    */
    if(allValues.med_num == '')
    {
      setMessage("Please enter a value for the medical number.");
      handleOpen();
      return;
    }
    handleProcessOpen();
  
    const response = await fetch("http://127.0.0.1:5000/submit_initial", requestOptions);
    const data = await response.json();
  
    if (!response.ok) {
      
      handleProcessClose();
      setMessage(data.error);
      handleOpen();
    } else {
      
      handleProcessClose();
      navigate("/landing_page");
    }
  }


  function getEmptyEntries() {
    return Object.entries(allValues)
    .filter(([key, value]) => value === '');
  }

 
  async function checkValidRecord()
  {
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify({"med_num": allValues.med_num})
    };

    console.log(allValues.med_num);
    const response = await fetch("http://127.0.0.1:5000/check_valid_medical_number", requestOptions);
    const data = await response.json();
    console.log(data);
    if(data.msg === "Not Valid")
    {
      //setTitle("Error with Medical Record ID.");
      //setColor("#f55d7a");
      setMessage("That medical record number is currently in use. Please enter a different number for the medical record number.");
      handleOpen();
      return false;
    }

  }

  return (
    <div id="app" style={({ height: "75vh" }, { display: "flex" })}>
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
            {"There was an error trying to submit the evaluation..."}
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


      {/* Processing Dialogue box*/}
      <Dialog
        open={ProcessOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#E6F1FF",
          },
        }}
      >
  <DialogTitle id="alert-dialog-title">
    <Typography
      component={"span"}
      variant="h4"
      align="center"
      color="#1D1D1F"
    >
      {"Please wait while the Initial Evaluation is being processed..."}
    </Typography>
  </DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      <Typography
        component={"span"}
        align="center"
        color="#1D1D1F"
        style={{
          fontSize: "1.1vw",
        }}
      >
        {"When redirected, check your 'Downloads' Folder for the PDF!"}
      </Typography>
    </DialogContentText>
  </DialogContent>
</Dialog>
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
        {name}
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
      
    
    
    
  
      
    <Box sx={{
          width: '200vh',
          height: '130vh',
          background: 'linear-gradient(to right bottom, #d8deee, #324e84)',
          display: "flex",
          flexDirection: "column",
          
          
      }}>

          <Grid container className='TabContainer' spacing={0}> 
          <Grid item xs={2.5}></Grid>
          <Grid item xs={7}>  
            <TabContainer alignItems='center' display='flex' justifyContent='center'>
              <TabButton
              active={activeTab === 0}
              onClick={() => setActiveTab(0)}
            >
              Client & Medical Information
            </TabButton>
            
            <TabButton
              active={activeTab === 1}
              onClick={() => setActiveTab(1)}
            >
              Initial Fim Scores
            </TabButton>
            
            <TabButton
              active={activeTab === 2}
              onClick={() => setActiveTab(2)}
            >
              Dominant Hand & UE Scores
            </TabButton>
            
            <TabButton
              active={activeTab === 3}
              onClick={() => setActiveTab(3)}
            >
              Observations
            </TabButton>
            
              
            
            <TabButton
              active= {activeTab === 4}
              onClick={() => setActiveTab(4)}
              >
                Course of Rehab, Client Ed., & Discharge Recs/Referrals
              </TabButton>
            </TabContainer>
            </Grid>
            <Grid item xs={2.5}></Grid>
          </Grid>
        
        <Container sx = {{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "115vh",
          width: "110vh",
          padding: 0
          
        }}>
                <Paper elevation={15}>
                 <Grid container spacing={2}>
                  </Grid>
        <div>
      	  <TabContent active={activeTab ===0}>
            <Grid container spacing={2}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
              <FormControl fullWidth>
                  <InputLabel id="init_med">Edit Previous Initial Evaluation</InputLabel>
                  <Select
                    labelId="init_med"
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
              <Grid item xs={2}></Grid>
              <Grid item xs={2/6}></Grid>
              <Grid item xs={3}>
                <TextField label="Client Name" 
                
                id='name'
                fullWidth
                value={allValues.name || ''}
                style={{ padding: 1}}
                onChange={changeHandler} />
              </Grid>
              <Grid item xs={2/6}></Grid>
              <Grid item xs={1}>
                <TextField label='Sex'
                  id='sex'
                  fullWidth
                  value={allValues.sex || ''}
                  style={{ padding: 1}}
                  onChange={changeHandler}></TextField>
              </Grid>
              <Grid item xs={2/6}></Grid>
              <Grid item xs={2}>
                <TextField label = "Date of Birth:"
                id='dob'
                type='date'
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={allValues.dob || ''}
                onChange={changeHandler} 
                style={{ padding: 1}}/>
              </Grid>
              <Grid item xs={2/6}></Grid>
              
              
            <Grid item xs={2}>
              <TextField label="Date of Eval:"
              fullWidth
              type='date'
              InputLabelProps={{ shrink: true }}
              value={allValues.date || ''}
              id='date'
              onChange={changeHandler}
              style={{ padding: 1 }} />
            </Grid>
        	  
            <Grid item xs={2/6}></Grid>
        	  <Grid item xs={2}>
              <TextField label="Med Record #:"
                id='med_num'
                
                onChange={changeHandler} 
                fullWidth
                value={allValues.med_num || ''}
                style={{ padding: 1 }} />
            
            </Grid>
            <Grid item xs={2/6}></Grid>
            <Grid item xs={3/6}></Grid>
            
            
        	  <Grid item={.66}></Grid>
            <Grid item xs={5}>
              <TextField label="Medical HX:" 
                fullWidth
                
                multiline
                id='med_hx'
                value={allValues.med_hx || ''}
                onChange={changeHandler}
                inputProps={{ style: {height: 100}}}
                style={{ padding: 1 }} />
            
            </Grid>
            
            <Grid item xs={2/3}></Grid>
        	  <Grid item xs={5}>
              <TextField label="Diagnosis:" 
                fullWidth
                multiline
                value={allValues.diagnosis || ''}
                id='diagnosis'
                onChange={changeHandler}
                inputProps={{ style: {height: 100} }}
                style={{ padding: 1 }} />
                </Grid>
              <Grid item xs={2/3}></Grid>
            
            
            
            <Grid item xs={12}></Grid>

            <Grid item xs={.66}></Grid>
        	  <Grid item xs={5}>
              <TextField label="Prior Level of Function:" 
                fullWidth
                multiline
                value={allValues.prior_lev || ''}
                id='prior_lev'
                onChange={changeHandler}
                inputProps={{ style: {height: 100}}}
                style={{ padding: 1 }} />
            
            </Grid>
            
            <Grid item xs={.66}></Grid>
        	  <Grid item xs={5}>
              <TextField label="Prior Living Situation:" 
                fullWidth
                id='prior_liv'
                onChange={changeHandler}
                multiline
                value={allValues.prior_liv || ''}
                inputProps={{ style: {height: 100} }}
                style={{ padding: 1 }} />
                </Grid>
              <Grid item xs={.66}></Grid>
            
              <Grid item xs={.66}></Grid>
        	  <Grid item xs={5}>
              <TextField label="Hearing:" 
                fullWidth
                id='hearing'
                onChange={changeHandler}
                multiline
                value={allValues.hearing || ''}
                inputProps={{ style: {height: 100}}}
                style={{ padding: 1 }} />
            
            </Grid>
            
            <Grid item xs={.66}></Grid>
        	  <Grid item xs={5}>
              <TextField label="Vision/Visual Perception" 
                fullWidth
                id='visual_perception'
                onChange={changeHandler}
                multiline
                values={allValues.visual_perception || ''}
                inputProps={{ style: {height: 100} }}
                style={{ padding: 1 }} />
            </Grid>
            
            <Grid item xs={.66}></Grid>

            <Grid item xs={.66}></Grid>
            <Grid item xs={1.5}>
            <InputLabel variant="standard" >
                A & O:
             </InputLabel>
            <NativeSelect
             onChange={changeHandler}
             value={allValues.AO || ''}
            inputProps={{
              name: 'A & O:',
              id: 'AO',
             
              align: "center"
          }}
        >
            <option value={"X1"}>X1</option>
            <option value={"X2"}>X2</option>
            <option value={"X3"}>X3</option>
            <option value={"X4"}>X4</option>
            </NativeSelect>
          </Grid>
          
        	<Grid item xs={4}>
              <TextField label="Memory/Mental/Cognition:" 
                fullWidth
                id='memory'
                value={allValues.memory || ''}
                onChange={changeHandler}
                multiline
                inputProps={{ style: {height: 75} }}
                style={{ padding: 1 }} />
           </Grid>
           <Grid item xs={.5}></Grid>
        	<Grid item xs={4}>
              <TextField label="MMSE Score:" 
                fullWidth
                id='mmse'
                value={allValues.mmse || ''}
                onChange={changeHandler}
                inputProps={{ style: {height: 75} }}
                style={{ padding: 1 }} />
           </Grid>
           <Grid item xs={12}></Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Blood Pressure:"
              id='blood_pressure'
              value={allValues.blood_pressure || ''}
              onChange={changeHandler}
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Heart Rate:"
              id='heart_rate'
              value={allValues.heart_rate || ''}
              onChange={changeHandler}
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Oxygen(SPO2):"
              id='oxygen'
              value={allValues.oxygen || ''}
              onChange={changeHandler}
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Respiratory Rate(RR):"
              id='respiratory_rate'
              value={allValues.respiratory_rate || ''}
              onChange={changeHandler}
            
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Pain Assessment:"
              id='pain_assessment'
              value={allValues.pain_assessment || ''}
              onChange={changeHandler}
            
            ></TextField>

           </Grid>
           <Grid item xs={2/6}></Grid>

           <Grid item xs={12}></Grid>   
           <Grid item xs={12}></Grid>      
            
            </Grid>
          </TabContent>

      	<TabContent active={activeTab === 1}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Self-Care Area</TableCell>
                <TableCell align='center' >Fim Score</TableCell>
                <TableCell align='center'>Fim Goal</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              <TableRow>
                <TableCell align='center'>Eating</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='eat_init'
                    value={allValues.eat_init || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='eat_goal'
                    value={allValues.eat_goal || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Grooming</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='groom_init'
                    value={allValues.groom_init || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='groom_goal'
                    value={allValues.groom_goal || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Bathing</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='bath_init'
                    value={allValues.bath_init || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='bath_goal'
                    value={allValues.bath_goal || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell align='center'>Upper Body Dressing</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='upper_init'
                    value={allValues.upper_init || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='upper_goal'
                    value={allValues.upper_goal || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell align='center'>Lower Body Dressing</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='lower_init'
                    value={allValues.lower_init || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='lower_goal'
                    value={allValues.lower_goal || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Toileting</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='toilet_init'
                    value={allValues.toilet_init || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='toilet_goal'
                    value={allValues.toilet_goal || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Toilet Transfer</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='toilet_transfer_init'
                    value={allValues.toilet_transfer_init || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='toilet_transfer_goal'
                    value={allValues.toilet_transfer_goal || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Shower Transfer</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='shower_transfer_init'
                    value={allValues.shower_transfer_init || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='shower_transfer_goal'
                    value={allValues.shower_transfer_goal || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Tub Transfer</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='tub_transfer_init'
                    value={allValues.tub_transfer_init || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number', min: 1,
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='tub_transfer_goal'
                    value={allValues.tub_transfer_goal || ''}
                    onChange={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>



            </TableBody>
          </Table>
      	</TabContent>

      	<TabContent active={activeTab ===2}>
        
          
          
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid container justifyContent='center'>
          

          
              <FormControl margin='normal'>
                <FormLabel>
                <Typography variant="overline">Hand Dominance</Typography>
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="hand_dom"
                  name="hand_dom"
                  value={allValues.hand_dom || ''}
                  onChange={changeHandler}>
          
                  <FormControlLabel value="Left" control={<Radio />} label="L" />
                  <FormControlLabel value="Right" control={<Radio />} label="R" />
              </RadioGroup>
              </FormControl>
            </Grid>
          <TableContainer sx={{ maxHeight: "75vh"}}>
            <Table stickyHeader aria-label="sticky table" >
              <TableHead>
                <TableRow>
                  <TableCell align='center' colSpan={2}>Left UE</TableCell>
                  <TableCell align='center' colSpan={1}></TableCell>
                  <TableCell align='center' colSpan={2}>Right UE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align= 'center'>ROM</TableCell>
                  <TableCell align='center'>MMT</TableCell>
                  <TableCell align='center'>Category</TableCell>
                  <TableCell align='center'>ROM</TableCell>
                  <TableCell align='center'>MMT</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Shoulder elevation row*/}
                <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_shoulder_ev_rom'
                      value={allValues.lue_shoulder_ev_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_shoulder_ev_mmt'
                      value={allValues.lue_shoulder_ev_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Shoulder Elevation</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_shoulder_ev_rom'
                      value={allValues.rue_shoulder_ev_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_shoulder_ev_mmt'
                      value={allValues.rue_shoulder_ev_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                 {/* Shoulder Flexion Row */}   
                <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_shoulder_flex_rom'
                      value={allValues.lue_shoulder_flex_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_shoulder_flex_mmt'
                      value={allValues.lue_shoulder_flex_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Shoulder Flexion</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_shoulder_flex_rom'
                      value={allValues.rue_shoulder_flex_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_shoulder_flex_mmt'
                      value={allValues.rue_shoulder_flex_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                    {/* Shoulder Extension Row */}
                <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_shoulder_ext_rom'
                      value={allValues.lue_shoulder_ext_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_shoulder_ext_mmt'
                      value={allValues.lue_shoulder_ext_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Shoulder Extension</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_shoulder_ext_rom'
                      value={allValues.rue_shoulder_ext_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_shoulder_ext_mmt'
                      value={allValues.rue_shoulder_ext_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                    {/* Shoulder Abduction Row */}
                <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_shoulder_abd_rom'
                      value={allValues.lue_shoulder_abd_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_shoulder_abd_mmt'
                      value={allValues.lue_shoulder_abd_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Shoulder Abduction</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_shoulder_abd_rom'
                      value={allValues.rue_shoulder_abd_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_shoulder_abd_mmt'
                      value={allValues.rue_shoulder_abd_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                    {/*Horizantal Abduction Row*/}
                <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_hor_abd_rom'
                      value={allValues.lue_hor_abd_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_hor_abd_mmt'
                      value={allValues.lue_hor_abd_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Horizontal Abduction</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_hor_abd_rom'
                      value={allValues.rue_hor_abd_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_hor_abd_mmt'
                      value={allValues.rue_hor_add_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                          {/*Horizantal Adduction Row */}                        
                <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_hor_add_rom'
                      value={allValues.lue_hor_add_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_hor_add_mmt'
                      value={allValues.lue_hor_add_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Horizontal Adduction</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_hor_add_rom'
                      value={allValues.rue_hor_add_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_hor_add_mmt'
                      value={allValues.rue_hor_add_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                    {/*Internal Rotation Row */}
                <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_intern_rot_rom'
                      value={allValues.lue_intern_rot_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_intern_rot_mmt'
                      value={allValues.lue_intern_rot_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Internal Rotation</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_intern_rot_rom'
                      value={allValues.rue_intern_rot_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_intern_rot_mmt'
                      value={allValues.rue_intern_rot_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>    
                    {/*External Rotation Row*/}
                    <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_extern_rot_rom'
                      value={allValues.lue_extern_rot_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_extern_rot_mmt'
                      value={allValues.lue_extern_rot_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>External Rotation</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_extern_rot_rom'
                      value={allValues.rue_extern_rot_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_extern_rot_mmt'
                      value={allValues.rue_extern_rot_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                    
                    {/*Elbow Flexion Row*/}
                
                <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_elbow_flex_rom'
                      value={allValues.lue_elbow_flex_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_elbow_flex_mmt'
                      value={allValues.lue_elbow_flex_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Elbow Flexion</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_elbow_flex_rom'
                      value={allValues.rue_elbow_flex_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_elbow_flex_mmt'
                      value={allValues.rue_elbow_flex_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                      {/* Elbow Extension Row */}
                      <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_elbow_ext_rom'
                      value={allValues.lue_elbow_ext_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_elbow_ext_mmt'
                      value={allValues.lue_elbow_ext_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Elbow Extension</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_elbow_ext_rom'
                      value={allValues.rue_elbow_ext_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_elbow_ext_mmt'
                      value={allValues.rue_elbow_ext_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*Forearm Pronation Row*/}
                
                <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_fore_pro_rom'
                      value={allValues.lue_fore_pro_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_fore_pro_mmt'
                      value={allValues.lue_fore_pro_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Forearm Pronation</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_fore_pro_rom'
                      value={allValues.rue_fore_pro_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_fore_pro_mmt'
                      value={allValues.rue_fore_pro_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>

                    {/*Forearm Supination Row*/}
                
                    <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_fore_sup_rom'
                      value={allValues.lue_fore_sup_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_fore_sup_mmt'
                      value={allValues.lue_fore_sup_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Forearm Supination</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_fore_sup_rom'
                      value={allValues.rue_fore_sup_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_fore_sup_mmt'
                      value={allValues.rue_fore_sup_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                    {/*Wrist Flexion Row*/}
                    <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_wrist_flex_rom'
                      value={allValues.lue_wrist_flex_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_wrist_flex_mmt'
                      value={allValues.lue_wrist_flex_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Wrist Flexion</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_wrist_flex_rom'
                      value={allValues.rue_wrist_flex_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_wrist_flex_mmt'
                      value={allValues.rue_wrist_flex_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                  {/*Wrist Extension Row*/}
                  <TableRow>  
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_wrist_ext_rom'
                      value={allValues.lue_wrist_ext_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_wrist_ext_mmt'
                      value={allValues.lue_wrist_ext_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Wrist Extension</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_wrist_ext_rom'
                      value={allValues.rue_wrist_ext_rom || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_wrist_ext_mmt'
                      value={allValues.rue_wrist_ext_mmt || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell align='center' colSpan={1}></TableCell>
                  <TableCell align='center' colSpan={1}>Left UE</TableCell>
                  <TableCell align='center' colSpan={1}>Category</TableCell>
                  <TableCell align='center' colSpan={1}>Right UE</TableCell>
                  <TableCell align='center' colSpan={1}></TableCell>
                </TableRow>
              </TableHead> 
              
              {/*Start of second table */}
              <TableBody>  
                
                {/* Grip Strength Row */}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_grip_str'
                      value={allValues.lue_grip_str || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Grip Strength</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_grip_str'
                      value={allValues.rue_grip_str || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*Lateral Pinch Row*/}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_lat_pinch'
                      value={allValues.lue_lat_pinch || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Lateral Pinch</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_lat_pinch'
                      value={allValues.rue_lat_pinch || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*Tripod Pinch*/}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_tri_pinch'
                      value={allValues.lue_tri_pinch || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Tripod Pinch</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_tri_pinch'
                      value={allValues.rue_tri_pinch || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*Tip Pinch Row */}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_tip_pinch'
                      value={allValues.lue_tip_pinch || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Tip Pinch</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_tip_pinch'
                      value={allValues.rue_tip_pinch || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*Light Touch Row */}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_light_touch'
                      value={allValues.lue_light_touch || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Light Touch</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_light_touch'
                      value={allValues.rue_light_touch || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*Sharp Dull Row*/}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_sh_du'
                      value={allValues.lue_sh_du || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Sharp / Dull</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_sh_du'
                      value={allValues.rue_sh_du || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*Temperature Row */}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_temp'
                      value={allValues.lue_temp || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Temperature</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_temp'
                      value={allValues.rue_temp || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*Propriorception Row */}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_prop'
                      value={allValues.lue_prop || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Proprioception</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_prop'
                      value={allValues.rue_prop || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*Stereognosis */}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_ster'
                      value={allValues.lue_ster || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Stereognosis</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_ster'
                      value={allValues.rue_ster || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*9-Hole Peg Test Row */}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_peg'
                      value={allValues.lue_peg || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>9-Hole Peg Test</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_peg'
                      value={allValues.rue_peg || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*Edema Row */}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_edema'
                      value={allValues.lue_edema || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Edema</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_edema'
                      value={allValues.rue_edema || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
                {/*DA PAIN ROW */}
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='lue_pain'
                      value={allValues.lue_pain || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                  <TableCell align='center'>Pain</TableCell>
                  <TableCell align='center'> 
                    <TextField  
                      InputProps={{ inputProps: {
                      type: 'number',
                      style: { textAlign: 'center' },
                      },
                    }}
                      id='rue_pain'
                      value={allValues.rue_pain || ''}
                      onChange={changeHandler}>
                    </TextField>
                  </TableCell>
                </TableRow>
              </TableBody>
             </Table>
            </TableContainer>
        </TabContent>
        
        <TabContent active={activeTab === 3}>
                    
            <Grid container spacing={2}>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={2/3}></Grid>
                <Grid item xs={5}>
                    <TextField label="Additonal ADL / IADL Observations"
                      fullWidth
                      id='ADL'
                      multiline
                      value={allValues.ADL || ''}
                      onChange={changeHandler}
                      inputProps={{ style: {height: 100} }}
                      style={{ padding: 1}}>
                    </TextField>

                </Grid>
                <Grid item xs={2/3}></Grid>
                <Grid item xs={5}>
                    <TextField label="Current Transfer / Mobility Status:"
                      fullWidth
                      id='current_transfer'
                      value={allValues.current_transfer || ''}
                      multiline
                      onChange={changeHandler}
                      inputProps={{ style: {height: 100} }}
                      style={{ padding: 1}}>
                    </TextField>

                </Grid>
                <Grid item xs={2/3}></Grid>
                <Grid item xs={12}></Grid>
                
                
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                  <TextField label="Other Observations:" 
                    fullWidth
                    id='observations'
                    multiline
                    onChange={changeHandler}
                    inputProps={{ style: {height: 150} }}
                    style={{ padding: 1 }} />
                </Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={12}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                  <TextField label="Initial Assessment of Problems/Stengths:" 
                    fullWidth
                    id='init_assess'
                    multiline
                    value={allValues.init_assess || ''}
                    onChange={changeHandler}
                    inputProps={{ style: {height: 150} }}
                    style={{ padding: 1 }} />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={12}></Grid>
                
                

            </Grid>
        


        </TabContent>

      	<TabContent active={activeTab === 4}>
          
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>        
            <Grid item xs={12}></Grid>
            <Grid item xs={1/4}></Grid>
            <Grid item xs={11/3}>
              <TextField label="Discharge Recommendation:" 
                  fullWidth
                  id='dis_rec'
                  value={allValues.dis_rec || ''}
                  multiline
                  onChange={changeHandler}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              
              </Grid>
              <Grid item xs={1/4}></Grid>
              <Grid item xs={11/3}>
                <TextField label="Equipment Needs:" 
                  fullWidth
                  id='equip_needs'
                  value={allValues.equip_needs || ''}
                  multiline
                  onChange={changeHandler}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              </Grid> 
              <Grid item xs={1/4}></Grid>
              <Grid item xs={11/3}>
                <TextField label="Patient/Family/Caregiver Goals:" 
                  fullWidth
                  id='patient_goals'
                  multiline
                  onChange={changeHandler}
                  value={allValues.patient_goals || ''}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              </Grid> 
              <Grid item xs={1/4}></Grid>
              <Grid item xs={12}></Grid>

              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
                <TextField label="Short Term Goals / Estimated TimeFrame:"
                  fullWidth
                  id='short_term_goals'
                  value = {allValues.short_term_goals || ''}
                  multiline
                  onChange={changeHandler}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
                  
              </Grid>
              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
                <TextField label="Overall Long Term Goal:"
                  fullWidth
                  id='overall_goals'
                  value={allValues.overall_goals || ''}
                  multiline
                  onChange={changeHandler}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
                  
              </Grid>
              <Grid item xs={2/3}></Grid>

              <Grid item xs={12}></Grid>
              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
                  <TextField label="Justification of Skilled OT Services:"
                    fullWidth
                    id='justification'
                    multiline
                    onChange={changeHandler}
                    value={allValues.justification || ''}
                    inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />


              </Grid>
              <Grid item xs={2/3}></Grid>
              <Grid item xs={1}>
              <InputLabel variant="standard">
                    Billing Code:
               </InputLabel>
                  
                  <NativeSelect
                    onChange={changeHandler}
                    value={allValues.billing || ''}
                    inputProps={{
                      name:  'Billing Code',
                      id: 'billing',
                      
                     
                    }}
                >
                   
                     
                    
                    <option value={'97165'}>97165</option>
                    <option value={'97166'}>97166</option>
                    <option value={'97167'}>97167</option>
                    <option value={'97168'}>97168</option>
                    <option value={'97110'}>97110</option>
                    <option value={'97112'}>97112</option>
                    <option value={'97129'}>97129</option>
                    <option value={'97150'}>97150</option>
                    <option value={'97530'}>97530</option>
                    <option value={'97533'}>97533</option>
                    <option value={'97535'}>97535</option>
                    <option value={'97537'}>97537</option>
                    <option value={'97542'}>97542</option>
                  </NativeSelect>
                
              </Grid>
              <Grid item xs={.5}></Grid>
              
              
              <Grid item xs={2}>
                <TextField label='Other Billing Code:'
                fullWidth
                id='billing'
                value={allValues.billing || ''}
                type='number'
                onChange={changeHandler}>
                </TextField>
              </Grid>
              <Grid item xs={2}></Grid>

              

                  
             
              <Grid item xs={5/12}></Grid>
              <Grid item xs={2}>
                <TextField label="Estimated Length:"
                  fullWidth
                  id='est_len'
                  value={allValues.est_len || ''}
                  onChange={changeHandler}
                  ></TextField>
              </Grid>
           
              <Grid item xs={5/12}></Grid>
              <Grid item xs={2}>
                <TextField label="Total Units:"
                  fullWidth
                  id='units'
                  value={allValues.units || ''}
                  onChange={changeHandler}
                  ></TextField>
              </Grid>

              <Grid item xs={5/12}></Grid>
              <Grid item xs={4}>
                <TextField label="Therapist Signature:"
                  fullWidth
                  id='signature'
                  value={allValues.signature || ''}
                  onChange={changeHandler}
                  ></TextField>
              </Grid>
              <Grid item xs={5/12}></Grid>
              <Grid item xs={2}>
                <TextField label="Date:"
                  fullWidth
                  id='date_of_sig'
                  type='date'
                  value={allValues.date_of_sig || ''}
                  InputLabelProps={{ shrink: true }}
                  onChange={changeHandler}
                  ></TextField>

                </Grid>

              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              
              <Grid item xs={5.5}></Grid>
              <Grid item xs={1}>
                 <Button
                  
                    sx={{
                      bgcolor:"#B3F2FF",
                      ':hover':{
                        bgcolor: "#B3F2FF"
                      }
                    }}
                    fullWidth
                    size='medium'
                    onClick={submitInitEval}>Submit</Button>

             </Grid>
             
                 

          </Grid>
          
          
          

          
      	</TabContent>
      </div>
      </Paper>
        
      </Container>
      

      </Box>
      

      

    </div>
  );

}
  
  
  

    
    
    
   


  

  


export default InitialEvaluationForm