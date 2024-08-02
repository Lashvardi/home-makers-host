import { Component } from '@angular/core';
import { fadeIn, fadeOutIn } from '../../../animations/form-animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
  animations: [fadeOutIn, fadeIn],
})
export class PopupComponent {
  isVisible = false;
  pm = false;
  am = false;
  asap = false;
  selectedValue: string = '';
  email: string = '';
  phone: string = '';
  formSubmitted = false;
  formSuccess = false;
  currentState = 'form';

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  toggleAm() {
    this.am = true;
    this.asap = false;
    this.pm = false;
  }
  togglePm() {
    this.pm = true;
    this.asap = false;
    this.am = false;
  }
  toggleAsap() {
    this.asap = true;
    this.pm = false;
    this.am = false;
  }
  onSubmit(form: any) {
    if (form.valid) {
      this.formSuccess = true;
    } else {
      this.formSuccess = false;
    }
    this.currentState = 'message';
    this.formSubmitted = true;

    setTimeout(() => {
      this.formSubmitted = false;
      this.currentState = 'form';
    }, 5000);
  }
}
