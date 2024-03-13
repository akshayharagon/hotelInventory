import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
  // changeDetection:ChangeDetectionStrategy.OnPush - only immutable objects are being allowed
  // it will be assuring no values are modifying only new instances will be allowed 
  
  // ngOmChanges will be applied only on the components or the directives having @Input properties

})
export class RoomsListComponent implements OnChanges, OnDestroy{
  ngOnDestroy(): void {
    console.log('on destroy called')
    }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title=changes['title'].currentValue;
    }
  }


  @Input() allRooms:any;
  @Input() title='';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(data: RoomList) {
    this.selectedRoom.emit(data);
  }
}
