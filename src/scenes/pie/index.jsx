import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/Piechart";

const Pie= ()=> {
    return(
        <Box m="20px">
            <Header title="Pie Chart" subtitle="A Pie Chart from nivo" />
            <Box height="75vh">
                <PieChart/>
            </Box>
        </Box>
    );
}

export default Pie;