import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: 'fe08a21460fe4729af755e7854008283'
  }
})