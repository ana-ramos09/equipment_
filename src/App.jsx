import { Sidebar } from "./Components/Sidebar/Sidebar.jsx";
import { Toolbar } from "./Components/Toolbar/Toolbar.jsx";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes.js";

const useStyle = makeStyles(() => ({
	app: {
		display: "flex",
		flexDirection: "column",
		margin: 0,
		padding: 0,
		height: "100vh",
		justifyContent: "flex-end",
	},
	wrapper: {
		display: "flex",
		alignItems: "flex-end",
		justifyContent: "center",
		flexDirection: "column",
	},
	routesContainer: {
		alignItems: "flex-end",
		width: "84%",
		height: "91vh",
	},
}));

function App() {
	const classes = useStyle();
	return (
		<Router>
			<div className={classes.app}>
				<Toolbar></Toolbar>
				<div className={classes.wrapper}>
					<Sidebar></Sidebar>
					<div className={classes.routesContainer}>
						<Switch>
							{routes.map((route, index) => (
								<Route
									exact
									path={route.path}
									component={route.component}
									key={index}
								/>
							))}
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
