import { Component,Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  @Input() mensagem:string;

  toggle() {
   alert(this.mensagem);
  }

MSG()
{
  alert('teste1');
}

}