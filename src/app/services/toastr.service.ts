import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private toastrService: NbToastrService) { }
  success(title, message) {
    this.toastrService.success(message, title);
  }

  danger(title, message) {
    this.toastrService.danger(message, title);
  }

  warning(title, message) {
    this.toastrService.warning(message, title)
  }
}
