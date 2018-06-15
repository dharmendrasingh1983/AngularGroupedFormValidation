import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatCardModule, MatSelectModule, MatToolbarModule, MatButtonToggleModule } from '@angular/material';
import { TemplateFormComponentComponent } from './components/template-form-component/template-form-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'reactiveform', component: MainComponentComponent },
  { path: 'templateform', component: TemplateFormComponentComponent },
  { path: '', redirectTo: '/reactiveform', pathMatch: 'full' },
  { path: '**', redirectTo: '/reactiveform', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    ChildComponentComponent,
    TemplateFormComponentComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatExpansionModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonToggleModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [ChildComponentComponent],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
