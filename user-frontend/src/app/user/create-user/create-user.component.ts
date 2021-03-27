import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
      private router:Router,
      private userService:UserService) { }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            mobileNumber: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.userForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }

        this.userService.createUser(this.userForm.value).subscribe(data=>{
          this.onReset();
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4));
        });
        // display form values on success

    }

    onReset() {
        this.submitted = false;
        this.userForm.reset();
        this.router.navigateByUrl('user');
    }

}
