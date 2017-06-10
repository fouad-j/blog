const articles = require('./mock').articles
let restify = require('restify')
let _ = require('lodash')

let categories = _(articles).map(a => a.categories).flattenDeep().uniq().value()

let server = restify.createServer()

server.get('/query/rest/articles/numPage/:numPage/nbItem/:nbItem', (req, res, next) => {
  const from = parseInt((req.params.numPage - 1), 10) * parseInt(req.params.nbItem, 10)
  const to = from + parseInt(req.params.nbItem, 10)
  res.send(_.slice(articles, from, to))
  next()
})

server.get('/query/rest/articles/search/:keyword', (req, res, next) => {
  const result = _.filter(articles, o => _.includes(o.title, req.params.keyword) || _.includes(o.content, req.params.keyword))
  res.send(result)
  next()
})

server.get('/query/rest/articles/count/', (req, res, next) => {
  res.send({'count': articles.length})
  next
})

server.get('/query/rest/categories', (req, res, next) => {
  res.send(categories)
  next()
})

server.get('/query/rest/categorie/:tag', (req, res, next) => {
  res.send(_.filter(articles, o => _.includes(o.categories, req.params.tag)))
  next()
})

server.listen(3000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
