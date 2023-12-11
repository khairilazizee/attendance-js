import Layout from '@/pages/components/layout';
import Button from '@/pages/components/button/button';
import Search from '@/pages/components/search/search'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { MdLens, MdPersonPin } from 'react-icons/md';
import { supabase } from '@/supabase';
import { useRouter } from 'next/router';

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    // Use Intl.DateTimeFormat to format the date
    const formattedDate = new Intl.DateTimeFormat('en-UK', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }).format(date);

    return formattedDate;
};


const Users = ({ dataTeachers }) => {
    const router = useRouter();
    // console.log(dataTeachers)

    const deleteUser = async teachId => {
        // console.log(teachId)
        const shouldRemove = confirm("are you sure you want to delete?")

        if (shouldRemove) {
            try {
                const { error } = await supabase
                    .from('teachers')
                    .delete()
                    .eq('id', teachId)
            } catch (error) {
                throw new Error(error)
            }
        }

        router.push("/dashboard/users");
    }


    return (
        <Layout titleSEO="Users" descSEO="Users">
            <div className="flex gap-5 mt-5">
                <div className="bg-[color:var(--bgSoft)] p-5 rounded-xl w-full">
                    <div className="flex items-center justify-between">
                        <Search placeholder="Search for a user" />
                        <Link href="/dashboard/users/add">
                            <Button title="+ User" />
                        </Link>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="p-2.5">Name</td>
                                <td className="p-2.5">ID No.</td>
                                <td className="p-2.5">Email</td>
                                <td className="p-2.5">Created At</td>
                                <td className="p-2.5">Status</td>
                                <td className="p-2.5">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTeachers.map((teach, index) => (
                                <tr key={index}>
                                    <td className="p-2.5">
                                        <div className="flex gap-2.5 items-center capitalize">
                                            <MdPersonPin size={25} />
                                            {teach.name}
                                        </div>
                                    </td>
                                    <td className="p-2.5">{teach.ic_no}</td>
                                    <td className="p-2.5">{teach.email}</td>
                                    <td className="p-2.5">{formatDate(teach.created_at)}</td>
                                    <td className="p-2.5">
                                        <div className="flex items-center gap-2">
                                            <MdLens className={`${teach.status === "active" ? "text-green-500" : "text-red-500"}`} />
                                            {teach.status}
                                        </div>
                                    </td>
                                    <td className="p-2.5">
                                        <div className="flex gap-2.5">
                                            <Link href={`/dashboard/users/${teach.id}`}>
                                                <Button title="View" color="bg-green-500" />
                                            </Link>
                                            <a onClick={() => deleteUser(teach.id)}>
                                                <Button title="Delete" color="bg-red-500" />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {

    let { data: dataTeachers, error } = await supabase
        .from('teachers')
        .select('*')

    return {
        props: {
            dataTeachers
        }
    }
}

export default Users