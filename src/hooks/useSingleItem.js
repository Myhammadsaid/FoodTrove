import { useEffect, useState } from 'react'
import { api } from '../api'

export const useSingleItem = id => {
	const [routeItemInfo, setRouteItemInfo] = useState(null)

	useEffect(() => {
		const fetchRouteItem = async () => {
			const response = await api.get(`/products/${id}`)
			setRouteItemInfo(response.data)
		}
		fetchRouteItem()
	}, [id])

	return { routeItemInfo }
}
