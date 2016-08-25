describe('Should test Service Categories ', () => {
  let categories;
  let $http;
  let urlBackend = 'http://localhost:3000';

  let arrayArticles = [
    {
      articleId: '57b62f6dc1e454c3901f7142',
      username: 'Pearson',
      picture: 'http://placehold.it/900x300',
      datePublication: 'Thu May 05 2016 06:57:23 GMT+0000 (UTC)',
      title: 'Ullamco quis nisi aliquip eiusmod sint.',
      content: 'Cillum voluptate esse officia consectetur dolor Lorem aute id et ex deserunt nostrud minim laborum. Proident et laboris consequat Lorem dolore ut. Ea nisi est quis ex officia. Mollit in amet est dolor qui aliqua occaecat. Sit tempor esse in consectetur enim enim. Veniam elit amet sunt ea cupidatat do duis amet. Tempor do dolor non id.\n\nId enim dolor aliqua nostrud quis pariatur quis aliqua. Ut sit Lorem sit labore magna minim ad pariatur fugiat et cupidatat sunt. Lorem incididunt eu et qui elit velit officia. Ea elit sint consequat cupidatat ut consectetur ipsum ut minim dolore adipisicing id laborum anim.\n\nAdipisicing minim nostrud id mollit quis esse anim dolore cupidatat esse. Ut exercitation dolor ullamco est ipsum labore Lorem fugiat nostrud reprehenderit non. Fugiat est eiusmod ea labore nulla ad consequat velit ex. Qui cupidatat reprehenderit ipsum magna. Aliqua cupidatat ea dolor consectetur incididunt ea consequat magna ad.\n\nEt veniam cupidatat dolor ex ut culpa in est dolor sint ad reprehenderit nisi est. Commodo deserunt veniam reprehenderit est culpa aliquip voluptate exercitation sint id aliqua fugiat. Exercitation laboris non laboris in. Voluptate excepteur excepteur duis aliquip tempor anim nisi in eiusmod ullamco. Ea ad eu ex qui tempor do occaecat ipsum magna. Duis cillum cillum aliquip ullamco qui cupidatat minim officia cupidatat duis sint velit eu anim.\n\nIrure pariatur consectetur officia velit sint voluptate nisi. Laboris laboris qui ex qui proident magna. Enim ipsum eu ut exercitation non mollit.\n\nOccaecat nostrud ad excepteur amet adipisicing magna reprehenderit amet do amet dolor irure dolor voluptate. Reprehenderit veniam ipsum duis dolor. Proident exercitation do dolore dolore excepteur exercitation occaecat incididunt. Amet Lorem id ut Lorem elit magna commodo. Nulla dolor consequat non fugiat quis mollit commodo irure ipsum et id in quis proident. Ipsum cillum culpa laborum aliquip quis adipisicing. Fugiat esse adipisicing deserunt nisi velit excepteur voluptate est adipisicing culpa consectetur laborum.\n\nVoluptate dolore voluptate sit laboris. Commodo mollit ullamco adipisicing officia consequat occaecat et ea ad. Culpa duis ea laborum ex ea fugiat.',
      categories: ['quis', 'veniam', 'excepteur', 'occaecat', 'cupidatat'],
      comments: [
        {
          username: 'Ferrell',
          content: 'Enim adipisicing dolore est sint est fugiat anim exercitation. Aliquip velit consequat deserunt elit minim eiusmod cupidatat. Proident minim anim cupidatat voluptate magna et. Ex adipisicing anim excepteur do ipsum ad eu ipsum.',
          datePublication: 'Sun May 24 2015 03:19:33 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Evangelina',
          content: 'Esse nisi labore aliquip proident do. In veniam eu Lorem nisi veniam. Velit pariatur sint culpa pariatur fugiat non dolor fugiat anim. Veniam irure sunt occaecat velit voluptate est pariatur esse.',
          datePublication: 'Tue Mar 15 2016 23:02:05 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Massey',
          content: 'Culpa est culpa consequat aliqua et consequat do aliquip nostrud sit consectetur aliqua laboris consectetur. Voluptate laboris amet laboris occaecat aliquip mollit qui eu magna cillum ex nostrud nulla. Eiusmod tempor id nostrud magna aute minim ut. Enim et minim nulla pariatur qui et non anim commodo consequat aliqua aliqua esse irure. Laborum officia nostrud nostrud eu fugiat cillum pariatur.',
          datePublication: 'Sun Aug 23 2015 23:28:03 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Clarice',
          content: 'Sunt pariatur qui proident quis nisi ipsum qui qui aute dolore fugiat irure in elit. Deserunt ea pariatur irure esse duis cillum culpa nisi nisi elit occaecat. Dolor Lorem consequat exercitation reprehenderit fugiat aute aliquip adipisicing ut. Adipisicing veniam aute nulla exercitation voluptate id officia duis culpa fugiat aliquip. Cupidatat incididunt enim est est aliquip cillum dolore ea. Aliqua nisi elit ad nulla in aliquip velit exercitation culpa. Ex eu ipsum est fugiat ipsum tempor excepteur elit excepteur sunt.',
          datePublication: 'Sun Jan 17 2016 01:33:28 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Acevedo',
          content: 'Fugiat aute do qui velit cillum. Quis commodo ut amet esse occaecat excepteur tempor nisi exercitation reprehenderit minim in eiusmod laboris. Cupidatat sunt ex velit incididunt proident exercitation consequat magna ea. Eiusmod ipsum amet qui adipisicing laborum nostrud.',
          datePublication: 'Sun Jan 04 2015 17:47:50 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Morin',
          content: 'Ea eiusmod veniam duis deserunt laborum occaecat consequat. Cillum laborum culpa in ad consequat. Magna consectetur ex adipisicing eiusmod proident sint. Ipsum dolor excepteur ullamco nulla. Aliquip eu nostrud tempor excepteur do veniam elit ad excepteur. Sunt nulla deserunt dolore ullamco ipsum non esse aliqua tempor consequat. Veniam deserunt Lorem anim quis ea esse cillum minim.',
          datePublication: 'Wed Jul 22 2015 19:36:09 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Celia',
          content: 'Qui officia laborum adipisicing irure ut id occaecat velit occaecat officia. Occaecat labore ullamco amet Lorem. Deserunt qui excepteur amet aliquip aliquip. Proident irure do eu Lorem enim. Anim pariatur duis minim consectetur irure non ad fugiat occaecat do ullamco ut mollit. Lorem ullamco incididunt deserunt labore dolor eiusmod.',
          datePublication: 'Wed Jul 06 2016 20:47:59 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Barrera',
          content: 'Eiusmod ad quis sunt excepteur occaecat Lorem officia labore nulla irure amet aliqua culpa cupidatat. Pariatur reprehenderit cillum non sunt cillum fugiat occaecat duis ut sint qui. Ut laboris sunt est veniam mollit deserunt magna magna consectetur pariatur magna cupidatat dolor. Veniam esse consectetur in aute amet ex eiusmod eiusmod nulla. Sit incididunt adipisicing nostrud do ut nisi Lorem velit ut dolore duis. Officia amet sunt reprehenderit exercitation do et et cupidatat.',
          datePublication: 'Thu May 19 2016 03:04:46 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Sharlene',
          content: 'Ex dolor Lorem magna sunt deserunt nisi ut deserunt veniam consequat do anim cillum amet. Elit consectetur id exercitation laborum nisi nisi sunt incididunt sint laboris. Culpa laborum cillum nostrud adipisicing eu nostrud ut eu culpa quis. Excepteur pariatur id ipsum labore elit dolore labore deserunt ea velit officia id consequat ullamco.',
          datePublication: 'Mon Jan 04 2016 18:21:02 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Collier',
          content: 'Labore incididunt esse qui cillum non nostrud et mollit culpa consectetur. Laborum qui cillum nulla sint magna voluptate. Ut id consequat proident voluptate laboris velit minim adipisicing. Ullamco occaecat nulla magna consectetur veniam labore. Deserunt enim fugiat excepteur eiusmod aute proident. Qui fugiat occaecat ea sint laborum sit non ullamco cupidatat.',
          datePublication: 'Tue Oct 06 2015 09:27:19 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Alexander',
          content: 'Pariatur cillum ut aute nisi qui. Consequat et irure fugiat nisi commodo velit nisi voluptate non dolor id occaecat. Et proident nisi voluptate adipisicing labore sint sint sit culpa excepteur elit magna consectetur non. Sit excepteur ullamco tempor cupidatat non sunt officia culpa. Elit aute non eu ex laboris dolore mollit eiusmod aliqua anim irure amet. Voluptate esse incididunt cillum adipisicing aute elit.',
          datePublication: 'Tue Jan 05 2016 10:34:24 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Reva',
          content: 'Consectetur occaecat in proident labore veniam cupidatat excepteur deserunt dolor anim aliqua ut. Ut qui id non laborum. Aliqua officia adipisicing irure cillum incididunt anim eiusmod cillum.',
          datePublication: 'Sun May 29 2016 19:16:25 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Dixon',
          content: 'Anim adipisicing culpa mollit officia anim sit adipisicing dolore nisi. Ad occaecat officia sunt enim ut pariatur tempor officia ex esse esse excepteur. Elit incididunt laborum commodo veniam consectetur laboris qui mollit qui sint enim cillum enim. Mollit laboris labore Lorem ex eu sint incididunt cupidatat. Duis Lorem exercitation duis sit labore proident.',
          datePublication: 'Mon Jul 11 2016 00:51:31 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Yates',
          content: 'Mollit occaecat veniam ea voluptate dolore dolore occaecat eiusmod veniam consequat. Ut sit aute pariatur officia excepteur excepteur qui laboris aliquip est. Do laborum tempor adipisicing anim proident.',
          datePublication: 'Sun Jan 03 2016 12:10:26 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Faith',
          content: 'Enim tempor amet ex cillum ex labore incididunt duis. Magna occaecat duis Lorem ea eiusmod reprehenderit fugiat reprehenderit id non. Anim veniam in culpa dolore. In sit do pariatur elit do amet qui eu tempor proident nisi dolore cillum elit.',
          datePublication: 'Sat Aug 13 2016 17:33:52 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Martin',
          content: 'Qui velit magna do commodo id in magna ullamco nostrud proident commodo. Minim laborum veniam id aliqua ea dolor ad in duis. Eu ullamco pariatur quis et irure fugiat ut officia do veniam.',
          datePublication: 'Thu Oct 08 2015 01:13:48 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Violet',
          content: 'Eu deserunt eu id anim sit ut. In dolor duis dolor ut. Laboris nostrud Lorem quis cillum aliquip laboris esse esse consectetur. Fugiat exercitation voluptate aliquip anim eiusmod cupidatat laboris officia cupidatat elit Lorem veniam.',
          datePublication: 'Sat Jan 17 2015 13:02:28 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Amy',
          content: 'In sint culpa qui pariatur sit anim sit Lorem sit. Est culpa dolore ex minim ad qui incididunt. Ullamco consequat adipisicing deserunt minim ut cupidatat commodo velit culpa. Elit aliquip officia ea sunt duis deserunt.',
          datePublication: 'Sun Aug 14 2016 07:16:40 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Eva',
          content: 'Cillum ipsum anim irure veniam adipisicing in labore culpa nostrud exercitation. Sunt magna mollit laboris ut pariatur cupidatat proident. Qui excepteur eiusmod ipsum deserunt cupidatat magna excepteur eiusmod duis ullamco quis. Ullamco ipsum aliquip eiusmod qui exercitation dolore. Cillum irure fugiat tempor exercitation sint. Ex nisi sit duis veniam in amet consectetur nulla Lorem laboris labore.',
          datePublication: 'Fri May 29 2015 11:59:04 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Alston',
          content: 'Amet Lorem consequat exercitation nulla incididunt esse. Cillum ex elit excepteur quis. Tempor dolor ut et aliqua proident fugiat aute amet. Reprehenderit ut sunt nulla laborum aute cupidatat.',
          datePublication: 'Sat Jan 09 2016 11:50:17 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        }
      ]
    },
    {
      articleId: '57b62f6dbfa4dfd1789ed744',
      username: 'Gardner',
      picture: 'http://placehold.it/900x300',
      datePublication: 'Wed May 20 2015 01:14:08 GMT+0000 (UTC)',
      title: 'Sit minim id occaecat duis ut velit aliqua ullamco velit excepteur adipisicing voluptate ullamco velit.',
      content: 'Consectetur veniam sint fugiat aute proident do elit in non. Commodo officia enim proident reprehenderit. Labore culpa voluptate duis velit esse qui commodo deserunt esse eiusmod. Amet ut sunt non mollit aute esse sint nulla duis irure adipisicing eiusmod. Anim irure pariatur in sint fugiat amet deserunt nulla eiusmod. Officia aliqua veniam nostrud enim anim ipsum nulla esse commodo labore. Magna amet velit nostrud qui elit commodo.\n\nOfficia fugiat laborum laboris officia tempor ad do ea sit eu eu sunt. Cupidatat fugiat occaecat mollit nisi. Reprehenderit labore quis est est veniam magna eiusmod minim duis. Anim occaecat aliqua sit eiusmod occaecat enim aliquip ea fugiat. Anim sunt enim laborum enim excepteur exercitation ad enim excepteur consectetur exercitation dolor sit veniam. Ad occaecat tempor elit proident ex irure dolore labore commodo enim et cillum amet do.\n\nQui non cillum labore ad aute sunt aliqua Lorem est. Dolor sunt aliquip mollit anim enim sint ipsum tempor voluptate eu. Officia laborum eu proident id.\n\nVelit tempor sint laboris esse qui voluptate esse nulla enim. Irure exercitation aliquip deserunt laboris laboris occaecat. Laborum do nostrud qui dolore anim sint tempor. Officia quis elit dolore dolore pariatur nisi anim amet.\n\nDolor culpa culpa fugiat anim cupidatat velit non eu fugiat nulla. Culpa excepteur nulla ullamco aliqua labore laborum ad. Fugiat consectetur id enim irure amet ad sit ad. Duis consectetur reprehenderit non reprehenderit. Ipsum enim aute nisi tempor sit ullamco ea fugiat consectetur occaecat consectetur fugiat in aute. Fugiat mollit magna ut do consequat dolor Lorem.\n\nNon laboris consequat aute dolor excepteur ad adipisicing irure. Exercitation veniam velit proident nisi eiusmod excepteur reprehenderit. Nisi cupidatat pariatur tempor elit aute. Elit officia aute sint voluptate. Do voluptate amet mollit nostrud nisi sit.\n\nSint id proident nulla ipsum ut ullamco est voluptate aliquip. Sit reprehenderit eiusmod in incididunt incididunt Lorem. Proident nisi eu nulla Lorem id quis anim consectetur pariatur.',
      categories: ['dolor', 'reprehenderit', 'anim', 'est', 'duis'],
      comments: [
        {
          username: 'Fannie',
          content: 'Aliqua magna nostrud veniam amet adipisicing anim ullamco culpa excepteur. Non elit voluptate aliqua Lorem labore amet consectetur esse. Irure veniam minim tempor excepteur exercitation cupidatat occaecat cupidatat et esse velit exercitation laboris. Eu anim nulla do eiusmod do ut do esse veniam eiusmod labore esse non. Velit ipsum ut voluptate veniam nisi occaecat reprehenderit velit ad commodo. Aliquip ipsum sit irure proident ad reprehenderit sit occaecat nostrud aliquip ut exercitation in.',
          datePublication: 'Sat Mar 05 2016 12:14:33 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Nina',
          content: 'Ut consequat incididunt anim cillum amet ullamco adipisicing proident officia. Nostrud minim irure aute ipsum. Eiusmod aute mollit ex elit occaecat non id laboris enim ex laboris. Magna consectetur dolore magna pariatur exercitation. Do est occaecat velit officia quis consequat.',
          datePublication: 'Thu Mar 24 2016 21:57:24 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Cherie',
          content: 'Veniam voluptate dolor labore fugiat do eiusmod Lorem qui. Ullamco ad ullamco elit exercitation ea mollit sit qui excepteur enim eu. Consequat reprehenderit voluptate amet eiusmod eu officia dolore commodo aute est veniam.',
          datePublication: 'Wed Aug 05 2015 08:28:01 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Tabatha',
          content: 'Ut tempor officia tempor ullamco aliquip incididunt esse commodo anim occaecat. Irure officia occaecat reprehenderit esse esse exercitation exercitation sunt deserunt sint laborum. In ullamco eu sit deserunt sit ullamco enim nulla. Elit ut velit aute irure dolor dolor aliqua laboris enim minim eu reprehenderit. Quis minim deserunt non veniam consequat adipisicing.',
          datePublication: 'Mon Jan 04 2016 01:12:48 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Rivas',
          content: 'Nostrud laborum ullamco consequat irure officia sint enim incididunt labore velit aliquip velit. Cupidatat commodo quis dolor dolore. Proident in anim tempor ut commodo exercitation velit cillum ipsum proident qui dolore cillum sunt. Veniam excepteur proident pariatur laborum ea cillum sunt qui sint fugiat consectetur anim nulla. Minim anim velit velit aute non sint non eu.',
          datePublication: 'Wed Jul 01 2015 16:51:13 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Macdonald',
          content: 'Excepteur id ea enim non sunt pariatur eu et. Elit laboris dolore sit aliquip ipsum exercitation ipsum magna minim sit sit. Veniam mollit cupidatat do et officia ea sunt laborum reprehenderit. Qui tempor duis occaecat ex consequat ex magna exercitation eu minim duis fugiat non occaecat. Proident Lorem deserunt est fugiat cillum dolore duis.',
          datePublication: 'Sun May 22 2016 10:15:56 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Tran',
          content: 'Ex ea laborum fugiat sint qui quis reprehenderit exercitation eu eu occaecat laboris deserunt non. Ipsum nulla officia officia dolor Lorem cupidatat qui nisi commodo officia. Cupidatat minim deserunt occaecat sunt cupidatat. Aute nulla anim irure laborum consequat minim esse eu laboris nulla consectetur fugiat sit ea. Cupidatat reprehenderit veniam adipisicing ad anim id anim dolore amet proident. Sint labore consequat tempor cupidatat commodo non laboris.',
          datePublication: 'Fri Apr 15 2016 08:21:49 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Blackwell',
          content: 'Dolor occaecat anim aliquip est. Duis labore aliqua aliqua cupidatat aliqua. Consequat eu irure do culpa proident in sint labore occaecat elit. Veniam incididunt culpa adipisicing ullamco Lorem cupidatat cupidatat fugiat. Nulla quis dolor reprehenderit consectetur velit cupidatat voluptate laborum sint irure exercitation. Incididunt aute aliqua in veniam enim nulla laboris et.',
          datePublication: 'Sun Jul 12 2015 11:42:07 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Erika',
          content: 'Deserunt proident adipisicing consequat exercitation mollit nulla do quis adipisicing elit aute sint. Et eiusmod ex eu esse fugiat commodo. Elit ipsum cupidatat veniam pariatur ipsum in pariatur consequat. Aute officia adipisicing voluptate non consequat dolore irure labore non aute ullamco adipisicing.',
          datePublication: 'Sun Apr 10 2016 19:53:02 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Mayo',
          content: 'Aliqua cupidatat exercitation sint veniam reprehenderit nostrud dolore cupidatat dolore aliquip eiusmod ex. Proident tempor eiusmod cillum eu commodo reprehenderit do culpa tempor laborum nisi fugiat laborum. Mollit fugiat labore aute cupidatat irure commodo. Ut pariatur tempor in qui labore proident do. Dolore adipisicing sit non culpa. Ut aute voluptate aliqua officia quis Lorem nulla cillum amet ea reprehenderit nisi. Ullamco officia sit sit eiusmod adipisicing Lorem eiusmod minim nostrud.',
          datePublication: 'Fri Jan 02 2015 01:12:15 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Elvia',
          content: 'Ut eu occaecat ex incididunt elit irure voluptate duis officia quis. Est deserunt occaecat dolore officia nisi ullamco. Voluptate eiusmod veniam velit ullamco sit voluptate reprehenderit magna eiusmod. Duis excepteur officia aute consectetur commodo anim elit mollit qui incididunt id commodo id. Anim pariatur qui dolor nulla elit laboris laborum exercitation. Excepteur elit duis culpa ullamco ad. Proident nisi ad sit sunt enim deserunt voluptate eiusmod minim nostrud pariatur mollit.',
          datePublication: 'Tue Jan 27 2015 04:42:51 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Natalia',
          content: 'Et aliqua id elit ex nostrud ipsum. Sit voluptate culpa deserunt in ad veniam. Mollit cupidatat irure cupidatat aliqua aute pariatur. Aute voluptate proident commodo sint consectetur laboris ea sint incididunt incididunt proident nostrud anim.',
          datePublication: 'Tue Jan 27 2015 12:24:43 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Mara',
          content: 'Proident sit sunt eiusmod irure. Sint veniam amet aliquip aliquip. Mollit adipisicing duis cillum ex incididunt ullamco adipisicing laborum exercitation ad id aliquip nisi. Veniam Lorem pariatur ex aliquip excepteur non officia. Aute labore id fugiat veniam. Laboris pariatur voluptate eiusmod velit aliquip duis velit sint ex consequat et excepteur. Minim esse est elit amet amet.',
          datePublication: 'Tue Nov 24 2015 15:54:03 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Yesenia',
          content: 'Aliqua reprehenderit aliquip dolore dolore cupidatat laborum commodo excepteur. Sunt velit mollit ad culpa amet sunt sint ex amet officia et consectetur. Nulla consectetur non magna aliquip.',
          datePublication: 'Tue Jan 12 2016 20:26:28 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Colon',
          content: 'Ea irure ut ut qui ipsum est. Dolor fugiat officia irure exercitation aute et cupidatat commodo nostrud incididunt exercitation. Nulla pariatur est cupidatat veniam exercitation adipisicing fugiat sunt adipisicing consectetur. Reprehenderit pariatur consequat consequat id aute consectetur id ex ipsum laborum est dolor nulla. Eu fugiat est exercitation sunt ut.',
          datePublication: 'Fri Feb 20 2015 12:12:44 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        },
        {
          username: 'Black',
          content: 'Ex Lorem voluptate nostrud occaecat ut adipisicing Lorem consequat laboris consequat. Exercitation labore minim enim anim do aute magna sunt. Minim in sit ut cillum. Id proident sunt consequat deserunt pariatur. Dolor sint ut nostrud magna officia labore est.',
          datePublication: 'Mon Dec 07 2015 15:55:21 GMT+0000 (UTC)',
          picture: 'http://placehold.it/64x64'
        }
      ]
    }];
  let arrayCategories = ['lorem', 'blare', 'aliquip'];

  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.inject((Categories, $httpBackend) => {
      categories = Categories;
      $http = $httpBackend;
    });
    $http.whenGET(`${urlBackend}/query/rest/categories`).respond(200, arrayCategories);
    $http.whenGET(`${urlBackend}/query/rest/categorie/lorem`).respond(200, arrayArticles);
  });

  afterEach(() => {
    $http.verifyNoOutstandingExpectation();
    $http.verifyNoOutstandingRequest();
  });

  it('Should return categories', () => {
    $http.expectGET(`${urlBackend}/query/rest/categories`);
    categories.getCategories().then(data => {
      expect(data).toEqual(arrayCategories);
    });
    $http.flush();
  });

  it('Should return articles contained in a categorie', () => {
    $http.expectGET(`${urlBackend}/query/rest/categorie/lorem`);
    categories.getCategorie('lorem').then(data => {
      expect(data).toEqual(arrayArticles);
    });
    $http.flush();
  });
});
