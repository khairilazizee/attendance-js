import React from 'react'
import Layout from '@/pages/components/layout'
import { useForm } from "react-hook-form"
import { supabase } from '@/supabase'
import { useRouter } from 'next/router'

const AddUsers = () => {

    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues: { name: '', ic_no: '', email: '', status: '' } })


    const onSubmit = async (dataForm) => {
        console.log(dataForm)
        try {
            const { data } = await supabase.from('tbl_teachers').insert([dataForm]).select()
        } catch (error) {
            throw new Error(error)
        }

        router.push("/dashboard/users")

    }

    return (
        <Layout titleSEO='New User'>
            <div className="flex gap-5 mt-5">
                <div className="bg-[color:var(--bgSoft)] p-5 rounded-xl w-full">
                    <h2 className="mb-5 font-extralight text-[color:var(--textSoft)] text-2xl">Add New User</h2>
                    <form action="" className="flex flex-col gap-2.5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-2.5 w-full">
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className='mb-2'>Name</label>
                                <input type="text" name="name" placeholder='Name' {...register("name")} className="px-3 py-2 placeholder:text-gray-300 text-black" />
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className='mb-2'>IC No.</label>
                                <input type="text" name="ic_no" placeholder="No IC" {...register("ic_no")} className="px-3 py-2 placeholder:text-gray-300 text-black" />
                            </div>
                        </div>
                        <div className="flex gap-2.5 w-full">
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className='mb-2'>Email</label>
                                <input type="text" name="email" placeholder='email@domain.com' {...register("email")} className="px-3 py-2 placeholder:text-gray-300 text-black" />
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="mb-2">Status</label>
                                <select name="status" id="" {...register("status")} className="px-3 py-2.5 placeholder:text-gray-300 text-black">
                                    <option value="active" className="px-3 py-2 placeholder:text-gray-300">Active</option>
                                    <option value="inactive" className="px-3 py-2 placeholder:text-gray-300">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default AddUsers