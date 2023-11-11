import { React, useState, useEffect, useReducer } from "react";
import { Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import background from "../back6.jpg";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import "./Style/Contact.css";

export const Contact = () => {
  const initialUserData = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const theme = createTheme({
    typography: {},
    palette: {
      primary: {
        main: "#73C2E1;",
      },
    },
  });

  function formReducer(state, action) {
    switch (action.type) {
      case "UPDATE_FIELD":
        return { ...state, [action.payload.field]: action.payload.value };
      case "RESET_FORM":
        return initialUserData;
      default:
    }
  }

  const [state, dispatch] = useReducer(formReducer, initialUserData);
  const [formStatus, setFormStatus] = useState("Send Me");
  const [messageErrors, setMessageErrors] = useState({});

  function validatePhoneNumber(phoneNumber) {
    const phoneNumberRegex =
      /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/;

    return phoneNumberRegex.test(phoneNumber) || phoneNumber === "";
  }

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .test("phone", "Phone number is not valid", validatePhoneNumber),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(state, { abortEarly: false });
      return null;
      // All form data is valid
    } catch (err) {
      // Some form data is invalid
      const errors = {};
      err.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
      return errors;
    }
  };

  useEffect(() => {
    validate().then((errors) => {
      setMessageErrors(errors || {});
    });
  }, [state]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("Submitting...");
    //const errors = await validate();
    if (Object.keys(messageErrors).length === 0) {
      axios
        .post("https://inbal-art-qnrd5fdymq-zf.a.run.app/send-email", state)
        .then(() => {
          toast.success("Email sent!");
          setTimeout(() => {
            setFormStatus("Send Me");
          }, 1000); // Delay of 1 second

      
          dispatch({ type: "RESET_FORM" });
        })
        .catch((error) => {
          setFormStatus("Send Me");
          console.log(error.message);
          toast.error(error.message);
        });
    } else {
      setFormStatus("Send Me");
      const errorsArray = Object.values(messageErrors);
      errorsArray.forEach((err) => {
        toast.error(err);
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        className="container-form"
        direction="column"
      >
        <Grid container width="72%" className="form-contact">
          <Grid
            item
            xs={12}
            md={5.5}
            className="form-left"
            sx={{
              backgroundImage: `url(${background})`,
            }}
          >
            <Grid>
              <Box className="form">
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  spacing={5}
                >
                  <Grid item xs={6} className="title-grid">
                    <Typography className="typo-title" variant="h4" >
                      Contact Information
                    </Typography>
                  </Grid>
                  <Grid item xs={6} >
                    <Typography className="contact-data typo-left">
                      Fill up the form and I will get back to you within 24
                      hours.
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={1}>
                    <Grid container direction="row" className="typo-left">
                      <Grid item className="icon-grid">
                        <CallIcon className="icons" ></CallIcon>
                      </Grid>
                      <Grid>
                        <Typography className="contact-data" noWrap>
                          058 - 5803030
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={1}>
                    <Grid container direction="row" className="typo-left">
                      <Grid item className="icon-grid">
                        <EmailIcon className="icons"></EmailIcon>
                      </Grid>
                      <Grid>
                        <Typography className="contact-data" noWrap>
                          yosef.inbal@gmail.com
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={1}>
                    <Grid container direction="row" className="typo-insta">
                      <Button 
                        className="instagram-button"
                        onClick={() =>
                          window.open(
                            "https://www.instagram.com/inbal_yosef_/",
                            "_blank"
                          )
                        }
                      >
                        <Grid item sx={{ mr: 1.7, mt: 0.5 }} className="insta-grid">
                          <InstagramIcon></InstagramIcon>
                        </Grid>
                        <Grid>
                          <span className="span-insta">inbal_yosef_</span>
                        </Grid>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="right-form">
            <Grid sx={{ padding: 1 }}>
              <Typography className="contact-title" >
                Contact me for more information and orders
              </Typography>
              <Box className="form">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  spacing={4}
                  sx={{ mb: 1.5 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      name=" Name"
                      label="Name"
                      type="name"
                      id="Name"
                      value={state.name}
                      onChange={(e) =>
                        dispatch({
                          type: "UPDATE_FIELD",
                          payload: { field: "name", value: e.target.value },
                        })
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      fullWidth
                      name="Last Name"
                      label="Last Name"
                      type="name"
                      id="lastName"
                      value={state.lastName}
                      onChange={(e) =>
                        dispatch({
                          type: "UPDATE_FIELD",
                          payload: { field: "lastName", value: e.target.value },
                        })
                      }
                    />
                  </Grid>
                </Grid>
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  placeholder="Enter your email adress"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={state.email}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      payload: { field: "email", value: e.target.value },
                    })
                  }
                  error={messageErrors.email && state.email !== ""}
                  helperText={
                    messageErrors.email && state.email !== ""
                      ? "Invalid email"
                      : " "
                  }
                  sx={{ mb: 0 }}
                />

                <TextField
                  margin="normal"
                  fullWidth
                  id="phone"
                  label="Phone"
                  placeholder="Enter your phone number"
                  name="Phone"
                  autoComplete="phone"
                  autoFocus
                  value={state.phone}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      payload: { field: "phone", value: e.target.value },
                    })
                  }
                  error={messageErrors.phone && state.phone !== ""}
                  helperText={
                    messageErrors.phone && state.phone !== ""
                      ? "Invalid phone number"
                      : " "
                  }
                  sx={{ mb: 0 }}
                />

                <TextField
                  margin="normal"
                  fullWidth
                  id="message"
                  className="message"
                  autoFocus
                  placeholder="your message here"
                  multiline
                  rows={4}
                  value={state.message}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      payload: { field: "message", value: e.target.value },
                    })
                  }
                  sx={{ mb: 3 }}
                />

                <Button
                  class="button"
                  onClick={(event) => {
                    onSubmit(event);
                  }}
                >
                  {formStatus}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Toaster position="center" reverseOrder={false} />
    </ThemeProvider>
  );
};

export default Contact;
