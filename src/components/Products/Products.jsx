import React, { useEffect, useState } from 'react'
import { BsCart2 } from 'react-icons/bs'
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAddCart } from '../../hooks/useAddCart'
import { useAuthUser } from '../../hooks/useAuthUser'
import { useCategoryData } from '../../hooks/useCategoryData'
import { useFetchData } from '../../hooks/useFetchData'
import { useGetWishlist } from '../../hooks/useGetWishlist'
import Loading from '../Loading/Loading'
import './Products.css'

const Products = () => {
	const navigate = useNavigate()
	const [itemId, setItemId] = useState('')
	const { categoryItems } = useCategoryData()
	const [cartId, setCartId] = useState('')
	const {
		data,
		loading,
		error,
		setLimitItem,
		categoryValue,
		setCategoryValue,
	} = useFetchData()
	const { wishlistData } = useGetWishlist({ itemId })
	const { userInfo } = useAuthUser()
	const {} = useAddCart({ userInfo, cartId })

	useEffect(() => {
		localStorage.setItem('category', categoryValue)
	}, [categoryValue])

	const filterCategory = categoryItems.map(item => (
		<option key={item.slug} value={item.slug} className='header__option'>
			{item.name}
		</option>
	))

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

	return (
		<section className='products'>
			<div className='container'>
				<div className='products__top'>
					<h1 className='products__title'>Popular Products</h1>
					<select
						value={categoryValue}
						onChange={e => setCategoryValue(e.target.value)}
						className='header__select'
					>
						<option value='all' className='header__option'>
							All products
						</option>
						{filterCategory}
					</select>
				</div>
				{error ? (
					<h1 className='products__error'>{error}</h1>
				) : loading ? (
					<Loading />
				) : (
					<>
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
													userInfo ? setCartId(item.id) : navigate('/login')
												}
												className='products__cart-btn'
											>
												<BsCart2 />
												Add
											</button>
										</div>
									</div>
									<button
										onClick={() => setItemId(item.id)}
										className='products__wishlist-btn'
									>
										{wishlistData?.some(element => element.id === item.id) ? (
											<IoMdHeart />
										) : (
											<IoIosHeartEmpty />
										)}
									</button>
								</div>
							))}
						</div>
						{categoryValue !== 'all' ? (
							<></>
						) : (
							<button
								className='products__btn'
								onClick={() => setLimitItem(prev => prev + 1)}
							>
								Learn more
							</button>
						)}
					</>
				)}
			</div>
		</section>
	)
}

export default Products
