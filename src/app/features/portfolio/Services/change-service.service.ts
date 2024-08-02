import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICards } from '../interfaces/projects-cards.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeServiceService {

  private imageChangeSubject = new Subject<string>();
  imageChange$ = this.imageChangeSubject.asObservable();
  changeImage(url: string) {
    this.imageChangeSubject.next(url);
  }
}
