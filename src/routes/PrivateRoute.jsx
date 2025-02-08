import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthUser } from '../hooks/useAuthUser'

const PrivateRoute = () => {
	const { userInfo, isLogin } = useAuthUser()

	if (isLogin) return <p>Загрузка...</p>

	return userInfo ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
