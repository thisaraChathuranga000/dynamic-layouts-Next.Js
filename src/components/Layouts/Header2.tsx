"use client"
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Box, Divider, Grid } from '@mui/material';

export default function Header2() {
    const jsxData = useSelector((state: RootState) => state.jsxString.value);
    const jsxComponent = <div dangerouslySetInnerHTML={{ __html: jsxData }} />;
    console.log(jsxComponent);

    return(
        <div>
            <Box sx={{marginTop:"10px", minHeight:"70px", justifyContent:"center"}}>
                <Grid container>
                    <Grid lg={6}>
                        Header 
                    </Grid>
                    <Grid lg={6}>
                        {jsxComponent}
                    </Grid>
                </Grid>
            </Box>
            <Divider/>
        </div>
    )
}