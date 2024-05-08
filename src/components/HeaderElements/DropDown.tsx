"use client"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setSelectedId } from '@/redux/slice/dataTableSlice';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Data } from '@/Data/TableData';

interface DropDownProps{
    data: Data[]
}

export default function DropDown({data}:DropDownProps) {
    const selectedId = useSelector((state: RootState) => state.selectedId)
    const dispatch = useDispatch();
  
    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setSelectedId(event.target.value));
    };

    return(
        <div>
            <FormControl fullWidth sx={{backgroundColor:"white", marginBottom:"10px"}}>
                <InputLabel id="demo-simple-select-label">Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedId}
                        label="Name"
                        onChange={handleChange}
                        sx={{width:"600px"}}
                    >
                        <MenuItem value="">Clear</MenuItem>
                        {data.map((i) => (
                            <MenuItem key={i.id} value={i.id.toString()}>{i.name}</MenuItem>
                        ))}
                    </Select>
            </FormControl>
        </div>
    )
}