import { Injectable } from '@angular/core';
import { Category } from './category/category';
import { Cate } from './category/category-data'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  newCate: Category;
  passingVar:string;
  constructor() { }
  getCategory(): Category[] {
    return Cate;
  }
  passRoute(routeVar){
    return this.passingVar=routeVar
  }
  getCatRoute(): string{
    return this.passingVar
  }
}
