import React, { useEffect, useState } from 'react'
import { useCategoryFilter } from '../../hooks/useCategoryFilter'
import './CategoryItem.css'

const CategoryItem = ({ slug }) => {
	const [priceItem, setPriceItem] = useState('')
	const { filterItems, setFilterItems, initialItems } = useCategoryFilter({
		slug,
	})

	const priceFilter = filterItems.map(item => item.price)
	const minPrice =
		priceFilter.length > 0 ? Math.min(...priceFilter) : 'Нет данных'
	const maxPrice =
		priceFilter.length > 0 ? Math.max(...priceFilter) : 'Нет данных'

	useEffect(() => {
		if (!priceItem) {
			setFilterItems(initialItems)
			return
		}

		const filteredItems = filterItems.filter(item =>
			item.price.toString().includes(priceItem)
		)

		setFilterItems(filteredItems)
	}, [priceItem])

	return (
		<section className='category'>
			<div className='container'>
				<h1 className='category__title'>Category - {slug}</h1>
				<form className='category__form'>
					<input
						required
						value={priceItem}
						onChange={e => setPriceItem(e.target.value)}
						type='number'
						placeholder={`от ${minPrice}$ до ${maxPrice}$`}
						className='category__input'
					/>
				</form>
				<div className='category__items'>
					{filterItems?.map(item => (
						<div className='category__item' key={item.id}>
							<img
								className='category__img'
								src={item.thumbnail}
								alt={item.title}
							/>
							<h4 className='category__item__title'>{item.title}</h4>
							<p className='category__price'>{item.price}$</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CategoryItem
