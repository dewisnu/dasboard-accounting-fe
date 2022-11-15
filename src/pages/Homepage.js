import { Box } from "@mui/system";
import React from "react";
import {Typography} from "@mui/material"




export default function Homepage(){
    return (
         <Box 
          className="dasboard"
          width="100%"
          height="50vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
         >
            <Typography
            variant="h4"
            component="h2"
            color="grey.500"
            fontWeight="medium"
            >
                Selamat Datang di
            </Typography>
            <Typography
             variant="h3"
             component="h1"
             color="gray"
             fontWeight="bold"
            >
                Dasboard Hotel
            </Typography>
         </Box>
    )
}