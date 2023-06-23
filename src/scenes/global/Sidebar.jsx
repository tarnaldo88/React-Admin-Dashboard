import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContexOutlinedIcon from "@mui/icons-material/ContexOutlined";
import RecieptOutlinedIcon from "@mui/icons-material/RecieptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-materialPieCharteOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected,, setSelected] = useState("Dashboard");

    return (
        <Box
            sx= {{
                "& .pro-sidebar-inner" : {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item" : {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color:"#868dfb !important"
                },
                "& .pro-menu-item:active": {
                    color:"#6870fa !important"
                },
            }}
        >
            <ProSidebar>
                <Menu>
                    <MenuItem>
                    <Box
                        display= "flex"
                        justifyContent="space-between"
                        alignItems="center"
                        ml="15px"
                    >
                        <Typography variant="h3" color={colors.grey[100]}>
                            Adminis
                        </Typography>
                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Box>
                    </MenuItem>
                    {/* User */}
                    {!isCollapsed && (
                        <Box mb= "25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img 
                                    alt="profile-user"
                                    width="100px"
                                    height="150px"
                                    src={'../../assets/cropped.png'}
                                    style = {{cursor: "pointer", borderRadius:"50%"}}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m:"10px 0 0 0"}}>Arnaldo Torres</Typography>
                                <Typography> Developer</Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar;