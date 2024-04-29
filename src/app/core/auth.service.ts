import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUSer } from "../layouts/dashboard/pages/models";

@Injectable({providedIn: 'root'})
export class AuthServise{
    [x: string]: any;
    authUser$= new BehaviorSubject<IUSer|null>(null)
    
    logIn():void{
        this.authUser$.next({
            email:'v@gmail.com',
            rol:'admin',
        })

    }
    logOut(): void{
        this.authUser$.next(null)
    }
}