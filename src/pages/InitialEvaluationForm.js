
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


const data = [
  { LROM: '', LMMT: '', label: 'Shoulder Elevation', RROM: '', RMMT: ''},
  { LROM: 'Hello', LMMT: '', label: 'Shoulder Flexion', RROM: '', RMMT: ''},
  { LROM: '', LMMT: '', label: 'Shoulder Extension', RROM: '', RMMT: ''},
  { LROM: '', LMMT: '', label: 'Shoulder Abduction', RROM: '', RMMT: ''},
  { LROM: '', LMMT: '', label: 'Horizontal Abduction', RROM: '', RMMT: ''},
  { LROM: '', LMMT: '', label: 'Horizontal Adduction', RROM: '', RMMT: ''},
  { LROM: '', LMMT: '', label: 'Internal Rotation', RROM: '', RMMT: ''},
  { LROM: '', LMMT: '', label: 'External Rotation', RROM: '', RMMT: ''},
  { LROM: '', LMMT: '', label: 'Elbow Flexion', RROM: '', RMMT: ''},
  { LROM: '', LMMT: '', label: 'Elbow Extension', RROM: '', RMMT: ''},
  { LROM: '', LMMT: '', label: 'Forearm Supination', RROM: '', RMMT: ''},
  { LROM: '', LMMT: '', label: 'Wrist Flexion', RROM: '', RMMT: ''},
  { LROM: '', LMMT: '', label: 'Wrist Extension', RROM: '', RMMT: ''},
  

];


const data1 = [
  {label:'Eating', FIM: '', Goal: ''},
  {label:'Grooming', FIM: '', Goal: ''},
  {label:'Bathing', FIM: '', Goal: ''},
  {label:'Upper Body Dressing', FIM: '', Goal: ''},
  {label:'Lower Body Dressing', FIM: '', Goal: ''},
  {label:'Toileting', FIM: '', Goal: ''},
  {label:'Toilet Transfer', FIM: '', Goal: ''},
  {label:'Shower Transfer', FIM: '', Goal: ''},
  {label:'Tub Transfer', FIM: '', Goal: ''},

]

const data2 = [
  { Left_UE: '', label: 'Grip Stength', Right_UE: ''},
  { Left_UE: '', label: 'Lateral Pinch', Right_UE: ''},
  { Left_UE: '', label: 'Tripod Pinch', Right_UE: ''},
  { Left_UE: '', label: 'Tip Pinch', Right_UE: ''},
  { Left_UE: '', label: 'Light Touch', Right_UE: ''},
  { Left_UE: '', label: 'Sharp / Dull', Right_UE: ''},
  { Left_UE: '', label: 'Temperature', Right_UE: ''},
  { Left_UE: '', label: 'Proprioception', Right_UE: ''},
  { Left_UE: '', label: 'Stereognosis', Right_UE: ''},
  { Left_UE: '', label: '9-Hole Peg Test', Right_UE: ''},
  { Left_UE: '', label: 'Edema', Right_UE: ''},
  { Left_UE: '', label: 'Pain', Right_UE: ''},
  { Left_UE: '', label: 'Wrist Extension', Right_UE: ''},

]










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
  
  /*Observation Tab */
  ADL: '',
  current_transfer: '',
  init_assess: '',
  observations: '',
  equip_needs:'',
  
  /*Discharge Tab */
  patient_goals: '',
  short_term_goals: '',
  overall_goals: '',
  justification: '',
  signature: '',
  date_of_sig: '',






  });

  const changeHandler = e => { 
    setAllValues (prevValues => {
      return { ...prevValues,[e.target.id]: e.target.value}
    })
  }


/*

  const FimTable = () => {
    const [data, setData] = useState([
      {label:'Eating', FIM: '', Goal: ''},
      {label:'Grooming', FIM: '', Goal: ''},
      {label:'Bathing', FIM: '', Goal: ''},
      {label:'Upper Body Dressing', FIM: '', Goal: ''},
      {label:'Lower Body Dressing', FIM: '', Goal: ''},
      {label:'Toileting', FIM: '', Goal: ''},
      {label:'Toilet Transfer', FIM: '', Goal: ''},
      {label:'Shower Transfer', FIM: '', Goal: ''},
      {label:'Tub Transfer', FIM: '', Goal: ''},
    ]);
 
  
    const handleFimChange = (event, index) => {
      const newData = [...data];
      newData[index].FIM = event.target.value
    }
*/
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
    <Grid item xs zeroMinwidth>
      <item>Welcome Student</item>
      <item>Student Email</item>
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
          <Grid items xs={1}></Grid>
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
              <Grid items xs={.20}></Grid>
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
              <Grid items xs={.66}></Grid>
            
            
            
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
              <Grid items xs={.66}></Grid>
            
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
            
            <Grid items xs={.66}></Grid>

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
              justifyContent: "center",
              alignItems: "center"
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
            {data1.map((row) => (
                  <TableRow  key={row.label}>
                    <TableCell align='center'>{row.label}</TableCell>
                    <TableCell align='center'><TextField
                      inputProps={{ style: {textAlign:'center',
                    justifyContent: 'center'}
                      }}></TextField>
                      
                      
                       </TableCell>
                    <TableCell align='center'><TextField
                      inputProps={{ style: {textAlign:'center',
                    justifyContent: 'center'}
                      }}></TextField></TableCell>
                  </TableRow>
                ))}



            </TableBody>
          </Table>
      	</TabContent>

      	<TabContent active={activeTab ===2}>
        
          <FormControl>
            <FormLabel id="hand_dom">Hand Dominance</FormLabel>
            <RadioGroup
              row
              aria-labelledby="hand_dom"
              name="hand_dom"
              alignItems='center'>
      
              <FormControlLabel value="Right" control={<Radio />} label="R" />
              <FormControlLabel value="Left" control={<Radio />} label="L" />
           </RadioGroup>
          </FormControl>
          <TableContainer sx={{ maxHeight: 700}}>
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
                {data.map((row) => (
                  <TableRow  key={row.LROM}>
                    <TableCell><TextField
                      inputProps={{ style: {textAlign:'center',
                    justifyContent: 'center'}
                      }}></TextField></TableCell>
                    <TableCell><TextField
                      inputProps={{ style: {textAlign:'center',
                    justifyContent: 'center'}
                      }}></TextField></TableCell>
                    
                    <TableCell>{row.label}</TableCell>
                    <TableCell><TextField
                      inputProps={{ style: {textAlign:'center',
                    justifyContent: 'center'}
                      }}></TextField></TableCell>
                    
                    <TableCell><TextField
                      inputProps={{ style: {textAlign:'center',
                    justifyContent: 'center'}
                      }}></TextField></TableCell>
                    
                  </TableRow>
                ))}
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
              
               <TableBody>  
                  {data2.map((row) => (
                  <TableRow key={row.Left_UE}>
                    <TableCell align='center'></TableCell>
                    <TableCell><TextField align='center'> value={row.Left_UE}</TextField></TableCell>
                    <TableCell align='center'>{row.label}</TableCell>
                    <TableCell><TextField> value={row.Right_UE}</TextField></TableCell>
                  </TableRow>
                ))}
                </TableBody>T
            
            
              
              
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
                      onChange={changeHandler}
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
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              
              </Grid>
              <Grid item xs={1/4}></Grid>
              <Grid item xs={11/3}>
                <TextField label="Equipment Needs:" 
                  fullWidth
                  name='equip_needs'
                  multiline
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
              </Grid> 
              <Grid item xs={1/4}></Grid>
              <Grid item xs={11/3}>
                <TextField label="Patient/Family/Caregiver Goals:" 
                  fullWidth
                  name='patient_goals'
                  multiline
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
                  inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />
                  
              </Grid>
              <Grid item xs={2/3}></Grid>
              <Grid item xs={5}>
                <TextField label="Overall Long Term Goal:"
                  fullWidth
                  name='overall_goals'
                  multiline
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
                    inputProps={{ style: {height: 100} }}
                  style={{ padding: 1 }} />


              </Grid>
              <Grid item xs={2}></Grid>

              <Grid item xs={2}></Grid>
              <Grid item xs={3}>
                <TextField label="Therapist Signature:"
                  fullWidth
                  name='signature'
                  ></TextField>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={2}>
                <TextField label="Date:"
                  fullWidth
                  name='date_of_sig'
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