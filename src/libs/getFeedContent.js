import axios from 'axios'

const getFeedContent = async () => {
  const { REACT_APP_HOST } = process.env
  const { data } = await axios.get(REACT_APP_HOST + '/post-feed', {}, {
    withCredentials: true
  })
  console.log(data)
  return data
}

export default getFeedContent