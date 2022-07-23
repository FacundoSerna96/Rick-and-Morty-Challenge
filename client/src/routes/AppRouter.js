import React from 'react'

import HomePageRouter from './HomePageRouter'
import PageNotFound from '../pages/PageNotFound.js'


import {
	Routes,
	Route,
} from 'react-router-dom'

const AppRouter = () => {
	return (
		<Routes>

			<Route path='/*' element={<HomePageRouter/>} />

			<Route path="*" element={<PageNotFound />} />

		</Routes>
	)
}

export default AppRouter