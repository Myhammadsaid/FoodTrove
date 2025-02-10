import Cart from './pages/Cart'
import Category from './pages/Category'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import SingleRoute from './pages/SingleRoute'
import Wishlist from './pages/Wishlist'
import PrivateRoute from './routes/PrivateRoute'

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/category/:slug', element: <Category /> },
	{ path: '/single-route/:id', element: <SingleRoute /> },
	{ path: '/login', element: <Login /> },
	{ path: '/register', element: <Register /> },
	{ path: '/wishlist', element: <Wishlist /> },
	{ path: '/cart', element: <Cart /> },
	{
		path: '/profile',
		element: (
			<PrivateRoute>
				<Profile />
			</PrivateRoute>
		),
	},
]

export default routes
