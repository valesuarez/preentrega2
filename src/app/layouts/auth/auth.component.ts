import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnDestroy, OnInit{
  authUsuarioChangeSubscription?:Subscription;

  constructor (private AuthService: AuthService,
    private router: Router
  ){  }
  ngOnInit(): void {
   this.suscribeToAuthUsuarioChange();
  }
  ngOnDestroy(): void {
   this.authUsuarioChangeSubscription?.unsubscribe();
  }

    suscribeToAuthUsuarioChange():void{
      this.authUsuarioChangeSubscription =  this.AuthService.authUsuario$.pipe().subscribe({
        next:(authUsuario)=>{
          if (authUsuario != null){
            this.router.navigate(['dashboard'])
          }
        }

      })
    }
    logIn(){
      this.AuthService.logIn()
    }
  }

