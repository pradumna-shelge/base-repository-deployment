import { Injectable } from '@angular/core';
import { searchData } from '../flight/models/Airport';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
searchData : searchData = {}as searchData
  constructor() { }

  postSearchData(searchData: searchData){
    this.searchData = searchData;
  }

  getSerchValue(){
    return this.searchData;
  }
}
