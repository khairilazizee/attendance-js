import Layout from '@/pages/components/layout';
import Button from '@/pages/components/button/button';
import Search from '@/pages/components/search/search'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { MdPersonPin } from 'react-icons/md';
import { supabase } from '@/supabase';
import { NextSeo } from 'next-seo';

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

    // console.log(dataTeachers)

    return (
        <Layout titleSEO="Users" descSEO="Users">
            <div className="flex gap-5 mt-5">
                <div className="bg-[color:var(--bgSoft)] p-5 rounded-xl w-full">
                    <div className="flex items-center justify-between">
                        <Search placeholder="Search for a user" />
                        <Link href="/">
                            <Button title="+ Teacher" />
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
                                        <div className={`${teach.status === "active" ? "bg-green-500" : "bg-red-500"} rounded-md p-1 text-center uppercase text-sm`}>{teach.status}</div>
                                    </td>
                                    <td className="p-2.5">
                                        <div className="flex gap-2.5">
                                            <Link href="">
                                                <Button title="Edit" color="bg-red-500" />
                                            </Link>
                                            <Link href="">
                                                <Button title="Delete" color="bg-red-500" />
                                            </Link>
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
        .from('tbl_teachers')
        .select('*')

    return {
        props: {
            dataTeachers
        }
    }
}

export default Users