import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthUser } from '../hooks/useAuthUser'

const PrivateRoute = ({ children }) => {
	const { userInfo, isLogin } = useAuthUser()

	if (isLogin) return <p>Загрузка...</p>

	return userInfo ? children : <Navigate to='/login' />
}

export default PrivateRoute
