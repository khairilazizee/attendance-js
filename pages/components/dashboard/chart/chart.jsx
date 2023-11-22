"use client"
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Monday',
        attend: 5,
        notattend: 8,
    },
    {
        name: 'Tuesday',
        attend: 10,
        notattend: 3,
    },
    {
        name: 'Wednesday',
        attend: 11,
        notattend: 2,
    },
    {
        name: 'Thursday',
        attend: 8,
        notattend: 5,
    },
    {
        name: 'Friday',
        attend: 13,
        notattend: 0,
    }
];


const Chart = () => {
    return (
        <div className="bg-[color:var(--bgSoft)] p-5 rounded-xl h-[450px]">
            <h2 className="mb-5 font-extralight text-[color:var(--textSoft)] text-2xl">Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={950}
                    height={600}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="attend" fill="green" />
                    <Bar dataKey="notattend" fill="red" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart