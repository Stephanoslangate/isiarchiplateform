import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
  ThumbnailViewService, ToolbarService, NavigationService,
  AnnotationService, TextSearchService, TextSelectionService,
  PrintService,
  PdfViewer,
  PdfViewerAllModule
} from '@syncfusion/ej2-angular-pdfviewer';
import {
  PdfViewerComponent,
  FormFieldsService,
  FormDesignerService
} from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-docpdf',
  template: `<div class="content-wrapper">
<ejs-pdfviewer id="pdfViewer"
         [serviceUrl]='service'
         [documentPath]='document'
         style="height:640px;display:block">
  </ejs-pdfviewer>
</div>`,
providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
 ThumbnailViewService, ToolbarService, NavigationService,
 AnnotationService, TextSearchService, TextSelectionService,
 PrintService]
})
export class DocpdfComponent implements OnInit {
  public service = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
  public document = 'PDF_Succinctly.pdf';
  ngOnInit(): void {
  }
}
