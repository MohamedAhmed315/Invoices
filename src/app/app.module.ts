import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { SetNewPasswordComponent } from './login/set-new-password/set-new-password.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ClientsComponent } from './clients/clients.component';
import { TeamComponent } from './team/team.component';
import { SettingsComponent } from './settings/settings.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { ClientsSummaryComponent } from './clients/clients-summary/clients-summary.component';
import { TeamSummaryComponent } from './team/team-summary/team-summary.component';
import { LogSummaryComponent } from './activity-log/log-summary/log-summary.component';
import { InvoicesSummaryComponent } from './invoices/invoices-summary/invoices-summary.component';
import { CurrencySummaryComponent } from './invoices/currency-summary/currency-summary.component';
import { ExpensesSummaryComponent } from './expenses/expenses-summary/expenses-summary.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderTitleComponent } from './top-header/header-title/header-title.component';
import { NotificationComponent } from './notification/notification.component';
import { AdminComponent } from './admin/admin.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NewEditInvoiceComponent } from './invoices/new-edit-invoice/new-edit-invoice.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SucessAlertComponent } from './shared/alerts/sucess-alert/sucess-alert.component';
import { ErrorAlertComponent } from './shared/alerts/error-alert/error-alert.component';
import { LoadingViewComponent } from './shared/loading-view/loading-view.component';
import { AuthInterceptorService } from './shared/auth-interceptor.service';

import { NewTeamMemberComponent } from './team/new-team-member/new-team-member.component';
import { DeleteTeamMemberComponent } from './team/delete-team-member/delete-team-member.component';
import { EditTeamMemberComponent } from './team/edit-team-member/edit-team-member.component';
import { PreviewInvoiceComponent } from './invoices/preview-invoice/preview-invoice.component';
import { DeleteInvoiceComponent } from './invoices/delete-invoice/delete-invoice.component';
import { ItemsComponent } from './items/items.component';
import { NewItemComponent } from './items/new-item/new-item.component';
import { DeleteItemComponent } from './items/delete-item/delete-item.component';
import { NewExpenseComponent } from './expenses/new-expense/new-expense.component';
import { EditExpenseComponent } from './expenses/edit-expense/edit-expense.component';
import { DeleteExpenseComponent } from './expenses/delete-expense/delete-expense.component';
import { PreviewExpenseComponent } from './expenses/preview-expense/preview-expense.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { DeleteClientComponent } from './clients/delete-client/delete-client.component';
import { PreviewClientComponent } from './clients/preview-client/preview-client.component';
import { BusinessProfileComponent } from './settings/business-profile/business-profile.component';
import { CustomizationComponent } from './settings/customization/customization.component';
import { GeneralSettingsComponent } from './settings/general-settings/general-settings.component';
import { UnitsFormatsComponent } from './settings/units-formats/units-formats.component';
import { TaxesComponent } from './settings/taxes/taxes.component';
import { EditTaxComponent } from './settings/taxes/edit-tax/edit-tax.component';
import { DeleteTaxComponent } from './settings/taxes/delete-tax/delete-tax.component';
import { NewTaxComponent } from './settings/taxes/new-tax/new-tax.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoginComponent,
    DashboardComponent,
    ChangePasswordComponent,
    SetNewPasswordComponent,
    SideBarComponent,
    InvoicesComponent,
    ExpensesComponent,
    ClientsComponent,
    TeamComponent,
    SettingsComponent,
    ActivityLogComponent,
    ClientsSummaryComponent,
    TeamSummaryComponent,
    LogSummaryComponent,
    InvoicesSummaryComponent,
    CurrencySummaryComponent,
    ExpensesSummaryComponent,
    TopHeaderComponent,
    HeaderTitleComponent,
    NotificationComponent,
    AdminComponent,
    NewEditInvoiceComponent,
    SucessAlertComponent,
    ErrorAlertComponent,
    LoadingViewComponent,
    NewTeamMemberComponent,
    DeleteTeamMemberComponent,
    EditTeamMemberComponent,
    PreviewInvoiceComponent,
    DeleteInvoiceComponent,
    ItemsComponent,
    NewItemComponent,
    DeleteItemComponent,
    NewExpenseComponent,
    EditExpenseComponent,
    DeleteExpenseComponent,
    PreviewExpenseComponent,
    NewClientComponent,
    EditClientComponent,
    DeleteClientComponent,
    PreviewClientComponent,
    BusinessProfileComponent,
    CustomizationComponent,
    GeneralSettingsComponent,
    UnitsFormatsComponent,
    TaxesComponent,
    EditTaxComponent,
    DeleteTaxComponent,
    NewTaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    GoogleChartsModule,
    NgxPaginationModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule,
    FormsModule
  ],
  providers: [
    DashboardComponent,
    InvoicesComponent,
    ExpensesComponent,
    ClientsComponent,
    TeamComponent,
    SettingsComponent,
    ActivityLogComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    DeleteInvoiceComponent,
    NewItemComponent,
    NewExpenseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Method for Implemnt Translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}
