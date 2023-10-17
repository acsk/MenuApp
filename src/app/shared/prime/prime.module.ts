import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserModule,
    SidebarModule,
    DialogModule,
    CheckboxModule,
    InputNumberModule,
    ToastModule,
    RippleModule,
    ConfirmDialogModule
  ],
  exports: [
    ButtonModule,
    SidebarModule,
    BrowserModule,
    DialogModule,
    CheckboxModule,
    InputNumberModule,
    BrowserAnimationsModule,
    ToastModule,
    RippleModule,
    ConfirmDialogModule
  ]
})
export class PrimeModule { }
