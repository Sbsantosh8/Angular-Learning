import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
title: String = 'Task Tracker';
constructor(){}
ngOnInit(): void {}

toggleAddTask(){
  console.log('toggle from Header Component.ts')
}
}
