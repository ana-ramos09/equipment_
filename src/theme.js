import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: grey[900],
		},
		secondary: {
			main: indigo[700],
		},
	},
	h5: {
		fontFamily: '"Orbitron", sans-serif',
	},
});

export { theme };
