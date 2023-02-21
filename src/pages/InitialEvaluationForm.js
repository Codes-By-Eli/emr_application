//import React from 'react'
import  'react-router-dom';
import Grid from '@mui/material/Grid';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ProSidebarProvider } from "react-pro-sidebar";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter, Sidebar, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from '../iona.png';
import Divider from '@mui/material/Divider';
import { Box, Button, Container, InputAdornment, Paper, TextField, Typography } from '@mui/material';










function InitialEvaluationForm() {
  const { collapseSidebar } = useProSidebar();
 
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
          width: '100%',
          height: '100vh',
          bgcolor: "#33c8f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
      }}></Box>

      
    </div>
  );

}
  
  
  
  
    
    
    
   


  

  


export default InitialEvaluationForm