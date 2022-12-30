import { Button, Container } from '@mui/material';
import React from 'react';

function HomePage() {
    return (
        <Container>
            <Button 
                variant="contained" 
                onClick={() => console.log("Clicked evaluation button")}
                size="medium"
            >
                Start a new Evaluation
            </Button>
        </Container>
  );
    
}

export default HomePage;