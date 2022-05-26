import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HomeComponent } from './home/home.component';

import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { ConfirmDialog } from './home/dialogs/confirm-dialog/confirm-dialog';
import { QueueDialog } from './home/dialogs/queue-dialog/queue-dialog';
import { StoreProductDialog } from './home/dialogs/create-product-dialog/create-product-dialog';
import { TaskDialog } from './home/dialogs/task-dialog/task-dialog';
import { UserDialog } from './home/dialogs/user-dialog/user-dialog';
import { DialogElementsExampleDialog } from './home/dialogs/product-dialog/product-dialog';
import { ConfirmAssignmentDialog } from './home/dialogs/confirm-assignment-dialog/confirm-assignment-dialog';



const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogElementsExampleDialog,
    TaskDialog,
    UserDialog,
    ConfirmDialog,
    QueueDialog,
    StoreProductDialog,
    ConfirmAssignmentDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule
  ],
  exports: [
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
