import { Box, Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../iona.png';
import students from '../students.jpg';

function HomePage() {

    const [search,setSearch] = useState('');

    function handleChange(event) 
    {
        console.log(event.target.value);
        setSearch(event.target.value);
    }

    return (
    <>
        <Box sx={{
            width: '100%',
            height: '100vh',
            bgcolor: "#33c8f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Container>
                <Paper elevation={15}>
                    <Grid container spacing={2}>
                        <Grid item xs={0.25}>

                        </Grid>
                        <Grid item xs={1} style={{display: "flex", justifyContent: "flex-start"}}>
                            <Box
                                component="img"
                                sx={{
                                    minHeight: "70%",
                                    maxHeight: "70%",
                                    minWidth: "120%",
                                    maxWidth: "120%"
                                }}
                                alt="Iona University Logo"
                                src={logo} 
                            />
                            
                        </Grid>
                        <Grid item xs={2} style={{display: "flex", alignItems:"center"}}>
                            <Typography 
                                style={{
                                    color: "maroon",
                                    fontSize: "20px",
                                    fontWeight: "bold"
                                }}
                            >
                                Iona University
                            </Typography>
                        </Grid>
                        <Grid item xs={4.5}>
                            
                        </Grid>
                        <Grid item xs={2}>
                            <TextField 
                                id="search_field" 
                                label="Search Here..." 
                                variant="standard"
                                onChange={handleChange}
                                style={{
                                    minHeight: "80%",
                                    maxHeight: "80%"
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <a 
                                            href={`https://www.google.com/search?q=${search}`} 
                                            target="_blank"
                                            rel="noreferrer">
                                                <SearchIcon />
                                            </a>
                                        </InputAdornment>
                                    )
                                }}
                            /> 
                        </Grid>
                        <Grid item xs={2}>
                            <Button 
                                variant="contained" 
                                size="medium"
                                style={{
                                    maxWidth: "90%",
                                    minWidth: "90%",
                                    
                                }}
                                component={Link}
                                to="/login_form" 
                                /* This is a temporary change for development purposes, this should be login_form */
                            >
                                <Typography 
                                align='center'
                                style={{
                                    fontSize: "1vw"
                                }}
                                >
                                Start a new Evaluation
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={0.25}>

                        </Grid>  
                        

                        {/* New Row */}
                        <Grid item xs={2}>
                            
                        </Grid>
                        <Grid item xs={8}>
                            <Typography 
                            variant='h4' 
                            align='center' 
                            color="#000034"
                            style={{
                                fontSize: "3.5 em"
                            }}  
                            gutterBottom>
                                Electronic Medical Records Form Evaluations
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            
                        </Grid>

                        {/* New Row */}
                        <Grid item xs={1}>
                            
                        </Grid>
                        <Grid item xs={10}>
                        <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100%"
                        >
                            <Box
                                component="img"
                                sx={{
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                    minWidth: "80%",
                                    maxWidth: "80%",
                                    borderRadius: "16px"
                                }}
                                alt="Iona OT Students"
                                src={students} 
                            />
                        </Box>
                        </Grid>
                        <Grid item xs={1}>
                            
                        </Grid>

                        {/* New Row */}
                        <Grid item xs={2}>
                            
                        </Grid>
                        <Grid item xs={2}>
                            <a 
                            href="https://www.iona.edu/academics/explore-majors-programs/occupational-therapy-ms-degree?utm_source=carnegie-digital&utm_medium=ppc&utm_campaign=occupational-therapy&utm_term=google&utm_content=iona%20occupational%20therapy-p&gclid=CjwKCAiA2L-dBhACEiwAu8Q9YPHG9aSUCULxTOvo3z779uziRWn9DnNr8fRXRCGKieF3RsacnouNLxoCkqQQAvD_BwE"
                            target="_blank"
                            rel="noreferrer"
                            >
                                <Button
                                    variant='contained'
                                >
                                    <Typography 
                                        style={{
                                            fontSize: "1vw"
                                        }}
                                    >                                
                                        More about Iona's Occupational Therapy Program
                                    </Typography>
                                </Button>
                            </a>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography
                                align="center" 
                                style={{
                                    fontSize: "1.3vw"
                                }}
                            >
                                Get real world experience behind an OT desk with this application. Simulate a patient's medical history and progress.
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <a 
                                href="https://www.quatrishealthco.com/what-is-an-emr/"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <Button
                                    variant='outlined'
                                >
                                    <Typography
                                        style={{
                                            fontSize: "1vw"
                                        }}
                                    >
                                        What are Electronic Medical Records (EMR)?
                                    </Typography>  
                                </Button>
                            </a>
                        </Grid>
                        <Grid item xs={2}>
                            
                        </Grid>

                        {/*New Row*/}
                        <Grid item xs={12}>

                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    </>
        
  );
    
}

export default HomePage;