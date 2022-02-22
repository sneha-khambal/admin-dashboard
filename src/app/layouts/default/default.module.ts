import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
 

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
   MatSidenavModule,
   MatDividerModule,
   MatCardModule,
   FlexLayoutModule,
   MatTableModule,
  MatPaginatorModule 
 
    
  ],
  providers:[DashboardService]
})
export class DefaultModule { }
