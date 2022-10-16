import React, { useState, useEffect } from 'react'
import { Label, TextInput, Spinner } from "flowbite-react";
import { useParams } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai"


import BackBtn from '../../components/common/BackBtn'
import DashboardLayout from '../../components/layout/DashboardLayout'
import axiosClient from '../../services/apiClient';
import CustomButton from '../../components/CustomButton';


function Enrollment() {

    const { course } = useParams();


    const [academicLevel, setAcademicLevel] = useState("")
    const [currentLocation, setCurrentLocation] = useState("")
    const [enrollmentStage, setEnrollmentStage] = useState(1)
    const [cohort, setcohort] = useState("")

    const [cohorts, setcohorts] = useState([])


    // store the if student wants full or half payment
    const [choiceOfPayment, setchoiceOfPayment] = useState({ mode: "full_payment" })


    // fetch price for the cohort
    const [paymentBreakdown, setpaymentBreakdown] = useState({})


    useEffect(() => {
        const getCohort = async () => {

            try {
                const response = await axiosClient.post("/student/get_course_cohort", {
                    course: course
                })
                console.log(response)
                setcohorts(response.data)
            } catch (error) {
                console.log(error.response.data)
            }

        }

        getCohort();
    }, [])




    const payWithCredPal = () => {
        const checkout = new Checkout({
            key: 'Your Key', // Your Key
            amount: 50000,
            product: `${course}`,
            onClose: () => console.log('Widget closed'),
            onLoad: () => console.log('Widget loaded successfully'),
            onError: (error) => console.log(error),
            onSuccess: (data) => {
                success(data);
                checkout.close();
            },
        });
        checkout.setup();

        return checkout.open();
    };

    const success = (data) => console.log(data);


    useEffect(() => {

        const getCourseCohortPrice = async () => {

            try {
                const response = await axiosClient.post("/student/get_course_fee", {
                    course_cohort: cohort
                })
                console.log(response)
                setpaymentBreakdown(response.data)
            } catch (error) {
                console.log(error.response.data)
            }

        }

        getCourseCohortPrice()

    }, [cohort])








    const Applicationform = () => {
        return (
            <div className="bg-white rounded-[8px] h-fit mt-5 p-10 md:px-16 md:py-24">
                <div className="flex justify-between items-center mb-8">
                    <h3 className='text-[#222057] text-[25px]'>Apply For {course}</h3>
                    <div className="bg-[#F5F6FA] p-2 flex rounded-lg">
                        <h4 className='px-2'>{enrollmentStage}</h4>
                        <h4>of</h4>
                        <h4 className='px-2'>2</h4>
                    </div>
                </div>
                <div className="mb-6">
                    <h4 className='text-[#232323] text-[22px]'>Bio Details</h4>
                    <p className='text-[#232323] text-[16px]'>Kindly provide us with your correct info</p>
                </div>
                <form className="mt-3">
                    <div className="mb-3">
                        <div className="mb-2 block">
                            <Label htmlFor="skill" value="skill" />
                        </div>
                        <TextInput
                            id="skill"
                            type="text"
                            placeholder="Select Skill"
                            value={course}
                            onChange={(text) => setEmail(text.target.value)}
                            required={true}
                            disabled={true}

                        />
                    </div>
                    <div className="mb-3">
                        <div className="mb-2 block">
                            <Label htmlFor="Select Cohort" value="Select Cohort" />
                        </div>
                        <select
                            id="countries"
                            required={true}
                            className="w-full rounded-lg border-gray-300 text-gray-400"
                            value={cohort}
                            onChange={(text) => setcohort(text.target.value)}
                        >
                            <option>Select cohorts</option>

                            {
                                cohorts.map((cour) => (
                                    <option value={cour.name} key={cour.name}>
                                        {cour.name}
                                    </option>
                                ))
                            }

                        </select>
                    </div>
                    <div className="mb-3">
                        <div className="mb-2 block">
                            <Label htmlFor="Highest Academic Level" value="Highest Academic Level" />
                        </div>
                        <TextInput
                            id="Highest Academic Level"
                            type="text"
                            placeholder="Highest Academic Level"
                            value={academicLevel}
                            onChange={(text) => setAcademicLevel(text.target.value)}
                            required={true}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="mb-2 block">
                            <Label htmlFor="Current Location" value="Current Location" />
                        </div>
                        <TextInput
                            id="Current Location"
                            type="text"
                            placeholder="Enter current Location"
                            value={currentLocation}
                            onChange={(text) => setCurrentLocation(text.target.value)}
                            required={true}
                        />
                    </div>
                    <div className="w-fit md:w-[15%] mt-12" onClick={() => setEnrollmentStage(2)}>
                        <CustomButton>
                            Next <AiOutlineArrowRight color="white" size={23} className="ml-3" />
                        </CustomButton>
                    </div>
                </form>
            </div>
        )

    }




    const StudentLoanCard = () => {
        return (
            <div className="border border-gray-200 w-full rounded-[8px] px-8 py-12">
                <h4 className='text-[#232323] text-[22px]'>Student Loan</h4>
                <p className='text-[#232323] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo venenatis, dignissim quam purus rutrum nisi, eu. Ornare viverra neque risus volutpat commodo fermentum, cum. Magna netus iaculis odio eget ut ut justo. Pellentesque risus vivamus tincidunt et ut senectus id ut.
                    Scelerisque dui amet consequat, consectetur etiam viverra dictum id. In fermentum egestas mauris volutpat vitae diam. At a rhoncus amet, habitasse sagittis. Suspendisse eget phasellus pharetra adipiscing at. Enim, enim scelerisque ultrices arcu, magna in amet, imperdiet elementum. Libero ac urna, integer tellus luctus. Leo neque id tellus enim lectus fermentum.</p>
                <div className="w-fit mt-4">
                    <CustomButton onClick={() => payWithCredPal()} type="button">Pay With CredPal</CustomButton>
                </div>

            </div>
        )
    }



    const PaymentForm = () => {
        return (
            <div className="bg-white rounded-[8px] h-fit  mt-5 p-10 md:px-16 md:py-16">
                <div className="flex justify-between items-center mb-8">
                    <h3 className='text-[#222057] text-[25px]'>Apply For {course}</h3>
                    <div className="bg-[#F5F6FA] p-2 flex rounded-lg">
                        <h4 className='px-2'>{enrollmentStage}</h4>
                        <h4>of</h4>
                        <h4 className='px-2'>2</h4>
                    </div>
                </div>
                <div className="pb-6 border-b-[0.12rem] border-gray-200">
                    <h4 className='text-[#232323] text-[22px]'>Course Payment</h4>
                    <p className='text-[#232323] text-[16px]'>Kindly choose your prefered payment options</p>
                </div>
                <div className="pb-6 mt-3">
                    <h4 className='text-[#222057] text-[18px]'>Payment Choice</h4>
                    <p className='text-[#232323] text-[16px]'>Select the payment choice you prefer</p>
                </div>
                <div className="pb-12 grid grid-cols-1 md:grid-cols-2 items-center border-b-[0.12rem] border-gray-200">
                    <div className={` bg-[#F5F6FA] w-full md:w-[30vw] h-[200px] mb-4 rounded-[8px] mr-[3%] flex flex-col items-center justify-center ${choiceOfPayment.mode === "full_payment" ? " border border-green-300" : ""} `} onClick={(e) => setchoiceOfPayment({
                        mode: "full_payment",
                        amount: paymentBreakdown.course_fee
                    })}>
                        <h5 className='italics text-[#323232] text-[16px] mb-3'>Full Payment</h5>
                        <h4 className='text-[#222057] text-[16px] mb-3'>Course Price:{paymentBreakdown.course_fee}</h4>
                        <h4 className='text-[#222057] text-[16px] mb-3'>100 %: {paymentBreakdown.course_fee}</h4>
                    </div>
                    <div className={` bg-[#F5F6FA] w-full md:w-[30vw] h-[200px] mb-4 rounded-[8px] mr-[3%] flex flex-col items-center justify-center ${choiceOfPayment.mode === "part_payment" ? " border border-green-300" : "border-[0.223] border-green-300"} `} onClick={(e) => setchoiceOfPayment({
                        mode: "part_payment",
                        amount: paymentBreakdown.part_payment_initial_deposit
                    })}>
                        <h5 className='italics text-[#323232] text-[16px] mb-3'>Part Payment</h5>
                        <h4 className='text-[#222057] text-[16px] mb-3'>Course Price: N {paymentBreakdown.course_total_part_payment_fee}</h4>
                        <h4 className='text-[#222057] text-[16px] mb-3'>{paymentBreakdown.course_part_payment_percentage} : N{paymentBreakdown.part_payment_initial_deposit}</h4>
                    </div>
                </div>
                <div className="">
                    <div className="pb-6 mt-3">
                        <h4 className='text-[#222057] text-[18px]'>Payment Method</h4>
                        <p className='text-[#232323] text-[16px]'>Select the payment choice you prefer</p>
                    </div>
                    <StudentLoanCard />
                </div>
            </div>
        )
    }


    return (
        <DashboardLayout>
            <BackBtn />
            {
                enrollmentStage === 1 ?
                    <Applicationform /> : <PaymentForm />
            }
        </DashboardLayout>
    )
}

export default Enrollment