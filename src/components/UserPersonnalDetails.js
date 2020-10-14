import React, {Component} from 'react';
import AppBar from './AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

  

export class UserPersonnalDetails extends Component {
    constructor(props){
        super(props);
    }
    
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = () => {
        this.props.prevStep();
    }
    render() {
        
        const {values, handleChange} = this.props;

        return (
        <div style={{width: '100%', height: '100vh'}}>
            <AppBar title={"Enter Personnal Details"}></AppBar>
            <Container  maxWidth="xs" height='100%' style={{marginTop:'15%'}} >
                <CssBaseline />
                <div >
                    <Avatar style={{backgroundColor: 'red', margin: '0 auto', marginBottom: '1em'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Personnal Details
                    </Typography>
                    <form  onSubmit={this.continue}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required={true}
                            fullWidth
                            id="occupation"
                            label="occupation"
                            name="occupation"
                            // autoComplete="email"
                            autoFocus
                            defaultValue={values.occupation}
                            onChange={handleChange('occupation')}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required={true}
                            fullWidth
                            id="city"
                            label="city"
                            name="city"
                            // autoComplete="email"
                            // autoFocus
                            defaultValue={values.city}
                            onChange={handleChange('city')}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            // required={true}
                            fullWidth
                            id="bio"
                            label="bio"
                            name="bio"
                            autoComplete="bio"
                            // autoFocus
                            defaultValue={values.bio}
                            onChange={handleChange('bio')}


                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            NEXT
                        </Button>
                    </form>
                    <Button
                        color="primary"
                        // className={classes.submit}
                        onClick={this.back}
                    >
                        BACK
                    </Button>
                </div>
            </Container>
        </div>
        )
    }
}


export default UserPersonnalDetails

