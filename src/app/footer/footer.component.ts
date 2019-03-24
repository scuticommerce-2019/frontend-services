import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  date = new Date();
  footer  = 'copyright ©  ' +  this.date.getFullYear();

}
