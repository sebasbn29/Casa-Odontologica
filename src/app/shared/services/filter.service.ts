// filter.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private categoryFilterSubject = new BehaviorSubject<string | null>(null);
  private brandFilterSubject = new BehaviorSubject<string[]>([]);

  categoryFilter$ = this.categoryFilterSubject.asObservable();
  brandFilter$ = this.brandFilterSubject.asObservable();

  setCategoryFilter(category: string | null) {
    this.categoryFilterSubject.next(category);
  }

  setBrandFilter(brands: string[]) {
    this.brandFilterSubject.next(brands);
  }
}
