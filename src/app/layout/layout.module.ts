import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { UserComponent } from './users/user.component';
import { GestoresComponent } from './gestores/gestores.component';
import { DatePickerComponent } from './bs-component/components/date-picker/date-picker.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        NgbDatepickerModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule

    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, GestoresComponent]
})
export class LayoutModule { }
