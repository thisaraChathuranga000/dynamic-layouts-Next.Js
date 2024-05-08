"use client"
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { TableData2 } from '@/Data/TableData';
import { setNodeData } from '@/redux/slice/nodeDataSlice';
import DropDown2 from '@/components/HeaderElements/DropDown2';

export default function Table2() {
    const dispatch = useDispatch();
    const selectedId = useSelector((state: RootState) => state.selectedId2)
    const filteredData = selectedId ? TableData2.filter(item => item.id.toString() === selectedId) : TableData2;
    dispatch(setNodeData(<DropDown2 data={TableData2} />));
    
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