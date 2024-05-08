"use client"
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Box, Divider, Grid } from '@mui/material';

export default function Header() {
    const jsxData = useSelector((state: RootState) => state.nodeData.jsxData);

    return(
        <div>
            <Box sx={{marginTop:"10px", minHeight:"70px", justifyContent:"center", }}>
                <Grid container>
                    <Grid lg={6}>
                        Header 
                    </Grid>
                    <Grid lg={6}>
                        {jsxData}
                    </Grid>
                </Grid>
            </Box>
            <Divider/>
        </div>
    )

}