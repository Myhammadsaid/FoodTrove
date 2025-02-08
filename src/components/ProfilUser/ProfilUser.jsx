import React from 'react'
import { useAuthUser } from '../../hooks/useAuthUser'
import './ProfilUser.css'

const ProfilUser = () => {
	const { userInfo, isLogin } = useAuthUser()

	const handleLogOut = () => {
		localStorage.clear()
		window.location.reload()
	}

	if (isLogin) return 'Загрузка...'

	return (
		<section className='profile'>
			<div className='container'>
				<h1>{userInfo?.firstName}</h1>
				<h4>{userInfo?.age}</h4>
				<button onClick={() => handleLogOut()}>LogOut</button>
			</div>
		</section>
	)
}

export default ProfilUser
