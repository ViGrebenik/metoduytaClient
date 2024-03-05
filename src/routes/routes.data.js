import AboutUs from '../components/screens/aboutUs/AboutUs'
import Calculator from '../components/screens/calculator/Calculator'
import Contacts from '../components/screens/contacts/Сontacts'
import Home from '../components/screens/home/Home'
import Payment from '../components/screens/payment/Payment'
import Portfolio from '../components/screens/portfolio/Portfolio'
import PageServicesComplex from '../components/screens/services/PageServicesComplex'
import PageServicesDesigner from '../components/screens/services/PageServicesDesigner'

export const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/portfolio',
		component: Portfolio
	},
	{
		path: '/servicesDesigner',
		component: PageServicesDesigner
	},
	{
		path: '/servicesComplex',
		component: PageServicesComplex
	},
	{
		path: '/payment',
		component: Payment
	},
	{
		path: '/calculator',
		component: Calculator
	},
	{
		path: '/aboutUs',
		component: AboutUs
	},
	{
		path: '/contacts',
		component: Contacts
	}
]
