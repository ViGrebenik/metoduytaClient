import AboutUs from '../components/screens/aboutUs/AboutUs'
import Calculator from '../components/screens/calculator/Calculator'
import Contacts from '../components/screens/contacts/Сontacts'
import Home from '../components/screens/home/Home'
import Payment from '../components/screens/payment/Payment'
import Portfolio from '../components/screens/portfolio/Portfolio'
import PageServicesComplex from '../components/screens/services/pageComplex/PageServicesComplex'
import PageServicesDesigner from '../components/screens/services/pageDesigner/PageServicesDesigner'
import PageRedecorating from '../components/screens/services/pageRedecorating/PageRedecorating'
import PageRenovationNewBuilding from '../components/screens/services/pageRenovationNewBuilding/PageRenovationNewBuilding'

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
		path: '/renovationNewBuilding',
		component: PageRenovationNewBuilding
	},
	{
		path: '/redecorating',
		component: PageRedecorating
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
