import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Paper, TextField,Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

export default function LoginPage () {
const navigate = useNavigate();
const validationSchema1 = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(2, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

const handleSubmit = async (values,{setSubmitting}) => {
    const  {email,password} = values;
    const {data} = await api.post(`/users/signin`, { email, password });
    sessionStorage.token = data.token
    sessionStorage.email = data.email
    api.setup(data.token)
    navigate('/', { replace: true })
    setSubmitting(false)
}


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema1,
    onSubmit: handleSubmit,
  });
  
  useEffect(()=>{
      if (sessionStorage.token) navigate ('/',{ replace: true });
  },[])
  return (
    <Box
    sx={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center'
       }}
      >
    <Paper elevation={3} sx={{padding:'30px'}}>
        <form onSubmit={formik.handleSubmit}  
      style={{
        display: 'flex',
        flexDirection: 'column'
          }}>
            <TextField
            // fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
            // fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit" >
            Submit
            </Button>
        </form>
        </Paper>
      </Box>
    );
}
;







