import React, {useEffect, useState} from 'react';
import { Box } from '@mui/system';
import {Sidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import logo from '../iona.png';
import { Grid, Paper, Typography, Stack, Divider, InputAdornment,TextField } from '@mui/material';

function LandingPage() {
  
  const { collapseSidebar } = useProSidebar();

  const [search,setSearch] = useState('');
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');

  function handleChange(event) 
  {
      console.log(event.target.value);
      setSearch(event.target.value);
  }

  

  async function getProfile()
  {
    var requestOptions = {
      method: "GET",
      headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}
    };

    const response = await fetch("http://127.0.0.1:5000/profile", requestOptions);
    const data = await response.json();
    setName(`${data.first} ${data.last}`);
    setEmail(data.email);
  }

  useEffect(() => {
    getProfile();
   
  },[])
  
  
  return (

    <>
    <Box sx={{
      width: '100%',
      height: '100vh',
      background: 'linear-gradient(to right bottom, #d8deee, #324e84)',
      justifyContent: "flex-start",
      display: "flex",
      alignItems: "center"
    }}>
      <Sidebar style={{height: "95vh"}}>
        <Menu>
          <MenuItem
                icon={<MenuOutlinedIcon />}
                onClick={() => {
                  collapseSidebar();
                }}
              />
          <MenuItem>   

            <Stack direction='row' alignItems='center' >
              <Box
                  component="img"
                  sx={{
                      minHeight: "30%",
                      maxHeight: "30%",
                      minWidth: "30%",
                      maxWidth: "30%",
                      display:"inline"
                  }}
                  alt="Iona University Logo"
                  src={logo}
              />
              <Typography>Iona University</Typography>
            </Stack>  
            
          </MenuItem>
          <MenuItem>
                <Paper elevation={10}
                sx={{
                  bgcolor: "#fbe19e"
                }}>
                  <Typography align='center'>
                    {name}
                  </Typography>
                  <Typography align='center'>
                    {email}
                  </Typography>
                  
                </Paper>
          </MenuItem>
          <MenuItem>
            <Stack direction='row' alignItems='center' spacing={1}>
              <HomeOutlinedIcon />
              <Link to="/" underline="none">
                Home
              </Link>
            </Stack>
          </MenuItem>
          <MenuItem>
            <Stack direction='row' alignItems='center' spacing={1}>
              <Link
              href='https://www.google.com'>
              </Link>
              <SearchIcon />
              
              <TextField 
                id="search_field" 
                label="Search" 
                variant="standard"
                onChange={handleChange}
                //style={{
                //    minHeight: "80%",
                //    maxHeight: "80%",
                //    justifyContent: "center"
                //}}
                
                />
            </Stack>
          </MenuItem>

          <Divider />
          <SubMenu label="Evaluations">
            <MenuItem component={<Link to="/initial_evaluation" />}> Initial Evaluation</MenuItem>
            <MenuItem component={<Link to="/progress_note" />}> Progress Note</MenuItem>
            <MenuItem component={<Link to="/discharge_evaluation" />}> Discharge Evaluation</MenuItem>
          </SubMenu>
          <SubMenu label="View Old Forms">
            <MenuItem component={<Link to="/old_form" />}> View Old Forms</MenuItem>
          </SubMenu>

          <Divider />
          
        </Menu>
      </Sidebar>

      
    </Box>
    </>
  )
}

export default LandingPage