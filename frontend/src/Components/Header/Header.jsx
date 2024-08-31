import React from 'react'
import * as H from './Styles'
import { TbLogout } from "react-icons/tb";

export const Header = () => {
  return (
    <H.Header>
      <H.logoContent>
        <p>TaskView</p>
      </H.logoContent>
      
      <H.iconsContent>
        <TbLogout className='logouticon' size={32}/>
      </H.iconsContent>
    </H.Header>
  )
}
