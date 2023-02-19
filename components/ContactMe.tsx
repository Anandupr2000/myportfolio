import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};


function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    // sending form content as mail
    const onFormSubmitHandler: SubmitHandler<Inputs> = formData => {
        console.log(formData)

        window.location.href = `mailto:ananduprajesh@gmail.com?subject=${formData.subject}
        &body= Hi, My name is ${formData.name}.\n ${formData.message}.\n (${formData.email})`

        // window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&
        // to='ananduprajesh@gmail.com'&
        // su='${formData.subject}'&
        // body='Hi, My name is ${formData.name}, ${formData.message} (${formData.email})'&
        // tf=1`)
    };

    return (
        <div className='relative h-screen flex flex-col text-center md:text-left items-center 
        justify-evenly mx-auto max-w-7xl px-10 pt-28'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
                Contact
            </h3>
            <div className='flex flex-col space-y-5'>
                <h4 className='text-4xl font-semibold text-center'>I have just got what you need.{" "}
                    <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
                </h4>
                <div className="space-y-3">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className='w-7 h-7 text-[#F7AB0A] animate-pulse' />
                        <p className='text-2xl'>+918845678921</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className='w-7 h-7 text-[#F7AB0A] animate-pulse' />
                        <p className='text-2xl'>ananduprajesh@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className='w-7 h-7 text-[#F7AB0A] animate-pulse' />
                        <p className='text-2xl'>MY123 Lane Address</p>
                    </div>
                </div>
                <form action="" onSubmit={handleSubmit(onFormSubmitHandler)} className='contactForm'>
                    <div className='contactDiv'>
                        <input {...register("name")} placeholder='Name' className='contactInput' type="text" />
                        <input {...register("email")} placeholder='Email' className='contactInput' type="text" />
                    </div>
                    <input {...register("subject")} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register("message")} placeholder='Message' className='contactInput' />

                    <button className='contactSubmitBtn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe