import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PoAdminComponent } from './po-admin/po-admin.component';
import { CommodityCodeComponent, CreateCommodityCodeDialog, UploadCommodityCodeDialog } from './configure-masterData/commodity-code/commodity-code.component';
import { UserRoleComponent, CreateAdminDialog } from './configure-masterData/user-role/user-role.component';
import { WorkGroupComponent, CreateWorkgroupDialog } from './configure-masterData/work-group/work-group.component';
import { RulesComponent } from './configure-masterData/rules/rules.component';
import { SearchWorkflowComponent } from './configure-masterData/work-flow/search-workflow/search-workflow.component';
import { ViewWorkflowDetailsComponent } from './configure-masterData/work-flow/view-workflow-details/view-workflow-details.component';
import { CreateWorkflowComponent } from './configure-masterData/work-flow/create-workflow/create-workflow.component';
import { MatMenuModule } from '@angular/material/menu';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [
    PoAdminComponent,
    CommodityCodeComponent,
    CreateCommodityCodeDialog,
    UploadCommodityCodeDialog,
    UserRoleComponent,
    CreateAdminDialog,
    WorkGroupComponent,
    CreateWorkgroupDialog,
    RulesComponent,
    SearchWorkflowComponent,
    ViewWorkflowDetailsComponent,
    CreateWorkflowComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatListModule,
    MatAutocompleteModule,

  ],
  entryComponents: [
    CreateCommodityCodeDialog, UploadCommodityCodeDialog,
  ],
  providers: []
})
export class AdminModule {
  constructor() {
  }
}
