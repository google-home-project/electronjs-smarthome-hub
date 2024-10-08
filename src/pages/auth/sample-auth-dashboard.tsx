import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import { Content, Header } from '../../components/sample';
import Navigator from '../../components/sample/Navigator';
import { drawerWidth, theme } from '../../configs';
import { app, BrowserWindow } from 'electron';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function AuthPageDashboard() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  app.commandLine.appendSwitch('force-device-scale-factor', '1');

  app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
      width: 1200, // Set initial width to trigger breakpoints correctly
      height: 800,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    mainWindow.loadURL('your-app-url'); // Replace with your actual URL
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header onDrawerToggle={handleDrawerToggle} />
          <Box
            component="main"
            sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Content />
          </Box>
          <Box
            component="footer"
            sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
