import React, { FC } from 'react'

type AvatarProps = {
  image?: string
  size?: string
}

const Avatar: FC<AvatarProps> = ({ image, size }) => {
  return (
    <div className={`avatar avatar-${size}`}>
      <img src={image? image : '/default-image'} alt="img" />
    </div>
  )
}

export default Avatar