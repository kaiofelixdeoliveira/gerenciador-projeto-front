import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PageHeaderModule } from '../../shared';
import { MDBBootstrapModule, DropdownModule,ModalModule } from 'angular-bootstrap-md';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
    imports: [
        CommonModule, 
        UserRoutingModule, 
        PageHeaderModule, 
        MDBBootstrapModule.forRoot(),
        DropdownModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        TranslateModule,
        NgbModule,
        ModalModule
      
    
    ],
    declarations: [UserComponent]
})
export class UserModule {}
