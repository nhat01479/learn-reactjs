import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
function AccordionMUI(props) {
	return (
		<>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1-content"
					id="panel1-content"
				>
					<Typography>Boostrap 5</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						This is a CSS frameword to build website quickly.
						Boostrap is very to learn.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2-content"
					id="panel2-content"
				>
					<Typography>MUI 5</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						This is a CSS frameword to build website quickly. This
						library is good for ReactJs.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion disabled>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography> New framework for CSS.</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						This is a CSS frameword to build website quickly. This
						library is good for ReactJs.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</>
	);
}

export default AccordionMUI;
