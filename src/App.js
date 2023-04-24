import React, {Component} from 'react';
import "./App.css"
import { ProSidebarProvider } from 'react-pro-sidebar';
import { 
  Route, 
  Routes, 
  Navigate,
 } from 'react-router-dom';
 
 
 
import DischargeEvaluationForm from './pages/DischargeEvaluationForm';
import HomePage from './pages/HomePage';
import InitialEvaluationForm from './pages/InitialEvaluationForm';
import LandingPage from './pages/LandingPage';
import LoginForm from './pages/LoginForm';
import ProgressNoteForm from './pages/ProgressNoteForm';
import SignUpForm from './pages/SignUpForm';
import ViewOldForm from './pages/ViewOldForm';
import DischargeForm from './pages/DischargeEvaluationForm';
class App extends Component {
  render(){
  return (
      <>
        
     
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="initial_evaluation" element={<InitialEvaluationForm />} />
            <Route path="landing_page" element={<LandingPage />} />
            <Route path="login_form" element={<LoginForm />} />
            <Route path="progress_form" element={<ProgressNoteForm />} />
            <Route path="sign_up" element={<SignUpForm />} />
            <Route path="old_form" element={<ViewOldForm />} />
            <Route path="discharge_evaluation" element={<DischargeEvaluationForm />} />
            
            
            
          </Routes>
        
      </>
    );
  }
}

export default App;
