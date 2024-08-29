
interface AlertProps {
    message: string
    color?: string
    className?: string
}

export function Alert({message, color, className}: AlertProps) {
    return (
        <div className={className}>        
            <span className="block sm:inline">{message}</span>            
        </div>
    )
}