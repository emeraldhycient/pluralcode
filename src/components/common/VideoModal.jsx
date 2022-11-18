import React from 'react'
import styles from "./modal.module.css"

function VideoModal({ setismodalshowing, video_url }) {
    return (
        <div id="myModal" className={styles.Video_modal} onClick={() => setismodalshowing(true)}>
            <div className={`${styles.video_modal_content} rounded-3xl `}>
                {/* <span className={styles.video_modal_close} onClick={() => setismodalshowing((prev) => !prev)}>&times;</span> */}
                <video src={video_url ? video_url : 'https://res.cloudinary.com/gofitish/video/upload/v1658931157/videos/Plural_Code_-_Who_We_Are_y2csic.mp4'} controls className='max-h-[90vh] max-w-full rounded-xl' />
                {/* <video src='https://res.cloudinary.com/gofitish/video/upload/v1658931157/videos/Plural_Code_-_Who_We_Are_y2csic.mp4' controls className='h-full rounded-xl' /> */}
            </div>
        </div>
    )
}

export default VideoModal
