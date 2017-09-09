package com.jfouad.service;


import com.jfouad.repository.ArticleRepository;
import org.junit.Test;

import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyLong;
import static org.mockito.Mockito.*;

public class ArticleServiceTest {

    private final ArticleRepository articleRepository = mock(ArticleRepository.class);
    private final ArticleService articleService = new ArticleService(articleRepository);

    @Test
    public void should_call_findAll_repository() {
        articleService.findAll();
        verify(articleRepository, times(1)).findAll();
    }

    @Test
    public void should_call_findOne_repository() {
        articleService.findOne(any());
        verify(articleRepository, times(1)).findOne(anyLong());
    }

    @Test
    public void should_call_save_repository() {
        articleService.saveAndFlush(any());
        verify(articleRepository, times(1)).saveAndFlush(any());
    }

    @Test
    public void should_call_delete_repository() {
        articleService.delete(any());
        verify(articleRepository, times(1)).delete(anyLong());
    }
}
