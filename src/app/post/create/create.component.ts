import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { PostService } from '../post.service';
@Component({
  selector: 'app-create',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  public postservice = inject(PostService);
  private router = inject(Router);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  sumbit() {
    console.log(this.form.value);
    this.postservice.create(this.form.value).subscribe(() => {
      console.log('Post creado correctamente');
      this.router.navigateByUrl('post/index');
    });
  }

  get f() {
    return this.form.controls;
  }
}
