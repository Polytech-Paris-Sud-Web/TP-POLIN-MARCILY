import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.css']
})
export class OneArticleComponent implements OnInit {

  id: number;

  article: Article;
  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit() {
    this.id = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.load()
  }

  load(){
    this.articleService.getById(this.id).subscribe((article) => {
      console.log(article);
      this.article = article;
    });
  }

  back() {
    this.router.navigate(['articles']);
  }
}
