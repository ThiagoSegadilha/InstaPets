import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class DetectorDePlataformaService {

  constructor(
    @Inject(PLATFORM_ID) private plataformaId: string
  ) { }

  isPlataformaBrowser() {
    return isPlatformBrowser(this.plataformaId);
  }
}
