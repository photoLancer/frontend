import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styles from './LoginPage.module.css';
import Login from './Login.JPG';

function LoginPage() {
  return (
    <div className={styles.LoginPage}>
      <img className={styles.L_img} src={Login} alt="login_camera" />
      <Container component="main">
        <Box sx={{ marginTop: '168px', display: 'flex', flexDirection: 'column', marginLeft: '250px', width: '35%' }}>
          <Typography
            component="h1"
            variant="h5"
            selected
            sx={{
              fontFamily: 'neurimbo Gothic',
              fontWeight: '400',
              fontSize: '50px',
              lineHeight: '82.5px',
            }}
          >
            Log in
          </Typography>
          <TextField
            label="ID"
            name="ID"
            required
            margin="normal"
            autoFocus
            sx={{
              background: 'rgba(237, 237, 237, 1)',
              width: '554px',
              height: '72px',
              border: 'none',
              borderRadius: '16px',
            }}
          ></TextField>
          <TextField
            label="Password"
            name="pwd"
            sx={{
              mt: 2,
              background: 'rgba(237, 237, 237, 1)',
              width: '554px',
              height: '72px',
              border: 'none',
              borderRadius: '16px',
            }}
            margin="normal"
            required
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              backgroundColor: 'black',
              width: '554px',
              height: '72px',
              borderRadius: '16px',
              fontFamily: 'neurimbo Gothic',
              fontSize: '30px',
              fontWeight: '400',
              lineHeight: '49px',
              letterSpacing: '0em',
              textAlign: 'center',
            }}
          >
            Sign in
          </Button>

          <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item md={5}>
              Find <Link>ID or Password</Link>
            </Grid>
            <Grid item>|</Grid>
            <Grid item>회원가입</Grid>
          </Grid>
          <Grid container>Using Photo Lancer on mobile</Grid>
        </Box>
      </Container>
    </div>
  );
}

export default LoginPage;
