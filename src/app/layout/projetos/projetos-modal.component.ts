import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjetosService } from './projetos.service';
import { Projeto } from '../../models/projeto.model';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ModalDirective} from 'angular-bootstrap-md'

@Component({
  selector: 'app-projetos-modal',
  templateUrl: './projetos-modal.component.html',
  styleUrls: ['./projetos-modal.component.scss']
})
export class ProjetosModalComponent {

  projeto:Projeto=new Projeto;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  @ViewChild('frame', { static: true }) frame: ModalDirective;



    constructor(private formBuilder: FormBuilder, private projetosService: ProjetosService,) { }
    
    ngOnInit() {
  
      this.validFormModal();
  
    }
  
    validFormModal(){
  
      this.registerForm = this.formBuilder.group({
        codigo: ['', Validators.required],
        proposta: ['', Validators.required],
        descricao: ['', Validators.required],
        quantidadeHoras: ['', Validators.required]
      });
    }
    addProjeto(projeto:Projeto){
      this.projetosService.addNewProjeto(projeto).pipe(first()).subscribe();
  }
    get f() {
      return this.registerForm.controls;
    }
  
  
    onSubmit() {
      this.submitted = true;
  
      if (this.registerForm.invalid) {
        return;
      }
  
      this.projeto.codigo = this.f.codigo.value;
      this.projeto.proposta = this.f.proposta.value;
      this.projeto.descricao = this.f.descricao.value;
      this.projeto.quantidadeHoras = this.f.quantidadeHoras.value;
  
      this.loading = true;
      this.addProjeto(this.projeto);
  
      this.frame.hide();

  
    }
  
  
  }