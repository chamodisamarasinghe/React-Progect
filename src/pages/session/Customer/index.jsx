import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../../components/common/Button"
import NavBar from "../../../components/common/NavBar";
import {Link, Route} from "react-router-dom";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
    name: string,
    gender: string,
    nic: string,
    email: string,
    // protein: number,
) {
    return { name, gender, nic, email};
}

const rows = [
    createData('Chamodi Samarasinghe', 'Femail', '123456V', 'chamodisandunika98@gmail.com'),
    createData('Nirasha Mdubhashini', 'Femail', '123456V', 'nirashamadhubhashini@gmail.com'),
    createData('Milasha Thathsarani', 'Femail', '123456V', 'milashathathsarni@gmail.com'),
    createData('Hansi Hashani', 'Femail', '123456V', 'hansihashani123@gmail.com'),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
];


class Customer extends Component {





    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
                { label: 'Male' },
                { label: 'Female' }

            ]
        }

    }

    render() {




        const { classes } = this.props;
        return (
            <Fragment>



                <div>
                    <Link to="/" style={{position:'absolute', left:1100, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Home' wrapped={false} /></Link>
                    <Link to="customer" style={{position:'absolute', left:1200, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top' label='Customer' wrapped={false} /></Link>
                    <Link to="item" style={{position:'absolute', left:1300, textDecoration:"none" ,color:'black' }}><NavBar disabled={false} disableFocusRipple={false} disableRipple={false}  iconPosition='top' label='Item' wrapped={false} /></Link>
                </div>

                <div className={classes.title__container}>
                <Typography variant="h4">
                    Customer Manage
                </Typography>
                </div>

                <Grid container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Name" label="Customer name" variant="outlined" size="small"
                                   style={{width: '90%', top:150}} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Gendr" />}
                            getOptionLabel={
                                (option) => option.label
                            }
                            onChange={(e, value) => {
                                console.log(value.label + " " + value.year);
                            }}
                            size="small"
                            style={{ width: '45%', top:150 , position:"absolute"}}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="NIC" label="NIC" variant="outlined" size="small"
                                   style={{width: '90%', top:180}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="email" label="Email" variant="outlined" size="small"
                                   style={{width: '90%', top:180}}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex', position:"absolute", top:270, left:1000, width:300,color:"success"}} justifyContent="flex-end" >
                        <GDSEButton size="large" variant="contained" label="save"/>

                        <Button variant="contained" color="success" style={{left:50}}>
                            Update
                        </Button>
                        <Button variant="contained" color="error" style={{left:100}}>
                            Cancel
                        </Button>



                    </Grid>
                </Grid>




                <TableContainer component={Paper} style={{position:'absolute', top:380}} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Customer Name</TableCell>
                                <TableCell align="center">Gender</TableCell>
                                <TableCell align="center">NIC</TableCell>
                                <TableCell align="center">Email</TableCell>
                                {/*<TableCell align="right">Email</TableCell>*/}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.gender}</TableCell>
                                    <TableCell align="center">{row.nic}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    {/*<TableCell align="right">{row.email}</TableCell>*/}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>





            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(Customer)