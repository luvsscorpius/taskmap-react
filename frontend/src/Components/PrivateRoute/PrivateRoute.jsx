import React, { useContext } from 'react'
import { TaskContext } from '../../Context/Context'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
    const { signed } = useContext(TaskContext)

    return signed ? <Outlet /> : <Navigate to="/" />
}
