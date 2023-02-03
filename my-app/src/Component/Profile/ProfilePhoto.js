import React from 'react'
import myPhoto from './profile.jpg'
const ProfilePhoto = () => {
    return (
        <img src={myPhoto} alt="myPhoto" className='my-photo' />
    )
}

export default ProfilePhoto