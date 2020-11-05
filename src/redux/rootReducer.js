import {combineReducers} from 'redux';
import newsReducer from './reducers/newsReducer';
import productReducer from './reducers/productReducer';
import sliderReducer from './reducers/sliderReducer';
import i18Reducer from './reducers/i18Reducer';
import cinemaReducer from './reducers/cinemaReducer';
import currentChooseReducer from './reducers/currentChoiceReducer';
import comboReducer from './reducers/comboReducer';
import seatsReducer from './reducers/seatsReducer';
import registerReducer from './reducers/registerReducer';
import loginReducer from './reducers/loginReducer';
import moviesReducer from './reducers/adminMovieReducer';
import adminReducer from './reducers/adminUserReducer';
import ticketReducer from './reducers/ticketsReducer';


const rootReducer = combineReducers({
    slider : sliderReducer,
    product : productReducer,
    news : newsReducer,
    cinemas: cinemaReducer,
    currentChoose: currentChooseReducer,
    combo: comboReducer,
    i18n: i18Reducer,
    seats: seatsReducer,
    register: registerReducer,
    login: loginReducer,
    admin : adminReducer,
    adminMovie : moviesReducer,
    ticketClient : ticketReducer,
})

export default rootReducer;