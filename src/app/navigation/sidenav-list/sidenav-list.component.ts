import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  //Emiiter to close sidenave on button click
  @Output() listclose = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  Onclose(){
    this.listclose.emit();
  }
}
