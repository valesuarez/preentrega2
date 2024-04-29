import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from '../../core/auth.service';
import {  Iusuario } from './pages/models/index';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  mostrarComponent =true;
  
  authUsuario$: Observable<Iusuario|null>;
  authUsuarioSinPipe:Iusuario |null =null;
  authUsuarioSubscription?:Subscription;

  constructor(private authService: AuthService,
    private router: Router 
  ){ 
    this.authUsuario$=this.authService.authUsuario$;
  }
  ngOnDestroy():void{
    this.authUsuarioSubscription?.unsubscribe();
  }
  ngOnInit():void{
    this.authUsuarioSubscription =this.authService.authUsuario$.subscribe({
      next:(usuario) => {
        this.authUsuarioSinPipe = usuario;
      },
    });
  }
    
    logOut():void{
      this.authService.logOut();
      this.router.navigate(['dashboard'])
    };
   

  
}
 
