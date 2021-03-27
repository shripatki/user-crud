import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  userForm: FormGroup;
    submitted = false;
  userId: string;

    constructor(private formBuilder: FormBuilder,
      private router:Router,
      private activatedRoute:ActivatedRoute,
      private userService:UserService) { }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            mobileNumber: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
        });
        this.userId = this.activatedRoute.snapshot.paramMap.get('id');
        if(this.userId){
          this.userService.getUserById(this.userId).subscribe(data=>{
            console.log(data);
            this.userForm.patchValue(data);
          })
        }

    }

    // convenience getter for easy access to form fields
    get f() { return this.userForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        let userData = this.userForm.value;
        userData._id = this.userId;
        this.userService.updateUser(this.userForm.value).subscribe(data=>{
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
