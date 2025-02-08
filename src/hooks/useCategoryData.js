import { useEffect, useState } from 'react'
import { api } from '../api'

export const useCategoryData = () => {
	const [categoryItems, setCategoryItems] = useState([])

	useEffect(() => {
		const fetchCategoryItems = async () => {
			try {
				const response = await api.get('/products/categories')
				setCategoryItems(response.data)
			} catch (error) {
				console.error('Ошибка загрузки данных категорий:', error)
			}
		}

		fetchCategoryItems()
	}, [])

	return { categoryItems }
}
