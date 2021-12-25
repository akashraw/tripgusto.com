import { Injectable } from '@angular/core';
import { TripData } from './TripData';
import { TripClass } from './TripDataClass';
@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }
  getTripInfos(){
    return TripData;
  }
  
}
