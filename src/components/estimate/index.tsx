"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../input"
import { HomeProps } from "@/utils/home.type"
import { EmailTemplate } from "../email"
import { renderToStaticMarkup } from "react-dom/server"
import { Alert } from "../alert"
import { useState } from "react"
import { Loader2 } from "lucide-react"

const schema = z.object({
    name: z.string().min(3, "O campo Nome é obrigatório."),
    email: z.string().email("Digite um email válido").min(1, "O campo Email é obrigatório"),
    phone: z.string().refine((value) => {
        return /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) || /^\d{11}$/.test(value)
    }, {
        message: "O número de celular deve estar nesse formato: (DDD) 999999999"
    }),
    services: z.array(z.string()).min(1, "Você deve selecionar pelo menos um serviço.")
})

type FormData = z.infer<typeof schema>


export function Estimate({object: {metadata: {service}}}: HomeProps) {
    const [emailSent, setEmailSent] = useState(false); // Controle de estado para feedback de envio
    const [emailError, setEmailError] = useState(false); // Controle de estado para feedback de erro
    const [isLoading, setIsLoading] = useState(false);  // Estado para gerenciar o carregamento

    const { setValue, getValues, register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            services: []
        }
    })

    const handleSendEstimate = async (data: FormData) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/send', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: renderToStaticMarkup(<EmailTemplate customerEmail={data.email} name={data.name} phone={data.phone} services={data.services} />)
            });
      
            if (response.ok) {
                setEmailSent(true);
                setEmailError(false);
                reset()
                console.log('Email enviado com sucesso!');
            } else {
                setEmailSent(false);
                setEmailError(true);
                console.log('Falha ao enviar o email.');
            }
          } catch (error) {
            setEmailSent(false);
            setEmailError(true);
            console.error('Erro ao enviar o email:', error);            
          } finally {
            setIsLoading(false);
          }
    }

    const handleCheckboxChange = (serviceName: string, checked: boolean) => {
        // Obtenha o valor atual do array 'services'
        const currentServices = getValues("services");

        let updatedServices;
        if (checked) {
            // Adicione o serviço ao array
            updatedServices = [...currentServices, serviceName];
        } else {
            // Remova o serviço do array
            updatedServices = currentServices.filter(service => service !== serviceName);
        }

        // Atualize o valor do campo 'services'
        setValue("services", updatedServices);

        // Console log para verificar o array atualizado
        console.log(updatedServices);
      };

    return (
        <section id="orcamento" className="w-full flex flex-col items-center px-3 py-10">
            <h1 className="font-medium text-3xl py-10">Orçamento</h1>
            <div className="w-full md:max-w-7xl md:mx-auto bg-white rounded-md p-10 shadow-xl shadow-gray-700">
            <h1 className="font-medium text-xl mb-8">Preencha as informações:</h1>
            <form className="w-full flex flex-col items-start justify-center gap-4" onSubmit={handleSubmit(handleSendEstimate)}>

                {emailSent && (
                    <Alert message="Email enviado com sucesso" className="w-full bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative" />
                )}
                {emailError && (
                    <Alert message="Erro ao enviar o email" className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" />
                )}

                <div className="w-full flex flex-col items-start">
                    <Input 
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        error={errors.name?.message}
                        register={register}
                        className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-gray-300"
                    />
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full flex flex-col items-start">
                        <Input 
                            type="text"
                            name="email"
                            placeholder="Seu email"
                            error={errors.email?.message}
                            register={register}
                            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-gray-300"
                        />
                    </div>

                    <div className="w-full flex flex-col items-start">
                        <Input 
                            type="text"
                            name="phone"
                            placeholder="Seu cel"
                            error={errors.phone?.message}
                            register={register}
                            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-gray-300"
                        />
                    </div>
                </div>

                <h1 className="font-medium text-xl mb-3">Escolha os serviços:</h1>                
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">  


                    {service.services.map(service => (
                        <label key={service.name} className="md:w-2/3 block text-gray-500">
                            <Input 
                                type="checkbox"
                                name="servicos"
                                register={register}
                                className="mr-2 leading-tight"
                                onChange={(e:any) => handleCheckboxChange(service.name, e.target.checked)}
                            />    

                            <span className="text-sm">
                                {service.name}
                            </span>
                        </label>
                    ))}

                </div>
                { errors.services && <p className="text-red-500 my-1">{errors.services?.message}</p> }

                <button type="submit" className="bg-blue-500 text-white px-12 py-2 rounded-xl mt-5 flex items-center justify-center">
                    {isLoading ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                    {isLoading ? 'ENVIANDO...' : 'ENVIAR PEDIDO'}
                </button>

            </form>
        </div>
        
    </section>
    )
}