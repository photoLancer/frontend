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
import { useForm } from 'react-hook-form';
import { useRef } from 'react';

function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(watch('id'));
  const onSubmit = (data) => {
    console.log('data', data);
  };
  return (
    <div className={styles.LoginPage}>
      <img className={styles.L_img} src={Login} alt="login_camera" />
      <Container component="main">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              marginTop: '168px',
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '250px',
              width: '35%',
            }}
          >
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
            <input
              className={styles.input_id}
              label="ID"
              name="ID"
              margin="normal"
              autoFocus
              placeholder="     ID"
              {...register('id', { required: true })}
            ></input>

            <input
              className={styles.input_id}
              label="Password"
              name="pwd"
              placeholder="     Password"
              margin="normal"
            ></input>
            {errors.id && errors.id.type === 'required' && (
              <span className={styles.errors1}>
                아이디 또는 비밀번호<span className={styles.errors2}>를 입력해주세요</span>
              </span>
            )}
            {errors.pwd && errors.pwd.type === 'required' && (
              <span className={styles.errors1}>
                아이디 또는 비밀번호<span className={styles.errors2}>를 입력해주세요</span>
              </span>
            )}
            <Button
              className={styles.sign_button}
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                backgroundColor: 'background: rgba(17, 17, 17, 0.5)',
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
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                mt: 2,
                width: '554px',
              }}
            >
              <Grid item>아이디 찾기</Grid>
              <Grid item>|</Grid>
              <Grid item>비밀번호 찾기</Grid>
              <Grid item>|</Grid>
              <Grid item>회원가입</Grid>
            </Grid>
            <p className={styles.mobile_message}>Using Photo Lancer on mobile</p>
          </Box>
        </form>
      </Container>
      <div className={styles.Login_contents}>
        <input name="id"></input>
        <input name="pwd"></input>
        <input type="submit" value="Sign in" name="sign in"></input>
      </div>
    </div>
  );
}

export default LoginPage;
