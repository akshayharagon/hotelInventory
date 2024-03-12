import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RoomList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [CommonModule, RoomsListComponent]
})
export class RoomsComponent {
selectedRoomOnClick(data: RoomList) {
  console.log(`individual room detail from child ${data.roomNumber}`)
}

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

}
