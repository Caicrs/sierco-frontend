import axios from 'axios'

export default axios.create({
    baseURL:'https://gamestock-api.herokuapp.com'
})