import { Component, Input, OnInit } from '@angular/core';
import { PostData } from '../posts/PostData';
import {Router} from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() post? : PostData;

  constructor() { }

  ngOnInit(): void {
  }

}
