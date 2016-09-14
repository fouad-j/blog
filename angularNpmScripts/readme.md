# AngularJS Blog
This is an example of blog by AngularJS
## Run
### Install all dependencies
```$ npm install```
### Build project
```$ gulp build```
### Start server
```$ gulp serve```

http://localhost:3000/
### Run tests once
```$ gulp karma```
### Run tests in watch mode
```$ gulp karmaa```

## Using
### Using
- **Frontend:** Bootstrap, jQuery, Less, ES6
- **Backend:** NodeJS, Express
- **Tests:** Karma, Jasmine
- **Other:** Gulp as task runner, EsLint as linter, Babel as transpiler
### Design
Each folder contains
- file.js
- file.spec.js
- file.html
- file.less

### Templates From :
- https://github.com/BlackrockDigital/startbootstrap-blog-post
- https://github.com/BlackrockDigital/startbootstrap-blog-home
### JSON Data
- Generate from [HERE](http://www.json-generator.com) and this is the schema
```javascript
[
  {
    'repeat(15, 20)': {
      articleId: '{{objectId()}}',
      username: '{{firstName()}}',
      picture: 'http://placehold.it/900x300',
      datePublication: '{{date(new Date(2015, 0, 1))}}',
      title: '{{lorem(1, "sentences")}}',
      content: '{{lorem(7, "paragraphs")}}',
      categories: [{
          'repeat(5)': '{{lorem(1, "words")}}'
      }],
      comments: [{
        'repeat(15, 20)':{
          username: '{{firstName()}}',
          content: '{{lorem(1, "paragraphs")}}',
          datePublication: '{{date(new Date(2015, 0, 1))}}',
          picture: 'http://placehold.it/64x64'
        }
      }]
    }
  }
]
```
## License
[MIT](http://opensource.org/licenses/MIT)