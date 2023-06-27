import { Box, useTheme, Typography, IconButton, Button } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {mockTransctions} from "../../data/mockData";
import { DownloadOutlinedIcon } from "@mui/icons-material/DownloadOutlined";
import { EmailIcon } from "@mui/icons-material/Email";
import { PointOfSaleIcon } from "@mui/icons-material/PointOfSale";
import { PersonAddIcon } from "@mui/icons-material/PersonAdd";
import { TrafficIcon } from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
    return (<Box m="20px">
            <Box display ="flex" justifyContent="space-between" alignItems={"center"}>
                <Header title="DASHBOARD" subtitle="Welcome to the Dashboard"/>
            </Box>
        </Box>
    );
}

export default Dashboard;