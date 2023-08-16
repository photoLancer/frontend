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
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const userState = useSelector((state) => state.user);
  const JoinHandler = () => {
    navigate('../Membership');
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
  };
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
        // console.log(response.data.jwt);
        // console.log(userState);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            className
            sx={{
              marginTop: '100px',
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '150px',
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
            <input
              className={styles.input_user}
              label='id'
              name='id'
              margin='normal'
              autoFocus
              placeholder='   ID'
              {...register('id', { required: true })}
              value={idValue}
              onChange={handleIdChange}
            ></input>
            <input
              className={styles.input_user}
              label='Password'
              name='pwd'
              {...register('pwd', { required: true })}
              margin='normal'
              placeholder='   Password'
              value={pwValue}
              onChange={handlePwChange}
            ></input>
            {(errors.id || errors.pwd) &&
              (errors.id.type === 'required' ||
                errors.pwd.type === 'required') && (
                <span className={styles.errors1}>
                  아이디 또는 비밀번호
                  <span className={styles.errors2}>를 입력해주세요</span>
                </span>
              )}

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
              sx={{
                mt: 2,
                width: '554px',
              }}
            >
              <Grid item>아이디 찾기</Grid>
              <Grid item>|</Grid>
              <Grid item>비밀번호 찾기</Grid>
              <Grid item>|</Grid>
              <Grid item>
                <Link
                  to='../Membership'
                  onClick={JoinHandler}
                  className={styles.link_join}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  회원가입
                </Link>
              </Grid>
            </Grid>
            <p className={styles.mobile_message}>
              Using Photo Lancer on mobile
            </p>
          </Box>
        </form>
      </Container>
    </div>
  );
}

export default LoginPage;
