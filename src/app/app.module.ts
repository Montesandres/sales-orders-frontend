import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './auth/log-in/log-in.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { SidenavComponent } from './view-components/sidenav/sidenav.component';
import { AnimateModule } from 'primeng/animate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';
import { HomeComponent } from './home/home.component';
import { ToastModule } from 'primeng/toast';
import { AuthInterceptor } from './common/interceptors/auth.interceptor';

export const apiUri = 'http://localhost:3000';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SidenavComponent,
    HomeComponent,
  ],
  imports: [
    AnimateModule,
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    PanelModule,
    DividerModule,
    InputTextModule,
    SidebarModule,
    BrowserAnimationsModule,
    PasswordModule,
    ToastModule,
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
