import { Component, OnInit } from '@angular/core';
import { Atleta } from 'src/app/entities/atleta';
import { AtletaService } from 'src/app/services/atleta.service';

@Component({
  selector: 'app-listar-atleta',
  templateUrl: './listar-atleta.component.html',
  styleUrls: ['./listar-atleta.component.css']
})
export class ListarAtletaComponent implements OnInit {

  atletas : Atleta[] =[];
  constructor(private servicoAtleta : AtletaService) { }

  ngOnInit(): void {
    this.servicoAtleta.listar().subscribe(
      response =>{this.atletas = response},
      error => console.error(error)
    )
    
  }

}
