import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter()

constructor(){}
  ngOnInit(): void{}

onClick(): void{
  console.log("OnClick Running ...")
  this.btnClick.emit();
}

}
