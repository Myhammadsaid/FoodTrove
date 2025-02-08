import React from 'react'
import './Loading.css'

const Loading = () => {
	const items = Array.from({ length: 8 }).fill('')

	const filterLoading = items.map((_, inx) => (
		<div key={inx} className='loading__item'></div>
	))

	return <div className='loading__items'>{filterLoading}</div>
}

export default Loading
