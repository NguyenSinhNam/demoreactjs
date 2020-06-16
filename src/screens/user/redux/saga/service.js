import { ApiConst } from '../../../../configs'
import { request } from '../../../../utils'

// export async function fetch(data) {
//   const api = ApiConst.user.users()

//   return request(api.url, {
//     method: api.method,
//     body: data
//   })
// }

// export default {
//   loadUser: async (data) => {
//     const api = ApiConst.user.users()
//     const response = await request(api.url, api.method, data)

//     return response
//   }
// }

const loadUser = (arg) => {

  const api = ApiConst.user.users()
  return request(api.url, {})
}

export default loadUser