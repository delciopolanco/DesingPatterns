export interface INotification {
  send(message: string): void;
}

export class SmsNotification implements INotification {
  send(message: string): void {
    console.log(`Sending ${message} with Third Party Provider`);
  }
}

export class PushNotification implements INotification {
  send(message: string): void {
    console.log(`Sending ${message} with Twillo`);
  }
}

export class EmailNotification implements INotification {
  send(message: string): void {
    console.log(`Sending ${message} with Google`);
  }
}

const type = 'sms' || 'push' || 'email';
let notification: INotification = null;

switch (type) {
  case 'sms':
    notification = new SmsNotification();
    notification.send('sms');
    break;
  case 'email':
    notification = new EmailNotification();
    notification.send('sms');
    break;
  case 'push':
    notification = new PushNotification();
    notification.send('sms');
    break;
}
