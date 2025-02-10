import { createContext } from 'react'

export const AuthContext = createContext()

import React from 'react'
import { useAuthUser } from '../hooks/useAuthUser'

const AuthProvider = ({ children }) => {
	const { userInfo } = useAuthUser()

	return (
		<AuthContext.Provider value={{ userInfo }}>{children}</AuthContext.Provider>
	)
}

export default AuthProvider
