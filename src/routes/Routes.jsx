import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from '../components/screens/not-found/NotFound'

import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { routes } from './routes.data'
import FooterSignature from '../components/footer/footerSignature/FooterSignature'
import ScrollToTop from '../assets/services/ScrollToTop'
import CalculatorUIHome from '../components/calculator/uiHome/CalculatorUIHome'
import { useModal } from '../assets/services/ModalContext'
import CallRequestForm from '../components/ui/popup/CallRequestForm'

const Router = () => {
	const { isModalOpen, closeModal } = useModal()
	return (
		<BrowserRouter>
			{isModalOpen && <CallRequestForm onClose={closeModal} />}
			<ScrollToTop />
			<Header />
			<CalculatorUIHome />
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
