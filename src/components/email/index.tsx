interface EmailTemplateProps {
    name: string
    customerEmail: string
    phone: string
    services: string[]
}

export function EmailTemplate({name, customerEmail, phone, services}: EmailTemplateProps) {
    return (
        <div>
            <p>Gostaria de fazer um orçamento dos seguintes serviços abaixo:</p>

            <ul>
                {services.map((service) => (
                    <li key={service}>{service}</li>
                ))}
            </ul>
            <p>Informações de contato:</p>
            <div>
                <p>Nome: {name}</p>
                <p>email: {customerEmail}</p>
                <p>Cel: {phone}</p>
            </div>

        </div>
    )
}