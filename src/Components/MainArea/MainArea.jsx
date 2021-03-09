import BuildIcon from "@material-ui/icons/Build";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
	container: {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	h2: {
		color: "#e7f0f6",
		opacity: 0.4,
		cursor: "pointer",
		fontSize: "2rem",
		fontFamily: '"Roboto", sans-serif',
		marginRight: "50px",
		transition: "font-size 1s",
		"&:hover": {
			fontSize: "2.1rem",
			opacity: 0.3,
		},
	},
	icon: {
		fontSize: "larger",
		color: "#e7f0f6",
		width: "45px",
		opacity: 0.4,
		cursor: "pointer",
	},
}));

const MainArea = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<BuildIcon className={classes.icon}></BuildIcon>
			<Typography
				id="main-area"
				className={classes.h2}
				variant="h2"
				display="inline"
			>
				Select the Equipment on the side menu to start the configuration
			</Typography>
		</div>
	);
};

export { MainArea };
