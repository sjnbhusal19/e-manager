import { FaRegUser } from "react-icons/fa";
import Button from '@mui/material/Button';
import { RiLockPasswordLine } from "react-icons/ri";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { Link } from "react-router-dom";




// Validation Schema
const loginSchema = Yup.object().shape({  
  username: Yup.string()
  .min(3,"Username must be at least 3 letter")
  .required("Username is required."),
  
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is required."),
});




const Login = () => {


  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit:  (values) => {
      console.log(values)
    },
  });



  return (
    <div className="flex  items-center justify-between w-screen h-screen">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <img
          src="/photo.jpeg"
          alt="img"
          className="h-full w-[80%] rounded-md shadow-lg"
        />
        <Link to='https://www.cresttechhub.com/'>
        <Button 
        variant="contained"
        sx={{
         backgroundColor: '#6b46c1', // Tailwind's bg-purple-600
         '&:hover': {
           backgroundColor: '#553c9a', // Tailwind's bg-purple-800
           fontWeight: '600',
         },
         mt: 2, 
         px: 2, 
       }}
       >
        Enroll Now 
       </Button>
       </Link>
      </div>

      <div className="w-1/2 flex items-center justify-center flex-col">
        <img src="/logo.jpeg" alt="Logo" className="h-10 w-24" />
        <span className="font-semibold text-purple-800">CREST Technologies</span>
        <span className="text-3xl text-purple-800 mt-3">Welcome!</span>
        <span className="text-sm text-purple-800">Please Enter Your Details</span>
        <form
        onSubmit={formik.handleSubmit}
          className="w-full flex flex-col items-center justify-center gap-4 pt-5"
        >

          <div className="flex flex-col w-full   ">
            <div className="flex  gap-2 w-full justify-center items-center ">
            <FaRegUser className="text-lg text-purple-800"/>

            <input
            placeholder="Enter Username"
            type="text"
            name="username"
            className="bg-purple-100 w-4/6 border p-1 rounded-md"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          </div>

{formik.touched.username && formik.errors.username && (
            <div className="p-1 px-2 text-red-500 text-sm mt-1 ml-28">
              {formik.errors.username}
            </div>
          )}

            </div>
         
          <div className="flex flex-col w-full">
        <div className="flex items-center justify-center gap-2 w-full ">
    <RiLockPasswordLine className="text-lg text-purple-800"/>

        <input
            
            type="password"
            placeholder="Enter Password"
            className="flex bg-purple-100 w-4/6 border p-1 rounded-md"
            name="password"
            autoComplete="new-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            />
            </div>

{formik.touched.password && formik.errors.password && (
            <div className="p-1 px-2 text-red-500 text-sm mt-1 pl-28">
              {formik.errors.password}
            </div>
          )}
            
        </div>
         
          

          <Button
          variant="contained"
           type="submit"
           sx={{
            backgroundColor: '#6b46c1', // Tailwind's bg-purple-600
            '&:hover': {
              backgroundColor: '#553c9a', // Tailwind's bg-purple-800
              fontWeight: '600',
            },
            mt: 1, 
            px: 2, 
          }}
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;