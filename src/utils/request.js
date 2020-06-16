import axios from 'axios'
import { ApiConst } from '../configs'
import { to } from '../../src/utils/index'

export default async (url, options = {}) => {
  url = ApiConst.endpoint + url
  if (!options.method) {
    options.method = ApiConst.methods.get
  }

  // const { error, data } = await to(axios(url, options))
  const {error, data} = await to(axios.get('localhost:8080/user'))
  console.log('error: ', error)
  console.log('data: ', data)
  if (error) {
    return null
  } else {
    return data.data
  }
}
