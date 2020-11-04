export const getIdMovieTime = (value) => {
     return {
          type: "GET_IDMOVIE",
          data: value
     }
}

export const getAddCombo1 = (data) => {
     return {
          type: "GET_ADD_COMBO1",
          value: data
     }
}

export const getAddCombo2 = (data) => {
     return {
          type: "GET_ADD_COMBO2",
          value: data
     }
}

export const getAddTicket = (data) => {
     return {
          type: "GET_ADD_TICKET",
          value: data
     }
}

export const getCurrentCombo1 = (data) => {
     return {
          type: "GET_CURRENT_COMBO1",
          value: data
     }
}

export const getCurrentCombo2 = (data) => {
     return {
          type: "GET_CURRENT_COMBO2",
          value:data
     }
}

export const getCurrentTicket = (data) => {

     console.log(data);
     return {
          type: "GET_CURRENTTICKET",
          value: data
     }
}

export const getMovieCinema = () => {
     return {
          type: "GET_MOVIECINEMA",
     }
}

export const getMovieTime = () => {
     return {
          type: "GET_MOVIETIME",
     }
}

export const getRemoveCombo1 = (data) => {
     return {
          type: "GET_REMOVE_COMBO1",
          value: data
     }
}

export const getRemoveCombo2 = (data) => {
     return {
          type: "GET_REMOVE_COMBO2",
          value:data
     }
}

export const getRemoveTicket = (data) => {
     return {
          type: "GET_REMOVE_TICKET",
          value: data
     }
}

export const getTimeSet = () => {
     return {
          type: "GET_TIMESET",
     }
}


export const getMovieImage = () => {
     return {
          type: "GET_MOVIEIMAGE",
     }
}


export const getMovieName = () => {
     return {
          type: "GET_MOVIENAME",
     }
}

export const getTotalCombo1 = () => {
     return {
          type: "GET_TOTALCOMBO1"
     }
}

export const getTotalCombo2 = () => {
     return {
          type: "GET_TOTALCOMBO2",
     }
}

export const getTotalTicket = () => {
     return {
          type: "GET_TOTALTICKET",
     }
}

export const getCurrentChooseSeat = (data) => {
     return {
          type: "GET_CURRENTCHOOSESEAT",
          value: data
     }
}

export const getChoosedSeat = (data) => {
     return {
          type: "GET_CHOOSEDSEAT",
          value:data
     }
}


export const getTicket = (data) => {
     return {
          type: "GET_TICKET",
          value: data
     }
}

export const getCurrentPayment = (data) => {
     return {
          type: "GET_CURRENTPAYMENT",
          value: data
     }
}

export const getEmail = (data) => {
     return {
          type: "GET_EMAIL",
          value: data
     }
}

export const getPayment = (data) => {
     return {
          type: "GET_PAYMENT",
          value: data
     }
}

export const getSeat = (data) => {
     return {
          type: "GET_SEAT",
          value: data
     }
}