// import React from 'react';
// import { withStyles, fade } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { PropTypes } from 'prop-types';
// import SearchIcon from '@material-ui/icons/Search';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import {
//     InputBase, DialogContent, Dialog, DialogActions, DialogContentText, TextField, InputAdornment, Button, CircularProgress,
// } from '@material-ui/core';
// import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
// import { callApi } from '../../lib/utils/api'.;
// import { COUNTRIES } from '../../lib/utils/constants';

// const useStyles = theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     title: {
//         marginRight: theme.spacing(2),
//     },
//     search: {
//         backgroundColor: fade(theme.palette.common.white, 0.15),
//         '&:hover': {
//             backgroundColor: fade(theme.palette.common.white, 0.25),
//         },
//         width: '50%',
//         marginLeft: theme.spacing(20),
//     },
//     searchIcon: {
//         width: theme.spacing(10),
//         height: '100%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: theme.spacing(-10),
//         marginLeft: theme.spacing(2),
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     inputInput: {
//         padding: theme.spacing(1, 3, 2, 15),
//         width: '100%',
//     },
//     select: {
//         marginLeft: theme.spacing(100),
//         width: '10%',
//     },
//     button: {
//         marginBottom: theme.spacing(10),
//         marginLeft: theme.spacing(10),
//     },
// });

// class NavBar extends React.Component {
//     state = {
//         countryData: [],
//         open: false,
//         orderBy: 'name',
//         limit: 100,
//         sort: 'asc',
//         page: 1,
//         name: 'Select...',
//         loading: false,
//     }

//     handleDialogOpen = async () => {
//         const {
//             limit,
//             sort, page, orderBy,
//         } = this.state;
//         this.setState({
//             open: true,
//             orderBy,
//             limit,
//             sort,
//             page,
//             loading: true,
//         });
//         const country = COUNTRIES;
//         try {
//             const res = await callApi({
//                 method: 'get',
//                 uri: `${country}`,
//                 params: {
//                     orderBy,
//                     limit,
//                     sort,
//                     page,
//                 },
//             });
//             this.setState({
//                 countryData: res.data.results,
//                 loading: false,
//             });
//         } catch (err) {
//             this.setState({
//                 loading: false,
//             });
//         }
//     }

//     handleChange = value => () => {
//         This.

//             handleChange = value => async (event, newPage) => {
//                 const cities = CITIES;
//                 const {
//                     limit, orderBy, sort, name,
//                 } = this.state;
//                 console.log("name", name);
//                 this.setState({
//                     page: newPage,
//                     orderBy,
//                     limit,
//                     loading: true,
//                     name: value,
//                     sort,
//                     open: false,
//                 });
//                 try {
//                     const res = await callApi({
//                         method: 'get',
//                         uri: `${cities}`,
//                         params: {
//                             limit: newPage * 100,
//                             name,
//                             orderBy,
//                             sort,
//                         },
//                     });
//                     console.log('data', res);
//                     // console.log('datastate', this.state.data);
//                     this.setState({
//                         // data: res.data.data.records,
//                         // loading: false,
//                     });
//                 } catch (err) {
//                     this.setState({
//                         loading: false,
//                     });
//                 }
//             }

//         handleClose = () => {
//             this.setState({
//                 open: false,
//             });
//         }
//     }

//     render() {
//         const { classes } = this.props;
//         const {
//             open, countryData, name, loading,
//         } = this.state;
//         const countryList = Array.from(countryData);
//         localStorage.setItem('country', name);
//         return (

//             < CssBaseline />
//             <div className={classes.root}>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <Typography variant="h6" className={classes.title}>
//                             WEATHER API
// </Typography>
//                         <div className={classes.search}>
//                             <div className={classes.searchIcon}>
//                                 <SearchIcon />
//                             </div>
//                             <InputBase
//                                 placeholder="Searching by Location...."
//                                 classes={{
//                                     root: classes.inputRoot,
//                                     input: classes.inputInput,
//                                 }}
//                                 inputProps={{ 'aria-label': 'Search' }}


//                                 className={classes.select}
//                                 disableUnderline
//                                 value={name}
//                                 onClick={this.handleDialogOpen}
//                                 InputProps={{
//                                     endAdornment: (
//                                         <InputAdornment position="end">
//                                             <KeyboardArrowDown />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />
//                             <Dialog
//                                 open={open}
//                                 onClose={this.handleClose}
//                             >
//                                 <DialogContent>
//                                     <DialogActions>
//                                         {loading ? <CircularProgress /> : ''}
//                                         <DialogContentText>
//                                             {countryList.map(items => (
//                                                 <Button variant="outlined" key={items.code} value={items.name} className={classes.button} onClick={this.handleChange(items.name)}>
//                                                     {items.name}
//                                                 </Button>
//                                             ))}
//                                         </DialogContentText>
//                                     </DialogActions>
//                                 </DialogContent>
//                             </Dialog>
// </Toolbar>
// </AppBar>
// </div>
// </React.Fragment>
//             );
//     }
// }
// NavBar.propTypes = {
//     classes: PropTypes.shape({
//         types: PropTypes.string,
//     }).isRequired,
// };
// export default withStyles(
// export default withStyles(useStyles)(NavBar);

