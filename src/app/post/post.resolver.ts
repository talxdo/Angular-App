import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

import { PostService } from './post.service';
import { Post } from './post';

export const postResolver: ResolveFn<Post | null> = route =>
  inject(PostService).find(route.paramMap.get('idPost') ?? '');
