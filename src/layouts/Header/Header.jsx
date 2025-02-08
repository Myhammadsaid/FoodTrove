import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { LuUser } from 'react-icons/lu'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthUser } from '../../hooks/useAuthUser'
import { useCategoryData } from '../../hooks/useCategoryData'
import { useFetchData } from '../../hooks/useFetchData'
import { useSearchData } from '../../hooks/useSearchData'
import './Header.css'

const Header = () => {
	const navigate = useNavigate()
	const [itemTitle, setItemTitle] = useState('')
	const { searchItems } = useSearchData(itemTitle)
	const { categoryItems } = useCategoryData()
	const { categoryValue, setCategoryValue } = useFetchData()
	const { userInfo, isLogin } = useAuthUser()

	const filterCategory = categoryItems.map(item => (
		<option
			onClick={() => navigate(`/category/${item.slug}`)}
			key={item.slug}
			value={item.slug}
			className='header__option'
		>
			{item.name}
		</option>
	))

	const filterSearch = searchItems.map(item => (
		<li key={item.id}>
			<NavLink onClick={() => setItemTitle('')} to={`/single-route/${item.id}`}>
				{item.title}
			</NavLink>
			<img src={item.thumbnail} alt={item.title} />
		</li>
	))

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<NavLink className='header__logo' to={'/'}>
						<img src='/images/logo.png' alt='FoodTrove' />
					</NavLink>
					<form className='header__form'>
						<input
							type='search'
							value={itemTitle}
							onChange={e => setItemTitle(e.target.value)}
							placeholder='Поиск предметов...'
							className='header__input'
						/>
						<select
							value={categoryValue}
							onChange={e => setCategoryValue(e.target.value)}
							className='header__select'
						>
							<option
								onClick={() => navigate(`/category/all`)}
								value='all'
								className='header__option'
							>
								All products
							</option>
							{filterCategory}
						</select>
						<button type='button' className='header__btn'>
							<IoSearchOutline />
						</button>
						{itemTitle ? (
							<div className='header__search__items'>
								<ul>{filterSearch}</ul>
							</div>
						) : (
							<></>
						)}
					</form>
					<div className='header__items'>
						<NavLink
							to={isLogin ? 'loading' : userInfo ? '/profile' : '/login'}
							className='header__item'
						>
							<LuUser />
							<span>
								{isLogin ? 'loading' : userInfo ? 'Profill' : 'Account'}
							</span>
						</NavLink>
						<NavLink to={'/wishlist'} className='header__item'>
							<IoIosHeartEmpty />
							<span>Wishlist</span>
						</NavLink>
						<NavLink to={'/cart'} className='header__item'>
							<BsCart2 />
							<span>Cart</span>
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
