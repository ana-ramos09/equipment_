import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
	h4: {
		fontSize: "3rem",
		color: "eceff1",
		border: "1px solid red",
	},
}));

const EquipmentType = () => {
	const classes = useStyle();

	return (
		<>
			<h4 className={classes.h4}>I am Equipment-Type</h4>
		</>
	);
};

export { EquipmentType };