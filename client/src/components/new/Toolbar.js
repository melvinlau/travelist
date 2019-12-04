import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
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
import MailIcon from "@material-ui/icons/Mail";
import Container from "@material-ui/core/Container";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
});

class ToolbarComponent extends React.Component {
  state = {
    achorEl: false,
    MobileMoreAnchorEl: false
  };

  handleProfileMenuOpen = event => {
    this.setState({
      achorEl: event.currentTarget
    });
  };

  handleMobileMenuClose = () => {
    this.setState({
      mobileMoreAnchorEl: null
    });
  };

  handleMenuClose = () => {
    this.setState({
      achorEl: null,
      mobileMoreAnchorEl: null
    });
  };

  handleMobileMenuOpen = event => {
    this.setState({
      mobileMoreAnchorEl: event.currentTarget
    });
  };

  render() {
    const { classes } = this.props;
    const isMenuOpen = Boolean(this.state.anchorEl);
    const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);

    const menuId = "primary-search-account-menu";
    const renderMenu = (
      <Menu
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
      <Menu
        anchorEl={this.state.mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.grow}>
        <AppBar position="static" color="white">
          <Toolbar className={classes.toolbar}>
            <Button size="small">Subscribe</Button>
            <Typography
              component="h2"
              variant="h3"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              <strong>Travelist</strong>
            </Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Button variant="outlined" size="small">
              Sign up
            </Button>
          </Toolbar>
        </AppBar>
        {/* {renderMobileMenu}
        {renderMenu} */}
      </div>
    );
  }
}

export default withStyles(styles)(ToolbarComponent);
