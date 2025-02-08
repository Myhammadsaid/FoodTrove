import { useEffect, useState } from 'react'
import { api } from '../api'

export const useAuthUser = () => {
	const [userInfo, setUserInfo] = useState(null)
	const [isLogin, setIsLogin] = useState(true)

	useEffect(() => {
		const UserAuth = async () => {
			const token = localStorage.getItem('token')

			if (!token) {
				setIsLogin(false)
				return
			}

			try {
				const response = await api.get('/auth/me', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				setUserInfo(response.data)
			} catch (error) {
				console.log('Error >>', error)
			} finally {
				setIsLogin(false)
			}
		}

		UserAuth()
	}, [])

	return { userInfo, isLogin }
}
