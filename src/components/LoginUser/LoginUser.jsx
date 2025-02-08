import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { api } from '../../api'
import './LoginUser.css'

const LoginUser = () => {
	const navigate = useNavigate()
	const [username, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [isLogin, setIsLogin] = useState(false)

	const handleLogin = async e => {
		e.preventDefault()

		try {
			const response = await api.post('/auth/login', { username, password })
			localStorage.setItem('token', response.data.accessToken)
			setIsLogin(true)
			navigate('/profile')
			window.location.reload()
		} catch (error) {
			console.log('Error >>', error)
		} finally {
			setIsLogin(false)
		}
	}

	return (
		<section className='login'>
			<div className='container'>
				<div className='login__wrapper'>
					<div className='login__top'>
						<h1 className='login__title'>Login</h1>
						<NavLink to={'/register'} className='register__link'>
							Register
						</NavLink>
					</div>
					<form onSubmit={handleLogin} className='login__form'>
						<input
							value={username}
							onChange={e => setUserName(e.target.value)}
							type='text'
							className='login__input'
							placeholder='User name'
						/>
						<input
							value={password}
							onChange={e => setPassword(e.target.value)}
							type='password'
							className='login__input'
							placeholder='Password'
						/>
						<button type='submit' className='login__btn'>
							Login
						</button>
					</form>
					<p className='login__info'>
						emilys
						<br />
						emilyspass
					</p>
					{isLogin ? 'Loading...' : ''}
				</div>
			</div>
		</section>
	)
}

export default LoginUser
