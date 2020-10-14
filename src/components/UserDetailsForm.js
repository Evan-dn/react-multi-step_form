import React, {Component} from 'react';
import AppBar from './AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';

// const classes = {
//     paper: {
//       marginTop: '8rem',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: '0 auto',
//       backgroundColor: 'red',
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: '1rem',
//     },
//     submit: {
//       margin: '1rem',
//     },
//   };
  

export class UserDetailsForm extends Component {
    constructor(props){
        super(props);
    }
    
    continue = (e) => {
        console.log('laaaaaaaaaa');
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        
        const {values, handleChange} = this.props;

        return (
        <div style={{width: '100%', height: '100vh'}}>
            <AppBar title={"Enter User Details"}></AppBar>
            <Container  maxWidth="xs" height='100%' style={{marginTop:'15%'}} >
                <CssBaseline />
                <div >
                    <Avatar style={{backgroundColor: 'red', margin: '0 auto', marginBottom: '1em'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form  onSubmit={this.continue}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required={true}
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="First Name"
                            // autoComplete="email"
                            autoFocus
                            defaultValue={values.firstName}
                            onChange={handleChange('firstName')}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required={true}
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="Last Name"
                            // autoComplete="email"
                            // autoFocus
                            defaultValue={values.lastName}
                            onChange={handleChange('lastName')}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required={true}
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            // autoFocus
                            defaultValue={values.email}
                            onChange={handleChange('email')}


                        />
                        {/* <TextField
                            variant="outlined"
                            margin="normal"
                            required={true}
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        /> */}
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            // className={classes.submit}
                            // onSubmit={this.continue}
                        >
                            Next
                        </Button>
                        {/* <Grid container>
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                            </Grid>
                        </Grid> */}
                    </form>
                </div>
            </Container>
        </div>
        )
    }
}

export default UserDetailsForm

