import {Component, Injectable, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss({result:'Cross click'})">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>{{body}}</p>
      <div *ngIf="catalogueModal">
        <input [(ngModel)]="name" #ctrl="ngModel" required>
        <div style="color:white">
          <pre>{{updateNode | json}}</pre>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-success" (click)="activeModal.close({result:'ok', name:name})">
        <span [translate]="ok"></span>
      </button>
      <button type="button" class="btn btn-outline-danger" (click)="activeModal.close({result:'cancel'})">
        <span [translate]="cancel"></span>
      </button>
    </div>
  `
})
export class NgbdModalContentComponent implements OnInit {
  @Input() title;
  @Input() body;
  @Input() ok;
  @Input() cancel;
  @Input() updateNode;
  @Input() isUpdate;
  @Input() catalogueModal;
  name = '';

  constructor(public activeModal: NgbActiveModal, private translate: TranslateService) {
  }

  ngOnInit() {
    if (this.catalogueModal && this.isUpdate) {
      this.name = this.updateNode.name;
    }
  }
}

@Injectable()
export class ModalHelperService {
  readonly defaultConfirmationOptions: NgbModalOptions = {keyboard: false, backdrop: 'static'};

  constructor(private modalService: NgbModal) {
  }

  confirmation(title: string, body: string, ok?: string, cancel?: string, options?: NgbModalOptions) {
    // language=HTML
    const modalRef = this.modalService.open(NgbdModalContentComponent, options || this.defaultConfirmationOptions);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.body = body;
    modalRef.componentInstance.catalogueModal = false;
    modalRef.componentInstance.ok = ok || 'generic.ok';
    modalRef.componentInstance.cancel = cancel || 'generic.cancel';
    return modalRef;
  }

  updateNode(title: string, body: string, node: any, ok?: string, cancel?: string, options?: NgbModalOptions) {
    // language=HTML
    const modalRef = this.modalService.open(NgbdModalContentComponent, options || this.defaultConfirmationOptions);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.body = body;
    modalRef.componentInstance.catalogueModal = true;
    modalRef.componentInstance.isUpdate = true;
    modalRef.componentInstance.updateNode = node;
    modalRef.componentInstance.ok = ok || 'generic.ok';
    modalRef.componentInstance.cancel = cancel || 'generic.cancel';
    return modalRef;
  }

  addChild(title: string, body: string, node: any, ok?: string, cancel?: string, options?: NgbModalOptions) {
    // language=HTML
    const modalRef = this.modalService.open(NgbdModalContentComponent, options || this.defaultConfirmationOptions);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.body = body;
    modalRef.componentInstance.catalogueModal = true;
    modalRef.componentInstance.isUpdate = false;
    modalRef.componentInstance.updateNode = node;
    modalRef.componentInstance.ok = ok || 'generic.ok';
    modalRef.componentInstance.cancel = cancel || 'generic.cancel';
    return modalRef;
  }
}
