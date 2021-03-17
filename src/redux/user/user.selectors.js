import {createSelector} from 'reselect';
import { selectCartItem } from '../cart/cart.selectors';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser 
)