import React, { useState } from "react";
import { Autocomplete, Box, TextField, Tooltip } from "@mui/material";
import { styled } from "@mui/system";

export const StyledInput = styled(TextField)({
  background: "white",
  borderRadius:"5px",
});

const ComboBox: React.FC<{
  disableTyping?:boolean,
  options: Array<{label:string,value:string} & Object> ;
  label: string;
  value: {label:string,value:string} & Object|undefined
  onChange: Function;
  type: string;
  placeholder: string;
  clear?: boolean;
  width?: string;
  optionalProps?:Object
  role?:string;
}> = ({
  disableTyping=false,
  options,
  label,
  value,
  onChange,
  type,
  placeholder,
  clear = false,
  width = "220px",
  optionalProps={},
  role
}) => {
  const [userInput, setUserInput] = useState("");
  const onUserInputChange = (value: string) => {
    if (true) {
      if (type === "number") {
        let val = value.replace(/\D/g, "");
        setUserInput(val);
      } else {
        setUserInput(value);
      }
    }
  };

  return (
    <Box sx={{ width: width ,"& .MuiAutocomplete-option":{fontSize:"0.8rem",py:"3px!important"}}}>
      <Tooltip title={!disableTyping && value?.label} placement="top">
        <Autocomplete
        {...(disableTyping && {selectOnFocus:false})}
          disablePortal
          id="combo-box-demo"
          sx={{
            width: "100%",
            borderColor: "#B4B3B3",
            "& .MuiInputBase-root": {
              borderRadius: "5px",
              fontSize:'14px',
            },
            "& .MuiInputLabel-outlined":{
              top:"-3px",
            },
            "& .MuiInputBase-sizeSmall":{
              paddingY:"1px!important"
            },
            "& .MuiAutocomplete-input::-webkit-input-placeholder":{
              color:"white",
              opacity:"1"
            }

          }}
          options={options}
          value={value}
          inputValue={userInput}
          onInputChange={(event, value) => {
            onUserInputChange(value);
          }}
          onChange={(_, currentValue) => onChange(currentValue)}
          renderInput={(params) => (
            <StyledInput
              role={role ?? undefined}
              type={type}
              {...params}
              size={"small"}
              placeholder={placeholder}
              {...(disableTyping && {inputProps:{...params.inputProps,readOnly:true}})}
              //label={label}
            />
          )}
          fullWidth
          size="small"
          disableClearable={!clear}
          {...optionalProps}
        />
      </Tooltip>
    </Box>
  );
};

export default ComboBox;
