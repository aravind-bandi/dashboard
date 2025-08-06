// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button, Switch, FormControlLabel, Paper, Divider } from '@mui/material';
// import SettingsIcon from '@mui/icons-material/Settings';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import SecurityIcon from '@mui/icons-material/Security';
// import BackupIcon from '@mui/icons-material/Backup';
// import LanguageIcon from '@mui/icons-material/Language';
// import './Settings.css';

// const SettingsPage = () => {
//   const [farmName, setFarmName] = useState('Green Pastures Dairy');
//   const [farmAddress, setFarmAddress] = useState('123 Farm Road, Dairyville');
//   const [contactNumber, setContactNumber] = useState('+1 555-123-4567');
//   const [emailNotifications, setEmailNotifications] = useState(true);
//   const [smsNotifications, setSmsNotifications] = useState(false);
//   const [language, setLanguage] = useState('en');
//   const [autoBackup, setAutoBackup] = useState(true);
//   const [backupFrequency, setBackupFrequency] = useState('daily');

//   const handleSave = () => {
//     // Save settings logic would go here
//     alert('Settings saved successfully!');
//   };

//   return (
//     <div className="settingss">
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//         <SettingsIcon fontSize="large" /> Dairy Farm Settings
//       </Typography>
      
//       <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
//         <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <SettingsIcon /> General Settings
//         </Typography>
//         <Divider sx={{ mb: 2 }} />
        
//         <Box sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' }, gap: 3 }}>
//           <TextField
//             label="Farm Name"
//             value={farmName}
//             onChange={(e) => setFarmName(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Farm Address"
//             value={farmAddress}
//             onChange={(e) => setFarmAddress(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Contact Number"
//             value={contactNumber}
//             onChange={(e) => setContactNumber(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//         </Box>
//       </Paper>

//       <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
//         <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <NotificationsIcon /> Notification Settings
//         </Typography>
//         <Divider sx={{ mb: 2 }} />
        
//         <FormControlLabel
//           control={
//             <Switch
//               checked={emailNotifications}
//               onChange={(e) => setEmailNotifications(e.target.checked)}
//               color="primary"
//             />
//           }
//           label="Email Notifications"
//         />
        
//         <FormControlLabel
//           control={
//             <Switch
//               checked={smsNotifications}
//               onChange={(e) => setSmsNotifications(e.target.checked)}
//               color="primary"
//             />
//           }
//           label="SMS Notifications"
//         />
//       </Paper>

//       <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
//         <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <SecurityIcon /> Security & Privacy
//         </Typography>
//         <Divider sx={{ mb: 2 }} />
        
//         <Box sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' }, gap: 3 }}>
//           <TextField
//             label="Change Password"
//             type="password"
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Confirm New Password"
//             type="password"
//             fullWidth
//             margin="normal"
//           />
//         </Box>
//       </Paper>

//       <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
//         <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <BackupIcon /> Backup Settings
//         </Typography>
//         <Divider sx={{ mb: 2 }} />
        
//         <FormControlLabel
//           control={
//             <Switch
//               checked={autoBackup}
//               onChange={(e) => setAutoBackup(e.target.checked)}
//               color="primary"
//             />
//           }
//           label="Automatic Backups"
//         />
        
//         <TextField
//           select
//           label="Backup Frequency"
//           value={backupFrequency}
//           onChange={(e) => setBackupFrequency(e.target.value)}
//           fullWidth
//           margin="normal"
//           SelectProps={{
//             native: true,
//           }}
//         >
//           <option value="daily">Daily</option>
//           <option value="weekly">Weekly</option>
//           <option value="monthly">Monthly</option>
//         </TextField>
//       </Paper>

//       <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
//         <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <LanguageIcon /> Language & Region
//         </Typography>
//         <Divider sx={{ mb: 2 }} />
        
//         <TextField
//           select
//           label="Language"
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//           fullWidth
//           margin="normal"
//           SelectProps={{
//             native: true,
//           }}
//         >
//           <option value="en">English</option>
//           <option value="es">Spanish</option>
//           <option value="fr">French</option>
//           <option value="de">German</option>
//         </TextField>
//       </Paper>

//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//         <Button variant="contained" color="primary" onClick={handleSave}>
//           Save Settings
//         </Button>
//       </Box>
//     </Box>
//     </div>
//   );
// };

// export default SettingsPage;