import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryItem from '../components/CategoryItem/CategoryItem'

const Category = () => {
	const { slug } = useParams()

	return <CategoryItem slug={slug} />
}

export default Category
