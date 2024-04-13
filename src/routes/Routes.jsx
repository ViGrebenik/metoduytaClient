import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from '../components/screens/not-found/NotFound'

import { useModal } from '../assets/services/ModalContext'
import ScrollToTop from '../assets/services/ScrollToTop'
import CalculatorUIHome from '../components/calculator/uiHome/CalculatorUIHome'
import Footer from '../components/footer/Footer'
import FooterSignature from '../components/footer/footerSignature/FooterSignature'
import Header from '../components/header/Header'
import CallRequestForm from '../components/ui/popup/CallRequestForm'
import CompletePopUp from '../components/ui/popup/notification/CompletePopUp'
import { routes } from './routes.data'

const Router = () => {
	const { isModalOpen, closeModal } = useModal()
	return (
		<BrowserRouter>
			{isModalOpen && <CallRequestForm onClose={closeModal} />}
			<ScrollToTop />
			<Header />
			<CalculatorUIHome />
			<CompletePopUp />
			{/* <NotificationCheck /> */}
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
