import Axios from 'axios';

const saleApi = {
     getSale: () => {
         const url = "http://localhost:3333/news";
          return Axios.get(url);
     },
     // getSaleDetails: (sale) => {
     //      const url = `http://localhost:3333/news/${sale}`;
     //      return Axios.get(url);
     // }

}

export default saleApi;