import React from "react";
import HeaderOrganism from "../components/organisms/header.organism";
import { Stack, Box, Button, Typography, Grid, TextField } from "@mui/material";


const SignUpPage: React.FC = () => {
    return (
        <>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={2}
                p={2}
                flex={1}
                display="flex"
                height="98.7vh"
            >

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <HeaderOrganism />
                    <Box display="flex" flex={1} bgcolor="black">

                    </Box>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <HeaderOrganism />
                    <Box display="flex" bgcolor="black">
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SignUpPage;