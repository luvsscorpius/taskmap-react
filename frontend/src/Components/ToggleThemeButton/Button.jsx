import React, { useContext } from 'react'
import { TaskContext } from '../../Context/Context'
import * as B from './Styles'

export const ButtonTheme = () => {

    const {theme, setTheme} = useContext(TaskContext)

  return (
    <B.buttonContent>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle</button>
    </B.buttonContent>
  )
}
