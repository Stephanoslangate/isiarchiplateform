import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenugaucheComponent } from './menugauche/menugauche.component';
import { MenuhautComponent } from './menuhaut/menuhaut.component';
import { DocwordComponent } from './docword/docword.component';
import { AccumulationChartModule, BulletChartModule, ChartModule, RangeNavigatorModule, SmithchartModule, SparklineModule, StockChartModule } from '@syncfusion/ej2-angular-charts';
import { DocumentEditorContainerAllModule } from '@syncfusion/ej2-angular-documenteditor';
import { DocpdfComponent } from './docpdf/docpdf.component';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
  MagnificationService, ThumbnailViewService, ToolbarService,
  NavigationService, TextSearchService, TextSelectionService,
  PrintService,
  PdfViewerAllModule
} from '@syncfusion/ej2-angular-pdfviewer';
import { MesdistComponent } from './mesdist/mesdist.component';
@NgModule({
  declarations: [
    AppComponent,
    MenugaucheComponent,
    MenuhautComponent,
    DocwordComponent,
    DocpdfComponent,
    MesdistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule, 
    AccumulationChartModule,
    RangeNavigatorModule, 
    SparklineModule,
    SmithchartModule,
    StockChartModule,
    BulletChartModule,
    DocumentEditorContainerAllModule,
    PdfViewerAllModule
  ],
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    TextSearchService, TextSelectionService, PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
