import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularComponentsComponent } from './angular-components.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
  declarations: [
    AngularComponentsComponent,
    HeaderNavigationComponent,
    LogoComponent
  ],
  imports: [RouterModule],
  exports: [
    AngularComponentsComponent,
    HeaderNavigationComponent,
    LogoComponent
  ]
})
export class AngularComponentsModule { }
