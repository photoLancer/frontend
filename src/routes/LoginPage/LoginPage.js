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
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const handleIdChange = (event) => {
    setIdValue(event.target.value);
  };
  const handlePwChange = (e) => {
    setPwValue(e.target.value);
  };

  const onSubmitHandler = async () => {
    const body = {
      user_id: idValue,
      password: pwValue,
    };
    try {
      const response = await axios.post(
        'http://photolancer.shop/api/v1/users/login',
        body
      );
      // console.log(response);
      // console.log(response.data.jwt);
      // console.log(response.data.errorMessage);
      if (response.data.errorMessage === null) {
        //로그인이 성공적으로 된 경우
        dispatch(login(response.data.jwt));
        navigate('/home');
        return;
      } else {
        //회원정보 수정이 필요한 경우  ->redirect 해야됨
        alert('회원정보 수정 필요');
        return;
      }
    } catch (error) {
      console.error('Error:', error.message); // 오류 메시지 출력
    }
    alert('로그인 실패');
  };
  return (
    <div className={styles.LoginPage}>
      <img className={styles.L_img} src={Login} alt='login_camera' />
      <Container component='main'>
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
            component='h1'
            variant='h5'
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
            label='ID'
            name='ID'
            required
            margin='normal'
            autoFocus
            sx={{
              background: 'rgba(237, 237, 237, 1)',
              width: '554px',
              height: '72px',
              border: 'none',
              borderRadius: '16px',
            }}
            value={idValue}
            onChange={handleIdChange}
          ></TextField>
          <TextField
            label='Password'
            name='pwd'
            sx={{
              mt: 2,
              background: 'rgba(237, 237, 237, 1)',
              width: '554px',
              height: '72px',
              border: 'none',
              borderRadius: '16px',
            }}
            margin='normal'
            required
            value={pwValue}
            onChange={handlePwChange}
          ></TextField>
          <Button
            type='submit'
            variant='contained'
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
            onClick={onSubmitHandler}
          >
            Sign in
          </Button>

          <Grid
            container
            spacing={2}
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item md={5}>
              Find <Link>ID or Password</Link>
            </Grid>
            <Grid item>|</Grid>
            <Grid item>회원가입</Grid>
          </Grid>
          <Grid container>Using Photo Lancer on mobile</Grid>
        </Box>
      </Container>
      <img src='./LogIn_background.JPG'></img>
      <div className={styles.Login_contents}>
        <input name='id'></input>
        <input name='pwd'></input>
        <input type='submit' value='Sign in' name='sign in'></input>
      </div>
    </div>
  );
}

export default LoginPage;
