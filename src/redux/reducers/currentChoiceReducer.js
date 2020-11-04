const initialState = {
    idMovieTime: "",
    currentChooseSeat: [],
    currentPayment: "",

    ticketPrice: 45000,
    combo1Price: 77000,
    combo2Price: 99000,
    currentTicket: 0,
    currentCombo1: 0,
    currentCombo2: 0,
    totalTicket: 0,
    totalCombo1: 0,
    totalCombo2: 0,
    ticket: 0,

    timeSet: "",
    movieName: "",
    movieCinema: "",
    movieTime: "",
    movieImage: "",
    seat: [],
    payment: "",
    email: "",

    choosedSeat: "",
}

const currentChooseReducer = (state = initialState, action) => {
     switch(action.type) {
          case "GET_IDMOVIE": {
               return {
                    ...state,
                    idMovieTime : action.value
               }
          }

          case "GET_CURRENTTICKET": {
               if (action.value <= 0) {
                    state.currentTicket = 0;
               } else {
                    state.currentTicket = action.value;
               }
               state.totalTicket = state.ticketPrice * state.currentTicket;
               console.log(state.currentTicket);
               localStorage.setItem("ticket", state.currentTicket);
               localStorage.setItem("totalTicket", state.totalTicket);
               return {
                    ...state
               }
          }

          case "GET_REMOVE_TICKET": {
               if (state.currentTicket <= 0) {
                    state.currentTicket = 0;
               } else {
                    state.currentTicket = parseInt(state.currentTicket) - 1;
               }
               state.totalTicket = state.ticketPrice * state.currentTicket;
               localStorage.setItem("ticket", state.currentTicket);
               localStorage.setItem("totalTicket", state.totalTicket);
               return {
                    ...state
               }
          }

          case "GET_ADD_TICKET": {
               state.currentTicket = parseInt(state.currentTicket) + 1;
               state.totalTicket = state.ticketPrice * state.currentTicket;
               localStorage.setItem("ticket", state.currentTicket);
               localStorage.setItem("totalTicket", state.totalTicket);
               return {
                    ...state
               }
          }

          case "GET_REMOVE_COMBO1": {
               if (state.currentCombo1 <= 0) {
                    state.currentCombo1 = 0;
               } else {
                    state.currentCombo1 = parseInt(state.currentCombo1) - 1;
               }
               state.totalCombo1 = state.combo1Price * state.currentCombo1;
               localStorage.setItem("totalCombo1", state.totalCombo1);
               return {
                    ...state
               }
          }
          case "GET_REMOVE_COMBO2": {
               if (action.value <= 0) {
                    state.currentCombo2 = 0;
               } else {
                    state.currentCombo2 = action.value;
               }
               state.totalCombo2 = state.combo2Price * state.currentCombo2;
               localStorage.setItem("totalCombo2", state.totalCombo2);

               return {
                    ...state
               }
          }

          case "GET_CURRENT_COMBO1": {
               if (action.value <= 0) {
                    state.currentCombo1 = 0;
               } else {
                    state.currentCombo1 = action.value;
               }
               state.totalCombo1 = state.combo1Price * state.currentCombo1;
               localStorage.setItem("totalCombo1", state.totalCombo1);
               return {
                    ...state
               }
          }

          case "GET_CURRENT_COMBO2": {
               if (action.value <= 0) {
                    state.currentCombo2 = 0;
               } else {
                    state.currentCombo2 = action.value;
               }
               state.totalCombo2 = state.combo2Price * state.currentCombo2;
               localStorage.setItem("totalCombo2", state.totalCombo2);
               return {
                    ...state
               }
          }

          case "GET_ADD_COMBO1": {
               state.currentCombo1 = parseInt(state.currentCombo1) + 1;
               state.totalCombo1 = state.combo1Price * state.currentCombo1;
               localStorage.setItem("totalCombo1", state.totalCombo1);
               return {
                    ...state
               }
          }

          case "GET_ADD_COMBO2": {
               state.currentCombo2 = parseInt(state.currentCombo2) + 1;
               state.totalCombo2 = state.combo2Price * state.currentCombo2;
               localStorage.setItem("totalCombo2", state.totalCombo2);
               return {
                    ...state
               }
          }

          case "GET_TIMESET": {
               const date = localStorage.getItem("timeSet");
               state.timeSet = date;
               return {
                    ...state
               }
          }

          case "GET_MOVIENAME": {
               const movieName = localStorage.getItem("movieName");
               state.movieName = movieName;
               return {
                    ...state
               }
          }
          case "GET_MOVIECINEMA": {
               const movieCinema = localStorage.getItem("movieCinema");
               state.movieCinema = movieCinema;
               return {
                    ...state
               }
          }

          case "GET_MOVIETIME": {
               const movieTime = localStorage.getItem("movieTime");
               state.movieTime = movieTime;
               return {
                    ...state
               }
      
          }

          case "GET_MOVIEIMAGE": {
               const movieImage = localStorage.getItem("movieImage");
               state.movieImage = movieImage;
               return {
                    ...state
               }
          }

          case "GET_TOTALCOMBO1": {
               if (localStorage.getItem("totalCombo1")) {
                    const totalCombo1 = localStorage.getItem("totalCombo1");
                    state.totalCombo1 = parseInt(totalCombo1);
               }
               return {
                    ...state
               }
          }

          case "GET_TOTALCOMBO2": {
               if (localStorage.getItem("totalCombo1")) {
                    const totalCombo1 = localStorage.getItem("totalCombo2");
                    state.totalCombo2 = parseInt(totalCombo1);
               }
               return {
                    ...state
               }
          }

          case "GET_TOTALTICKET": {
               if (localStorage.getItem("totalTicket")) {
                    const totalTicket = localStorage.getItem("totalTicket");
                    state.totalTicket = parseInt(totalTicket);
               }
               return {
                    ...state
               }
          }

          case "GET_CURRENTCHOOSESEAT": {
               const current = state.currentChooseSeat.indexOf(action.value);
               if (current === -1) {
                    state.currentChooseSeat.push(action.value);
               } else {
                    state.currentChooseSeat.splice(current, 1);
               }
               if (state.currentChooseSeat.length > state.ticket) {
                    state.currentChooseSeat.splice(0, 1);
               }
               localStorage.setItem("seat", JSON.stringify(state.currentChooseSeat));
               return {
                    ...state
               }
          }

          case "GET_CHOOSEDSEAT": {
               return {
                    ...state,
                    choosedSeat : action.value
               }
          }

          case "GET_TICKET": {
               const ticket = localStorage.getItem("ticket");
               state.ticket = ticket;
               return {
                    ...state
               }
          }

          case "GET_CURRENTPAYMENT": {
               state.currentPayment = action.value;
               localStorage.setItem("payment", state.currentPayment);
               return {
                    ...state
               }
          }

          case "GET_EMAIL": {
               const email = localStorage.getItem("email");
               state.email = email;
               return {
                    ...state
               }
          }

          case "GET_PAYMENT": {
               const payment = localStorage.getItem("payment");
               state.payment = payment;
               return {
                    ...state
               }
          }

          case "GET_SEAT": {
               const seat = JSON.parse(localStorage.getItem("seat"));
               state.seat = seat;
               return {
                    ...state
               }
          }

          default: return state
     }
}

export default currentChooseReducer;