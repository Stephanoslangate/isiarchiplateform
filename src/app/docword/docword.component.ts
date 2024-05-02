import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';
import { defaultDocument, WEB_API_ACTION } from '../data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { TitleBar } from '../title-bar';
 
@Component({
  selector: 'app-docword',
  templateUrl: './docword.component.html',
  styleUrls: ['./docword.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ToolbarService]
})
export class DocwordComponent {

    public hostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';
    @ViewChild('documenteditor_default')
    public container:any= DocumentEditorContainerComponent ;
    public culture: string = 'en-US';
    titleBar:any= TitleBar ;
 
    onCreate(): void {
        let titleBarElement:any = document.getElementById('default_title_bar');
        this.titleBar = new TitleBar(titleBarElement, this.container.documentEditor, true);
        this.container.serviceUrl = this.hostUrl + WEB_API_ACTION;
        this.container.documentEditor.open(JSON.stringify(defaultDocument));
        this.container.documentEditor.documentName = 'Getting Started';
        this.titleBar.updateDocumentTitle();
    }
 
    onDocumentChange(): void {
        if (!isNullOrUndefined(this.titleBar)) {
            this.titleBar.updateDocumentTitle();
        }
        this.container.documentEditor.focusIn();
    }
}
