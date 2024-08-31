import React, { useContext } from 'react'
import * as H from './Styles'
import { TbLogout } from "react-icons/tb";
import { TaskContext } from '../../Context/Context';

export const Header = () => {
  const {logoutUser} = useContext(TaskContext)

  return (
    <H.Header>
      <H.logoContent>
        <p>TaskView</p>
      </H.logoContent>
      
      <H.iconsContent>
        <TbLogout className='logouticon' size={32} onClick={logoutUser}/>
      </H.iconsContent>
    </H.Header>
  )
}
