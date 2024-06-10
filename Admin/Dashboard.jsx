import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Typography, Divider, List, ListItem, ListItemText, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  headerArea: {
    width: '96%',
    height: 70,
    backgroundColor: '#1d68b3cf',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  churchIcon: {
    width: 45,
    borderRadius: '50%',
  },
  logo: {
    color: 'whitesmoke',
    fontSize: 20,
    marginLeft: 20,
  },
  timeDate: {
    color: 'whitesmoke',
    fontSize: 18,
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftSection: {
    width: 200,
    backgroundColor: '#1d68b3cf',
    padding: '8px 20px',
    boxShadow: '0 0 10px rgba(82, 79, 79, 0.1)',
    marginTop: 2,
  },
  link: {
    color: 'whitesmoke',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 9,
    marginBottom: 25,
    transition: 'color 0.3s',
  },
  textRow: {
    display: 'flex',
    gap: 20,
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 40,
    marginLeft:60,
    height:110,
    marginTop:20,
    marginRight:35
    
  },
  card: {
    minWidth: 200,
    backgroundColor: '#f0f0f0',
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showOptions, setShowOptions] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const handleLogout = () => {
    
    console.log('Logged out successfully');
    
    setLogout(true);
  };

  return (
    <div>
      <div className={classes.headerArea}>
        <img
          src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
          alt="Profile"
          className={classes.churchIcon}
          onClick={() => setShowOptions(!showOptions)}
        />
        <img style={{height:"60px",width:"150px",marginRight:"30px"}}
          src='https://static.wixstatic.com/media/2fb119_ef536a02561a40d8bbb97db7092fe880~mv2.png/v1/fill/w_276,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO.png'
          alt="Profile"></img>
        <Typography variant="h5" className={classes.logo}>Admin Dashboard</Typography>
        <div style={{ display: 'flex', alignItems: 'center',}}>
          <Typography variant="subtitle1"  className={classes.timeDate}>{currentTime.toLocaleString()}</Typography>
          <Link to="#" className={classes.link} onClick={() => setLogoutDialogOpen(true)} style={{ marginLeft: -50,marginBottom:-40, }}>Logout</Link>
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.leftSection}>
          {showOptions && (
            <>
              <Link to="/Update" className={classes.link}>Update Profile</Link>
              <Link to="/Change" className={classes.link}>Change Password</Link>
              <Divider />
            </>
          )}
          <Link to="/" className={classes.link}>Home</Link>
          <Link to="" className={classes.link}>Branch</Link>
          <span className="fas fa-caret-down"></span>
          <List>
            <ListItem button>
            <Link to='/Branch'className={classes.link} style={{color:'black',marginLeft:'-1px'}}>Create</Link>
            </ListItem>
            <ListItem button>
            <Link to=''className={classes.link} style={{color:'black',marginLeft:'-1px'}}>View</Link>
            </ListItem>
            <ListItem button>
            <Link to=''className={classes.link} style={{color:'black',marginLeft:'-1px'}}>Delete</Link>
            </ListItem>
          </List>
          <Link to="/Book Your Test" className={classes.link}>Department</Link>
          <List>
            <ListItem button>
            <Link to='/Department'className={classes.link} style={{color:'black',marginLeft:'-1px'}}>Create</Link>
            </ListItem>
            <ListItem button> <Link to=''className={classes.link} style={{color:'black',marginLeft:'-1px'}}>View</Link>
            </ListItem>
            <ListItem button>
            <Link to=''className={classes.link} style={{color:'black',marginLeft:'-1px'}}>Delete</Link>
            </ListItem>
          </List>
          <Link to="/Bottle" className={classes.link}>Sub-Department</Link>
          <List>
            <ListItem button>
            <Link to='/SubDepartment'className={classes.link} style={{color:'black',marginLeft:'-1px'}}>Create</Link>
            </ListItem>
            <ListItem button>
            <Link to=''className={classes.link} style={{color:'black',marginLeft:'-1px'}}>View</Link>
            </ListItem>
            <ListItem button>
            <Link to=''className={classes.link} style={{color:'black',marginLeft:'-1px'}}>Delete</Link>
            </ListItem>
          </List>
          <Link to="/Reports" className={classes.link}>Roles</Link>
          <List>
            <ListItem button>
            <Link to='/Roles'className={classes.link} style={{color:'black',marginLeft:'-1px'}}>Create</Link>
            </ListItem>
            <ListItem button>
            <Link to=''className={classes.link} style={{color:'black',marginLeft:'-1px'}}>View</Link>
            </ListItem>
            <ListItem button>
            <Link to=''className={classes.link} style={{color:'black',marginLeft:'-1px'}}>Delete</Link>
            </ListItem>
          </List>
          <Link to="/Employee" className={classes.link}>Employee</Link>
          <Link to="/All" className={classes.link} style={{ color:'black' }}>List All</Link>
          <Link to="/Department" className={classes.link} style={{ color:'black' }}>Department</Link>
          <Link to="/Sub-Department" className={classes.link} style={{ color:'black' }}>Sub-Department</Link>
          <Link to="/Roles" className={classes.link} style={{ color:'black' }}>Roles</Link>
          <Divider />
          <Link to="/Active" className={classes.link}style={{ color:'purple' }}>Active</Link>
          <Link to="/Inactive" className={classes.link}style={{ color:'purple' }}>Inactive</Link>
          <Divider />
          <Link to="/Onboarding" className={classes.link}>Onboarding</Link>
          <Link to="/IncomingRequestOnboarding" className={classes.link} style={{ color:'black' }}>Incoming Request</Link>
          <Divider />
          <Link to="/Off-boarding" className={classes.link}>Off-boarding</Link>
          <Link to="/IncomingRequestOffboarding" className={classes.link} style={{ color:'black' }}>Incoming Request</Link>
        </div>
        <div className={classes.cardContainer}>
          <Card className={classes.card} style={{backgroundColor:'#8deaffa8'}}>
            <CardContent>
              <Typography variant="h6">Branch</Typography>
              <Typography variant="subtitle1">Total: 12</Typography>
            </CardContent>
          </Card>
          <Card className={classes.card} style={{backgroundColor:'#8deaffa8'}}>
            <CardContent>
              <Typography variant="h6">Department</Typography>
              <Typography variant="subtitle1">Total: 24</Typography>
            </CardContent>
          </Card>
          <Card className={classes.card} style={{backgroundColor:'#8deaffa8'}}>
            <CardContent>
              <Typography variant="h6">Sub-Department</Typography>
              <Typography variant="subtitle1">Total: 12</Typography>
            </CardContent>
          </Card>
          <Dialog
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Logout"}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Are you sure you want to log out?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogoutDialogOpen(false)} color="primary">
            No
          </Button>
          <Button onClick={() => { handleLogout(); setLogoutDialogOpen(false); }} color="primary" autoFocus>  
          
            Yes
          </Button>
        </DialogActions>
      </Dialog>
        </div>
        
      </div>
      
    </div>
  );
} 

export default Dashboard;
