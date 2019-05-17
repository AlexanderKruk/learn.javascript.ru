function Article() {
    this.created = new Date();
    Article.count++;
    Article.lastDate = this.created;
  }

  Article.count = 0;
  Article.lastDate = new Date();

  Article.showStats = function() {
      console.log("Всего:", this.count, "Последняя дата", this.lastDate);
  } 

  new Article();
  new Article();
  
  Article.showStats(); // Всего: 2, Последняя: (дата)
  
  new Article();
  
  Article.showStats(); // Всего: 3, Последняя: (дата)

  console.log(new Date());