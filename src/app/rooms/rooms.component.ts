import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { RoomList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';

@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [CommonModule, RoomsListComponent, HeaderComponent]
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{
  
  constructor(private roomService:RoomsService){}
  roomList:any;

  ngAfterViewChecked(): void {
  }
  ngAfterViewInit(): void {
    console.log("from after view init " +this.headerComponent.title)
    this.headerComponent.title=' '
  }
  ngOnInit(): void {
    this.roomList=this.roomService.getRoomsList();
    // console.log(this.headerComponent)
  }
  @ViewChild(HeaderComponent, {static:true}) headerComponent : HeaderComponent
  // another way of accessing component properties without using @Input & @Output
  // with @ViewChild we can create instance of particular component by implementing 
  // AfterViewInit. Or we can use {static:true} property to use just within OnInit

  ngDoCheck(): void {
    console.log('on chnages called')
  }
addRoom() {
  console.log("added")
  const newRoom : RoomList= {
    roomNumber: 101,
    roomType: 'Deluxe',
    amenities: 'AC, wifi',
    price: 500,
    photos: 'https://images...',
    checkInTime: new Date('12-Nov-2023'),
    checkOutTime: new Date('15-Nov-2023'),
    rating: 4.5
  }
  // this.roomList.push(newRoom);
  // making new instace of RoomList just to maintain immutability required for ChangeDetectionStratergy
  this.roomList = [...this.roomList, newRoom];
}
  hotelName='Hilton Hotel'
  title = 'Room list';
  showTitle=true;
toggle() {
  this.showTitle=!this.showTitle;
  this.title=`Check out the Room List in ${this.hotelName}`;
}
  displaySelectedRoomInfo: RoomList;
  selectedRoomOnClick(data: RoomList) {
    console.log(`individual room detail from child ${data.roomNumber}`)
    this.displaySelectedRoomInfo=data;
  }





}
