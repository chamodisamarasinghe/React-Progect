import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../../components/common/Button"
import Tabs from "@mui/material/Tabs";
import handleChange from "@mui/material/Tabs";
import LinkTab from "@mui/material/Tabs";
import NavBar from "../../../components/common/NavBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";


class DashBoard extends Component {


    constructor(props) {
        super(props);

    }

    render() {
        const { classes } = this.props;



        return (
            <Fragment>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        aria-label="Tabs where selection follows focus"
                        selectionFollowsFocus
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </Box>




                <Typography variant="h4">
                    Dash Board
                </Typography>

            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(DashBoard)