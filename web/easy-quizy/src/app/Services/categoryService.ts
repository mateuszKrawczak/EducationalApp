import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {

    host:string = environment.host;

    constructor(private http:HttpClient) {}

    getCategories():Observable<Array<Category>> {
        return this.http.get<Array<Category>>(this.host + 'api/categories');
    }

}