import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbSpinnerModule, NbLayoutModule, NbCardModule,NbTabsetModule, 
  NbListModule, NbUserModule, NbInputModule, NbToastrModule, NbTreeGridModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EchartComponent } from './pages/dashboard/echart/echart.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    EchartComponent,
    ResetPasswordComponent
  ],
  imports: [
    NbSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbTabsetModule,
    NbToastrModule.forRoot(),
    NbListModule,
    NbTreeGridModule,
    NbInputModule,
    NbEvaIconsModule,
    NbUserModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
