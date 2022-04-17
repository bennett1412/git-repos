import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {BootstrapInput} from '../styles/SelectStyle'
const DropDown = ({state,changeState,values,placeholder}) => {
  return (
      <>
  <FormControl sx={{ m: 1, minWidth: 120 }}>
  {/* <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel> */}
    <Select
    input={<BootstrapInput />}
    label={placeholder}
    autoWidth
    size='small'
      value={state}
      onChange={(e)=>{console.log(state);changeState(e.target.value)}}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    > 
      <MenuItem value="">
        <em>{placeholder}</em>
      </MenuItem>
      {values.map((value,index)=>{return <MenuItem key={index} value={value}>{value}</MenuItem>})
      
      }
    </Select>
  </FormControl>
  </>
  )
}

export default DropDown