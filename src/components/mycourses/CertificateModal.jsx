import React from 'react'
import styles from "./modal.module.css"

function CertificateModal({ setismodalshowing, url }) {
    return (
        <div id="myModal" className={styles.Video_modal} onClick={() => setismodalshowing((prev) => !prev)}>
            <div className={`${styles.video_modal_content} rounded-3xl `}>
                <img src={url ? url : 'https://i.im.ge/2022/10/20/26SwxM.Frame-1037.png'} controls className='max-h-[90vh] max-w-full rounded-xl' />
            </div>
        </div>
    )
}

export default CertificateModal
