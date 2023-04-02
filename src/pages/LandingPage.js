import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import logo from '../iona.png';
import { Grid, Typography, Divider} from '@mui/material';

function LandingPage() {
  
  const { collapseSidebar } = useProSidebar();

  const [name, setName] = useState('');
  const [email,setEmail] = useState('');

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
          <MenuItem component = {<Link to = "/old_form" />}icon={< DescriptionIcon/>}>View Old Forms</MenuItem>
        </Menu>
      </Sidebar>
      
    </div>
    </Box>
    </>

  )
}

export default LandingPage