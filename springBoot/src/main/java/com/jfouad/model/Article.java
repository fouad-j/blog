package com.jfouad.model;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity(name="Article")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long articleId;
    private String username;
    private String picture;
    private Date datePublication;
    private String title;
    private String content;
//    private User user;
//    private List<Categorie> categories;
//    private List<Comment> comments;
}
