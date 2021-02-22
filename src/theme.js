import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import grey from "@material-ui/core/colors/grey";
import purple from "@material-ui/core/colors/purple";
import blueGrey from "@material-ui/core/colors/blueGrey";

const theme = createMuiTheme({
	palette: {
		primary: {
			// light: grey[300],
			main: grey[900],
			// dark: grey[900],
		},
		secondary: {
			// light: indigo[300],
			main: indigo[700],
			// dark: indigo[800],
		},
	},
	h5: {
		fontFamily: '"Orbitron", sans-serif',
	},
});

export { theme };
