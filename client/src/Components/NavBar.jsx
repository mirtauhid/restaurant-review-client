// IMPORTING APIS
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
// IMPORTING ICONS
import MenuIcon from '@material-ui/icons/Menu';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Utils/MainContexts';
// REACT APP IMPORTS

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={'down'} in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = (props) => {
  const [data, setData] = useContext(GlobalContext);
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    window.sessionStorage.clear();
    setData({});
  };

  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            {isMobile ? (
              <>
                <IconButton
                  color='textPrimary'
                  className={classes.menuButton}
                  edge='start'
                  aria-label='menu'
                  onClick={handleMenu}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  KeepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to='/'>
                    <Typography variant='h6'> Home</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to='/College'>
                    <Typography variant='h6'> Restaurants </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to='/About'>
                    <Typography variant='h6'> SignUp</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to='/Personal'>
                    <Typography variant='h6'> SignIn </Typography>
                  </MenuItem>
                  <MenuItem>
                    <AccountCircle />
                    <Typography
                      style={{ color: 'black', marginLeft: '5px' }}
                      variant='h6'>
                      {' '}
                      {data.name}{' '}
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <div>
                  <Button
                    variant='text'
                    component={Link}
                    to='/'
                    color='default'>
                    Home
                  </Button>
                  <Button
                    variant='text'
                    component={Link}
                    to='/restaurants'
                    color='default'>
                    Restaurants
                  </Button>
                  {data.name ? (
                    ''
                  ) : (
                    <Button
                      variant='text'
                      component={Link}
                      to='/signup'
                      color='default'>
                      SignUp
                    </Button>
                  )}
                  {data.name ? (
                    ''
                  ) : (
                    <Button
                      variant='text'
                      component={Link}
                      to='/signin'
                      color='default'>
                      SignIn
                    </Button>
                  )}
                  {data.name ? (
                    <Button
                      variant='text'
                      component={Link}
                      to='/owner'
                      color='default'>
                      Dashboard
                    </Button>
                  ) : (
                    ''
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Typography style={{ color: 'white' }} variant='h6'>
                    {' '}
                    {data.name}{' '}
                  </Typography>
                  <IconButton
                    size='medium'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleMenu}
                    color='inherit'>
                    <AccountCircle />
                  </IconButton>
                  <Button onClick={(e) => handleLogOut(e)} variant='outlined'>
                    {data.name ? 'Sign Out' : ''}
                  </Button>
                </div>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default NavBar;
