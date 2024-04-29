import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthServise } from '../../core/auth.service';
import { IUSer } from './pages/models/index';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl:   './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  
  authUser$: Observable<IUSer|null>;
  constructor(private authService: AuthServise){ 
    this.authUser$=this.authService.authUser$;
  };
    logIn():void{
      this.authService.logIn();
    };
    logOut():void{
      this.authService.logOut();
    };
   

  /*constructor(private matDialog:MatDialog) {}
  inicioSesion():void{
    this.matDialog.open(InicioDialogComponent)
  
  }*/
  
}
 
