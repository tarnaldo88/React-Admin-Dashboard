import React from 'react'
import { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendars = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for event.");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title) {
            calendarApi.addEvent({
                id:`${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.EndStr,
                allDay: selected.allDay,
            });
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm("Are you sure you want to delete the Event?")) {
            selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            <Header title={"Calendar"} subtitle= {"Full Calendar Interactive Page"} />

            <Box display={"flex"} justifyContent={"space-between"}>
                {/* Calendar SideBar */}
                <Box flex= "1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius={"4px"}>
                    <Typography variant="h5">
                        Events
                    </Typography>
                    <List>
                        {currentEvents.map((event) => {
                            <ListItem key = {event.id} sx={{backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius:"2px"}}>
                                <ListItemText 
                                primary={event.title}
                                secondary= {
                                    <Typography>
                                        {formatDate(event.start,
                                            {
                                                year: "numeric",
                                                month: "numeric",
                                                day:"numeric",
                                            }    
                                        )}
                                    </Typography>
                                }
                                />
                            </ListItem>                            
                        })}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default Calendars;