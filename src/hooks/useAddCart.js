import { useEffect, useState } from 'react'
import { api } from '../api'

export const useAddCart = ({ userInfo, cartId }) => {
	const [cartData, setCartData] = useState(
		JSON.parse(localStorage.getItem('cart')) || []
	)

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartData))
	}, [cartData])

	useEffect(() => {
		if (!cartId) return

		const filterData = cartData?.filter(item => item.id !== cartId)
		setCartData(filterData)
		localStorage.setItem('cart', JSON.stringify(filterData))

		const fetchAddCart = async () => {
			try {
				const response = await api.post('/carts/add', {
					userId: userInfo?.id,
					// merge: true,
					products: [
						{
							id: cartId,
							quantity: 1,
						},
					],
				})
				setCartData(prevData => [...prevData, ...response.data.products])
				localStorage.setItem('cart', JSON.stringify(cartData))
			} catch (error) {
				console.log('Error >>', error)
			}
		}

		fetchAddCart()
	}, [cartId])

	return { cartData }
}
