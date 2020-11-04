import Axios from "axios";

const slidersApi = {
  getSlides : () => {
    const url = "http://localhost:3333/sliders";
    return Axios.get(url);

    // return axiosClient.get(url);
  },
};

export default slidersApi;