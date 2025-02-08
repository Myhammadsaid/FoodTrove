import { useEffect, useState } from 'react'
import { api } from '../api'

export const useCategoryFilter = ({ slug }) => {
	const [filterItems, setFilterItems] = useState([])
	const [initialItems, setInitialItems] = useState([])

	useEffect(() => {
		const CategoryFilter = async () => {
			try {
				let url = slug === 'all' ? '/products' : `/products/category/${slug}`
				const response = await api.get(url)
				setFilterItems(response.data.products)
				setInitialItems(response.data.products)
			} catch (error) {
				console.log('Error >>', error)
			}
		}
		CategoryFilter()
	}, [slug])

	return { filterItems, setFilterItems, initialItems }
}
