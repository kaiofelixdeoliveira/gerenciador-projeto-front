import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        MDBBootstrapModule.forRoot(),
        DropdownModule.forRoot()
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
