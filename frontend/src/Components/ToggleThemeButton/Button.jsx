import React, { useContext } from 'react'
import { TaskContext } from '../../Context/Context'
import * as B from './Styles'
import {FaSun, FaMoon} from 'react-icons/fa'

export const ButtonTheme = () => {

    const {theme, setTheme} = useContext(TaskContext)

    console.log(theme)

  return (
    <B.buttonContent>
        <input type="checkbox"  />
        <span className="slider">
          <div className="icons">
              <FaSun/>
              <FaMoon/>
          </div>
        </span>
    </B.buttonContent>
  )
}
