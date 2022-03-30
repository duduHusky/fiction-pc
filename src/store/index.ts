import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { persistReducer, persistStore, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "./user/userSlice"

const rootReducer = combineReducers({
	user: userReducer
})

const persistConfig = {
	key: 'DUDUPERSISTDATA',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false
	})
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
