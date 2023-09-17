import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function GridMUI(props) {
	return (
		<>
			<Grid
				container
				p={5}
				spacing={5}
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
			>
				<Grid item xs={4} md={6}>
					<Typography paragraph={true} align="justify">
						This works great when the changes can be isolated to a
						new DOM element. For instance, you can change the margin
						this way. However, sometimes you have to target the
						underlying DOM element. As an example, you may want to
						change the border of the Button. The Button component
						defines its own styles. CSS inheritance doesn't help. To
						workaround the problem, you can use the sx prop directly
						on the child if it is a Material UI component.
					</Typography>
				</Grid>
				<Grid item xs={8} md={6}>
					<Typography paragraph={true} align="justify">
						This works great when the changes can be isolated to a
						new DOM element. For instance, you can change the margin
						this way. However, sometimes you have to target the
						underlying DOM element. As an example, you may want to
						change the border of the Button. The Button component
						defines its own styles. CSS inheritance doesn't help. To
						workaround the problem, you can use the sx prop directly
						on the child if it is a Material UI component. This
						works great when the changes can be isolated to a new
						DOM element. For instance, you can change the margin
						this way. However, sometimes you have to target the
						underlying DOM element. As an example, you may want to
						change the border of the Button. The Button component
						defines its own styles. CSS inheritance doesn't help. To
						workaround the problem, you can use the sx prop directly
						on the child if it is a Material UI component.
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{Array.from(Array(6)).map((_, index) => (
					<Grid item xs={2} sm={4} md={4} key={index}>
						<p>xs=2</p>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default GridMUI;
