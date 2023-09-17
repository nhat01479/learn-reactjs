import Stack from "@mui/material/Stack";

import LeftContent from "./LeftContent";
import MainContent from "./MainContent";
import RightContent from "./RightContent";
import "./../App.css";

function Layout(props) {
	return (
		<>
			<h1>Flexbox</h1>
			<Stack direction="row" justifyContent="space-between">
				<LeftContent />
				<MainContent />
				<RightContent />
			</Stack>
		</>
	);
}

export default Layout;
