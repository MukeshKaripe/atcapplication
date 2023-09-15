import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor() { }
  userSearchData:any
  searchFlightsData(data:any):void {
    this.userSearchData = data;
  }
}
