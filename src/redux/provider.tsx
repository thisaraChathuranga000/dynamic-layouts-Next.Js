"use client"
import React, { ReactNode } from "react"
import { Provider } from "react-redux"
import { store, persistor } from '@/redux/store'
import { PersistGate } from "redux-persist/integration/react"

export function Providers({children}: { children: ReactNode }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	)
}