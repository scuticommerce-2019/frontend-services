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
import { CategoriesServices} from './categories/categories.services';
import { Routes, RouterModule} from '@angular/router';
import { ConfigsComponent } from './configs/configs.component';
import { ReportsComponent } from './reports/reports.component';
import { TemplatesComponent } from './templates/templates.component';
import { MarketingComponent } from './marketing/marketing.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { ChartsModule } from 'ng2-charts';
import { ServerlistServices} from './services/serverlist.services';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { CustomerlistComponent } from './customers/customerlist/customerlist.component';
import { CategorylistComponent } from './categories/categorylist/categorylist.component';
import { AdminuserlistComponent } from './adminusers/adminuserlist/adminuserlist.component';
import { SearchresultlistComponent } from './searchresultlist/searchresultlist.component';
import { AdminComponent } from './admin/admin.component';
import { DirectoryComponent } from './directory/directory.component';
import { TopnavComponent } from './topnav/topnav.component';
import {ProductsServices} from './products/productlist/products.services';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import {CartServices} from './cart/cart.services';
import { CheckoutComponent } from './checkout/checkout.component';
import { StorefooterComponent } from './storefooter/storefooter.component';


const approutes: Routes = [

  {path: 'admin', component: AdminComponent, children: [
      {path: 'categories', component: CategoriesComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'orderslist', component: OrderlistComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'customerlist', component: CustomerlistComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'productlist', component: ProductlistComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'templates', component: TemplatesComponent},
      {path: 'reports', component: ReportsComponent},
      {path: 'marketing', component: MarketingComponent},
      {path: 'configs', component: ConfigsComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'integrations', component: IntegrationsComponent},
      {path: 'adminusers', component: AdminusersComponent},
      {path: 'searchlist', component: SearchresultlistComponent}
    ]
  },
  {path: 'category/:code', component: DirectoryComponent},
  {path: 'product/:code', component: ProductdetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},

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
    IntegrationsComponent,
    ProductlistComponent,
    OrderlistComponent,
    CustomerlistComponent,
    CategorylistComponent,
    AdminuserlistComponent,
    SearchresultlistComponent,
    AdminComponent,
    DirectoryComponent,
    TopnavComponent,
    ProductdetailComponent,
    CartComponent,
    CheckoutComponent,
    StorefooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [CategoriesServices, ServerlistServices, ProductsServices, CartServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
