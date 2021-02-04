import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  subscribeForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.subscribeForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  subscribe() {
    console.log(this.subscribeForm.value);
  }
}
