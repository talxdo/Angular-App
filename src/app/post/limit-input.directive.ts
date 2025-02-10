import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[limit]'
})
export class LimitInputDirective {

  @Input() limit: number = 10;

  constructor( private elRef : ElementRef) { }

  ngOnInit() {
    this.truncateText();
  }

  @HostListener('input') onInput() {
    this.truncateText();
  }

  private truncateText() {
    const inputElement: HTMLInputElement = this.elRef.nativeElement;
    const value = inputElement.value || '';

    if (value.length > this.limit) {
      inputElement.value = value.substring(0, this.limit) + '...';
    }
  }
}
