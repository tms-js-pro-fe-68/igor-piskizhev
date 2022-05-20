import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Name is required*'),
  price: Yup.number()
  .min(50, 'Too cheap!')
  .max(500, 'Too Hight!')
  .required('Price is required*'),
  type: Yup.string().min(2).required('Please choose one below!')
})


export default function FormAdd() {
  const initialValues = { name: '', description: '', price: '' , type: ''};
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
      <div/>
      <Paper 
        style={{
          display: 'flex',
          margin: '100px',
          padding : '30px'
        }}>
      <Formik 
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      >
        {({ values, errors, touched  }) => (
        <Box >
          <h1 style={{textAlign : 'center'}}>Fill the form below</h1>
          <Form style={{display:'grid', width:'100%', gap: 4}}>
            <label style={{display:'grid', gridTemplateColumns:'1fr 2fr'}}>
              Name
              <Field name="name"  />
              {errors.name && touched.name ? (
             <div style={{color:'red'}}>{errors.name}</div>
               ) : null}
            </label>
            <label style={{display:'grid', gridTemplateColumns:'1fr 2fr'}}>
              Description(optional)
              <Field name="description" />
            </label>
            <label style={{display:'grid', gridTemplateColumns:'1fr 2fr'}}>
              Price(50-500)
              <Field name="price" />
              {errors.price && touched.price ? (
             <div style={{color:'red'}}>{errors.price}</div>
             ) : null}
            </label>
            <div id="my-radio-group">Please choose type of clothes:</div>

            <div role="group" aria-labelledby="my-radio-group" style={{display: 'grid', gridAutoRows: 'auto'}}>
            <label>
              <Field type="radio" name="type" value="tshirt" />
              tshirt
            </label>
            <label>
              <Field type="radio" name="type" value="jeans" />
              jeans
            </label>
            <label>
              <Field type="radio" name="type" value="sweatshirt" />
              sweatshirt
            </label>
            {errors.type && touched.type ? (
             <div style={{color:'red'}}>{errors.type}</div>
             ) : null}
          </div>
            <button type="submit">Submit</button>
          </Form>
        </Box>
        )}
      </Formik>
      </Paper>
    </Box>
  );
}
