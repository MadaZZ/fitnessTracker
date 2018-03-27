import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //emitter to toggle side av on sandwich button click
  @Output() sideNavTog = new EventEmitter<void>();
  constructor() { }
  
  ngOnInit() {
  }
  toggleOnCLick(){
    this.sideNavTog.emit(); 
  }
}
