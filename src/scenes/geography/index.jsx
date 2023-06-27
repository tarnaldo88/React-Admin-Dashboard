import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeographyChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geography= ()=> {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return(
        <Box m="20px">
            <Header title="Geography Chart" subtitle="A Geography Chart from nivo" />
            <Box height="75vh" border= {`1px solid ${colors.grey[100]}`}>
                <GeoChart/>
            </Box>
        </Box>
    );
}

export default Geography;