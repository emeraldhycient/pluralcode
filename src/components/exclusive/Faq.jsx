import React from 'react'
import { Accordion } from "flowbite-react"

function Faq() {
    return (
        <Accordion >
            <Accordion.Panel>
                <Accordion.Title>
                    Are trainings online?</Accordion.Title>
                <Accordion.Content>

                    <p className="text-gray-500 dark:text-gray-400">
                        Trainings are strictly virtual.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Can I be mentored in my house ?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Trainings are generally taken virtual, however physical home mentorship is open based on negotiation  is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                    </p>

                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Can I pay in installments?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes payments on installments are allowed.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    How long are programs under the exclusive option?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Courses that normally take 6 months to learn normally will take only 3-4 months under the exclusive program                     </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Do you have certified mentors?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Our mentors are industry professionals who are tested and trusted
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    How many courses are available under the Exclusive program?                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        All our courses are available under the exclusive program.                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Can I learn more than one course?                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Students can learn more than one course but both courses have to be under the same field. E.g Product design /management                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}

export default Faq