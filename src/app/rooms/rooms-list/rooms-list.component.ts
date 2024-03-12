import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent {


  @Input() allRooms:any;
  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(data: RoomList) {
    this.selectedRoom.emit(data);
  }
}
