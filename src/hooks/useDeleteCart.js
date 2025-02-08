import { useEffect, useState } from 'react'
import { api } from '../api'

export const handleDeleteCart = () => {
	const [cartItems, setCartItems] = useState(
		JSON.parse(localStorage.getItem('cart')) || []
	)
	useEffect(() => {
		const fetchDeleteCart = async () => {
			try {
				const response = await api.delete(`/carts/${userInfo?.id}`)
				localStorage.setItem('cart', JSON.stringify(response.data.products))
				setCartItems(response.data.products)
			} catch (error) {
				console.log('Error >>', error)
			}
		}

		fetchDeleteCart()
	}, [])
	return { cartItems }
}
