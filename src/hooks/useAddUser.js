import { useEffect, useState } from 'react'
import { api } from '../api'

export const useAddUser = () => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem('user'))
		const PostUser = async () => {
			try {
				const response = await api.post('/users/add', userInfo)
				setUser(response.data)
			} catch (error) {
				console.log('Error >>', error)
			}
		}
		PostUser()
	}, [])

	return { user }
}
