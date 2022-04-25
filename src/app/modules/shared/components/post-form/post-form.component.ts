import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '@shared/interfaces/posts.interfaces';

@Component({
  selector: 'ccd-post-form',
  templateUrl: 'post-form.component.html',
})
export class PostFormComponent implements OnInit {
  @Input() post: Post;
  @Output() formSubmit = new EventEmitter<Post>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.next({
        ...this.form.value,
        ...(this.post ? { id: this.post.id } : {}),
      });
    }
  }

  private createForm() {
    this.form = this.fb.group({
      title: [
        this.getControlValue('title'),
        [Validators.required, Validators.minLength(3)],
      ],
      body: [
        this.getControlValue('body'),
        [Validators.required, Validators.minLength(3)],
      ],
      userId: [this.getControlValue('userId')],
    });
  }

  private getControlValue(key: string): string | null {
    return (this.post && this.post[key]) || null;
  }
}
