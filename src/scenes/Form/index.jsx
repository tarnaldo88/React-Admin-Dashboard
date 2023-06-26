import { Box,Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import useMediaQuery from "@mui/material";
import Header from "../../components/Header";

const Form = () =>{
    const isNonMobile = useMediaQuery("(min-widthL:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return(
        <Box m="20px">
            <Header title={"Create User"} subtitle={"Create a New User Profile"} />

            <Formik 
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
            >
                
            </Formik>

        </Box>
    );
}

export default Form;