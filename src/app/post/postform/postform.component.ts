import { Component, computed, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';
import { LimitInputDirective } from '../limit-input.directive';

@Component({
  selector: 'app-postform',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, LimitInputDirective],
  templateUrl: './postform.component.html',
  styleUrl: './postform.component.scss'
})
export class PostformComponent {

  title = input<string>('');
  post = input<Post | undefined>();

  private postservice = inject(PostService);
  private router = inject(Router);

  postform = computed<FormGroup>(() =>
    new FormGroup({
      'title' : new FormControl(this.post()?.title ?? '', Validators.required),
      'body' : new FormControl(this.post()?.body ?? '', Validators.required),
    }));
  
  get f() {
    return this.postform()?.controls;
  }

  submit(){
    const title = this.postform()?.get('title')?.value || '';
    const body = this.postform()?.get('body')?.value || '';
    const id = this.post()?.id || '';

    const post: Post = {
      title: title,
      body: body
    }

    if(this.post()){
      this.postservice.update(id, post)
      .pipe(
        tap(() => console.log('Modificando post...'))
      )
      .subscribe({
        error: err => console.error(err)
      });
    this.router.navigate(['/post/index'])
    }
    else {
      this.postservice.create(post)
      .pipe(
        tap(() => console.log('Creando post...'))
      )
      .subscribe({
        error: err => console.error(err)
      })
    this.router.navigate(['/post/index'])
    }
  }
}
