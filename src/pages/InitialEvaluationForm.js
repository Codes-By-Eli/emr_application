
import  'react-router-dom';
import Grid from '@mui/material/Grid';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import logo from '../iona.png';
import Divider from '@mui/material/Divider';
import { Box, Item, Button, Container, Paper, TextField, Typography, TableHead, TableContainer } from '@mui/material';
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
import './TableStyling.css';

const TabContainer = styled.div`
  display: list;
  align-items: center;
  padding: 30px;
  spacing: 10px;
  
`;

const TabButton = styled.button`
  border: none;
  background-color: ${(props) => (props.active ? '#eee' : '#fff')};
  padding: 20px;
  cursor: pointer;
`;

const TabContent = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
`;













function InitialEvaluationForm() {
  const { collapseSidebar } = useProSidebar();
  const [activeTab, setActiveTab] = useState(0);


 
 
 const [allValues, setAllValues] = useState({
  /* Client and Medical Tab */
  name: '',
  dob: '',
  date: '',
  med_num: '',
  med_hx: '',
  diagnosis: '',
  prior_lev: '',
  prior_liv: '',
  hearing: '',
  visual_perception: '',
  AO: 'X1',
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
  groom_init: '',
  groom_goal: '',
  bath_init: '',
  bath_goal: '',
  upper_init: '',
  upper_goal: '',
  lower_init: '',
  lower_goal: '',
  toilet_init: '',
  toilet_goal: '',
  toilet_transfer_init: '',
  toilet_transfer_goal: '',
  shower_transfer_init: '',
  shower_transfer_goal: '',
  tub_transfer_init: '',
  tub_transfer_goal: '',

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
  current_transfer: '',
  init_assess: '',
  observations: '',
  equip_needs:'',
  
  /*Discharge Tab */
  dis_rec: '',
  patient_goals: '',
  short_term_goals: '',
  overall_goals: '',
  justification: '',
  units:'',
  signature: '',
  date_of_sig: '',






  });

  const changeHandler = e => { 
    setAllValues (prevValues => {
      return { ...prevValues,[e.target.id]: e.target.value}
    });
    console.log(allValues[e.target.id]);
  }

  return (


    

    <div id="app" style={({ height: "75vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "60vh" }}>
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
    <Grid item xs >
     
    </Grid>
      <MenuItem component={<Link to="/" />}>Home</MenuItem>
          <Divider></Divider>
          <MenuItem component={<Link to="/initial_evaluation" />}>Initial Evaluation</MenuItem>
          <MenuItem component={<Link to="/progress_form" />}>Progress Note</MenuItem>
          <MenuItem component={<Link to="/discharge_form"/>}>Discharge Evaluation</MenuItem>
          <Divider></Divider>
          <MenuItem component={<Link to="/old_form"/>}>View Old Forms</MenuItem>
        </Menu>
      </Sidebar>
      
    <Box sx={{
          width: '200vh',
          height: '100vh',
          background: 'linear-gradient(to right bottom, #d8deee, #324e84)',
          display: "flex",
          flexDirection: "column",
          
          
      }}>

          <Grid container spacing={0}> 
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>  
            <TabContainer align='center'>
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
            <Grid item xs={1}></Grid>
            </Grid>
          </Grid>
        
        
        
        
        
        
        
        <Container sx = {{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
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
              <Grid item xs={.20}></Grid>
              <Grid item xs={4}>
                <TextField label="Client Name" 
                required
                id='name'
                fullWidth
                style={{ padding: 1}}
                onBlur={changeHandler} />
              </Grid>
              <Grid item xs={.20}></Grid>
              <Grid item xs={2}>
                <TextField label = "Date of Birth:"
                id='DOB'
                required
                onBlur={changeHandler} 
                style={{ padding: 1}}/>
              </Grid>
              <Grid item xs={.20}></Grid>
              
              
            <Grid item xs={2}>
              <TextField label="Date of Eval:"
              fullWidth
              required
              id='date'
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
             defaultValue={1}
             onBlur={changeHandler}
            inputProps={{
              name: 'A & O:',
              id: 'AO',
             
              align: "center"
          }}
        >
            <option value={1}>X1</option>
            <option value={2}>X2</option>
            <option value={3}>X3</option>
            <option value={4}>X4</option>
            </NativeSelect>
          </Grid>
          
        	<Grid item xs={4}>
              <TextField label="Memory/Mental/Cognition:" 
                fullWidth
                id='memory'
                required
                onBlur={changeHandler}
                multiline
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
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Heart Rate:"
              id='heart_rate'
              required
              onBlur={changeHandler}
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Oxygen(SPO2):"
              id='oxygen'
              required
              onBlur={changeHandler}
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Respiratory Rate(RR):"
              id='respiratory_rate'
              required
              onBlur={changeHandler}
            
            ></TextField>
           </Grid>
           <Grid item xs={2/6}></Grid>
           <Grid item xs={2}>
            <TextField label="Pain Assessment:"
              id='pain_assessment'
              required
              onBlur={changeHandler}
            
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
                    type: 'number',
                    style: { textAlign: 'center' },
                    },
                   }}
                    id='eat_init'
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
                    onBlur={changeHandler}>
                  </TextField>
                </TableCell>
              </TableRow>



            </TableBody>
          </Table>
      	</TabContent>

      	<TabContent active={activeTab ===2}>
        
          
          
          <Grid container justifyContent='center'>
            <Grid item>

          
              <FormControl>
                <FormLabel id="hand_dom">Hand Dominance</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="hand_dom"
                  id="hand_dom"
                  
                  onBlur={changeHandler}>
          
                  <FormControlLabel value="Right" control={<Radio />} label="R" />
                  <FormControlLabel value="Left" control={<Radio />} label="L" />
              </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          
          <TableContainer sx={{ maxHeight: "80vh"}}>
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
                      name='ADL'
                      multiline
                      onBlur={changeHandler}
                      inputProps={{ style: {height: 100} }}
                      style={{ padding: 1}}>
                    </TextField>

                </Grid>
                <Grid item xs={2/3}></Grid>
                <Grid item xs={5}>
                    <TextField label="Current Transfer / Mobility Status:"
                      fullWidth
                      name='current_transfer'
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
                    name='observations'
                    multiline
                    onBlur={changeHandler}
                    inputProps={{ style: {height: 150} }}
                    style={{ padding: 1 }} />
                </Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={12}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                  <TextField label="Initial Assessment of Problems/Stengths:" 
                    fullWidth
                    name='init_assess'
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
                  name='dis_rec'
                  multiline
                  onBlur={changeHandler}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              
              </Grid>
              <Grid item xs={1/4}></Grid>
              <Grid item xs={11/3}>
                <TextField label="Equipment Needs:" 
                  fullWidth
                  name='equip_needs'
                  multiline
                  onBlur={changeHandler}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              </Grid> 
              <Grid item xs={1/4}></Grid>
              <Grid item xs={11/3}>
                <TextField label="Patient/Family/Caregiver Goals:" 
                  fullWidth
                  name='patient_goals'
                  multiline
                  onBlur={changeHandler}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              </Grid> 
              <Grid item xs={1/4}></Grid>
              <Grid item xs={12}></Grid>

              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
                <TextField label="Short Term Goals / Estimated TimeFrame:"
                  fullWidth
                  name='short_term_goals'
                  multiline
                  onBlur={changeHandler}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
                  
              </Grid>
              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
                <TextField label="Overall Long Term Goal:"
                  fullWidth
                  name='overall_goals'
                  multiline
                  onBlur={changeHandler}
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
                  
              </Grid>
              <Grid item xs={2/3}></Grid>

              <Grid item xs={12}></Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                  <TextField label="Justification of Skilled OT Services:"
                    fullWidth
                    name='justification'
                    multiline
                    onBlur={changeHandler}
                    inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />


              </Grid>
              <Grid item xs={2}></Grid>
              
              <Grid item xs={3/4}></Grid>
              <Grid item xs={2}>
                <TextField label="Total Units:"
                  fullWidth
                  name='units'
                  onBlur={changeHandler}
                  ></TextField>
              </Grid>

              <Grid item xs={3/4}></Grid>
              <Grid item xs={4}>
                <TextField label="Therapist Signature:"
                  fullWidth
                  name='signature'
                  onBlur={changeHandler}
                  ></TextField>
              </Grid>
              <Grid item xs={3/4}></Grid>
              <Grid item xs={2.5}>
                <TextField label="Date:"
                  fullWidth
                  name='date_of_sig'
                  onBlur={changeHandler}
                  ></TextField>

                </Grid>

                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid> 

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