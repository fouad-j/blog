<template>
  <div>

    <h2><a href="#">{{content.title}}</a></h2>
    <p><span class="glyphicon glyphicon-user"></span> by <strong>{{content.username}}</strong></p>
    <p><span class="glyphicon glyphicon-time"></span> Posted on <strong>{{content.datePublication}}</strong></p>

    <hr>

    <img class="img-responsive" src="http://placehold.it/900x300" />
    <hr>
    <p>{{content.content | truncate }}</p>
    <a class="btn btn-primary" href="#">Read More <span class="glyphicon glyphicon-chevron-right"></span></a>

    <hr />

  </div>
</template>

<script>
  export default {
    name: 'articleDescription',
    data: () => ({}),
    props: ['content'],
    filters: {
      truncate: function (string, val) {
        return string.substring(0, 200) + '...'
      }
    }
  }
</script>
