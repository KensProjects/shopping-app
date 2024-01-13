import type { ChangeEvent } from "react";

export default function Dropdown({ label, value, onChange, optionArray, selectStyle, optionsStyle }: { label: string, value: string, onChange: (e:ChangeEvent<HTMLSelectElement>) => void, optionArray: string[], selectStyle: string, optionsStyle: string }) {
    return <div className="flex flex-col justify-center items-center gap-2">
        <label htmlFor={`${label}dropdown`}>{label}</label>
        <select className={selectStyle} value={value} onChange={onChange}>
            {optionArray.map((option) => (
                <option className={optionsStyle} key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
}