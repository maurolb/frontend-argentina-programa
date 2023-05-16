import { Component, OnInit } from '@angular/core';
import { AbilitiyService } from 'src/app/services/abilitiy.service';
import { AboutService } from 'src/app/services/about.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  about: any;
  editMode = false;

  abilitiesFront: any[] = [];
  abilitiesBack: any[] = [];
  abilitiesSoft: any[] = [];

  constructor(
    private aboutService: AboutService,
    public authService: AuthServiceService,
    private abilityService: AbilitiyService
  ) {}

  ngOnInit(): void {
    this.getAbout();
    this.getAbilities();
  }

  getAbout() {
    this.aboutService.getAbout().subscribe(
      (res) => {
        this.about = res;
      },
      (err) => console.log(err)
    );
  }

  getAbilities() {
    this.abilityService.getAbilities().subscribe(
      (res) => {
        this.abilitiesBack = [];
        this.abilitiesFront = [];
        this.abilitiesSoft = [];
        for (const item of res) {
          if (item?.type === 'front') {
            this.abilitiesFront.push(item);
          } else if (item?.type === 'back') {
            this.abilitiesBack.push(item);
          } else if (item?.type === 'soft') {
            this.abilitiesSoft.push(item);
          }
        }
      },
      (err) => console.log(err)
    );
  }

  save() {
    this.aboutService.updateAbout(this.about).subscribe(
      (res) => {
        this.about = res;
      },
      (err) => console.log(err)
    );
    this.editModeToggle();
  }

  editModeToggle() {
    this.editMode = !this.editMode;
  }

  addAbility(newAbility: any) {
    this.abilityService.postAbility(newAbility).subscribe(
      (res) => {
        this.getAbilities();
      },
      (err) => console.log(err)
    );
  }

  removeAbility(item: any) {
    this.abilityService.deleteAbility(item?.id).subscribe(
      (res) => {
        this.getAbilities();
      },
      (err) => console.error(err)
    );
  }
}
