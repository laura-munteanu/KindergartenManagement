import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() {}

  confirm(
    message: string,
    onOkCallBack: () => any,
    title?: string,
    okText?: string,
    cancelText?: string,
    onCancelCallback?: () => any,
    onCloseCallback?: () => any,
    closable?: boolean
  ): void {
    alertify
      .confirm()
      .setting({
        title: title || 'Confirm',
        message,
        labels: {
          ok: okText || 'Confirm',
          cancel: cancelText || 'Cancel'
        },
        closable: closable || false,
        defaultFocus: 'cancel',
        onok: onOkCallBack,
        oncancel: onCancelCallback,
        onclose: onCloseCallback
      })
      .show();
  }

  success(message: string): void {
    alertify.success(message);
  }

  error(message: string): void {
    alertify.error(message);
  }
}
