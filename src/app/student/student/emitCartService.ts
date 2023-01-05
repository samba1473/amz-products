import {EventEmitter, Injectable} from '@angular/core';

@Injectable()

export class EmitDataService {
  clickEvent = new EventEmitter();
  clicked(item:any) {
    this.clickEvent.emit(item);
  }
}