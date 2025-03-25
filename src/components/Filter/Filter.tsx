"use client";

import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import TuneIcon from '@mui/icons-material/Tune';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function Filter() {
  const [value, setValue] = useState<number[]>([1000, 2000]);
  const [sort, setSort] = React.useState('Bigger Price first');

  const handleSortChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };


  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <aside className='w-[20%] h-[80vh] bg-white rounded'>
      <div className='flex justify-between items-center py-2 px-5' style={{ borderBottom: "1px solid #dfdfdf" }}>
        <h3 className='font-[400] text-[20px]' style={{ fontWeight: 300 }}>Filter</h3>
        <TuneIcon />
      </div>
      <div className='py-10 px-5' style={{ borderBottom: "1px solid #dfdfdf" }}>
        <p className='mb-2 text-[20px]'>Price</p>
        <div className='flex justify-center items-center mb-5'>
          <div className='bg-[#db4444] text-white py-1 px-4 rounded mr-2'>{value[0]}</div>
          <div className='bg-[#db4444] text-white py-1 px-4 rounded'>{value[1]}</div>
        </div>
        <Box sx={{ width: 300 }}>
          <Slider
            sx={{
              color: '#db4444', // This applies MUI's color system
              '& .MuiSlider-thumb': { color: 'red' },
              '& .MuiSlider-track': { color: 'red' },
              '& .MuiSlider-rail': { color: 'gray' }, // Optional: change rail color
            }}
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={100}
            min={0}
            max={5000}
            getAriaValueText={valuetext}
          />
        </Box>
      </div>
      <div className='py-10 px-5'>
        <p className='mb-2'>Sort by</p>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth sx={{ "& .MuiOutlinedInput-root.Mui-focused": { borderColor: "red" } }}>
            <Select
              id="demo-simple-select"
              value={sort}
              onChange={handleSortChange}
              sx={{
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "red !important" }
              }}
            >
              <MenuItem value={10}>Expensive To Cheap</MenuItem>
              <MenuItem value={20}>Cheap To Expensive</MenuItem>
              <MenuItem value={30}>Innovations First</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </aside>
  )
}
