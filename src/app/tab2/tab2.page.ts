import { Iphoto, PhotoService } from './../services/photo.service';
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private photoService: PhotoService,
    private actionSheetController: ActionSheetController
  ) {}

  async onInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
