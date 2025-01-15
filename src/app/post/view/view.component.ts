import { Component, inject, input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

  private postservice = inject(PostService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // id!: number;
  // post!: Post;
  public post = input<Post | undefined>();

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['idPost'];

  //   this.postservice.find(this.id).subscribe((data : Post) => {
  //     this.post = data;
  //   })
  // }

}
