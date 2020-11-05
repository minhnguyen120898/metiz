
const initialState = {
    ticketClients: [],
    loading : false,
    error : false
}

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TICKET_CLIENT" : {
            return {
                ...state,
                ticketClients : action.ticket
            }
        }
        default : 
            return state;
    }
}

export default ticketReducer;