import React from 'react'
import PhoneInput from 'react-phone-input-2'
import { NavLink } from 'react-router-dom'
import { useAddUser } from '../../hooks/useAddUser'
import { useGetFormValue } from '../../hooks/useGetFormValue'
import { initialState } from './initialState'
import './RegisterUser.css'

const RegisterUser = () => {
	const { formData, setFormData, handleChange } = useGetFormValue(initialState)
	const { user } = useAddUser()

	console.log(user)

	const handleSubmit = e => {
		e.preventDefault()
		formData.age = +formData.age
		let date = new Date().getFullYear() - formData.birthDate.split('-')[0]
		if (formData.age !== date) return alert('Ошибка с возрастом')
		localStorage.setItem('user', JSON.stringify(formData))
		setFormData(initialState)
	}

	return (
		<section className='register'>
			<div className='container'>
				<div className='register__top'>
					<h1 className='register__title'>Register</h1>
					<NavLink to={'/login'} className='login__link'>
						Login
					</NavLink>
				</div>
				<form onSubmit={handleSubmit} className='register__form'>
					<div>
						<label>Имя</label>
						<input
							value={formData.firstName}
							onChange={handleChange}
							required
							type='text'
							placeholder='Имя'
							name='firstName'
						/>
					</div>
					<div>
						<label>Фамилия</label>
						<input
							value={formData.lastName}
							onChange={handleChange}
							required
							type='text'
							placeholder='Фамилия'
							name='lastName'
						/>
					</div>
					<div>
						<label>Возраст</label>
						<input
							value={formData.age}
							onChange={handleChange}
							required
							type='number'
							placeholder='Возраст'
							name='age'
						/>
					</div>
					<div className='radio'>
						<label value='female' htmlFor='female'>
							Женщина
						</label>
						<input
							id='female'
							type='radio'
							name='gender'
							value='female'
							checked={formData.gender === 'female'}
							onChange={handleChange}
						/>
						<label value='male' htmlFor='male'>
							Мужчина
						</label>
						<input
							id='male'
							type='radio'
							name='gender'
							value='male'
							onChange={handleChange}
							checked={formData.gender === 'male'}
						/>
					</div>
					<div>
						<label>Электроная Почта</label>
						<input
							value={formData.email}
							onChange={handleChange}
							required
							type='email'
							placeholder='Электроная Почта'
							name='email'
						/>
					</div>
					<div>
						<PhoneInput
							value={formData.phone}
							onChange={value =>
								setFormData(prev => ({ ...prev, phone: value }))
							}
							country={'ru'}
						/>
					</div>
					<div>
						<label>Никнейм</label>
						<input
							value={formData.username}
							onChange={handleChange}
							required
							type='text'
							placeholder='Никнейм'
							name='username'
						/>
					</div>
					<div>
						<label>Пароль</label>
						<input
							value={formData.password}
							onChange={handleChange}
							required
							type='password'
							placeholder='Пароль'
							name='password'
						/>
					</div>
					<div>
						<label>День рождения</label>
						<input
							value={formData.birthDate}
							onChange={handleChange}
							required
							type='date'
							name='birthDate'
						/>
					</div>
					<button className='register__btn'>Submit</button>
				</form>
			</div>
		</section>
	)
}

export default RegisterUser
