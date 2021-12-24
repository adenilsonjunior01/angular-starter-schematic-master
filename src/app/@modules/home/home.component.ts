import { AnimationModalComponent } from './../../@shared/components/modal/animation-modal/animation-modal.component';
import { UiModalComponent } from './../../@shared/components/modal/ui-modal/ui-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild(UiModalComponent) modal: any;
    @ViewChild(AnimationModalComponent) animation: any;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    public letsGo(): void {
        this.router.navigate(['/login']);
    }

}
