
import  'react-router-dom';
import Grid from '@mui/material/Grid';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import {MenuItem as Option} from "@mui/material";
import logo from '../iona.png';
import Divider from '@mui/material/Divider';
import { Box, Item, Button, Container, Paper, TextField, Typography, TableHead, TableContainer, Select } from '@mui/material';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import styled from 'styled-components';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import { NativeSelect, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './TableStyling.css';

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
font-size: 12px;
`;

const TabContent = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

function DischargeEvaluationForm() {
  const navigate = useNavigate();
  const [username, setName] = useState('');
  const [email,setEmail] = useState('');
  const [record_numbers, setRecordNumbers] = useState([]);

  const { collapseSidebar } = useProSidebar();
  const [activeTab, setActiveTab] = useState(0);

 const [allValues, setAllValues] = useState({
  /* Client and Medical Tab */
  init_med_num: '',
  fim_eval_id: '',
  vital_id: '',
  name: '',
  sex: '',
  dob: '',
  date: '',
  med_num: '',
  med_hx: '',
  diagnosis: '',
  prior_lev: '',
  prior_liv: '',
  hearing: '',
  visual_perception: '',
  AO: '',
  memory: '',
  mmse: '',
  blood_pressure: '',
  heart_rate: '',
  oxygen: '',
  respiratory_rate: '',
  pain_assessment: '',

  /* Fim Score Tab */
  eat_init: '',
  eat_goal: '',
  eat_disc: '',
  groom_init: '',
  groom_goal: '',
  groom_disc: '',
  bath_init: '',
  bath_goal: '',
  bath_disc: '',
  upper_init: '',
  upper_goal: '',
  upper_disc: '',
  lower_init: '',
  lower_goal: '',
  lower_disc: '',
  toilet_init: '',
  toilet_goal: '',
  toilet_disc: '',
  toilet_transfer_init: '',
  toilet_transfer_goal: '',
  toilet_transfer_disc: '',
  shower_transfer_init: '',
  shower_transfer_goal: '',
  shower_transfer_disc: '',
  tub_transfer_init: '',
  tub_transfer_goal: '',
  tub_transfer_disc: '',

  /* Dom Hand / UE Scores */
  hand_dom: '',
  
  lue_shoulder_ev_rom: '',
  lue_shoulder_ev_mmt: '',
  rue_shoulder_ev_rom: '',
  rue_shoulder_ev_mmt: '',

  lue_shoulder_flex_rom: '',
  lue_shoulder_flex_mmt: '',
  rue_shoulder_flex_rom: '',
  rue_shoulder_flex_mmt: '',
  
  lue_shoulder_ext_rom: '',
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

  lue_fore_pro_rom:'',
  lue_fore_pro_mmt:'',
  rue_fore_pro_rom:'',
  rue_fore_pro_mmt:'',

  lue_fore_sup_rom:'',
  lue_fore_sup_mmt:'',
  rue_fore_sup_rom:'',
  rue_fore_sup_mmt:'',

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
  ADL: '',
  discharge_transfer: '',
  disc_assess: '',
  observations: '',
  equip_needs:'',
  
  /*Discharge Tab */
  dis_rec: '',
  patient_goals: '',
  discharge_recommendations_referrals: '',
  client_education: '',
  course_of_rehab:'',
  justification: '',
  billing: '',
  units:'',
  signature: '',
  date_of_sig: '',
  });


  const populateHandler = json => {
    const keys = Object.keys(json);
    for(const key in keys)
    {
      setAllValues (prevValues => {
        return { ...prevValues,[keys[key]]: json[keys[key]]};
      });
    }
  }

  const changeHandler = e => { 
    const key = e.target.id || e.target.name;
    setAllValues (prevValues => {
      return { ...prevValues,[key]: e.target.value}
    });
    
  }
  const [open, setOpen] = useState(false);
  const [success, setSucess] = useState(false);
  const[color, setColor] = useState('');
  const[title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const isNotEmpty = Object.values(allValues).every(value => value !== '');

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
        "record": allValues.init_med_num
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

  async function submitDiscEval(event)
  {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    if(!isNotEmpty)
    {
      setColor("#f55d7a");
      setTitle("Not all of the fields were entered for the Discharge Evaluation!");
      setMessage("Please enter all the fields and click \"Submit\" again.");
      handleOpen();
      return;
    }
    if(!checkValidRecord())
    {
      setTitle("Error with Medical Record ID.");
      setColor("#f55d7a");
      setMessage("That medical record number is currently in use. Please enter a different number for the medical record number.");
      handleOpen();
      return;
    }
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify(allValues)
    };

    const response = await fetch("http://127.0.0.1:5000/submit_discharge", requestOptions);
    const data = await response.json();
    if(!response.ok)
    {
      setMessage(data.msg);
      setColor("#f55d7a");
      setTitle("Error submitting the Discharge Evaluation");
      handleOpen();
      return;
    }
    else
    {
      setSucess(true);
      //navigate("/landing_page");
      return;
    }
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
  },[]);

  useEffect(() => {
    if(!success)
    {
      return;
    }
    setMessage("Evaluation saved to the Downloads folder!");
    setTitle("Successfully submitted the Discharge Evaluation!");
    setColor("#059611");
    //handleOpen();
    navigate("/landing_page")
  },[success]);

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
    const response = await fetch("http://127.0.0.1:5000/check_valid_discharge_number", requestOptions);
    const data = await response.json();
    console.log(data);
    if(data.msg === "Not Valid")
    {
      setTitle("Error with Medical Record ID.");
      setColor("#f55d7a");
      setMessage("That medical record number is currently in use. Please enter a different number for the medical record number.");
      handleOpen();
      return false;
    }

  }
  useEffect(() => {
    console.log(allValues.med_num);
    if(allValues.med_num == '')
    {
      return;
    }
    checkValidRecord();
  },[allValues.med_num])

  useEffect(() => {
    getEvalInformation();
  },[allValues.init_med_num])


  return (
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
        open={open}
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
              Discharge Fim Scores
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
                Rehab, Client Ed., & Discharge Recs/Referrals
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
              <Grid item xs={12}></Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
              <FormControl fullWidth>
                  <InputLabel id="init_med">Initial Evaluation Medical Record #</InputLabel>
                  <Select
                    labelId="init_med"
                    id="init_med_num"
                    inputProps={{
                      name: 'init_med_num',
                      id: 'init_med_num',
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
              <Grid item xs={.20}></Grid>
              <Grid item xs={2}>
                <TextField label="Client Name" 
                required
                id='name'
                fullWidth
                value={allValues.name || ''}
                style={{ padding: 1}}
                onBlur={changeHandler} />
              </Grid>
              <Grid item xs={.20}></Grid>
              <Grid item xs={1.8}>
                <TextField label="Sex" 
                required
                id='sex'
                fullWidth
                value={allValues.sex || ''}
                style={{ padding: 1}}
                onBlur={changeHandler} />
              </Grid>
              <Grid item xs={.20}></Grid>
              <Grid item xs={2}>
                <TextField label = "Date of Birth:"
                id='dob'
                required
                value={allValues.dob || ''}
                onBlur={changeHandler} 
                style={{ padding: 1}}/>
              </Grid>
              <Grid item xs={.20}></Grid>
              
              
            <Grid item xs={2}>
              <TextField label="Date of Eval:"
              fullWidth
              required
              id='date'
              value={allValues.date || ''}
              onBlur={changeHandler}
              style={{ padding: 1 }} />
            </Grid>
        	  
            <Grid item xs={.2}></Grid>
        	  <Grid item xs={3}>
              <TextField label="Med Record #:"
                id='med_num'
                required
                onBlur={changeHandler} 
                fullWidth
                style={{ padding: 1 }} />
            
            </Grid>
            <Grid item xs={.66}></Grid>
        	  <Grid item xs={5}>
              <TextField label="Medical HX:" 
                fullWidth
                required
                multiline
                id='med_hx'
                value={allValues.med_hx || ''}
                onBlur={changeHandler}
                inputProps={{ style: {height: 100}}}
                style={{ padding: 1 }} />
            
            </Grid>
            
            <Grid item xs={.66}></Grid>
        	  <Grid item xs={5}>
              <TextField label="Diagnosis:" 
                fullWidth
                multiline
                required
                id='diagnosis'
                value={allValues.diagnosis || ''}
                onBlur={changeHandler}
                inputProps={{ style: {height: 100} }}
                style={{ padding: 1 }} />
                </Grid>
              <Grid item xs={.66}></Grid>
            <Grid item xs={12}></Grid>

            <Grid item xs={.66}></Grid>
        	  <Grid item xs={5}>
              <TextField label="Prior Level of Function:" 
                fullWidth
                multiline
                required
                id='prior_lev'
                value={allValues.prior_lev || ''}
                onBlur={changeHandler}
                inputProps={{ style: {height: 100}}}
                style={{ padding: 1 }} />
            
            </Grid>
            
            <Grid item xs={.66}></Grid>
        	  <Grid item xs={5}>
              <TextField label="Prior Living Situation:" 
                fullWidth
                id='prior_liv'
                onBlur={changeHandler}
                multiline
                required
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
                onBlur={changeHandler}
                multiline
                required
                value={allValues.hearing || ''}
                inputProps={{ style: {height: 100}}}
                style={{ padding: 1 }} />
            
            </Grid>
            
            <Grid item xs={.66}></Grid>
        	  <Grid item xs={5}>
              <TextField label="Vision/Visual Perception" 
                fullWidth
                id='visual_perception'
                onBlur={changeHandler}
                multiline
                required
                value={allValues.visual_perception || ''}
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
                required
                onBlur={changeHandler}
                multiline
                value={allValues.memory || ''}
                inputProps={{ style: {height: 75} }}
                style={{ padding: 1 }} />
           </Grid>
           <Grid item xs={.5}></Grid>
        	<Grid item xs={4}>
              <TextField label="MMSE Score:" 
                fullWidth
                id='mmse'
                required
                onBlur={changeHandler}
                value={allValues.mmse || ''}
                inputProps={{ style: {height: 75} }}
                style={{ padding: 1 }} />
           </Grid>
           <Grid item xs={12}></Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Blood Pressure:"
              id='blood_pressure'
              required
              onBlur={changeHandler}
              value={allValues.blood_pressure || ''}
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Heart Rate:"
              id='heart_rate'
              required
              onBlur={changeHandler}
              value={allValues.heart_rate || ''}
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Oxygen(SPO2):"
              id='oxygen'
              required
              value={allValues.oxygen || ''}
              onBlur={changeHandler}
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Respiratory Rate(RR):"
              id='respiratory_rate'
              required
              onBlur={changeHandler}
              value={allValues.respiratory_rate || ''}
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Pain Assessment:"
              id='pain_assessment'
              required
              onBlur={changeHandler}
              value={allValues.pain_assessment || ''}
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
                <TableCell align='center'>Fim Discharge</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              <TableRow>
                <TableCell align='center'>Eating</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='eat_init'
                    value={allValues.eat_init || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='eat_goal'
                    value={allValues.eat_goal || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>

                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='eat_disc'
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Grooming</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='groom_init'
                    value={allValues.groom_init || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='groom_goal'
                    value={allValues.groom_goal || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>

                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='groom_disc'
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Bathing</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='bath_init'
                    value={allValues.bath_init || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='bath_goal'
                    value={allValues.bath_goal || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>

                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='bath_disc'
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell align='center'>Upper Body Dressing</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='upper_init'
                    value={allValues.upper_init || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='upper_goal'
                    value={allValues.upper_goal || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>

                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='upper_disc'
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell align='center'>Lower Body Dressing</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='lower_init'
                    value={allValues.lower_init || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='lower_goal'
                    value={allValues.lower_goal || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>

                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='lower_disc'
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Toileting</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='toilet_init'
                    value={allValues.toilet_init || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='toilet_goal'
                    value={allValues.toilet_goal || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>

                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='toilet_disc'
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Toilet Transfer</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='toilet_transfer_init'
                    value={allValues.toilet_transfer_init || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='toilet_transfer_goal'
                    value={allValues.toilet_transfer_goal || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>

                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='toilet_transfer_disc'
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Shower Transfer</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='shower_transfer_init'
                    value={allValues.shower_transfer_init || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='shower_transfer_goal'
                    value={allValues.shower_transfer_goal || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>

                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='shower_transfer_disc'
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Tub Transfer</TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='tub_transfer_init'
                    value={allValues.tub_transfer_init || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
                
                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='tub_transfer_goal'
                    value={allValues.tub_transfer_goal || ''}
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>

                <TableCell align='center'> 
                  <TextField  
                    InputProps={{ inputProps: {
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='tub_transfer_disc'
                    onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                      onBlur={changeHandler}>
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
                <Grid item xs={2/3}></Grid>
                <Grid item xs={5}>
                    <TextField label="Additonal ADL / IADL Observations"
                      fullWidth
                      id='ADL'
                      multiline
                      value={allValues.ADL || ''}
                      onBlur={changeHandler}
                      inputProps={{ style: {height: 100} }}
                      style={{ padding: 1}}>
                    </TextField>

                </Grid>
                <Grid item xs={2/3}></Grid>
                <Grid item xs={5}>
                    <TextField label="Discharge Transfer / Mobility Status:"
                      fullWidth
                      id='discharge_transfer'
                      multiline
                      onBlur={changeHandler}
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
                    onBlur={changeHandler}
                    value={allValues.observations || ''}
                    inputProps={{ style: {height: 150} }}
                    style={{ padding: 1 }} />
                </Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={12}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                  <TextField label="Discharge Assessment of Problems/Stengths:" 
                    fullWidth
                    id='disc_assess'
                    multiline
                    onBlur={changeHandler}
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
                  multiline
                  onBlur={changeHandler}
                  value={allValues.dis_rec || ''}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              
              </Grid>
              <Grid item xs={1/4}></Grid>
              <Grid item xs={11/3}>
                <TextField label="Equipment Needs:" 
                  fullWidth
                  id='equip_needs'
                  multiline
                  onBlur={changeHandler}
                  value={allValues.equip_needs || ''}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              </Grid> 
              <Grid item xs={1/4}></Grid>
              <Grid item xs={11/3}>
                <TextField label="Patient/Family/Caregiver Goals:" 
                  fullWidth
                  id='patient_goals'
                  multiline
                  onBlur={changeHandler}
                  value={allValues.patient_goals || ''}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              </Grid> 
              <Grid item xs={1/4}></Grid>
              <Grid item xs={12}></Grid>

              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
                <TextField label="Discharge Recommendations/Referrals:"
                  fullWidth
                  id='discharge_recommendations_referrals'
                  multiline
                  onBlur={changeHandler}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
                  
              </Grid>
              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
                <TextField label="Client Education:"
                  fullWidth
                  id='client_education'
                  multiline
                  onBlur={changeHandler}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
                  
              </Grid>
              <Grid item xs={2/3}></Grid>

              <Grid item xs={12}></Grid>
              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
              <TextField label="Course of Rehabilitation"
                    fullWidth
                    id='course_of_rehab'
                    multiline
                    onBlur={changeHandler}
                    inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              </Grid>
              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
                  <TextField label="Justification of Skilled OT Services:"
                    fullWidth
                    id='justification'
                    multiline
                    onBlur={changeHandler}
                    value={allValues.justification || ''}
                    inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />


              </Grid>
              <Grid item xs={2/3}></Grid>

              <Grid item xs={2/3}></Grid>
              <Grid item xs={2.5}>
              <InputLabel variant="standard" >
                Billing Code:
             </InputLabel>
                <NativeSelect
                  onChange={changeHandler}
                  inputProps={{
                    name: 'Billing Code',
                    id: 'billing',
                    align: "center"
                }}
              >
                  <option value={"97165"}>97165</option>
                  <option value={"97166"}>97166</option>
                  <option value={"97167"}>97167</option>
                  <option value={"97168"}>97168</option>
                  <option value={"97110"}>97110</option>
                  <option value={"97112"}>97112</option>
                  <option value={"97129"}>97129</option>
                  <option value={"97150"}>97150</option>
                  <option value={"97530"}>97530</option>
                  <option value={"97533"}>97533</option>
                  <option value={"97535"}>97535</option>
                  <option value={"97537"}>97537</option>
                  <option value={"97542"}>97542</option>
              </NativeSelect>
              </Grid>
              <Grid item xs={2.5}>
              <TextField label="Other Billing Code:"
                  fullWidth
                  id='billing'
                  type='number'
                  onChange={changeHandler}
                  ></TextField>
              </Grid>
              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
              <TextField label="Total Units:"
                  fullWidth
                  id='units'
                  type='number'
                  onBlur={changeHandler}
                  ></TextField>
              </Grid>
              <Grid item xs={2/3}></Grid>

              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
              <TextField label="Therapist Signature:"
                  fullWidth
                  id='signature'
                  onBlur={changeHandler}
                  ></TextField>
              </Grid>
              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
              <TextField label="Date:"
                  fullWidth
                  id='date_of_sig'
                  onBlur={changeHandler}
                  ></TextField>
              </Grid>
              <Grid item xs={2/3}></Grid>

              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              
              <Grid item xs={5.5}></Grid>
              <Grid item xs={1}>
                 <Button
                    sx={{
                      bgcolor:"#20df7f",
                      ':hover':{
                        bgcolor: "#20af7f"
                      }
                    }}
                    type='button'
                    fullWidth
                    size='medium'
                    onClick={submitDiscEval}>Submit</Button>

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
export default DischargeEvaluationForm