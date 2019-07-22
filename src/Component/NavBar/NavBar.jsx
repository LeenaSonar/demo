import React from "react";
import { fade, withStyles, useTheme } from "@material-ui/core/styles";
//import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/im[icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Drawer from "@material-ui/core/Drawer";
import { PropTypes } from 'prop-types';
import SlideBar from '../SlideBar/SlideBar';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AppBar from '@material-ui/core/AppBar';

import clsx from "clsx";

import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import CountryTable from '../Table/Table';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MiniDrawer from "../SlideBar/SlideBar"
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
// import { callApi } from '../../Component/lib/utils/api';
import { COUNTRY } from '../lib/utils/constants';
import { CITIES } from '../lib/utils/constants';

// /from '@material-ui/core';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import {callApi} from '../../Component/lib/utils/api'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';



const useStyles = theme => ({
    grow: {
        flexGrow: 1
    },


    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"

        }
    },
    search: {

        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',

        }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 3, 2, 15),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200

        }
    },

    hide: {
        display: "none"
    },

});

class NavBar extends React.Component {
    state = {
        open: false,
        openDrawer: false
    }
    handleDrawerOpen = () => {
        this.setState({
            open: true,
            openDrawer: true,

        })
    }

    handleClose = () => {
        this.setState({
            open: false,
        })
    };






    render() {
        const { classes, handlePageOpen, open, openDrawer, handleChange, countryData, name, loading } = this.props;
        const countryList = Array.from(countryData);
        localStorage.setItem('country', name);
        console.log("open", open)

        return (
            <div className={classes.root} >
                <AppBar
                    position="static"
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: openDrawer,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Weather-Api Portal
                       </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                inputProps={{ "aria-label": "Search" }}
                            />

                        </div>
                        <Button
                            className={clsx(classes.margin, classes.textField)}
                            value={name}
                            onClick={handlePageOpen}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <KeyboardArrowDown />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            Upload
                            <CloudUploadIcon className={classes.rightIcon} />
                        </Button>
                        <Dialog
                            open={open}
                        >
                            <DialogContent>
                                <DialogActions>
                                    {loading ? <CircularProgress /> : ''}
                                    <DialogContentText>
                                        {countryList.map(items => (
                                            <li>
                                                <Button variant="outlined" key={items.code} value={items.name} onClick={handleChange(items.name, items.code)}>
                                                    {items.name}
                                                </Button>
                                            </li>
                                        ))}
                                    </DialogContentText>
                                </DialogActions>
                            </DialogContent>
                        </Dialog>
                        {/* <TextField
                            className={clsx(classes.margin, classes.textField)}
                            value={name}
                            onClick={handlePageOpen}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <KeyboardArrowDown />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Dialog
                            open={open}
                        >
                            <DialogContent>
                                <DialogActions>
                                    {loading ? <CircularProgress /> : ''}
                                    <DialogContentText>
                                        {countryList.map(items => (
                                            <li>
                                                <Button variant="outlined" key={items.code} value={items.name} onClick={handleChange(items.name, items.code)}>
                                                    {items.name}
                                                </Button>
                                            </li>
                                        ))}
                                    </DialogContentText>
                                </DialogActions>
                            </DialogContent>
                        </Dialog> */}

                    </Toolbar>
                </AppBar>




            </div>

        );


    }
}



NavBar.propTypes = {
    classes: PropTypes.shape({
        types: PropTypes.string,
    }).isRequired,
};

export default withStyles(useStyles)(NavBar);


   

