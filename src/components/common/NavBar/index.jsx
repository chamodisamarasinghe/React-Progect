import React,{Component} from "react";
import PropTypes, {string} from "prop-types";
import Tab from "@mui/material/Tab";



class NavBar extends Component{
    static propTypes = {
        children: PropTypes.node,
        classes: PropTypes.object,
        disabled: PropTypes.bool,
        disableFocusRipple: PropTypes.bool,
        disableRipple: PropTypes.bool,
        icon: PropTypes.	element | string,
        iconPosition: PropTypes.element | string,
        label: PropTypes.node,
       // sx: PropTypes.	 func | object | bool | func | object,
        value: PropTypes.any,
        wrapped: PropTypes.	bool
    }

    static defautlProps = {
        disabled: false,
        disableFocusRipple: false,
        disableRipple: false,
        iconPosition: 'top',
        wrapped: false

    }

    render() {
        const {
            children,
            classes,
            disabled,
            disableFocusRipple,
            disableRipple,
            icon,
            iconPosition,
            label,
            sx,
            value,
            wrapped
        } = this.props;

        return (
            <Tab
                name="navbar"
               // open={open}
                classes={classes}
                disabled={disabled}
                disableFocusRipple={disableFocusRipple}
                disableRipple={disableRipple}
                icon={icon}
                iconPosition={iconPosition}
                label={label}
                sx={sx}
                value={value}
                wrapped={wrapped}
            >
                {this.renderChildren(label, children)}
            </Tab>
        )
    }

}

export default NavBar;