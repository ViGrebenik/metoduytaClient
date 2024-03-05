import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from '../components/screens/not-found/NotFound'

import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { routes } from './routes.data'

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default Router
