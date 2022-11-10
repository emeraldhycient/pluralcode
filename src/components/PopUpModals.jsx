import React, { useState, useEffect } from 'react'
import { Modal } from 'flowbite-react'

import styles from "./PopUpModals.module.css"
import cancel from "../assets/menux.svg"
import { checkNofiticationSent } from '../services/notificationHandler'


function PopUpModals({ data }) {

    const [showModal, setshowModal] = useState(false)

    useEffect(() => {
        const state = checkNofiticationSent(data)
        console.log(state)
        setshowModal(state)
        sessionStorage.setItem(data.id, JSON.stringify(data))
    }, [])


    return (
        <div>
            <Modal
                show={showModal}
                size="md"
                popup={true}
                onClose={() => setshowModal(false)}
            >
                <Modal.Body color='black'>
                    <div className={styles.modalOne}>
                        <div className={data.type !== "discount" ? styles.modalOneHeader : styles.modalTwoHeader}>
                            <div className="w-full flex justify-end p-3" onClick={() => setshowModal(false)}>
                                <img src={cancel} alt="" />
                            </div>
                        </div>
                        <div className={styles.modalOneBody}>
                            <h3 className='text-[16px] font-bold text-[#222057]'>{data?.title}</h3>
                            <p className='text-sm text-gray-500'>
                                {data?.body}
                            </p>
                            {
                                data?.type !== "discount" ? < button
                                    className="bg-amber-500 text-[16px] text-white px-8 py-2 rounded w-fit  mx-auto lg:w-fit flex justify-center items-center mt-3"
                                    data-aos="fade-right"
                                    data-aos-duration="2000"
                                >
                                    {/* <Link to={course.link} className="flex items-center"> */}
                                    <a href="/student/tv" className="flex items-center">
                                        Join Webseries
                                    </a>
                                </button> : < button
                                    className="bg-amber-500 text-[16px] text-white px-8 py-2 rounded w-fit  mx-auto lg:w-fit flex justify-center items-center mt-3"
                                    data-aos="fade-right"
                                    data-aos-duration="2000"
                                >
                                    {/* <Link to={course.link} className="flex items-center"> */}
                                    <a href="/student/dashboard" className="flex items-center">
                                        Apply
                                    </a>
                                </button>
                            }

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PopUpModals