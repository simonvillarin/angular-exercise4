import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { BlogDisplayComponent } from './pages/blog-display/blog-display.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
  },
  {
    path: 'form',
    component: BlogFormComponent,
  },
  {
    path: ':id',
    component: BlogDisplayComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
