import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SectionApresentationComponent } from "./section-apresentation/section-apresentation.component";
import { PrincipaisPesquisasComponent } from './principais-pesquisas/principais-pesquisas.component';
import { VenhaFazerParteComponent } from "./venha-fazer-parte/venha-fazer-parte.component";
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { EventosComponent } from './eventos/eventos.component';
import { InstituicoesComponent } from './instituicoes/instituicoes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    NavBarComponent,
    SectionApresentationComponent,
    PrincipaisPesquisasComponent,
    VenhaFazerParteComponent,
    ColaboradoresComponent,
    EventosComponent,
    InstituicoesComponent
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'inova-portiguar';
}
