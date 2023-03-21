import { getListCategories } from './../state/movies.selector';
import { MoviesState } from './../state/movies.state';
import { GetCategory } from './../interfaces/get-movies';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
ListCategories!:Observable<GetCategory[]>;

constructor(private store:Store<MoviesState>){}

FiltersForm = new FormGroup({
  category:new FormControl('',[Validators.required]),
});

ngOnInit(): void {
this.ListCategories = this.store.select(getListCategories);
}

}
