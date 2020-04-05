import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    setLogin(login: string) {
        localStorage.setItem('login', login);
    }

    getLogin():string {
        return localStorage.getItem('login');
    }

    setUserId(userId: string) {
        localStorage.setItem('userId', userId);
    }

    getUserId():string{
        return localStorage.getItem('userId');
    }

    logout() {
        localStorage.removeItem('login');
        localStorage.removeItem('userId');
    }

    isLoggedIn(){
        if(localStorage.getItem('login') && localStorage.getItem('userId')) return true;
        return false;
    }

}