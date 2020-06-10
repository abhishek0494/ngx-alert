import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  AlertDialogueConfirmComponent
} from './alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component';
import {
  AlertSnackbarToasterComponent
} from './alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component';
import {
  AlertServiceService
} from './alert-service/alert-service.service';
import {
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule
} from '@angular/material';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AlertDialogueConfirmComponent,
    AlertSnackbarToasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [AlertServiceService],
  bootstrap: [AppComponent],
  entryComponents: [AlertDialogueConfirmComponent, AlertSnackbarToasterComponent],
  // exports: [AlertServiceService]
})
export class AppModule {}