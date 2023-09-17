import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
function RadioForm(props) {
	return (
		<>
			<FormControl>
				<FormLabel>Which framework would you like to use?</FormLabel>
				<RadioGroup
					row
					defaultValue="laravel"
					name="radio-button-group"
				>
					<FormControlLabel
						value="boostrap"
						control={<Radio />}
						label="Boostrap"
					/>
					<FormControlLabel
						value="laravel"
						control={<Radio />}
						label="Laravel"
					/>
					<FormControlLabel
						value="react"
						control={<Radio />}
						label="React"
					/>
					<FormControlLabel
						value="others"
						control={<Radio />}
						label="Others"
					/>
				</RadioGroup>
			</FormControl>
		</>
	);
}

export default RadioForm;
