import React from "react";
import Box from "@mui/material/Box";
function LeftContent(props) {
	return (
		<Box
			bgcolor="lightblue"
			flex={2}
			sx={{ display: { xs: "none", sm: "none", md: "block" } }}
		>
			<h3>Left Content</h3>
			<p>This is the left content of the page.</p>
		</Box>
	);
}

export default LeftContent;
