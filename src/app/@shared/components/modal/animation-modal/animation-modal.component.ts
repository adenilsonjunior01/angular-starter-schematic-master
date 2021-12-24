import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-animation-modal',
  templateUrl: './animation-modal.component.html',
  styleUrls: ['./animation-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnimationModalComponent  {
  @Input() modalClass!: string;
  @Input() hideHeader = false;
  @Input() hideFooter = false;
  @Input() contentClass!: string;
  @Input() modalID!: string;
  @Input() backDrop = false;
  public visible = false;
  public visibleAnimate = false;

  constructor() {}


  public show(id?: any): void {
    this.visible = true;
    setTimeout(() => (this.visibleAnimate = true), 100);
    if (id) {
      document.querySelector<any>(`#${id}`).classList.add('md-show');
    } else {
      document.querySelector<any>(`#${this.modalID}`).classList.add('md-show');
    }
  }

  public close(id?: any): void {
    if (id) {
      document.querySelector<any>(`#${id}`).classList.remove('md-show');
    } else {
      document.querySelector<any>(`#${this.modalID}`).classList.remove('md-show');
    }
  }
}
