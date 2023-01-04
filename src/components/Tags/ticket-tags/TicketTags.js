import CreatableSelect, { useCreatable } from 'react-select/creatable';
import React, { useState, useEffect } from "react";

const TicketTags = () => {
  const [tagValue, setTagValue] = useState('')
    const tag = [
        {label: 'EasyTag1',value: 'EasyTag1'},
        {label: 'EasyTag2',value: 'EasyTag2'},
        {label: 'EasyTag3',value: 'EasyTag3'}
      ]
      const handleChange = (field, value) =>{
        switch (field) {
          case 'tag':
            setTagValue(value)
            break;
          default:
            break;
        }
      }
  return (
    <div className='inputs'>
        <label htmlFor="">TAG</label>
        <CreatableSelect
            isClearable
            isMulti
            onChange={(value) => handleChange('tag',value)}
            options ={tag}
            value={tagValue}
        />
    </div>
  )
}

export default TicketTags
//Need to implement on my project

