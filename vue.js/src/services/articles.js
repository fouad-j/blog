import axios from 'axios'
import _ from 'lodash'

let articles = []

let getArticles = (numPage = 1, itemByPage = 5) => {
  return axios.get(`/query/rest/articles/numPage/${numPage}/nbItem/${itemByPage}`).then(reponse => {
    articles = reponse.data
    return articles
  })
}

let getArticle = articleId => {
  const isExists = _.find(articles, {'articleId': articleId})

  return isExists ? Promise.resolve(isExists) : axios.get(`/query/rest/article/${articleId}`).then(reponse => reponse.data)
}

let search = keyword => {
  return axios.get(`/query/rest/articles/search/${keyword}`).then(reponse => {
    articles = reponse.data
    return articles
  })
}

export default {
  getArticles, getArticle, search
}
