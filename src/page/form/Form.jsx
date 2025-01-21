import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header"


const regEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const [open, setOpen] = useState(false);
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    
    setOpen(false);
  };
  
  const handleClick = () => {
    setOpen(true);
  };
  
  const onSubmit = (data) => {
    console.log("Form submitted:", data); 
    handleClick();
  };

  return (
    <Box
    
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >

<Header title="CREATE USER" subTitle="Create a New User Profile" />

      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "This field is required & min 3 character" : null}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          {...register("lastName", { required: true, minLength: 3 })}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "This field is required & min 3 character" : null}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        {...register("email", { required: true, pattern: regEmail })}
        error={Boolean(errors.email)}
        helperText={errors.email ? "Please enter a valid email address" : null}
        label="Email"
        variant="filled"
      />
      <TextField
        {...register("contactNumber", { required: true, pattern: phoneRegExp })}
        error={Boolean(errors.contactNumber)}
        helperText={errors.contactNumber ? "Please enter a valid phone address" : null}
        label="Contact Number"
        variant="filled"
      />
      <TextField
        {...register("address1", { required: true })}
        error={Boolean(errors.address1)}
        helperText={errors.address1 ? "This field is required" : null}
        label="Address 1"
        variant="filled"
      />
      <TextField
        {...register("address2")}
        label="Address 2"
        variant="filled"
      />

      <TextField
        {...register("role", { required: true })}
        error={Boolean(errors.role)}
        helperText={errors.role ? "This field is required" : null}
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Account created successfully
            </Alert>
          </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
