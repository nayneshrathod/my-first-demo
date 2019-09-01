import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HeadereComponent } from './headere/headere.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { NostComponent } from './nost/nost.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WchNgEditModule } from '@ibm-wch-sdk/ng-edit';
import { WchNgBootstrapComponentsModule } from '@dx-samples/creative-bootstrap-components';
import { CommonThemeModule } from '@dx-samples/common-ui-components';

@NgModule({
  declarations: [
    AppComponent, 
    HeadereComponent,
    HeaderComponent,
    NostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    DragDropModule,
    WchNgEditModule.forRoot(),
    WchNgBootstrapComponentsModule,
    CommonThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeaderComponent],
  entryComponents: [HeaderComponent, NostComponent]
})
export class AppModule { }
