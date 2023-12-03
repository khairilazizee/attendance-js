import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { NextSeo } from 'next-seo';
import { supabase } from '@/supabase';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const [alert, setAlert] = useState(false);

    const onSubmit = async (dataForm) => {
        // console.log(dataForm.email)
        try {

            const { data, error } = await supabase.auth.signInWithPassword({
                email: dataForm.email,
                password: dataForm.password,
                options: {
                    emailRedirectTo: '/dashboard'
                }
            })

            // console.log(data)
            // console.log(data.session)


            if (data.session === null) {
                setAlert(true)
            } else {
                router.push("/dashboard")
            }

        } catch (error) {
            throw new Error(error)
        }

        router.push("/login")
    }

    return (
        <>
            <NextSeo
                title="Login"
                description=""
            />
            <div className="flex justify-center items-center h-screen">
                <div>
                    {alert && (
                        <div className="px-4 py-3 bg-red-500 text-white text-center mb-6">
                            Wrong username / password
                        </div>
                    )}
                    <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5 flex flex-col">
                            <label htmlFor="">Username / Email</label>
                            <input type="text" {...register("email", { required: true })} className="text-black px-3 py-2 placeholder:text-gray-400" />
                        </div>
                        <div className="mb-5 flex flex-col">
                            <label htmlFor="">Password</label>
                            <input type="password" {...register("password", { required: true })} className="text-black px-3 py-2 placeholder:text-gray-400" />
                        </div>
                        <button className="px-4 py-2 bg-blue-500 w-full">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login