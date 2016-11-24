import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

@Component({
  selector: 'test-form',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      list: new FormArray([
          new FormGroup({
              name: new FormControl(""),
              value: new FormControl(""),
          })          
      ])
    });

    this.contactForm.setValue({
        name: "test",
        email: "test@b.com",
        list: [
            { name: "Pippo", value: "" },
            // { name: "Pluto" }
        ]
    });
  }
  submitForm(): void {
    console.log(this.contactForm);
  }
  add(): void {
      (this.contactForm.get("list") as FormArray).controls.push(new FormGroup({
            name: new FormControl(""),
            value: new FormControl("")
        }));
  }
}
