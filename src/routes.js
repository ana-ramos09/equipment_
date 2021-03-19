import { MainArea } from "./Components/MainArea/MainArea.jsx";
import { Equipment } from "./Equipment/Equipment.jsx";
import { EquipmentList } from "./Equipment/EquipmentList.jsx";
import { EquipmentType } from "./EquipmentType/EquipmentType.jsx";
import { EquipmentTypeList } from "./EquipmentType/EquipementTypeList.jsx";

const routes = [
	{
		path: "/",
		component: MainArea,
	},
	{
		path: "/equipment/:id",
		component: Equipment,
	},
	{
		path: "/equipment/",
		component: EquipmentList,
	},
	{
		path: "/equipment-types/:id",
		component: EquipmentType,
	},
	{
		path: "/equipment-types/",
		component: EquipmentTypeList,
	},
];

export { routes };
