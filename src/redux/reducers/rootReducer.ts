// /src/redux/reducers/rootReducer.ts
import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Import your cartReducer

const rootReducer = combineReducers({
  cart: cartReducer, // Add your cartReducer here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;