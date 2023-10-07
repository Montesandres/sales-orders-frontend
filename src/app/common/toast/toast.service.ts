import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  key = 'toastNotification';
  messageService = inject(MessageService);

  constructor() {}

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      key: this.key,
      summary: 'Success',
      detail: message,
    });
  }

  showInfo(message: string) {
    this.messageService.add({
      severity: 'info',
      key: this.key,
      summary: 'Info',
      detail: message,
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      key: this.key,
      summary: 'Error',
      detail: message,
    });
  }
}
