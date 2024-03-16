import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 101,
      roomType: 'Deluxe',
      amenities: 'AC, wifi',
      price: 500,
      photos: 'https://images...',
      checkInTime: new Date('12-Nov-2023'),
      checkOutTime: new Date('15-Nov-2023'),
      rating: 4.5
    },
    {
      roomNumber: 102,
      roomType: 'Private',
      amenities: 'AC, wifi, TV',
      price: 700,
      photos: 'https://images...',
      checkInTime: new Date('12-Nov-2023'),
      checkOutTime: new Date('15-Nov-2023'),
      rating: 4.6
    },
    {
      roomNumber: 103,
      roomType: 'Cottage',
      amenities: 'AC, wifi, pool',
      price: 1500,
      photos: 'https://images...',
      checkInTime: new Date('12-Nov-2023'),
      checkOutTime: new Date('15-Nov-2023'),
      rating: 5.05
    }
  ]

  // constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig) {
    constructor() {
    console.log('Room service initialized')
    // console.log(config.apiEndpoint)
   }
  getRoomsList(){
    let akshay={
      name:'akshay',
      lName:'haragon'
    }
    localStorage.setItem('akshayData',JSON.stringify(akshay));
    return this.roomList;
  }
}
