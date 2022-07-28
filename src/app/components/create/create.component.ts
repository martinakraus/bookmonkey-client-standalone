import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: [ './create.component.scss' ],
})
export class CreateComponent {
  captureImage = '';
  webcamImage!: WebcamImage;
  showWebcam = false;

  private trigger: Subject<void> = new Subject();
  private nextWebcam: Subject<void> = new Subject();

  takePhoto(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.captureImage = webcamImage!.imageAsDataUrl;
    console.info('received webcam image', this.captureImage);
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<void> {
    return this.nextWebcam.asObservable();
  }
}
