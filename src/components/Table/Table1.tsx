"use client"
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { TableData } from '@/Data/TableData';
import { setNodeData } from '@/redux/slice/nodeDataSlice';
import DropDown from '@/components/HeaderElements/DropDown';

export default function Table1() {
    const dispatch = useDispatch();
    const selectedId = useSelector((state: RootState) => state.selectedId)
    const filteredData = selectedId ? TableData.filter(item => item.id.toString() === selectedId) : TableData;
    dispatch(setNodeData(<DropDown data={TableData} />));
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
                        {filteredData.map((i) => (   
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