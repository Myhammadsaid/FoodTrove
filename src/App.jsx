import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './layouts/Footer/Footer'
import Header from './layouts/Header/Header'
import routes from './routes'

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					{routes?.map(({ path, element }, index) => (
						<Route key={index} path={path} element={element} />
					))}
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
