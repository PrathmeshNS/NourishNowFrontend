import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, PartialObserver } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarClickService {
  private linkDataSubject = new BehaviorSubject<string>('Initial data');
  linkData$ = this.linkDataSubject.asObservable();

  private subLinkDataSubject = new BehaviorSubject<string>('Initial data');
  subLinkData$ = this.subLinkDataSubject.asObservable();

  linkData: string = "";
  subLinkData = ""

  constructor() {
  }


  setLinkData(data: string) {
    this.linkDataSubject.next(data);
  }

  setSubLinkData(data: string) {
    this.subLinkDataSubject.next(data);
  }
}
