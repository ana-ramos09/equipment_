import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
	h4: {
		fontSize: "3rem",
		color: "eceff1",
		border: "1px solid red",
	},
}));

const EquipmentTypeList = () => {
	const classes = useStyle();

	return (
		<>
			<h4 className={classes.h4}>I am Equipment-Type-List</h4>
		</>
	);
};

export { EquipmentTypeList };
