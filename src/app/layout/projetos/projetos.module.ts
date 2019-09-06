import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, ProjetosRoutingModule, PageHeaderModule],
    declarations: [ProjetosComponent]
})
export class ProjetosModule {}
