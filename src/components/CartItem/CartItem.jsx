import React, { useState } from 'react'
import { GoTrash } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import './CartItem.css'

const CartItem = () => {
	const navigate = useNavigate()
	const [cartItems, setCartItems] = useState(
		JSON.parse(localStorage.getItem('cart')) || []
	)

	const handleDeleteAllCart = () => {
		localStorage.removeItem('cart')
		setCartItems([])
	}

	const handleDeleteCart = id => {
		const updatedCart = cartItems.filter(item => item.id !== id)
		setCartItems(updatedCart)
		localStorage.setItem('cart', JSON.stringify(updatedCart))
	}

	const handleQuantityChange = (id, change) => {
		const updatedCart = cartItems.map(item =>
			item.id === id
				? { ...item, quantity: Math.max(1, item.quantity + change) }
				: item
		)

		setCartItems(updatedCart)
		localStorage.setItem('cart', JSON.stringify(updatedCart))
	}

	return (
		<section className='cart'>
			<div className='container'>
				{cartItems.length ? (
					<div className='cart__wrapper'>
						<div className='cart__top'>
							<h1 className='cart__title'>
								Cart <span className='cart__length'>{cartItems.length}</span>
							</h1>
							<button
								className='cart__btn-delete'
								onClick={handleDeleteAllCart}
							>
								<GoTrash />
							</button>
						</div>
						<div className='cart__items'>
							{cartItems.map(item => (
								<div className='cart__item' key={item.id}>
									<img
										className='cart__img'
										src={item.thumbnail}
										alt={item.title}
									/>
									<div className='cart__item__content'>
										<h4 className='cart__item__title'>{item.title}</h4>
										<p className='cart__price'>{item.price}$</p>
									</div>
									<div className='cart__quantity'>
										<button onClick={() => handleQuantityChange(item.id, 1)}>
											+
										</button>
										<h4 className='cart__count'>{item.quantity}</h4>
										<button onClick={() => handleQuantityChange(item.id, -1)}>
											-
										</button>
									</div>
									<button
										className='cart__item__btn'
										onClick={() => handleDeleteCart(item.id)}
									>
										<GoTrash />
									</button>
								</div>
							))}
						</div>
						<div className='cart__bottom'>
							<p className='cart__total__price'>
								<span>Total</span>
								<span>
									{Math.floor(
										cartItems?.reduce(
											(acc, item) => acc + item.price * item.quantity,
											0
										)
									)}
									$
								</span>
							</p>
							<button
								onClick={() => navigate('/profile')}
								className='cart__registration'
							>
								Оформление
							</button>
						</div>
					</div>
				) : (
					<h1>Cart not found</h1>
				)}
			</div>
		</section>
	)
}

export default CartItem
