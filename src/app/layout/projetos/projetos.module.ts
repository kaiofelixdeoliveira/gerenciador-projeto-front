import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos.component';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MDBBootstrapModule,WavesModule} from 'angular-bootstrap-md';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from '../bs-component/components/date-picker/date-picker.component';

@NgModule({
    imports: [
        CommonModule, 
        ProjetosRoutingModule, 
        PageHeaderModule,
        ReactiveFormsModule,
        FormsModule,
        WavesModule,
        MDBBootstrapModule,
        TranslateModule,
        NgbModule
    ],
    declarations: [ProjetosComponent,DatePickerComponent ]
    
})
export class ProjetosModule {}
