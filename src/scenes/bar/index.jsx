import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar= ()=> {
    return(
        <Box m="20px">
            <Header title="Bar Chart" subtitle="A Bar Chart from nivo" />
            <Box height="75vh">
                <BarChart/>
            </Box>
        </Box>
    );
}

export default Bar;