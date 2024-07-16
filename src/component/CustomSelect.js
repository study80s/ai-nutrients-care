import { MenuItem, Select } from "@mui/material";


export default function CustomSelect({options, value, onchange}){
    return(
        <Select className="w-full" onChange={onchange}>
            {options.map((opt)=>(
                <MenuItem key={opt.key} value={opt.key}>
                    {opt.value}
                </MenuItem>
            ))}
        </Select>
    )
}