import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  private postservice = inject(PostService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id!: number;
  post!: Post;
  form!: FormGroup;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPost'];
    this.postservice.find(this.id).subscribe((data : Post) => {
      this.post = data;
      this.form = new FormGroup({
        title : new FormControl(this.post.title, [Validators.required]),
        body : new FormControl(this.post.body, [Validators.required]),
      })
    })
    
  }

  sumbit() {
    console.log(this.form.value);
    this.postservice.update(this.id, this.form.value).subscribe(() => {
      console.log('Post modifcado correctamente');
      this.router.navigateByUrl('post/index');
    });
  }

  get f() {
    return this.form.controls;
  }

}
