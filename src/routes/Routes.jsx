import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from '../components/screens/not-found/NotFound'

import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { routes } from './routes.data'
import FooterSignature from '../components/footer/footerSignature/FooterSignature'

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
			<FooterSignature />
		</BrowserRouter>
	)
}

export default Router
