import React from 'react'
import { useParams } from 'react-router-dom'
import RouteItem from '../components/RouteItem/RouteItem'

const SingleRoute = () => {
	const { id } = useParams()

	return <RouteItem id={id} />
}

export default SingleRoute
