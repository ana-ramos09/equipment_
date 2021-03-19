import React from "react";
import CommuteIcon from "@material-ui/icons/Commute";
import DirectionsSubwayIcon from "@material-ui/icons/DirectionsSubway";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import grey from "@material-ui/core/colors/grey";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;
const auxiliarHeigth = 70;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexGrow: 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: grey[900],
		color: "#eceff1",
	},
	drawerContainer: {
		overflow: "auto",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	icons: {
		color: grey[300],
	},
	listItems: {
		"&:hover": {
			backgroundColor: grey[800],
		},
	},
	marginDrawerDiv: {
		height: auxiliarHeigth,
		width: drawerWidth,
	},
}));

const Sidebar = () => {
	const classes = useStyles();

	let history = useHistory();
	const handleClickEquip = () => {
		history.push("/equipment/");
		console.log(history);
	};

	const handleClickEquipTypes = () => {
		history.push("/equipment-types/");
		console.log(history);
	};

	return (
		<div className={classes.root}>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.marginDrawerDiv}></div>
				<Divider className={classes.icons} light />
				<div className={classes.drawerContainer}>
					<List>
						<ListItem
							className={classes.listItems}
							button
							onClick={handleClickEquip}
						>
							<ListItemIcon>
								<DirectionsSubwayIcon
									className={classes.icons}
									fontSize="medium"
								/>
							</ListItemIcon>
							<ListItemText primary={"Equipment"} />
						</ListItem>
						<ListItem
							className={classes.listItems}
							button
							onClick={handleClickEquipTypes}
						>
							<ListItemIcon>
								<CommuteIcon className={classes.icons} fontSize="medium" />
							</ListItemIcon>
							<ListItemText primary={"Equipment Type"} />
						</ListItem>
					</List>
					<Divider variant="middle" light />
				</div>
			</Drawer>
		</div>
	);
};

export { Sidebar };
