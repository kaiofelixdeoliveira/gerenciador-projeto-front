import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../../models/user.model';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ModalDirective} from 'angular-bootstrap-md';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
 
})
export class UserComponent implements OnInit {

  users: User[];
  newUser: User = new User;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  @ViewChild('frame', { static: true }) frame: ModalDirective;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    
    this.getAllUsers();

    this.validFormModal();

  }

  validFormModal(){

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }
  getAllUsers(){
    this.userService.getAllUsers().pipe(first()).subscribe(users => {
    this.users = users;
  });
}
  get f() {
    return this.registerForm.controls;
  }


  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.newUser.email = this.f.email.value;
    this.newUser.nome = this.f.username.value;
    this.newUser.senha = this.f.password.value;
    this.newUser.perfil = this.f.role.value;

    this.loading = true;
    this.userService.registerNewUser(this.newUser).pipe(first()).subscribe(

    );

    this.frame.hide();

    this.getAllUsers();

  }


}