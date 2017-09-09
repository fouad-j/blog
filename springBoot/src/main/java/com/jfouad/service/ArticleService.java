package com.jfouad.service;

import com.jfouad.model.Article;
import com.jfouad.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public List<Article> findAll() {
        return articleRepository.findAll();
    }

    public Article findOne(Long id) {
        return articleRepository.findOne(id);
    }

    public Article saveAndFlush(Article article) {
        return articleRepository.saveAndFlush(article);
    }

    public void delete(Long id) {
        articleRepository.delete(id);
    }
}
