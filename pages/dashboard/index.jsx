import React from 'react'
import Card from '../components/dashboard/card/card'
import Chart from '../components/dashboard/chart/chart'
import Attendance from '../components/dashboard/attendance/attendance'
import Layout from '../components/layout'

const Dashboard = () => {
    return (
        <Layout titleSEO="Dashboard" descSEO="Dashboard">
            <div className="flex gap-5 mt-5">
                <div className="flex flex-col gap-5 w-full">
                    <div id="cards" className="flex gap-5 justify-between">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <Attendance />
                    <Chart />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard