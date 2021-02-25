import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import FaceIcon from "@material-ui/icons/Face";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MUIToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Logo } from "../Logo/Logo.jsx";

const useStyles = makeStyles((theme) => ({
	logo: {
		marginRight: theme.spacing(2),
		height: "100%",
	},
	title: {
		flexGrow: 1,
		color: "#eceff1",
		marginLeft: "25px",
	},
	userIcon: {
		color: "#eceff1",
	},
	userMenu: {
		opacity: 0.8,
	},
	userMenuItems: {
		height: "50px",
	},
}));

const Toolbar = () => {
	const classes = useStyles();

	const [userMenu, setUserMenu] = useState(null);
	const isOpen = Boolean(userMenu);

	const handleMenuUser = (event) => {
		setUserMenu(event.currentTarget);
	};

	const handleCloseUser = () => {
		setUserMenu(null);
	};

	return (
		<AppBar position="fixed">
			<MUIToolbar>
				<Logo className={classes.logo}></Logo>
				<Typography variant="h5" className={classes.title}>
					Equipments
				</Typography>
				<IconButton
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleMenuUser}
				>
					<FaceIcon className={classes.userIcon} fontSize="large" />
				</IconButton>
				<Menu
					className={classes.userMenu}
					variant="menu"
					anchorEl={userMenu}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "bottom",
					}}
					keepMounted
					transformOrigin={{
						vertical: "right",
						horizontal: "right",
					}}
					open={isOpen}
					onClose={handleCloseUser}
				>
					<MenuItem className={classes.userMenuItems} onClick={handleCloseUser}>
						Profile
					</MenuItem>
					<MenuItem className={classes.userMenuItems} onClick={handleCloseUser}>
						My Account
					</MenuItem>
					<MenuItem className={classes.userMenuItems} onClick={handleCloseUser}>
						Logout
					</MenuItem>
				</Menu>
			</MUIToolbar>
		</AppBar>
	);
};

export { Toolbar };
