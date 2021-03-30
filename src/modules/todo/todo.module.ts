import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from 'App/components/loader.component';
import { TODO_FEATURE_KEY } from 'Modules/todo/constans';
import * as TodoReducers from 'Modules/todo/reducers';
import * as fromEffects from 'Modules/todo/effects';
import { TodoComponent } from './todo.component';
import { StoreModule } from '@ngrx/store';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoRecordComponent } from './components/todo-record/todo-record.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { EffectsModule } from '@ngrx/effects';
import { TodoNavigationComponent } from './components/todo-navigation/todo-navigation.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoRecordComponent,
    TodoAddComponent,
    LoaderComponent,
    TodoNavigationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature(fromEffects.EFFECTS),
    StoreModule.forFeature(TODO_FEATURE_KEY, TodoReducers.reducers),
    TodoRoutingModule,
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
