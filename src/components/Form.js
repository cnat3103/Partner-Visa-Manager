import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

const Input = props =>{
return(
    <InputGroup className="mb-3">
        <FormControl
            name="term"
            type="text"
            placeholder="Search for Document"
            className=" mr-sm-2"
            size='lg'
            value={props.search}
            onChange={props.onSearch}
            id="term"
        />
    </InputGroup>
    )
  }
  export default Input;