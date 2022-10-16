import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"

function BackBtn() {
    return (
        <div className='flex items-center' onClick={() => window.history.go(-1)
        }>
            <AiOutlineArrowLeft color="#323232" size={20} />
            <h5 className='ml-2'>Go Back</h5>
        </div>
    )
}

export default BackBtn