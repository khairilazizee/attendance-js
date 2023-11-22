import Image from 'next/image'
import React from 'react'
import { MdLens, MdPersonPin } from 'react-icons/md'

const Attendance = () => {
    return (
        <div className="bg-[color:var(--bgSoft)] p-5 rounded-xl">
            <h2 className="mb-5 font-extralight text-[color:var(--textSoft)] text-2xl">Latest Attendance</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <td className="p-2.5">Name</td>
                        <td className="p-2.5">Date</td>
                        <td className="p-2.5">Time</td>
                        <td className="p-2.5">Status</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2.5">
                            <div className="flex gap-2.5 items-center">
                                <MdPersonPin size={25} />
                                John Doellah
                            </div>
                        </td>
                        <td className="p-2.5">
                            <span>20/11/2023</span>
                        </td>
                        <td className="p-2.5">
                            <span>7.25 AM</span>
                        </td>
                        <td className="p-2.5">
                            <span className="flex items-center gap-2.5">
                                Attend
                                <MdLens className="text-green-500" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2.5">
                            <div className="flex gap-2.5 items-center">
                                <MdPersonPin size={25} />
                                Mek Cena
                            </div>
                        </td>
                        <td className="p-2.5">
                            <span>20/11/2023</span>
                        </td>
                        <td className="p-2.5">
                            <span>8.00 AM</span>
                        </td>
                        <td className="p-2.5">
                            <span className="flex items-center gap-2.5">
                                Attend
                                <MdLens className="text-red-500" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2.5">
                            <div className="flex gap-2.5 items-center">
                                <MdPersonPin size={25} />
                                Rikishow
                            </div>
                        </td>
                        <td className="p-2.5">
                            <span>20/11/2023</span>
                        </td>
                        <td className="p-2.5">
                            <span>7.00 AM</span>
                        </td>
                        <td className="p-2.5">
                            <span className="flex items-center gap-2.5">
                                Attend
                                <MdLens className="text-green-500" />
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Attendance