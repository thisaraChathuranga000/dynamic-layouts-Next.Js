"use client"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { TableData3 } from '@/Data/TableData';
import { setJsxString } from '@/redux/slice/jsxStringSlice';
import { renderToString } from 'react-dom/server';
import { setNodeData } from '@/redux/slice/nodeDataSlice';

const HeaderElement = () => {
    return(
        <div>
            <h1>Text</h1>
        </div>
    )
}

export default function Table3() {
    const dispatch = useDispatch();
    const selectedId = useSelector((state: RootState) => state.selectedId)
    const filteredData = selectedId ? TableData3.filter(item => item.id.toString() === selectedId) : TableData3;
    const jsxString = renderToString(<HeaderElement />)
    dispatch(setJsxString(jsxString));
  return (
        <Box p={2}>
            <Container maxWidth="lg">
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Age</TableCell>
                        <TableCell align="left">University</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>      
                        {TableData3.map((i) => (   
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={i.id}>
                        <TableCell align="left">{i.name}</TableCell>
                        <TableCell align="left">{i.age}</TableCell>
                        <TableCell align="left">{i.university}</TableCell>
                        </TableRow>
                        ))} 
                    </TableBody>
                </Table>
                </TableContainer>
            </Container>
        </Box>
  );
}