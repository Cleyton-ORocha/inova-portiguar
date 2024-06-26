import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HistoryComponent } from "./history/history.component";

@Component({
    selector: 'app-inovar-potiguar',
    standalone: true,
    templateUrl: './inovar-potiguar.component.html',
    styleUrl: './inovar-potiguar.component.css',
    imports: [
        NavBarComponent,
        FooterComponent,
        HistoryComponent
    ]
})
export default class InovarPotiguarComponent {

}
