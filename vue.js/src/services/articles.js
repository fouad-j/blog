import axios from 'axios'
import _ from 'lodash'

let articles = []

const getArticles = (numPage = 0, itemByPage = 10) => {
  return axios.get(`http://localhost:3000/query/rest/articles/numPage/${numPage}/nbItem/${itemByPage}`).then(reponse => {
    articles = reponse.data
    return articles
  })
}

const getArticle = articleId => {
  const isExists = _.find(articles, {'articleId': articleId})

  return isExists ? Promise.resolve(isExists) : axios.get(`http://localhost:3000/query/rest/article/${articleId}`).then(reponse => reponse.data)
}


export {
  getArticles, getArticle
}
