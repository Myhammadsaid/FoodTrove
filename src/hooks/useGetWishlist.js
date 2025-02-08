import { useEffect, useState } from 'react'
import { api } from '../api'

export const useGetWishlist = ({ itemId }) => {
	const [wishlistData, setWishlistData] = useState(
		JSON.parse(localStorage.getItem('wishlist')) || []
	)

	useEffect(() => {
		localStorage.setItem('wishlist', JSON.stringify(wishlistData))
	}, [wishlistData])

	useEffect(() => {
		if (!itemId) return

		const GetWishlist = async () => {
			try {
				const response = await api.get(`/products/${itemId}`)
				const filterWishlist = wishlistData.filter(
					item => item.id !== response.data.id
				)
				setWishlistData(filterWishlist)
				setWishlistData(prev => [...prev, response.data])
			} catch (error) {
				console.log('Error >>', error)
			}
		}
		GetWishlist()
	}, [itemId])

	return { wishlistData }
}
