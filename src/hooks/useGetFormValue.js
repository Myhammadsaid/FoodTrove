import { useState } from 'react'

export const useGetFormValue = initialState => {
	const [formData, setFormData] = useState(initialState)

	const handleChange = e => {
		if (!e && !e.target) return
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	return { formData, setFormData, handleChange }
}
