import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './assets/styles/index.scss'
import store from './components/calculator/state/configureStore'
import Router from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<React.StrictMode>
			<Router />
		</React.StrictMode>
	</Provider>
)
