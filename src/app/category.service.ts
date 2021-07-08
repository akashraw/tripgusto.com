import { Injectable } from '@angular/core';
import { TripClass } from './TripDataClass';
import { TripData } from './TripData'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  newCate: TripClass;
  passingVar:string;
  constructor() { }
  getCategory(): TripClass[] {
    return TripData;
  }
  passRoute(routeVar){
    return this.passingVar=routeVar
  }
  getCatRoute(): string{
    return this.passingVar
  }
}
