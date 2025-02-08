import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs'
import { IoMdHeart } from 'react-icons/io'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAddCart } from '../../hooks/useAddCart'
import { useAuthUser } from '../../hooks/useAuthUser'

const WishlistItem = () => {
	const navigate = useNavigate()
	const [data, setData] = useState(
		JSON.parse(localStorage.getItem('wishlist')) || []
	)
	const [productId, setProductId] = useState(null)
	const { userInfo } = useAuthUser()
	const {} = useAddCart({ productId, userInfo })

	const itemStar = rating => {
		if (rating == 5) {
			return <img src='/images/rating5.png' alt='rating-5' />
		} else if (rating == 4) {
			return <img src='/images/rating4.png' alt='rating-4' />
		} else if (rating == 3) {
			return <img src='/images/rating3.png' alt='rating-3' />
		} else if (rating == 2) {
			return <img src='/images/rating2.png' alt='rating-2' />
		} else if (rating == 1) {
			return <img src='/images/rating1.png' alt='rating-1' />
		}
	}

	const handleDeleteItem = id => {
		const filterItem = data.filter(item => item.id !== id)
		localStorage.setItem('wishlist', JSON.stringify(filterItem))
		setData(filterItem)
	}

	return (
		<section className='products'>
			<div className='container'>
				{data?.length ? (
					<>
						<h1 className='products__title'>Wishlist</h1>
						<div className='products__items'>
							{data.map(item => (
								<div key={item.id} className='products__item'>
									<img
										className='products__item__img'
										src={item.thumbnail}
										alt={item.title}
									/>
									<div className='products__item__content'>
										<span className='products__category'>{item.category}</span>
										<NavLink to={`/single-route/${item.id}`}>
											<h4 className='products__item__title'>{item.title}</h4>
										</NavLink>
										<div className='products__ratings'>
											{itemStar(Math.floor(item.rating))}
											<span>
												({item.stock > 0 ? item.stock : 'Нет в наличии'})
											</span>
										</div>
										<div className='products__prices'>
											<div className='products__price'>
												<span>{item.price}$</span>
												<s>{Math.floor(item.price * 1.2)}$</s>
											</div>
											<button
												disabled={item.stock <= 0}
												onClick={() =>
													userInfo ? setProductId(item.id) : navigate('/login')
												}
												className='products__cart-btn'
											>
												<BsCart2 />
												Add
											</button>
										</div>
									</div>
									<button
										onClick={() => handleDeleteItem(item.id)}
										className='products__wishlist-btn'
									>
										<IoMdHeart />
									</button>
								</div>
							))}
						</div>
					</>
				) : (
					<h1 className='products__title'>Wishlist Not Found</h1>
				)}
			</div>
		</section>
	)
}

export default WishlistItem
