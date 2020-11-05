import { getTickets } from "../../api/ticketApi";

export const fetchTicket = (email) => {

    return async (dispatch) => {
        const res = await getTickets(email);
        dispatch(getTicketClient(res.data));
    }
}

export const getTicketClient = (data) => {
    return {
        type: 'GET_TICKET_CLIENT',
        ticket : data,
    }
}