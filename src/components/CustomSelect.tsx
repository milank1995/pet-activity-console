import React from 'react';
import {DownArrow} from "../assets/Icons.tsx";

const CustomSelect = () => {
    return (
        <div className="custom-select-wrapper">
            <select className="custom-select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <DownArrow/>
        </div>
    );
};

export default CustomSelect;