import React, { useEffect } from 'react'
import { Tabs } from 'flowbite-react'
import DashboardLayout from '../../components/layout/DashboardLayout'

import Tab1 from './myCoursesTab1'
import Tab2 from './myCoursesTab2'

function Mycourses() {

    return (
        <DashboardLayout>

            <div className=" mt-6 md:mt-6">
                <Tabs.Group
                    aria-label="pluralcode schools"
                    style="underline"
                >
                    <Tabs.Item
                        title="My Courses"
                    >
                        <Tab1 />
                    </Tabs.Item>
                    <Tabs.Item
                        title="Certificates"
                    >
                        <Tab2 />
                    </Tabs.Item>


                </Tabs.Group>
            </div>

        </DashboardLayout>
    )
}

export default Mycourses
