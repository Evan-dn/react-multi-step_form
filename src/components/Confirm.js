import React, {Component} from 'react';
import AppBar from './AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class Confirm extends Component {
    constructor(props){
        super(props);
    }
    
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = () => {
        // e.preventDefault();
        this.props.prevStep();
    }
    render() {
        
        const {values} = this.props;

        return (
        <div style={{width: '100%', height: '100vh'}}>
            <AppBar title={"Your infos"}></AppBar>
            <Container  maxWidth="xs" height='100%' style={{marginTop:'15%'}} >
                <CssBaseline />
                <div >
                    <Avatar style={{backgroundColor: 'red', margin: '0 auto', marginBottom: '1em'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Your infos
                    </Typography>
                    {/* <form  onSubmit={this.continue}> */}

                    <div style={{marginBottom: '1em', marginTop: '1em'}}>
                        <ListItem button >
                            <ListItemText primary={`First Name : ${values.firstName}`}/>
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary={`Last Name : ${values.lastName}`}/>
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary={`Email : ${values.email}`}/>
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary={`Occupation : ${values.occupation}`}/>
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary={`City : ${values.city}`}/>
                        </ListItem>
                        <ListItem button >
                            <ListItemText primary={`Bio : ${values.bio}`}/>
                        </ListItem>
                    </div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        // className={classes.submit}
                        onClick={this.continue}
                    >
                        CONFIRM and CONTINUE
                    </Button>

                    <Button
                        color="primary"
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


export default Confirm

