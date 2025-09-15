import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AlertType = 'success' | 'danger' | 'warning' | 'info';

export interface Alert {
  type: AlertType;
  message: string;
  timeout?: number; // optional auto-dismiss
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new BehaviorSubject<Alert | null>(null);
  alert$ = this.alertSubject.asObservable();

  showAlert(type: AlertType, message: string, timeout: number = 3000) {
    this.alertSubject.next({ type, message, timeout });

    if (timeout > 0) {
      setTimeout(() => this.clearAlert(), timeout);
    }
  }

  clearAlert() {
    this.alertSubject.next(null);
  }
}
