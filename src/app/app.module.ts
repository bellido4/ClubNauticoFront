import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BarcoComponent } from './barco/barco.component';
import { SalidasComponent } from './salidas/salidas.component';
import { PatroComponent } from './patron/patro.component';
import { ActualizarBarcoComponent } from './actualizar-barco/actualizar-barco.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


const appRoutes:Routes=[
  {path:'', component: HomeComponent},
  {path:'barcos', component: BarcoComponent},
  {path:'patron', component: PatroComponent},
  {path:'salidas', component: SalidasComponent},
  {path:'actualizar', component: ActualizarBarcoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarcoComponent,
    PatroComponent,
    SalidasComponent,
    ActualizarBarcoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
