import React, { useEffect, useState } from 'react'
import { Spinner, Table } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Rates() {
    const [loading, setloading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;

    const [ratesData, setratesData] = useState()

    const notifyFailure = (message) =>
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    useEffect(() => {
        axios.get('https://pluralcode.institute/pluralcode_apis/api/list_courses_details')
            .then((res) => {
                console.log(res.data.result)
                setratesData(res.data.result)
            }).catch((error) => {
                notifyFailure(error?.response?.data?.message || error?.response?.statusText)
            })
    }, [])

    console.log(ratesData)

    return (
        <section className='h-fit w-full py-12'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <h1 className='text-center text-3xl md:text-5xl font-bold text-[#232057] mb-8'>Tuition Rates</h1>
            <div className="w-11/12 mx-auto my-8">
                <h3 className='text-lg font-bold text-[#232057] ml-6'>DATA SCHOOL:</h3>
                <div className='w-11/12 mx-auto mt-4'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                Course
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Full Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Part Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Duration
                            </Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                ratesData?.data.length > 0 ?
                                    ratesData?.data.map((item) => (
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.course_fee}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.part_payment}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item?.duration}
                                            </Table.Cell>
                                        </Table.Row>
                                    )) : <Spinner
                                        color="failure"
                                        aria-label="Failure spinner example"
                                    />
                            }

                        </Table.Body>
                    </Table>
                </div>
            </div>
            <div className="w-11/12 mx-auto my-8">
                <h3 className='text-lg font-bold text-[#232057] ml-6'>SOFTWARE SCHOOL:</h3>
                <div className='w-11/12 mx-auto mt-4'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                Course
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Full Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Part Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Duration
                            </Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                ratesData?.software.length > 0 ?
                                    ratesData?.software.map((item) => (
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.course_fee}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.part_payment}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item?.duration}
                                            </Table.Cell>
                                        </Table.Row>
                                    )) : <Spinner
                                        color="failure"
                                        aria-label="Failure spinner example"
                                    />
                            }

                        </Table.Body>
                    </Table>
                </div>
            </div>
            <div className="w-11/12 mx-auto my-8">
                <h3 className='text-lg font-bold text-[#232057] ml-6'>CLOUD SCHOOL:</h3>
                <div className='w-11/12 mx-auto mt-4'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                Course
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Full Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Part Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Duration
                            </Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                ratesData?.cloud.length > 0 ?
                                    ratesData?.cloud.map((item) => (
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.course_fee}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.part_payment}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item?.duration}
                                            </Table.Cell>
                                        </Table.Row>
                                    )) : <Spinner
                                        color="failure"
                                        aria-label="Failure spinner example"
                                    />
                            }

                        </Table.Body>
                    </Table>
                </div>
            </div>
            <div className="w-11/12 mx-auto my-8">
                <h3 className='text-lg font-bold text-[#232057] ml-6'>PRODUCT SCHOOL:</h3>
                <div className='w-11/12 mx-auto mt-4'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                Course
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Full Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Part Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Duration
                            </Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                ratesData?.product.length > 0 ?
                                    ratesData?.product.map((item) => (
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.course_fee}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.part_payment}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item?.duration}
                                            </Table.Cell>
                                        </Table.Row>
                                    )) : <Spinner
                                        color="failure"
                                        aria-label="Failure spinner example"
                                    />
                            }

                        </Table.Body>
                    </Table>
                </div>
            </div>
            <div className="w-11/12 mx-auto my-8">
                <h3 className='text-lg font-bold text-[#232057] ml-6'>PRODUCT SCHOOL:</h3>
                <div className='w-11/12 mx-auto mt-4'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                Course
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Full Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Part Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Duration
                            </Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                ratesData?.product.length > 0 ?
                                    ratesData?.product.map((item) => (
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.course_fee}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.part_payment}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item?.duration}
                                            </Table.Cell>
                                        </Table.Row>
                                    )) : <Spinner
                                        color="failure"
                                        aria-label="Failure spinner example"
                                    />
                            }

                        </Table.Body>
                    </Table>
                </div>
            </div>
            <div className="w-11/12 mx-auto my-8">
                <h3 className='text-lg font-bold text-[#232057] ml-6'>DIPLOMA SCHOOL(data)</h3>
                <div className='w-11/12 mx-auto mt-4'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                Course
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Full Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Part Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Duration
                            </Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                ratesData?.diploma?.diploma_data?.length > 0 ?
                                   ratesData?.diploma?.diploma_data?.map((item) => (
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.course_fee}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.part_payment}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item?.duration}
                                            </Table.Cell>
                                        </Table.Row>
                                    )) : <Spinner
                                        color="failure"
                                        aria-label="Failure spinner example"
                                    />
                            }

                        </Table.Body>
                    </Table>
                </div>
            </div>
            <div className="w-11/12 mx-auto my-8">
                <h3 className='text-lg font-bold text-[#232057] ml-6'>DIPLOMA SCHOOL(Software)</h3>
                <div className='w-11/12 mx-auto mt-4'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                Course
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Full Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Part Payment Plan
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Duration
                            </Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                ratesData?.diploma?.diploma_software?.length > 0 ?
                                    ratesData?.diploma?.diploma_software?.map((item) => (
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.course_fee}
                                            </Table.Cell>
                                            <Table.Cell>
                                                ₦{item?.part_payment}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item?.duration}
                                            </Table.Cell>
                                        </Table.Row>
                                    )) : <Spinner
                                        color="failure"
                                        aria-label="Failure spinner example"
                                    />
                            }

                        </Table.Body>
                    </Table>
                </div>
            </div>
        </section>
    )
}

export default Rates