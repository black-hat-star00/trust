import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import CreateNewPassword from './pages/CreateNewPassword';
import AddNewMedication from './pages/AddNewMedication';
import MedicationReminders from './pages/MedicationReminders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/create-new-password" element={<CreateNewPassword />} />
        <Route path="/add-medication" element={<AddNewMedication />} />
        <Route path="/medication-reminders" element={<MedicationReminders />} />
        <Route path="/" element={<MedicationReminders />} />
      </Routes>
    </Router>
  );
}

export default App;
