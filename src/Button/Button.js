import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BlockIcon from "@mui/icons-material/Block";
import CancelIcon from "@mui/icons-material/Cancel";

const AllButton = () => {
	return (
		<>
			<Stack direction="row" spacing={5} paddingTop={15} paddingLeft={55}>
				<Button variant="text">
					<CancelIcon sx={{ fontSize: "16px" }} />
					Click me!
				</Button>

				<Button variant="contained" startIcon={<BeenhereIcon />}>
					Submit
				</Button>

				<Button variant="outlined">Sign In</Button>

				<Button variant="disabled">
					<BlockIcon sx={{ fontSize: "16px" }} />
					Disable
				</Button>

				<Button variant="outlined" startIcon={<DeleteIcon />}>
					Delete
				</Button>

				<Button variant="outlined" startIcon={<SendIcon />}>
					Send
				</Button>
			</Stack>
		</>
	);
};

export default AllButton;
