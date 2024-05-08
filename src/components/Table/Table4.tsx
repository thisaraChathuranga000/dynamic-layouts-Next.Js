"use client"
import SearchBar from "../HeaderElements/SearchBar";
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { TableData4 } from '@/Data/TableData';
import { setNodeData } from '@/redux/slice/nodeDataSlice';
import { setSearchQuery } from '@/redux/slice/searchSlice';

export default  function Table4() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.query);
  

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const filteredData = TableData4.filter(
    (item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  dispatch(setNodeData(<SearchBar onChange={handleSearchChange}/>));
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