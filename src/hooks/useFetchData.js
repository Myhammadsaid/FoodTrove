import { useEffect, useState } from 'react'
import { api } from '../api'

export const useFetchData = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [limitItem, setLimitItem] = useState(1)
	const [categoryValue, setCategoryValue] = useState(
		localStorage.getItem('category') || 'all'
	)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				let url =
					categoryValue !== 'all'
						? `/products/category/${categoryValue}`
						: `/products?limit=${limitItem * 4}`
				const response = await api.get(url)
				setData(response.data.products)
			} catch (error) {
				setError(`Ошибка: ${error.message}`)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [categoryValue, limitItem])

	return { data, loading, error, setCategoryValue, categoryValue, setLimitItem }
}
