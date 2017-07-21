/*jshint esversion: 6 */

class Article {
  constructor(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
  }
}

class ArticleCollection {

  constructor(){
    this.articleList = [];
  }

  checkCollection(){
    return this.articleList;
  }

  createArticle(info){
    var article = new Article(info.title, info.body, info.author);
    var articleUrl = encodeURI(article);
    article.urlTitle = articleUrl;
    this.articleList.push(article);
    console.log(this.articleList);
  }

  editArticle(info){
    var verifyInfo = info;
    var verifyArticle = this.articleList.filter(findArticle);
    var articleIndex = this.articleList.indexOf(verifyArticle[0]);
    var articleUrlTitle = this.articleList[articleIndex];
    var revisedTitle = new Article(info.title, info.body, info.author);
    var articleUrl = encodeURI(revisedTitle);
    revisedTitle.urlTitle = articleUrl;

    if(verifyArticle.length === 0){
      console.log('item does not exist');
    } else {
      this.articleList.splice(articleIndex, 1, revisedTitle);console.log('articlelist', articleList);
    }

    function findArticle(item){
      if(item.title == verifyInfo.title){
        return true;
      }
    }
  }

  deleteArticle(info){
    var verifyInfo = info;
    var verifyArticle = this.articleList.filter(findArticle);
    var articleIndex = this.articleList.indexOf(verifyArticle[0]);
    var articleUrlTitle = this.articleList[articleIndex];

    if(verifyArticle.length === 0){
    } else {
      this.articleList.splice(articleIndex, 1);
      console.log('deletelist', articleList);
    }

    function findArticle(item){
      if(item.title == verifyInfo.title){
        return true;
      }
    }
  }
}


module.exports = new ArticleCollection();