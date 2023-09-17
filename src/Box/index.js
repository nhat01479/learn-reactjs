import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function BoxMUI(props) {
	return (
		<>
			<Box mt={5}>
				<Typography variant="h1">MUI-5 App</Typography>
				<Typography variant="h3">MUI-5 App</Typography>
				<Typography variant="h5">MUI-5 App</Typography>
				<Typography variant="subtitle1" p={5} align="justify" mt={5}>
					This works great when the changes can be isolated to a new
					DOM element. For instance, you can change the margin this
					way. However, sometimes you have to target the underlying
					DOM element. As an example, you may want to change the
					border of the Button. The Button component defines its own
					styles. CSS inheritance doesn't help. To workaround the
					problem, you can use the sx prop directly on the child if it
					is a Material UI component.
				</Typography>
				<Typography
					sx={{
						variant: "subtitle1",
						textAlign: "right",
						padding: 5,
					}}
				>
					This works great when the changes can be isolated to a new
					DOM element. For instance, you can change the margin this
					way. However, sometimes you have to target the underlying
					DOM element. As an example, you may want to change the
					border of the Button. The Button component defines its own
					styles. CSS inheritance doesn't help. To workaround the
					problem, you can use the sx prop directly on the child if it
					is a Material UI component.
				</Typography>
				<hr />
			</Box>
		</>
	);
}

export default BoxMUI;
