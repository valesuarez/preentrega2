import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Iusuario } from "../layouts/dashboard/pages/models";

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _authUsuario$ = new BehaviorSubject<Iusuario | null>(null);
    public authUsuario$ = this._authUsuario$.asObservable()

    logIn(): void {
        this._authUsuario$.next({
            email: 'email@gmail.com',
            caontraseña: 1234,
            rol: 'Profesor'
        })
        };

        logOut(): void {
            this._authUsuario$.next(null);
        }
    }


