import React from 'react'

import {
	Route, Routes
} from 'react-router-dom'

import HomePage from '../pages/HomePage'
import Home from '../components/Home'
import Characters from '../components/Characters'
import Episodes from '../components/Episodes'
import Locations from '../components/Locations'
import Exercises from '../components/Exercises'
import Footer from '../components/Footer'


const HomePageRouter = () => {
	return (
		<>
			<HomePage />
			<Routes>
				<Route path='/*' element={<Home/>} />

                <Route path='characters/*' element={<Characters/>} />

                <Route path='episodes/*' element={<Episodes/>} />

                <Route path='locations/*' element={<Locations/>} />

                <Route path='exercises/*' element={<Exercises/>} />
			</Routes>
            <Footer />
		</>
	)
}

export default HomePageRouter