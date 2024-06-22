import React, { useContext } from 'react'
import { TaskContext } from '../../Context/Context'
import * as B from './Styles'
import {FaSun, FaMoon} from 'react-icons/fa'

export const ButtonTheme = () => {

    const {theme, setTheme} = useContext(TaskContext)

  return (
    <B.buttonContent>
        <input type="checkbox" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}  />
        <span className="slider">
          <div className="icons">
              <FaSun/>
              <FaMoon/>
          </div>
        </span>
    </B.buttonContent>
  )
}
