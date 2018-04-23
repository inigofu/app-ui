const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./mock-server/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// server.use((req, res, next) => {
// if (isAuthorized(req)) { // add your authorization logic here
//   next() // continue to JSON Server router
// } else {
//   res.sendStatus(401)
// }
// })
server.use(jsonServer.rewriter({
  '/api/dashboard': '/dashboard',
  '/api/core/notifications/getCount': '/getCount',
  '/api/core/notifications/getList/:page/:limit': '/getList?_page=:page&_limit=:limit',
  '/api/getMeta': '/getMeta',
  '/api/login': '/login',
  '/api/clearAll': '/clearAll',
  '/api/getCount': '/getCount',
  '/api/getList': '/getList',
  '/api/core': '/core',
  '/api/administration/users/:user_id': '/user/:user_id'

}))
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
