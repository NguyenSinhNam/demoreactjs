const METHODS = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  patch: 'PATCH'
}

export default {
  endpoint: 'localhost:8080',
  methods: METHODS,
  user: {
    users: () => {
      return {
        url: '/api/users',
        method: METHODS.get
      }
    }
  }
}
