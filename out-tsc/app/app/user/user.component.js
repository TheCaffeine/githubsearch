import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserComponent = class UserComponent {
    constructor(userservice, http) {
        this.userservice = userservice;
        this.http = http;
        this.userName = 'FredrickWambua';
        this.user = [];
        this.repos = [];
    }
    ngOnInit() {
    }
    getUsers(event) {
        let promise = new Promise((resolve, reject) => {
            this.userservice.getUser(this.userName).toPromise().then(response => {
                this.user = response;
                resolve();
            }, error => {
                this.errorMsg = 'Error encountered';
                reject(error);
            });
        });
        return promise;
    }
    getProfile(userName) {
        this.userservice.getUser(this.userName).subscribe(data => {
            this.user = data;
        });
    }
};
UserComponent = __decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css']
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map