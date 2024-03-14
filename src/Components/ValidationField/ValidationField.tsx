import React from "react";
import "./ValidationField.scss";
import { Date, Time, File, DataRange, SelectField, Default, CheckboxField,MaltyFile, SearchField, TextField, DropFile } from './View';
import { ValidationFieldProps } from "./types";


const ValidationField: React.FC<ValidationFieldProps> = ({type , ...otherProps}) => {
  
  switch (type) {
    case 'Select':
      return <SelectField {...otherProps} />;
      case 'Search':
        return <SearchField {...otherProps} />;
    case "DataRange":
      return <DataRange {...otherProps} />;
      case "TextArea":
        return <TextField {...otherProps} />;
    case "Date":
      return <Date {...otherProps} />;
    case "Time":
      return <Time {...otherProps} />;
    case "File":
      return <File {...otherProps} />;
      case "DropFile":
        return <DropFile {...otherProps} />;
      case "MaltyFile":
        return <MaltyFile {...otherProps} />;
    case "Checkbox":
      return <CheckboxField {...otherProps} />;
    default:
      return <Default {...otherProps} type={type}/>;
  }
};

export default React.memo(ValidationField);
