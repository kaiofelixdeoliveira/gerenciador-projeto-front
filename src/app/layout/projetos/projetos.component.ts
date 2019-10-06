
import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { ProjetosService } from './projetos.service';
import { GestoresService } from './../gestores/gestores.service';
import { Projeto } from '../../models/projeto.model';
import { Gestor } from '../../models/gestor.model';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDirective } from 'angular-bootstrap-md'

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild('frame', { static: true }) frame: ModalDirective;
  newProjeto: Projeto = new Projeto;
  projetos: Projeto[] = [];
  editField: string = '';
  previous: any = [];
  searchText: string = '';
  headElements = ['codigo', 'proposta', 'descricao', 'quantidadeHoras', 'dataContratacao', 'Remove'];
  listaProjetos: Projeto[] = [];
  projeto: Projeto = new Projeto;
  gestores: Gestor[] = [];
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  model: any;






  /*personLista: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
  ];*/

  /*awaitinglistaProjetos: Array<any> = [
    { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
    { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
    { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
    { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
    { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  ];*/


  @HostListener('input') oninput() {
    this.searchItems();
  }

  constructor(private cdRef: ChangeDetectorRef, private projetosService: ProjetosService,
    private formBuilder: FormBuilder,
    private gestoresService: GestoresService) { }

  ngOnInit() {

    this.validFormModal();
    this.getAllProjetos();
    this.getAllGestores();

  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  getAllProjetos() {
    this.projetosService.getAllProjetos().pipe(first()).subscribe((projetos: Projeto[]) => {
      this.listaProjetos = projetos;
      this.chargerDataSourceTable(this.listaProjetos);
    });
  }

  addNewProjeto() {
    this.projetosService.addNewProjeto(this.newProjeto).pipe(first()).subscribe(() => {

      this.getAllProjetos();

    });
  }

  chargerDataSourceTable(listaProjetos: Projeto[]) {
    this.mdbTable.setDataSource(listaProjetos);
    this.listaProjetos = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.listaProjetos[id][property] = editField;
  }

  remove(id: any) {
    /*this.listaProjetos.unshift(this.listaProjetos[id]);
    this.listaProjetos.splice(id, 1);*/
  }

  add() {
    /* if (this.awaitinglistaProjetos.length > 0) {
       const person = this.awaitinglistaProjetos[0];
       this.listaProjetos.push(person);
       this.awaitinglistaProjetos.splice(0, 1);
     }*/
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.listaProjetos = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.listaProjetos = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }

  //modal methods
  validFormModal() {

    this.registerForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      proposta: ['', Validators.required],
      descricao: ['', Validators.required],
      quantidadeHoras: ['', Validators.required],
      gestor: ['', Validators.required]
    });
  }
  addProjeto(projeto: Projeto) {
    this.projetosService.addNewProjeto(projeto).pipe(first()).subscribe(() => {

      this.getAllProjetos();

    });

  }

  getAllGestores() {
    this.gestoresService.getAllGestores().pipe(first()).subscribe((gestores: Gestor[]) => {
      this.gestores = gestores;
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


    let gestor: Gestor = new Gestor();
    gestor.id = String(this.f.gestor.value);

    this.projeto.codigo = this.f.codigo.value;
    this.projeto.proposta = this.f.proposta.value;
    this.projeto.descricao = this.f.descricao.value;
    this.projeto.quantidadeHoras = this.f.quantidadeHoras.value;
    this.projeto.gestor = gestor;

    this.loading = true;
    this.addProjeto(this.projeto);
    this.registerForm.reset();

    this.submitted = false;
    this.loading = false;
    this.frame.hide();

  }

}



