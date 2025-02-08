import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './layouts/Footer/Footer'
import Header from './layouts/Header/Header'
import Cart from './pages/Cart'
import Category from './pages/Category'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import SingleRoute from './pages/SingleRoute'
import Wishlist from './pages/Wishlist'
import PrivateRoute from './routes/PrivateRoute'

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/category/:slug' element={<Category />} />
					<Route path='/single-route/:id' element={<SingleRoute />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route element={<PrivateRoute />}>
						<Route path='/profile' element={<Profile />} />
					</Route>
					<Route path='/wishlist' element={<Wishlist />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
