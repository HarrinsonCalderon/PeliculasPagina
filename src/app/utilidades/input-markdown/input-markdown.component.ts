import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {
  @Input()
  contenidoMarkDown=''
  @Output() changeMarkDown:EventEmitter<string>=new EventEmitter<string>();
  @Input() placeholder:string='Texto'
  constructor() { }

  ngOnInit(): void {
  }
  inputTextArea(texto:string){
    //console.log(texto)
    this.contenidoMarkDown=texto
    this.changeMarkDown.emit(texto)
  }
}
