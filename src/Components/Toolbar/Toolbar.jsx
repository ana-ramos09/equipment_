import "./Toolbar.css";
import { Logo } from "../Logo/Logo.jsx";
import AppBar from "@material-ui/core/AppBar";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		elevation: 25,
		height: "10%",
	},
	menuIcon: {
		color: "#eceff1",
	},
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
		// backgroundColor: "#292828",
		opacity: 0.8,
		// color: "#eceff1",
	},
	itemsUserMenu: {
		// backgroundColor: "#292828",
		// opacity: 0.8,
		// color: "#eceff1",
		height: "50px",
	},
	itemsSystemMenu: {
		height: "50px",
		opacity: 0.8,
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
		<div>
			<AppBar position="fixed">
				<MUIToolbar>
					{/* <IconButton
						edge="start"
						className={classes.menuIcon}
						color="inherit"
						aria-label="menu-system"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMenuSystem}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						className={classes.systemMenu}
						anchorEl={systemMenu}
						anchorOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						keepMounted
						transformOrigin={{
							vertical: "left",
							horizontal: "bottom",
						}}
						open={isOpenMenu}
						onClose={handleCloseSystem}
					>
						<MenuItem
							className={classes.itemsSystemMenu}
							onClick={handleCloseSystem}
						>
							Equipment
						</MenuItem>
						<MenuItem
							className={classes.itemsSystemMenu}
							onClick={handleCloseSystem}
						>
							Equipment Types
						</MenuItem>
						<MenuItem
							className={classes.itemsSystemMenu}
							onClick={handleCloseSystem}
						>
							Create Equipment
						</MenuItem>
						<MenuItem
							className={classes.itemsSystemMenu}
							onClick={handleCloseSystem}
						>
							Edit Equipment
						</MenuItem>
						<MenuItem
							className={classes.itemsSystemMenu}
							onClick={handleCloseSystem}
						>
							Remove Equipment
						</MenuItem>
					</Menu> */}
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
						<MenuItem
							className={classes.itemsUserMenu}
							onClick={handleCloseUser}
						>
							Profile
						</MenuItem>
						<MenuItem
							className={classes.itemsUserMenu}
							onClick={handleCloseUser}
						>
							My Account
						</MenuItem>
						<MenuItem
							className={classes.itemsUserMenu}
							onClick={handleCloseUser}
						>
							Logoff
						</MenuItem>
					</Menu>
				</MUIToolbar>
			</AppBar>
		</div>
	);
};

export { Toolbar };

// import TrendingFlatIcon from '@material-ui/icons/TrendingFlat'; (seta direita)
// import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave'; (carro frontal)
// import SubwayIcon from '@material-ui/icons/Subway'; (metrô frontal)
// import SettingsIcon from '@material-ui/icons/Settings'; (configurações)
// import RedoIcon from '@material-ui/icons/Redo'; (refazer)
// import RemoveIcon from '@material-ui/icons/Remove'; (remover)
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'; (navegação next)
// import NavigateNextIcon from '@material-ui/icons/NavigateNext'; (navegação before)
// import LocalShippingIcon from '@material-ui/icons/LocalShipping'; (caminhão lateral)
// import FaceIcon from '@material-ui/icons/Face'; (usuário)
// import ExpandLessIcon from '@material-ui/icons/ExpandLess'; (expandir)
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; (recuar)
//
