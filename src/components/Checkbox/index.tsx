import React from 'react';
import {Checkbox} from "@headlessui/react";

interface Props {
    checked?: boolean
    onChange?: (checked: boolean) => void
    label?: string
}
const CustomCheckbox = ({checked, onChange, label} : Props) => {
    return (
        <div className="flex items-center text-dark-gray text-base gap-2">
            <label>{label}</label>
            <Checkbox
                checked={checked}
                onChange={onChange}
                className="group size-5 flex items-center justify-center rounded bg-white ring-1 ring-dark-gray data-[checked]:bg-blue data-[checked]:ring-blue"
            >
                <svg
                    className="size-5  text-white hidden group-data-[checked]:block"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </Checkbox>
        </div>
    );
};

export default CustomCheckbox;