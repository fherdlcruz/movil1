import {HttpClient} from '@angular/common/http'
import { Injectable } from "@angular/core";


@Injectable()
export class AuthProvider{

    constructor(
        private http: HttpClient,
    ){

    }

    
    isAuthenticate(){
        return false;
    }

    login(params){
        return this.http.get('/assets/auth_db.json')
    }

    
}