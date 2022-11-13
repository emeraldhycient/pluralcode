import React, { useState, useEffect } from 'react'
import { Modal } from "flowbite-react";
import { usePaystackPayment } from 'react-paystack';
import { BsCheck2Circle } from "react-icons/bs"
import { useParams } from 'react-router-dom'

import CustomButton from '../CustomButton'
import successmodal from '../../store/successmodal';
import axiosClient from '../../services/apiClient';


function PaymentCard() {

    const DashboardData = JSON.parse(sessionStorage.getItem("dashboard"))


    const { course, id } = useParams()

    useEffect(() => {
        const fetchData = async () => {

            const data = new FormData();
            data.append("nav", "payment_status")
            data.append("course_id", id)

            try {
                const res = await axiosClient.post(`/student/get_enrolled_course_details`, data);
                console.log(res.data)
                setchoiceOfPayment({
                    amount: res.data.balance,
                    fee: res.data.course_fee
                })
            } catch (error) {
                console.error(error.response)
            }
        }

        fetchData()
    }, [])


    // store the if student wants full or half payment
    const [choiceOfPayment, setchoiceOfPayment] = useState()

    // paymentmethod 
    const [selectedPaymentmethod, setselectedPaymentmethod] = useState("card")
    const [isModalShowing, setisModalShowing] = useState(false)

    const isModalShowingSuccess = successmodal((state) => state.modal)
    const toggleModalShowing = successmodal((state) => state.toggleModal)

    //agreed to student policy
    const [hasAgreed, sethasAgreed] = useState(false)



    const makePayment = async () => {


        var data = new FormData();
        // data.append('skills', course);
        // data.append('course_cohort', cohort);
        // data.append('current_location', currentLocation);
        // data.append('highest_academy_level', academicLevel);
        // data.append('payment_choice', paymentBreakdown?.mode);
        data.append('amount_paid', paymentBreakdown?.amount);
        data.append('payment_type', selectedPaymentmethod);
        data.append('course_id', id);

        try {
            const response = await axiosClient.post("/student/balance_payment", data)
            console.log(response)
            toggleModalShowing()
        } catch (error) {
            console.log(error.response.data)
        }

    }


    const BankTransferCard = () => {
        return (
            <div className="">
                <div className="border border-gray-200 w-full rounded-[8px] px-4 md:px-8 py-12">
                    <h4 className='text-[#1E1E1E] text-[22px] mb-2'>Bank Details</h4>
                    <h4 className='text-[#1E1E1E] text-[18px] mb-2'>{DashboardData?.bank_name}</h4>
                    <div className="flex items-center mb-1">
                        <h4 className='text-[#1E1E1E] text-[18px]'>Account Name: </h4>
                        <p className='text-[#1E1E1E] text-[16px] mx-2'>{DashboardData?.bank_account_name}</p>
                    </div>
                    <div className="flex items-center mb-1">
                        <h4 className='text-[#1E1E1E] text-[18px]'>Account Number: </h4>
                        <p className='text-[#1E1E1E] text-[16px] mx-2'>{DashboardData?.bank_account_number}</p>
                    </div>

                </div>
                <Modal
                    show={isModalShowingSuccess}
                    size="md"
                    popup={true}
                    onClose={() => toggleModalShowing()}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <BsCheck2Circle className="mx-auto mb-4 h-14 w-14 text-green-400 " />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Payment submission successfull, we would review and revert at the earliest.
                            </h3>

                        </div>
                    </Modal.Body>
                </Modal>

                <div className="w-fit md:w-[20vw] mt-6" onClick={() => makePayment()}>
                    <button className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded w-[100%] mx-auto lg:mx-0 flex justify-center items-center" >Payment Sent</button>
                </div>
            </div>
        )
    }



    const config = {
        reference: (new Date()).getTime().toString(),
        email: DashboardData.email,
        amount: choiceOfPayment?.amount,
        publicKey: DashboardData?.paystack_api_key,
    };

    // you can call this function anything
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        makePayment()
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const PayWithCard = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <div>
                <Modal
                    show={isModalShowingSuccess}
                    size="md"
                    popup={true}
                    onClose={() => toggleModalShowing()}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <BsCheck2Circle className="mx-auto mb-4 h-14 w-14 text-green-400 " />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Payment submission successfull, we would review and revert at the earliest.
                            </h3>

                        </div>
                    </Modal.Body>
                </Modal>
                <button onClick={() => {
                    initializePayment(onSuccess, onClose)
                }} className="bg-amber-500 text-[12px] text-white px-8 py-2 rounded w-[100%]  lg:mx-0 flex justify-center items-center w-fit md:w-[20vw]">Pay  N{choiceOfPayment?.amount} Now</button>
            </div>
        );
    };


    return (
        <div className='h-[400px] w-full md:w-[100%] lg:w-[70%] mx-auto md:bg-[#F5F6FA] bg-white rounded-[8px] flex flex-col justify-center items-center text-center md:p-12 lg:p-32'>
            {choiceOfPayment?.fee > 0 ?
                <>
                    <h4 className='text-[18px] text-[#323232] mt-[12px]'>Total Amount Paid</h4>
                    <h1 className='text-[#222057] text-[40px] font-semibold mt-[12px]'>N{choiceOfPayment?.fee}</h1>
                    <h4 className='text-[18px] text-[#323232] mt-[12px]'>Outstanding Payment for
                        {course}:<span className='text-[#323232] font-bold'> N{choiceOfPayment?.amount}</span></h4>
                    {
                        choiceOfPayment?.amount > 0 ? <div className="mt-[12px]" onClick={() => setisModalShowing(true)}>
                            <CustomButton >Complete Payment</CustomButton>
                        </div> : ""
                    }

                    <Modal
                        show={isModalShowing}
                        size="md"
                        // popup={true}
                        onClose={() => setisModalShowing(!isModalShowing)}
                    >
                        <Modal.Header >
                            <h1 className='text-[#222057] text-[20px] mt-[12px]'>Complete Your Oustanding Payment</h1>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="">
                                <div className="pb-6 mt-3">
                                    <h4 className='text-[#222057] text-[18px]'>Payment Method</h4>
                                </div>
                                <div className="flex mb-5">
                                    <div className={`flex  mx-2 items-center `} onClick={() => setselectedPaymentmethod("card")}>
                                        <input type="radio" name="" id="" className='mr-2 text-amber-500' checked={selectedPaymentmethod === "card" ? true : false} />
                                        <label>credit card</label>
                                    </div>
                                    <div className={`flex  mx-2 items-center `} onClick={() => setselectedPaymentmethod("transfer")}>
                                        <input type="radio" name="" id="" className='mr-2 text-amber-500' checked={selectedPaymentmethod === "transfer" ? true : false} />
                                        <label>Bank Transfer</label>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center mt-6 mb-3" onClick={() => sethasAgreed((prev) => !prev)}>
                                <input type="checkbox" className='rounded-[8px] mr-4 text-amber-500' name="" id="" checked={hasAgreed} />
                                <p className='text-[12px]'>By clicking on make payment, you agree to our <a href="https://docs.google.com/document/d/1JQKbsYXrjyy3oxA3he2ErBc4BsDKYbRX_drhMdIRp24/edit?usp=sharing" target="_blank" className='text-blue-400'>students policy</a></p>
                            </div>
                            {
                                selectedPaymentmethod === "card" ? <PayWithCard /> : <BankTransferCard />

                            }
                        </Modal.Body>
                    </Modal>
                </> : "No outstanding debt"}
        </div>
    )
}

export default PaymentCard