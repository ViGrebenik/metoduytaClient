import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import Router from './routes/Routes'
import { ModalProvider } from './assets/services/ModalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ModalProvider>
			<Router />
		</ModalProvider>
	</React.StrictMode>
)
