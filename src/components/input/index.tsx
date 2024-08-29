import { RegisterOptions, UseFormRegister } from "react-hook-form"

interface InputProps {
    type: string
    placeholder?: string
    name: string
    register: UseFormRegister<any>
    error?: string
    rules?: RegisterOptions
    className: string
    key?: string
    onChange?: any
}

export function Input({type, placeholder, name, register, error, rules, className, key, onChange}: InputProps) {
    const inputProps = register(name, rules);
    return (
        <>
            <input 
                placeholder={placeholder}
                type={type}
                id={name}
                className={className}
                key={key}
                {...inputProps}
                {...(onChange && { onChange })}
            />
            { error && <p className="text-red-500 my-1">{error}</p> }
        </>
    )
}