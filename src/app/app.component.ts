import { AfterViewInit, Component, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RoomsComponent, ContainerComponent, EmployeeComponent]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('user', {read:ViewContainerRef}) vcr:ViewContainerRef; 
  ngAfterViewInit(): void {
    const compRef = this.vcr.createComponent(RoomsComponent);
    compRef.instance.hotelName = "Hilton Hotel (from @ViewChild ViewContainerRef)"
  }
  title = 'hotelInventory';
  // @ViewChildren() can be used if wanted to access or initialize multiple components
  // it has type QueryList

}
