import React from "react";
import { Stack, Box, Button, Typography, Grid, TextField } from "@mui/material";

const HeaderOrganism: React.FC = () => {
    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Stack alignItems="center" justifyContent="center">
                    <Typography>
                        Texto de exemplo
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default HeaderOrganism;