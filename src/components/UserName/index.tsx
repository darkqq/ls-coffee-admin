import React, { FC } from 'react'

type UserNameProps = {
  name: string
  admin: boolean
}

const UserName: FC<UserNameProps> = ({ name, admin }) => {
  return (
    <div>
      {admin ? name + ' (Администратор)' : name ? name : 'Гость'}
    </div>
  )
}

export default UserName