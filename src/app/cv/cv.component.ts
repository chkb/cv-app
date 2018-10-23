import { Component, OnInit } from '@angular/core';

import { moveIn } from '../router.animations';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.less'],
    animations: [moveIn()],
    // tslint:disable-next-line:use-host-property-decorator
    host: { '[@moveIn]': '' }
})
export class CvComponent implements OnInit {

    ngOnInit(): void { }

}
