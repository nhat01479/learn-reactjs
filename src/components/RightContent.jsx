import React from "react";
import Box from "@mui/material/Box";

function RightContent(props) {
	return (
		<Box
			bgcolor="pink"
			flex={2}
			sx={{ display: { xs: "none", sm: "none", md: "block" } }}
		>
			<h3>Right Content</h3>
			<p>This is the right content of the page.</p>
		</Box>
	);
}

export default RightContent;
