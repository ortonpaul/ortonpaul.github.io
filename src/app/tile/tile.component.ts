import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() name: string = '';
  @Input() path: string = '';

  play() {
    let audio = new Audio();
    audio.src = this.path;
    audio.load();
    var promise = audio.play();

    if(promise !== undefined) {
      promise.then().catch(function(error){
        window.alert(error);
      })
    }
  }
}
