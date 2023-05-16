import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-hability',
  templateUrl: './hability.component.html',
  styleUrls: ['./hability.component.css'],
})
export class HabilityComponent {
  @Input() type: any;
  @Input() abilities: any;
  @Input() color: any;
  @Output() remove = new EventEmitter<any>();
  @Output() add = new EventEmitter<any>();

  addMode = false;

  newAbility: any = {
    type: '',
    icon: '',
    name: '',
    progress: 1,
  };

  constructor(public authService: AuthServiceService) {}

  addModeToggle() {
    this.addMode = !this.addMode;
  }

  addOne() {
    this.newAbility.type = this.type;
    console.log('newAbility', this.newAbility);
    this.add.emit(this.newAbility);
    this.addMode = !this.addMode;
  }

  removeOne(item: any) {
    this.remove.emit(item);
  }
}
