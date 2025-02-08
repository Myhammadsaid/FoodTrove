import React from 'react'
import { useSingleItem } from '../../hooks/useSingleItem'
import './RouteItem.css'

const RouteItem = ({ id }) => {
	const { routeItemInfo } = useSingleItem(id)

	return (
		<section className='single-route'>
			{routeItemInfo ? (
				<>
					<img
						src={routeItemInfo.thumbnail}
						alt={routeItemInfo.title}
						className='thumbnail'
					/>

					<div className='product-details'>
						<p>
							<strong>Title:</strong>
							{routeItemInfo.title}
						</p>
						<p>
							<strong>Brand:</strong> {routeItemInfo.brand}
						</p>
						<p>
							<strong>Category:</strong> {routeItemInfo.category}
						</p>
						<p>
							<strong>Description:</strong> {routeItemInfo.description}
						</p>
						<p>
							<strong>Price:</strong> ${routeItemInfo.price}
						</p>
						<p>
							<strong>Rating:</strong> {routeItemInfo.rating}
						</p>
						<p>
							<strong>Stock:</strong> {routeItemInfo.stock} available
						</p>
						<p>
							<strong>Return Policy:</strong> {routeItemInfo.returnPolicy}
						</p>
						<p>
							<strong>Shipping:</strong> {routeItemInfo.shippingInformation}
						</p>
					</div>

					<div className='product-images'>
						{routeItemInfo.images.map((image, index) => (
							<img
								key={index}
								src={image}
								alt={`product image ${index}`}
								className='product-image'
							/>
						))}
					</div>
				</>
			) : (
				<p>Loading product details...</p>
			)}
		</section>
	)
}

export default RouteItem
