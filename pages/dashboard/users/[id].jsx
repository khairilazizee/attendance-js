import { supabase } from '@/supabase'
import React from 'react'
import Layout from '@/pages/components/layout'

const UserInformation = ({ teacher }) => {
    return (
        <Layout titleSEO="Teacher's Information" descSEO="">
            <div>{JSON.stringify(teacher, null, 2)}</div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const { data: teachers } = await supabase.from("tbl_teachers").select('id')

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

    const { data: teacher } = await supabase.from("tbl_teachers").select("*").eq('id', idTeacher).single()

    return {
        props: {
            teacher
        }
    }
}

export default UserInformation