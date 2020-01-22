import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostAddEditComponent } from './blog-post-add-edit/blog-post-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostsComponent,
    BlogPostComponent,
    BlogPostAddEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
