import { Component, inject, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  public postservice = inject(PostService);

  posts: Post[] = [];
  showForm = false;

  ngOnInit(): void {
    this.postservice.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }

  deletePost(id: number) {
    this.postservice.delete(id).subscribe((res) => {
      this.posts = this.posts.filter((item) => item.id !== id);
      console.log('Post eliminado correctamente');
    });
  }

  openForm(): void {
    this.showForm = true;
  }
}
