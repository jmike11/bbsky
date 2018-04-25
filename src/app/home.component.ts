import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from './services/data.service';
import { SkyModalDemoComponent } from './modal/modal-demo-launcher.component';

import { SkyModalTestContext } from './modal-test-context';
import {
  SkyModalService,
  SkyModalCloseArgs
} from '@blackbaud/skyux/dist/core';
// import { SkyModule } from '@blackbaud/skyux/dist/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private id: number;
  private title: string;
  private posts: Post[];

  constructor(private dataService: DataService) {
    console.log('made it in ds const');
  }

  public ngOnInit() {
    // console.log('ngoninit');
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
     console.log(this.posts);
    });
  }
  public openModal2() {

    console.log('testing....');
    // SkyModalService.
   // constructor(private modal: SkyModalService) { }
   // let modal  = new SkyModalService();
   // public openModal() {
      const context = new SkyModalTestContext();
      context.valueA = 'Hello';

      const options: any = {
        providers: [{ provide: SkyModalTestContext, useValue: context }],
        ariaDescribedBy: 'docs-modal-content',
        size: 'large'
      };
      let modalInstanceType = SkyModalTestComponent;

    //  const modalInstance = this.modal.open(modalInstanceType, options);
    //  modalInstance.closed.take(1).subscribe((result: SkyModalCloseArgs) => {
    //    console.log(`Modal closed with reason: ${result.reason} and data: ${result.data}`);
    //  });

     // modalInstance.helpOpened.subscribe((helpKey: string) => {
      //  context.eventMessage =  `
     //     Modal header help was invoked with the following help key: ${helpKey}
     //   `;
    //  });
  }
}

  export class SkyModalTestComponent {
    constructor(private modal: SkyModalService) { }

    public openModal() {
      const context = new SkyModalTestContext();
      context.valueA = 'Hello';

      const options: any = {
        providers: [{ provide: SkyModalTestContext, useValue: context }],
        ariaDescribedBy: 'docs-modal-content',
        size: 'large'
      };
      let modalInstanceType = SkyModalTestComponent;

      const modalInstance = this.modal.open(modalInstanceType, options);
      modalInstance.closed.take(1).subscribe((result: SkyModalCloseArgs) => {
        console.log(`Modal closed with reason: ${result.reason} and data: ${result.data}`);
      });

      modalInstance.helpOpened.subscribe((helpKey: string) => {
        context.eventMessage =  `
          Modal header help was invoked with the following help key: ${helpKey}
        `;
      });
    }
  }

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
