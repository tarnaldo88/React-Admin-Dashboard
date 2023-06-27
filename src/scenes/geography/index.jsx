import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeographyChart";

const Geography= ()=> {
    return(
        <Box m="20px">
            <Header title="Geography Chart" subtitle="A Geography Chart from nivo" />
            <Box height="75vh">
                <GeoChart/>
            </Box>
        </Box>
    );
}

export default Geography;