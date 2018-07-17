import { Component, Input, HostListener,ViewChild } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-side-bar-toggle',
  templateUrl: './side-bar-toggle.component.html',
  styleUrls: ['./side-bar-toggle.component.css']
})

export class SideBarToggleComponent {

@ViewChild(SideBarComponent) arquivoModal;

@ViewChild(SideBarComponent) sideBar;
  
_mensagem:string="";

  
  click() {
   // this.sideBar.toggle();
    this._mensagem = 'teste';
    //this.arquivoModal.MSG();

    this.sideBar.MSG();
  }

}