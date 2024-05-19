import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parallel-video-player';
  videoUrls = [
    "http://res.cloudinary.com/dwsho9gyu/video/upload/v1714904904/lrvxyazsel7xgim8tdpa.mp4",
    "http://res.cloudinary.com/dwsho9gyu/video/upload/v1714291173/qfbdq6wbk6vjsb5twhva.mp4",
    "http://res.cloudinary.com/dwsho9gyu/video/upload/v1714244695/w6ci0qr1hsnlkw3rj0w8.mp4"
  ]
  @ViewChild('firstDiv', { static: false }) firstDiv!: ElementRef;
  @ViewChild('secondDiv', { static: false }) secondDiv!: ElementRef;
  // @ViewChild('thirdDiv', { static: false }) thirdDiv!: ElementRef;

  firstVideoElement!: HTMLVideoElement;
  secondVideoElement!: HTMLVideoElement;

  firstVideoUrl!:String
  secondVideoUrl!:String


  playMe(){
    this.firstVideoUrl = this.videoUrls[2]
    this.secondVideoUrl = this.videoUrls[2]
    this.firstVideoElement.muted = true
    this.firstVideoElement.play()
    this.secondVideoElement.muted = true
    this.secondVideoElement.play()
  }
  ngAfterViewInit(){
    this.firstVideoElement = this.firstDiv.nativeElement;
    this.secondVideoElement = this.secondDiv.nativeElement;
    this.firstVideoUrl = this.videoUrls[0]
    this.secondVideoUrl = this.videoUrls[0]
    this.firstVideoElement.muted = true
    this.firstVideoElement.play()
    this.secondVideoElement.muted = true
    this.secondVideoElement.play()
  }
}
