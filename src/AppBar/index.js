import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

function AppBarMUI(props) {
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<HomeIcon sx={{ fontSize: "lager", marginRight: 1 }} />
					<Typography variant="h5" align="left" sx={{ flexGrow: 1 }}>
						MUI-v5
					</Typography>
					<Button color="inherit">Login</Button>
					<Typography color="inherit">Sign Up</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default AppBarMUI;
