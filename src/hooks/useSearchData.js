import { useEffect, useState } from 'react'
import { api } from '../api'

export const useSearchData = title => {
	const [searchItems, setSearchItems] = useState([])

	useEffect(() => {
		const FetchSearch = async () => {
			const response = await api.get(`/products/search?q=${title}`)
			setSearchItems(response.data.products)
		}

		FetchSearch()
	}, [title])

	return { searchItems }
}
