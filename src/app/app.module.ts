import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { RightsectionComponent } from './rightsection/rightsection.component';
import { ServicesComponent } from './services/services.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { CategoriesComponent } from './categories/categories.component';
import {CategoriesServices} from './categories/categories.services';
import {Route, Routes, RouterModule} from '@angular/router';
import { ConfigsComponent } from './configs/configs.component';
import { ReportsComponent } from './reports/reports.component';
import { TemplatesComponent } from './templates/templates.component';
import { MarketingComponent } from './marketing/marketing.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { IntegrationsComponent } from './integrations/integrations.component';

const approutes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'templates', component: TemplatesComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'marketing', component: MarketingComponent},
  {path: 'configs', component: ConfigsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'integrations', component: IntegrationsComponent},
  {path: 'adminusers', component: AdminusersComponent}

];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LeftnavComponent,
    RightsectionComponent,
    ServicesComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    CategoriesComponent,
    ConfigsComponent,
    ReportsComponent,
    TemplatesComponent,
    MarketingComponent,
    AdminusersComponent,
    IntegrationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [CategoriesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
