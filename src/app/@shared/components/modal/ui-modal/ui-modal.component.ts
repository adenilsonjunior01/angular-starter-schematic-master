import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UiModalComponent  {
  @Input() dialogClass!: string;
  @Input() hideHeader = false;
  @Input() hideFooter = false;
  @Input() containerClick = true;
  @Input() modalId!: string;
  public visible = false;
  public visibleAnimate = false;

  constructor() {}

  public show(): void {
    this.visible = true;
    setTimeout(() => (this.visibleAnimate = true), 100);
    document.querySelector<any>('body').classList.add('modal-open');
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => (this.visible = false), 300);
    document.querySelector<any>('body').classList.remove('modal-open');
  }

  public onContainerClicked(event: MouseEvent): void {
    if (
      (event.target as HTMLElement).classList.contains('modal') &&
      this.containerClick === true
    ) {
      this.hide();
    }
  }
}
