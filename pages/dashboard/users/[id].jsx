import { supabase } from '@/supabase'
import React from 'react'
import Layout from '@/pages/components/layout'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

const UserInformation = ({ teacher }) => {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = async (dataForm) => {
        console.log(dataForm)

        try {
            const { data, error } = await supabase
                .from('teachers')
                .update(dataForm)
                .eq('id', teacher.id)
                .select()

            if (error) {
                console.error("Error updating data:", error);
            } else {
                console.log("Data updated successfully:", data);
            }
        } catch (error) {
            console.error("Error updating data:", error.message);
        }


        router.push("/dashboard/users")

    }

    return (
        <Layout titleSEO="Teacher's Information" descSEO="">
            <div>{JSON.stringify(teacher, null, 2)}</div>
            <div className="flex gap-5 mt-5">
                <div className="bg-[color:var(--bgSoft)] p-5 rounded-xl w-full">
                    <h2 className="mb-5 font-extralight text-[color:var(--textSoft)] text-2xl">Edit User Information</h2>
                    <form action="" className="flex flex-col gap-2.5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-2.5 w-full">
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className='mb-2'>Name</label>
                                <input type="text" name="name" placeholder='Name' defaultValue={teacher.name} {...register("name", { required: true })} className="px-3 py-2 placeholder:text-gray-300 text-black" />
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className='mb-2'>IC No.</label>
                                <input type="text" name="ic_no" placeholder="No IC" defaultValue={teacher.ic_no} {...register("ic_no", { required: true })} className="px-3 py-2 placeholder:text-gray-300 text-black" />
                            </div>
                        </div>
                        <div className="flex gap-2.5 w-full">
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className='mb-2'>Email</label>
                                <input type="text" name="email" placeholder='email@domain.com' defaultValue={teacher.email} {...register("email", { required: true })} className="px-3 py-2 placeholder:text-gray-300 text-black" />
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label htmlFor="" className="mb-2">Status</label>
                                <select name="status" id="" {...register("status")} defaultValue={teacher.status} className="px-3 py-2.5 placeholder:text-gray-300 text-black">
                                    <option value="active" className="px-3 py-2 placeholder:text-gray-300">Active</option>
                                    <option value="inactive" className="px-3 py-2 placeholder:text-gray-300">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit">Update</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const { data: teachers } = await supabase.from("teachers").select('id')

    const paths = teachers.map(teacher => ({
        params: {
            id: teacher.id.toString()
        }
    }))

    // console.log(paths)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const idTeacher = context.params.id

    const { data: teacher } = await supabase.from("teachers").select("*").eq('id', idTeacher).single()

    return {
        props: {
            teacher
        }
    }
}

export default UserInformation