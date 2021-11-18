import { __decorate } from "tslib";
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    { path: 'user', component: UserComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map