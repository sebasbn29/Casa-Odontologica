import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTermSource = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSource.asObservable();

  private categoryFilterSource = new BehaviorSubject<string | null>(null);
  categoryFilter$ = this.categoryFilterSource.asObservable();

  private brandFilterSource = new BehaviorSubject<string[]>([]);
  brandFilter$ = this.brandFilterSource.asObservable();

  setSearchTerm(term: string) {
    this.searchTermSource.next(term);
  }

  setCategoryFilter(category: string | null) {
    this.categoryFilterSource.next(category);
  }

  setBrandFilter(brands: string[]) {
    this.brandFilterSource.next(brands);
  }

  // Nuevo método para limpiar los filtros
  clearFilters() {
    this.categoryFilterSource.next(null);
    this.brandFilterSource.next([]);
  }
}
