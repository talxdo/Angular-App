import { Component, inject, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {

  private postservice = inject(PostService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id!: number;
  post!: Post;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPost'];

    this.postservice.find(this.id).subscribe((data : Post) => {
      this.post = data;
    })
  }

}
