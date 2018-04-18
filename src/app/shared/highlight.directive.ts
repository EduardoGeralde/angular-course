import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  @HostBinding ('style.backgroundColor') backgroundColor: string;

  @HostListener ('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener ('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
