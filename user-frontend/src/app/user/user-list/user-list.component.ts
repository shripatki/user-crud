import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[]=[];

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data:any)=>{
      this.users = data;
    })
  }

  gotoPage(page,id?){

    let url = id? `/user/${page}/${id}`:`/user/${page}`;
    console.log(url);
    this.router.navigateByUrl(url);
  }

  onDelete(id){
    this.userService.deleteUser(id).subscribe(data=>{
      this.userService.getAllUsers().subscribe((allUD:User[])=>{
        this.users = allUD;
      })
    })
  }

}
