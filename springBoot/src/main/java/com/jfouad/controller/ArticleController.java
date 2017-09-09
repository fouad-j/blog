package com.jfouad.controller;

import com.jfouad.model.Article;
import com.jfouad.service.ArticleService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class ArticleController {

    private final ArticleService articleService;

    @Autowired
    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @RequestMapping(value = "articles", method = RequestMethod.GET)
    public List<Article> list() {
        return articleService.findAll();
    }

    @RequestMapping(value = "articles", method = RequestMethod.POST)
    public Article create(@RequestBody Article article) {
        return articleService.saveAndFlush(article);
    }

    @RequestMapping(value = "articles/{id}", method = RequestMethod.GET)
    public Article get(@PathVariable Long id) {
        return articleService.findOne(id);
    }

    @RequestMapping(value = "article/{id}", method = RequestMethod.PUT)
    public Article update(@PathVariable Long id, @RequestBody Article article) {
        Article articleToUpdate = articleService.findOne(id);
        BeanUtils.copyProperties(article, articleToUpdate);
        return articleService.saveAndFlush(article);
    }

    @RequestMapping(value = "article/{id}", method = RequestMethod.DELETE)
    public Article delete(@PathVariable Long id) {
        Article articleToDelete = articleService.findOne(id);
        articleService.delete(id);
        return articleToDelete;
    }
}
