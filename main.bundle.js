webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admin_orders_admin_orders_component__ = __webpack_require__("../../../../../src/app/admin/components/admin-orders/admin-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_admin_products_admin_products_component__ = __webpack_require__("../../../../../src/app/admin/components/admin-products/admin-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_product_form_product_form_component__ = __webpack_require__("../../../../../src/app/admin/components/product-form/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_admin_auth_guard_service__ = __webpack_require__("../../../../../src/app/admin/services/admin-auth-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: 'admin/products/new',
                    component: __WEBPACK_IMPORTED_MODULE_6__components_product_form_product_form_component__["a" /* ProductFormComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_2_shared_services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__services_admin_auth_guard_service__["a" /* AdminAuthGuard */]]
                }, {
                    path: 'admin/products/:id',
                    component: __WEBPACK_IMPORTED_MODULE_6__components_product_form_product_form_component__["a" /* ProductFormComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_2_shared_services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__services_admin_auth_guard_service__["a" /* AdminAuthGuard */]]
                }, {
                    path: 'admin/products',
                    component: __WEBPACK_IMPORTED_MODULE_5__components_admin_products_admin_products_component__["a" /* AdminProductsComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_2_shared_services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__services_admin_auth_guard_service__["a" /* AdminAuthGuard */]]
                },
                { path: 'admin/orders', component: __WEBPACK_IMPORTED_MODULE_4__components_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_shared_services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__services_admin_auth_guard_service__["a" /* AdminAuthGuard */]] },
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components_admin_products_admin_products_component__["a" /* AdminProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_product_form_product_form_component__["a" /* ProductFormComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_admin_auth_guard_service__["a" /* AdminAuthGuard */]
        ]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/components/admin-orders/admin-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/admin-orders/admin-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Orders</h1>\n<table class=\"table\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Customer</th>\n\t\t\t<th>Date</th>\n\t\t\t<th>Action</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let order of order$ | async\">\n\t\t\t<td>\n\t\t\t\t{{ order.shopping.name }}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{ order.datePlaced | date }}\n\t\t\t</td>\n\t\t\t<td><a href=\"#\">View</a></td>\n\t\t</tr>\n\t</tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/admin/components/admin-orders/admin-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_order_service__ = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminOrdersComponent = (function () {
    function AdminOrdersComponent(orderService) {
        this.orderService = orderService;
        this.order$ = orderService.getOrders();
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    return AdminOrdersComponent;
}());
AdminOrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-orders',
        template: __webpack_require__("../../../../../src/app/admin/components/admin-orders/admin-orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/components/admin-orders/admin-orders.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_order_service__["a" /* OrderService */]) === "function" && _a || Object])
], AdminOrdersComponent);

var _a;
//# sourceMappingURL=admin-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/components/admin-products/admin-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/admin-products/admin-products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n\t<a routerLink=\"/admin/products/new\" class=\"btn btn-primary\">New Product</a>\n</p>\n<p>\n\t<input\n\t\t#query\n\t\t(keyup)=\"filter(query.value)\" \n\t\ttype=\"text\" \n\t\tplaceholder=\"Search...\"\n\t\tclass=\"form-control\">\n</p>\n\n<data-table\n\t[items]=\"items\"\n\t[itemCount]=\"itemCount\"\n\t(reload)=\"reloadItems($event)\"\n>\n\t<data-table-column\n\t\t[property]=\"'title'\"\n\t\t[header]=\"'Title'\"\n\t\t[sortable]=\"true\"\n\t\t[resizable]=\"true\"\n\t>\n\t</data-table-column>\n\t<data-table-column\n\t\t[property]=\"'category'\"\n\t\t[header]=\"'Category'\"\n\t\t[sortable]=\"true\"\n\t\t[resizable]=\"true\"\n\t>\n\t\t<ng-template #dataTableCell let-item=\"item\">\n\t\t\t{{ item.category }}\n\t\t</ng-template>\n\t</data-table-column>\n\t<data-table-column\n\t\t[property]=\"'price'\"\n\t\t[header]=\"'Price'\"\n\t\t[sortable]=\"true\"\n\t\t[resizable]=\"true\"\n\t>\n\t<ng-template #dataTableCell let-item=\"item\">\n\t\t{{ item.price | currency:'INR':true }}\n\t</ng-template>\n\t</data-table-column>\n\t<data-table-column\n\t\t[property]=\"'$key'\"\n\t>\n\t\t<ng-template #dataTableCell let-item=\"item\">\n\t\t\t<a [routerLink]=\"['/admin/products/', item.$key]\">Edit</a>\n\t\t</ng-template>\n\t</data-table-column>\n</data-table>\n"

/***/ }),

/***/ "../../../../../src/app/admin/components/admin-products/admin-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_4_data_table__ = __webpack_require__("../../../../angular-4-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_4_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_4_data_table__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminProductsComponent = (function () {
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.items = [];
        this.subscription = this.productService.getAll()
            .subscribe(function (products) {
            _this.products = products;
            _this.initializeTable(products);
        });
    }
    AdminProductsComponent.prototype.initializeTable = function (products) {
        var _this = this;
        this.tableResource = new __WEBPACK_IMPORTED_MODULE_2_angular_4_data_table__["DataTableResource"](products);
        this.tableResource.query({ offset: 0 })
            .then(function (items) { return _this.items = items; });
        this.tableResource.count()
            .then(function (count) { return _this.itemCount = count; });
    };
    AdminProductsComponent.prototype.reloadItems = function (params) {
        var _this = this;
        if (!this.tableResource)
            return;
        this.tableResource.query(params)
            .then(function (items) { return _this.items = items; });
    };
    AdminProductsComponent.prototype.filter = function (query) {
        var filteredProducts = (query) ?
            this.products.filter(function (p) { return p.title.toLowerCase().includes(query.toLowerCase()); }) :
            this.products;
        this.initializeTable(filteredProducts);
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    return AdminProductsComponent;
}());
AdminProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-products',
        template: __webpack_require__("../../../../../src/app/admin/components/admin-products/admin-products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/components/admin-products/admin-products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], AdminProductsComponent);

var _a;
//# sourceMappingURL=admin-products.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/components/product-form/product-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/product-form/product-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-6\">\n\t\t<form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"title\">Title</label>\n\t\t\t\t<input #title=\"ngModel\" [(ngModel)]=\"product.title\" name=\"title\" id=\"title\" type=\"text\" class=\"form-control\" required>\n\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\n\t\t\t\t\tTitle is required\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"price\">Price</label>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t    <span class=\"input-group-text\"><span>&#8377;</span></span>\n\t\t\t\t  </div>\n\t\t\t\t\t<input #price=\"ngModel\" [(ngModel)]=\"product.price\" name=\"price\" id=\"price\" type=\"number\" class=\"form-control\" required [min]=\"0\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\">\n\t\t\t\t\t<div *ngIf=\"price.errors.required\">Price is required</div>\n\t\t\t\t\t<div *ngIf=\"price.errors.min\">Price should be 0 or higher</div>\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"category\">Category</label>\n\t\t\t\t<select #category=\"ngModel\" [(ngModel)]=\"product.category\" name=\"category\" id=\"category\" class=\"form-control\" required>\n\t\t\t\t\t<option value=\"\">Select Category</option>\n\t\t\t\t\t<option *ngFor=\"let c of categories$ | async\" [value]=\"c.$key\">{{ c.name }}</option>\n\t\t\t\t</select>\n\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\">\n\t\t\t\t\tCategory is required\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"imageUrl\">Image URL</label>\n\t\t\t\t<input #imageUrl=\"ngModel\" [(ngModel)]=\"product.imageUrl\" name=\"imageUrl\" id=\"imageUrl\" type=\"text\" class=\"form-control\" required url>\n\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n\t\t\t\t\t<div *ngIf=\"imageUrl.errors.required\">Image URL is required</div>\n\t\t\t\t\t<div *ngIf=\"imageUrl.errors.url\">Please enter a valid URL</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-primary\">Save</button>\n\t\t\t<button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\">Delete</button>\n\t\t</form>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<product-card [product]=\"product\" [show-actions]=\"false\"></product-card>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/components/product-form/product-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_category_service__ = __webpack_require__("../../../../../src/app/shared/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductFormComponent = (function () {
    function ProductFormComponent(router, route, categoryService, productService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.categories$ = categoryService.getAll();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.productService.get(this.id).take(1).subscribe(function (p) { return _this.product = p; });
    }
    ProductFormComponent.prototype.save = function (product) {
        if (this.id)
            this.productService.update(this.id, product);
        else
            this.productService.create(product);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.delete = function () {
        if (!confirm('Are you sure you want to delete this product'))
            return;
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    return ProductFormComponent;
}());
ProductFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-form',
        template: __webpack_require__("../../../../../src/app/admin/components/product-form/product-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/components/product-form/product-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_category_service__["a" /* CategoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_shared_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_shared_services_product_service__["a" /* ProductService */]) === "function" && _d || Object])
], ProductFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/services/admin-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAuthGuard = (function () {
    function AdminAuthGuard(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        return this.auth.appUser$
            .map(function (appUser) { return appUser.isAdmin; });
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AdminAuthGuard);

var _a, _b;
//# sourceMappingURL=admin-auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<bs-navbar></bs-navbar>\n<main role=\"main\" class=\"container\">\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        auth.user$.subscribe(function (user) {
            if (!user)
                return;
            userService.save(user);
            var returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl)
                return;
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_components_login_login_component__ = __webpack_require__("../../../../../src/app/core/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shopping_components_products_products_component__ = __webpack_require__("../../../../../src/app/shopping/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shopping_shopping_module__ = __webpack_require__("../../../../../src/app/shopping/shopping.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__admin_admin_module__["a" /* AdminModule */],
            __WEBPACK_IMPORTED_MODULE_11__shopping_shopping_module__["a" /* ShoppingModule */],
            __WEBPACK_IMPORTED_MODULE_9__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_10__shopping_components_products_products_component__["a" /* ProductsComponent */] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__core_components_login_login_component__["a" /* LoginComponent */] },
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/bs-navbar/bs-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-toggle {\n\tcursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/bs-navbar/bs-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <i class=\"fa fa-leaf\" aria-hidden=\"true\"></i>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/shopping-cart\">\n            <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n            <span class=\"badge badge-warning badge-pill\" *ngIf=\"cart$ | async as cart\">\n              {{ cart.totalItemsCount }}\n            </span>\n          </a>\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav\">\n        <ng-template #anonymousUser>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n          </li>      \t\n        </ng-template>\n        <li ngbDropdown *ngIf=\"appUser; else anonymousUser\" class=\"nav-item dropdown\">\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ appUser.name }}</a>\n          <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" routerLink=\"/my/orders\">My Orders</a>\n            <ng-container *ngIf=\"appUser.isAdmin\">\n              <a class=\"dropdown-item\" routerLink=\"/admin/orders\">Manage Orders</a>\n              <a class=\"dropdown-item\" routerLink=\"/admin/products\">Manage Products</a>\n            </ng-container>\n            <a (click)=\"logout()\" class=\"dropdown-item\">Log Out</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/bs-navbar/bs-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping-cart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BsNavbarComponent = (function () {
    function BsNavbarComponent(auth, shoppingCartService) {
        this.auth = auth;
        this.shoppingCartService = shoppingCartService;
    }
    BsNavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    BsNavbarComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.auth.appUser$.subscribe(function (appUser) { return _this.appUser = appUser; });
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return BsNavbarComponent;
}());
BsNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bs-navbar',
        template: __webpack_require__("../../../../../src/app/core/components/bs-navbar/bs-navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/bs-navbar/bs-navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_shared_services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_shared_services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _b || Object])
], BsNavbarComponent);

var _a, _b;
//# sourceMappingURL=bs-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/core/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button \n\t(click)=\"login()\"\n\tclass=\"btn btn-primary\" \t\n>Login with Google</button>"

/***/ }),

/***/ "../../../../../src/app/core/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.login = function () {
        this.authService.signin();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/core/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_bs_navbar_bs_navbar_component__ = __webpack_require__("../../../../../src/app/core/components/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/core/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/core/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild([])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__components_bs_navbar_bs_navbar_component__["a" /* BsNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__components_bs_navbar_bs_navbar_component__["a" /* BsNavbarComponent */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/product-card/product-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\tmargin-bottom: 30px;\n}\n\n.card-footer {\n  padding: 0;\n  background: #fff;\n}\n\n.card-footer button {\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.card-img-top {\n\theight: 250px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.title\" class=\"card\">\n  <img [src]=\"product.imageUrl\" class=\"card-img-top\" *ngIf=\"product.imageUrl\" alt=\"{{ product.title }}\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{ product.title }}</h5>\n    <p class=\"card-text\">{{ product.price | currency:'INR':true }}</p>\n  </div>\n  <div *ngIf=\"showActions && shoppingCart\" class=\"card-footer\">\n    <button \n    *ngIf=\"shoppingCart.getQuantity(product) === 0; else updateQuantity\"\n    (click)=\"addToCart()\"\n    class=\"btn btn-secondary btn-block\">Add to Cart</button>\n    <ng-template #updateQuantity>\n    \t<product-quantity [product]=\"product\" [shopping-cart]=\"shoppingCart\"></product-quantity>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_models_shopping_cart__ = __webpack_require__("../../../../../src/app/shared/models/shopping-cart.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCardComponent = (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    return ProductCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('product'),
    __metadata("design:type", Object)
], ProductCardComponent.prototype, "product", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('show-actions'),
    __metadata("design:type", Object)
], ProductCardComponent.prototype, "showActions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('shopping-cart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_shared_models_shopping_cart__["a" /* ShoppingCart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_shared_models_shopping_cart__["a" /* ShoppingCart */]) === "function" && _a || Object)
], ProductCardComponent.prototype, "shoppingCart", void 0);
ProductCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-card',
        template: __webpack_require__("../../../../../src/app/shared/components/product-card/product-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/product-card/product-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _b || Object])
], ProductCardComponent);

var _a, _b;
//# sourceMappingURL=product-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/product-quantity/product-quantity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quantity {\n  height: 37px;\n  line-height: 37px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/product-quantity/product-quantity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n\t<div class=\"col-2\">\n\t\t<button \n\t\t\t(click)=\"removeFromCart()\"\n\t\t\tclass=\"btn btn-secondary btn-block\">-</button>\n\t</div>\n\t<div class=\"col text-center quantity\">\n\t\t{{ shoppingCart.getQuantity(product) }} in cart\n\t</div>\n\t<div class=\"col-2\">\n\t\t<button \n\t\t\t(click)=\"addToCart()\"\n\t\t\tclass=\"btn btn-secondary btn-block\">+</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/product-quantity/product-quantity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping-cart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductQuantityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductQuantityComponent = (function () {
    function ProductQuantityComponent(cartService) {
        this.cartService = cartService;
    }
    ProductQuantityComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductQuantityComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.product);
    };
    return ProductQuantityComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('product'),
    __metadata("design:type", Object)
], ProductQuantityComponent.prototype, "product", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('shopping-cart'),
    __metadata("design:type", Object)
], ProductQuantityComponent.prototype, "shoppingCart", void 0);
ProductQuantityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-quantity',
        template: __webpack_require__("../../../../../src/app/shared/components/product-quantity/product-quantity.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/product-quantity/product-quantity.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object])
], ProductQuantityComponent);

var _a;
//# sourceMappingURL=product-quantity.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(userId, shopping, shoppingCart) {
        this.userId = userId;
        this.shopping = shopping;
        this.datePlaced = new Date().getTime();
        this.items = shoppingCart.items.map(function (i) {
            return {
                product: {
                    title: i.title,
                    imageUrl: i.imageUrl,
                    price: i.price
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            };
        });
    }
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/shopping-cart-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartItem; });
var ShoppingCartItem = (function () {
    function ShoppingCartItem(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(ShoppingCartItem.prototype, "totalPrice", {
        get: function () { return this.price * this.quantity; },
        enumerable: true,
        configurable: true
    });
    return ShoppingCartItem;
}());

//# sourceMappingURL=shopping-cart-item.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/shopping-cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_cart_item__ = __webpack_require__("../../../../../src/app/shared/models/shopping-cart-item.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var ShoppingCart = (function () {
    function ShoppingCart(itemsMap) {
        this.itemsMap = itemsMap;
        this.items = [];
        this.itemsMap = itemsMap || {};
        for (var productId in itemsMap) {
            var item = itemsMap[productId];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_0__shopping_cart_item__["a" /* ShoppingCartItem */](__assign({}, item, { $key: productId })));
            // ...item => spreading an items(assign all the items into an object like { title: item.title, price: item.price, imageUrl: item.imageUrl })
        }
    }
    ShoppingCart.prototype.getQuantity = function (product) {
        var item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    };
    Object.defineProperty(ShoppingCart.prototype, "productIds", {
        get: function () {
            return Object.keys(this.items);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalItemsCount", {
        get: function () {
            var count = 0;
            for (var productId in this.itemsMap)
                count += this.itemsMap[productId].quantity;
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            var sum = 0;
            for (var productId in this.items)
                sum += this.items[productId].totalPrice;
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCart;
}());

//# sourceMappingURL=shopping-cart.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.map(function (user) {
            if (user)
                return true;
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = (function () {
    function AuthService(userService, afAuth, route) {
        this.userService = userService;
        this.afAuth = afAuth;
        this.route = route;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.signin = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$
                .switchMap(function (user) {
                if (user)
                    return _this.userService.get(user.uid);
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(null);
            });
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getAll = function () {
        return this.db.list('/categories', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping-cart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var OrderService = (function () {
    function OrderService(db, shoppingCartService) {
        this.db = db;
        this.shoppingCartService = shoppingCartService;
    }
    OrderService.prototype.placeOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.list('/orders').push(order)];
                    case 1:
                        result = _a.sent();
                        this.shoppingCartService.clearCart();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    OrderService.prototype.getOrders = function () {
        return this.db.list('/orders');
    };
    OrderService.prototype.getOrdersByUser = function (userId) {
        return this.db.list('/orders', {
            query: {
                orderByChild: 'userId',
                equalTo: userId
            }
        });
    };
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _b || Object])
], OrderService);

var _a, _b;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.create = function (product) {
        return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.db.list('/products');
    };
    ProductService.prototype.get = function (productId) {
        return this.db.object('/products/' + productId);
    };
    ProductService.prototype.update = function (productId, product) {
        return this.db.object('/products/' + productId).update(product);
    };
    ProductService.prototype.delete = function (productId) {
        return this.db.object('/products/' + productId).remove();
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/shopping-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_shopping_cart__ = __webpack_require__("../../../../../src/app/shared/models/shopping-cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ShoppingCartService = (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    ShoppingCartService.prototype.getCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        return [2 /*return*/, this.db.object('/shopping-carts/' + cartId)
                                .map(function (x) { return new __WEBPACK_IMPORTED_MODULE_2__models_shopping_cart__["a" /* ShoppingCart */](x.items); })];
                }
            });
        });
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItem(product, 1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItem(product, -1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.clearCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.db.object('/shopping-carts/' + cartId + '/items').remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.create = function () {
        return this.db.list('/shopping-carts').push({
            dateCreated: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getItem = function (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    };
    ShoppingCartService.prototype.getOrCreateCartId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartId = localStorage.getItem('cartId');
                        if (cartId)
                            return [2 /*return*/, cartId];
                        return [4 /*yield*/, this.create()];
                    case 1:
                        result = _a.sent();
                        localStorage.setItem('cartId', result.key);
                        return [2 /*return*/, result.key];
                }
            });
        });
    };
    ShoppingCartService.prototype.updateItem = function (product, change) {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, item$;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        item$ = this.getItem(cartId, product.$key);
                        item$.take(1).subscribe(function (item) {
                            var quantity = (item.quantity || 0) + change;
                            if (quantity === 0)
                                item$.remove();
                            else
                                item$.update({
                                    title: product.title,
                                    imageUrl: product.imageUrl,
                                    price: product.price,
                                    quantity: quantity
                                });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ShoppingCartService;
}());
ShoppingCartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ShoppingCartService);

var _a;
//# sourceMappingURL=shopping-cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_product_card_product_card_component__ = __webpack_require__("../../../../../src/app/shared/components/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_product_quantity_product_quantity_component__ = __webpack_require__("../../../../../src/app/shared/components/product-quantity/product-quantity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_category_service__ = __webpack_require__("../../../../../src/app/shared/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_order_service__ = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_4_data_table__ = __webpack_require__("../../../../angular-4-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_4_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular_4_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_12_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_13_angular_4_data_table__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_16__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_product_card_product_card_component__["a" /* ProductCardComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_product_quantity_product_quantity_component__["a" /* ProductQuantityComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__components_product_card_product_card_component__["a" /* ProductCardComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_product_quantity_product_quantity_component__["a" /* ProductQuantityComponent */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_12_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_13_angular_4_data_table__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_16__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot().ngModule
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_10__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_8__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_9__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_7__services_order_service__["a" /* OrderService */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/components/check-out/check-out.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping/components/check-out/check-out.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Shipping</h2>\n<div class=\"row\" *ngIf=\"cart$ | async as cart\">\n\t<div class=\"col-6\">\t\t\n\t\t<shipping-form [cart]=\"cart\"></shipping-form>\n\t</div>\n\t<div class=\"col-6\">\n\t\t<shopping-cart-summary [cart]=\"cart\"></shopping-cart-summary>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shopping/components/check-out/check-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping-cart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CheckOutComponent = (function () {
    function CheckOutComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CheckOutComponent;
}());
CheckOutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-check-out',
        template: __webpack_require__("../../../../../src/app/shopping/components/check-out/check-out.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping/components/check-out/check-out.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object])
], CheckOutComponent);

var _a;
//# sourceMappingURL=check-out.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/components/my-orders/my-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping/components/my-orders/my-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Orders</h1>\n<table class=\"table\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Customer</th>\n\t\t\t<th>Date</th>\n\t\t\t<th>Action</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let order of order$ | async\">\n\t\t\t<td>\n\t\t\t\t{{ order.shopping.name }}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{ order.datePlaced | date }}\n\t\t\t</td>\n\t\t\t<td><a href=\"#\">View</a></td>\n\t\t</tr>\n\t</tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/shopping/components/my-orders/my-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_order_service__ = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyOrdersComponent = (function () {
    function MyOrdersComponent(orderService, authService) {
        this.order$ = authService.user$.switchMap(function (u) { return orderService.getOrdersByUser(u.uid); });
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    return MyOrdersComponent;
}());
MyOrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-my-orders',
        template: __webpack_require__("../../../../../src/app/shopping/components/my-orders/my-orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping/components/my-orders/my-orders.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_shared_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], MyOrdersComponent);

var _a, _b;
//# sourceMappingURL=my-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/components/order-success/order-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping/components/order-success/order-success.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  order-success works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shopping/components/order-success/order-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSuccessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderSuccessComponent = (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    return OrderSuccessComponent;
}());
OrderSuccessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-success',
        template: __webpack_require__("../../../../../src/app/shopping/components/order-success/order-success.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping/components/order-success/order-success.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrderSuccessComponent);

//# sourceMappingURL=order-success.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/components/products/product-filter/product-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sticky-top{\n\ttop: 80px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping/components/products/product-filter/product-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n\t<div class=\"list-group\">\n\t\t<a\n\t\t\tclass=\"list-group-item list-group-item-action\"\n\t\t\t[class.active]=\"!category\" \n\t\t\trouterLink=\"/\">All Categories</a>\n\t\t<a \n\t\t\t*ngFor=\"let c of categories$ | async\" \n\t\t\trouterLink=\"/\"\n\t\t\t[queryParams]=\"{ category: c.$key }\"\n\t\t\tclass=\"list-group-item list-group-item-action\"\n\t\t\t[class.active]=\"category === c.$key\"\n\t\t>{{ c.name }}</a>\n\t</div>\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping/components/products/product-filter/product-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_category_service__ = __webpack_require__("../../../../../src/app/shared/services/category.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterComponent = (function () {
    function ProductFilterComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    return ProductFilterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('category'),
    __metadata("design:type", Object)
], ProductFilterComponent.prototype, "category", void 0);
ProductFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-filter',
        template: __webpack_require__("../../../../../src/app/shopping/components/products/product-filter/product-filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping/components/products/product-filter/product-filter.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_category_service__["a" /* CategoryService */]) === "function" && _a || Object])
], ProductFilterComponent);

var _a;
//# sourceMappingURL=product-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/components/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-3\">\n\t\t<product-filter [category]=\"category\"></product-filter>\n\t</div>\n\t<div class=\"col\">\n\t\t<div class=\"row\" *ngIf=\"cart$ | async as cart\">\n\t\t\t<ng-container *ngFor=\"let p of filteredProducts; let i = index\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<product-card [product]=\"p\" [shopping-cart]=\"cart\"></product-card>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"(i + 1) % 2 === 0\" class=\"w-100\"></div>\n\t\t\t</ng-container>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_product_service__ = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProductsComponent = (function () {
    function ProductsComponent(route, productService, shoppingCartService) {
        this.route = route;
        this.productService = productService;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.filteredProducts = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = (_b.sent());
                        this.populateProducts();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.populateProducts = function () {
        var _this = this;
        this.productService.getAll()
            .switchMap(function (products) {
            _this.products = products;
            return _this.route.queryParamMap;
        })
            .subscribe(function (params) {
            _this.category = params.get('category');
            _this.applyFilter();
        });
    };
    ProductsComponent.prototype.applyFilter = function () {
        var _this = this;
        this.filteredProducts = (this.category) ?
            this.products.filter(function (p) { return p.category === _this.category; }) :
            this.products;
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/shopping/components/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping/components/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_shared_services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_shared_services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _c || Object])
], ProductsComponent);

var _a, _b, _c;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/components/shipping-form/shipping-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping/components/shipping-form/shipping-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n\t<div class=\"form-group\">\n\t\t<label for=\"name\">Name</label>\n\t\t<input \n\t\t\t#name=\"ngModel\"\n\t\t\tname=\"name\" \n\t\t\tid=\"name\" \n\t\t\ttype=\"text\" [(ngModel)]=\"shipping.name\" class=\"form-control\" required>\n\t\t\t<div *ngIf=\"name.touched && name.invalid\" class=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"name.errors.required\">Name is required</div>\n\t\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"name\">Line 1</label>\n\t\t<input \n\t\t\t#addressLine1=\"ngModel\"\n\t\t\tname=\"addressLine1\" \n\t\t\tid=\"addressLine1\" \n\t\t\ttype=\"text\" [(ngModel)]=\"shipping.addressLine1\" class=\"form-control\" required>\n\t\t\t<div *ngIf=\"addressLine1.touched && addressLine1.invalid\" class=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"addressLine1.errors.required\">Address Line 1 is required</div>\n\t\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"name\"></label>\n\t\t<input \n\t\t\t#addressLine2=\"ngModel\"\n\t\t\tname=\"addressLine2\" \n\t\t\tid=\"addressLine2\" \n\t\t\ttype=\"text\" [(ngModel)]=\"shipping.addressLine2\" class=\"form-control\" required>\n\t\t\t<div *ngIf=\"addressLine2.touched && addressLine2.invalid\" class=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"addressLine2.errors.required\">Address Line 2 is required</div>\n\t\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"name\">City</label>\n\t\t<input \n\t\t\t#city=\"ngModel\"\n\t\t\tname=\"city\" \n\t\t\tid=\"city\" \n\t\t\ttype=\"text\" [(ngModel)]=\"shipping.city\" class=\"form-control\" required>\n\t\t\t<div *ngIf=\"city.touched && city.invalid\" class=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"city.errors.required\">City is required</div>\n\t\t\t</div>\n\t</div>\n\t<button\n\t\t[disabled]=\"!f.valid\"\n\t\t(click)=\"placeOrder()\"\n\t\tclass=\"btn btn-sm btn-primary\"\n\t>Place Order</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/shopping/components/shipping-form/shipping-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_models_order__ = __webpack_require__("../../../../../src/app/shared/models/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_services_order_service__ = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shared_models_shopping_cart__ = __webpack_require__("../../../../../src/app/shared/models/shopping-cart.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ShippingFormComponent = (function () {
    function ShippingFormComponent(authService, orderService, router) {
        this.authService = authService;
        this.orderService = orderService;
        this.router = router;
        this.shipping = {};
    }
    ShippingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.authService.user$.subscribe(function (user) { return _this.userId = user.uid; });
    };
    ShippingFormComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    ShippingFormComponent.prototype.placeOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var order, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = new __WEBPACK_IMPORTED_MODULE_1_shared_models_order__["a" /* Order */](this.userId, this.shipping, this.cart);
                        return [4 /*yield*/, this.orderService.placeOrder(order)];
                    case 1:
                        result = _a.sent();
                        this.router.navigate(['/order-success', result.key]);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ShippingFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_shared_models_shopping_cart__["a" /* ShoppingCart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_shared_models_shopping_cart__["a" /* ShoppingCart */]) === "function" && _a || Object)
], ShippingFormComponent.prototype, "cart", void 0);
ShippingFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shipping-form',
        template: __webpack_require__("../../../../../src/app/shopping/components/shipping-form/shipping-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping/components/shipping-form/shipping-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_shared_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_shared_services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_shared_services_order_service__["a" /* OrderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _d || Object])
], ShippingFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shipping-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Order Summary</h5>\n    <p class=\"card-text\">You have {{ cart.totalItemsCount }} items in your shopping cart.</p>\n    <ul class=\"list-group list-group-flush\">\n    \t<li *ngFor=\"let item of cart.items\" class=\"list-group-item\">\n    \t\t{{ item.quantity }} x {{ item.title }}\n    \t\t<div class=\"float-right\">\n    \t\t\t{{ item.totalPrice | currency:'INR':true }}\n    \t\t</div>\n    \t</li>\n    \t<li class=\"list-group-item font-weight-bold\">\n    \t\tTotal\n    \t\t<div class=\"float-right\">\n    \t\t\t{{ cart.totalPrice | currency:'INR': true }}\n    \t\t</div>\n    \t</li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_models_shopping_cart__ = __webpack_require__("../../../../../src/app/shared/models/shopping-cart.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartSummaryComponent = (function () {
    function ShoppingCartSummaryComponent() {
    }
    return ShoppingCartSummaryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_shared_models_shopping_cart__["a" /* ShoppingCart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_models_shopping_cart__["a" /* ShoppingCart */]) === "function" && _a || Object)
], ShoppingCartSummaryComponent.prototype, "cart", void 0);
ShoppingCartSummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopping-cart-summary',
        template: __webpack_require__("../../../../../src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ShoppingCartSummaryComponent);

var _a;
//# sourceMappingURL=shopping-cart-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/components/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".qty-width {\n\twidth: 15rem;\n}\n\n.price-width {\n\twidth: 12.5rem;\n}\n\n.thumbnail {\n\twidth: 80px;\n\theight: 80px;\n\tborder-radius: 100%;\n\tbackground-size: cover;\n}\n\n.card {\n  margin-bottom: 80px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping/components/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Shopping Cart</h1>\n<div class=\"card\" *ngIf=\"cart$ | async as cart\" style=\"width: 80%;\">\n  <div class=\"card-body\">\n    <p>\n      You have {{ cart.totalItemsCount }} items in your shopping cart.\n      <button \n        *ngIf=\"cart.items.length\"\n        (click)=\"clearCart()\"\n        class=\" btn btn-sm btn-light float-right\">Clear Shopping Cart</button>\n    </p>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Image</th>\n          <th>Product</th>\n          <th class=\"text-center qty-width\">Quantity</th>\n          <th class=\"text-right price-width\">Price</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of cart.items\">\n          <td>\n            <div [style.backgroundImage]=\"'url(' + item.imageUrl + ')'\" class=\"thumbnail\"></div>\n          </td>\n          <td>\n            {{ item.title }}\n          </td>\n          <td class=\"text-center\">\n            <product-quantity [product]=\"item\" [shopping-cart]=\"cart\"></product-quantity>\n          </td>\n          <td class=\"text-right\">\n            {{ item.totalPrice | currency:'INR':true}}\n          </td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th class=\"text-right\">{{ cart.totalPrice | currency:'INR':true }}</th>\n        </tr>\n        <tr>\n          <th colspan=\"4\">\n            <a *ngIf=\"cart.items.length\" routerLink=\"/check-out\" class=\"btn btn-sm btn-primary\">Check Out</a>\n          </th>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping/components/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/shopping-cart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartComponent.prototype.clearCart = function () {
        this.shoppingCartService.clearCart();
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shopping-cart',
        template: __webpack_require__("../../../../../src/app/shopping/components/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping/components/shopping-cart/shopping-cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_shared_services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object])
], ShoppingCartComponent);

var _a;
//# sourceMappingURL=shopping-cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/shopping.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_products_products_component__ = __webpack_require__("../../../../../src/app/shopping/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/shopping/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_check_out_check_out_component__ = __webpack_require__("../../../../../src/app/shopping/components/check-out/check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_order_success_order_success_component__ = __webpack_require__("../../../../../src/app/shopping/components/order-success/order-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_my_orders_my_orders_component__ = __webpack_require__("../../../../../src/app/shopping/components/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shopping_cart_summary_shopping_cart_summary_component__ = __webpack_require__("../../../../../src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_shipping_form_shipping_form_component__ = __webpack_require__("../../../../../src/app/shopping/components/shipping-form/shipping-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_products_product_filter_product_filter_component__ = __webpack_require__("../../../../../src/app/shopping/components/products/product-filter/product-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_shared_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ShoppingModule = (function () {
    function ShoppingModule() {
    }
    return ShoppingModule;
}());
ShoppingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_11_shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forChild([
                { path: 'products', component: __WEBPACK_IMPORTED_MODULE_1__components_products_products_component__["a" /* ProductsComponent */] },
                { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_2__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
                { path: 'check-out', component: __WEBPACK_IMPORTED_MODULE_3__components_check_out_check_out_component__["a" /* CheckOutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10_shared_services_auth_guard_service__["a" /* AuthGuard */]] },
                { path: 'order-success/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_order_success_order_success_component__["a" /* OrderSuccessComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10_shared_services_auth_guard_service__["a" /* AuthGuard */]] },
                { path: 'my/orders', component: __WEBPACK_IMPORTED_MODULE_5__components_my_orders_my_orders_component__["a" /* MyOrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10_shared_services_auth_guard_service__["a" /* AuthGuard */]] },
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__components_products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_2__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_check_out_check_out_component__["a" /* CheckOutComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_order_success_order_success_component__["a" /* OrderSuccessComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_my_orders_my_orders_component__["a" /* MyOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_products_product_filter_product_filter_component__["a" /* ProductFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_shopping_cart_summary_shopping_cart_summary_component__["a" /* ShoppingCartSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_shipping_form_shipping_form_component__["a" /* ShippingFormComponent */]
        ]
    })
], ShoppingModule);

//# sourceMappingURL=shopping.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyDvUfhN7YiUGb7zbU0u6BjFqeDIVWszqUI",
        authDomain: "online-shopping-d44fe.firebaseapp.com",
        databaseURL: "https://online-shopping-d44fe.firebaseio.com",
        projectId: "online-shopping-d44fe",
        storageBucket: "online-shopping-d44fe.appspot.com",
        messagingSenderId: "337716507110",
        appId: "1:337716507110:web:2b92bf20c55bd0c3d9e627",
        measurementId: "G-XYM12XLWMP"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map