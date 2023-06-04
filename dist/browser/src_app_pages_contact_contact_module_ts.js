"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_contact_contact_module_ts"],{

/***/ 45996:
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component.html?ngResource */ 77421);
/* harmony import */ var _contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.scss?ngResource */ 25502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 38955);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ 70900);







let ContactComponent = class ContactComponent {
    constructor(formBuilder, fb, appService) {
        this.formBuilder = formBuilder;
        this.fb = fb;
        this.appService = appService;
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
        this.users = [];
        this.optionsGender = [];
        this.optionsDocument = [];
    }
    ngOnInit() {
        this.stateTransaction = JSON.parse(localStorage.getItem('stateTransaction'));
        this.optionsGender = this.appService.getGender();
        this.optionsDocument = this.appService.getOptionsDocument();
        this.contactReserve = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            gender: null,
            date: null,
            typeDocument: null,
            numDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            nameEmergency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            phoneEmergency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
        for (let index = 0; index < this.stateTransaction.numAdults; index++) {
            this.users.push(this.contactForm = this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
                gender: null,
                date: null,
                typeDocument: null,
                numDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])],
                phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
                nameEmergency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
                phoneEmergency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }));
        }
        console.log('suer', this.users);
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            console.log(values);
        }
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService }
];
ContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-contact',
        template: _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactComponent);



/***/ }),

/***/ 17213:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactModule": () => (/* binding */ ContactModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component */ 45996);







const routes = [
    { path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent, pathMatch: 'full' }
];
let ContactModule = class ContactModule {
};
ContactModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_6__.AgmCoreModule
        ]
    })
], ContactModule);



/***/ }),

/***/ 25502:
/*!*****************************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".contact-map .sebm-google-map-container {\n  height: 400px;\n}\n\n.containercards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  grid-template-rows: auto;\n  grid-gap: 1rem;\n  place-content: center;\n  margin: 2rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtbWFwIC5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJjYXJkc3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoNDAwcHgsMWZyKSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBncmlkLWdhcDogMXJlbTtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG59Il19 */";

/***/ }),

/***/ 77421:
/*!*****************************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\r\n<div class=\"px-3\">\r\n    <div class=\"theme-container\" >\r\n        <h1>Completar infromacion de las personas</h1>\r\n        <form [formGroup]=\"users\" (ngSubmit)=\"onContactFormSubmit(users)\">\r\n        <div class=\"containercards\">\r\n            <mat-card class=\"\" *ngFor=\"let user of users;index as i\">\r\n                <h3 class=\"widget-title bg-primary\">Persona : {{i+1}}</h3>\r\n                <form [formGroup]=\"user\" >\r\n                    <p>LLene la informacion de contacto de la persona: {{i}}</p>\r\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <mat-label>Ingrese su nombre completo</mat-label>\r\n                        <input matInput placeholder=\"ingrese su nombre\" autocomplete=\"off\" formControlName=\"name\">\r\n                        <mat-error *ngIf=\"user.controls.name.errors?.required\">Campo requerido</mat-error>                   \r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\"> \r\n                        <mat-label>Fecha nacimiento</mat-label>\r\n                        <input matInput [matDatepicker]=\"picker\" formControlName=\"date\">\r\n                        <mat-hint>MM/DD/YYYY</mat-hint>\r\n                        <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field class=\"w-100\">\r\n                        <mat-label>Genero</mat-label> \r\n                        <mat-select placeholder=\"genero\" formControlName=\"gender\">\r\n                            <mat-option *ngFor=\"let gender of optionsGender\" [value]=\"gender\">\r\n                                {{gender.name}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <mat-label>Tipo de documento</mat-label> \r\n                        <mat-select placeholder=\"123 456789\" formControlName=\"typeDocument\">\r\n                            <mat-option *ngFor=\"let document of optionsDocument\" [value]=\"typeDocument\">\r\n                                {{document.name}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <mat-label>Ingrese su numero de documento</mat-label>\r\n                        <input matInput placeholder=\"ingrese aqui\" autocomplete=\"off\" formControlName=\"numDocument\" type=\"number\"> \r\n                        <mat-error *ngIf=\"user.controls.numDocument.errors?.required\">{{'FIELD.PHONE'|translate}} {{'FIELD.REQUIRED'|translate}}</mat-error>                 \r\n                    </mat-form-field>\r\n    \r\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <mat-label>Ingrese su correo</mat-label> \r\n                        <input matInput placeholder=\"example@.domino.com\" autocomplete=\"off\" formControlName=\"email\">\r\n                        <mat-error *ngIf=\"user.controls.email.errors?.required\">{{'FIELD.EMAIL'|translate}} {{'FIELD.REQUIRED'|translate}}</mat-error>\r\n                        <mat-error *ngIf=\"user.controls.email.hasError('invalidEmail')\">Campo requerido</mat-error>\r\n                    </mat-form-field>\r\n    \r\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <mat-label>ingrese su numero Celular</mat-label>\r\n                        <input matInput placeholder=\"000 0000 00 00\" autocomplete=\"off\" formControlName=\"phone\" type=\"number\"> \r\n                        <mat-error *ngIf=\"user.controls.phone.errors?.required\">Campo requerido</mat-error>                 \r\n                    </mat-form-field>\r\n\r\n                    <div>\r\n                        <h3>Contacto de emergencia</h3>\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Ingrese su nombre completo</mat-label>\r\n                            <input matInput placeholder=\"ingrse su nombre\" autocomplete=\"off\" formControlName=\"nameEmergency\">\r\n                            <mat-error *ngIf=\"user.controls.nameEmergency.errors?.required\">ingrese su nombre</mat-error>                   \r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Celular</mat-label>\r\n                            <input matInput placeholder=\"000 00 00\" autocomplete=\"off\" formControlName=\"phoneEmergency\" type=\"number\"> \r\n                            <mat-error *ngIf=\"user.controls.phoneEmergency.errors?.required\">Campo requerido</mat-error>                 \r\n                        </mat-form-field>\r\n                    </div>\r\n    \r\n                </form>\r\n                \r\n            </mat-card>  \r\n        </div>\r\n        <mat-card >\r\n            <h2 class=\"widget-title bg-primary\">Contacto de la reserva</h2>\r\n            <form [formGroup]=\"contactReserve\" >\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                    <mat-label>Ingrese su nombre completo</mat-label>\r\n                    <input matInput placeholder=\"ingrese su nombre\" autocomplete=\"off\" formControlName=\"name\">\r\n                    <mat-error *ngIf=\"contactReserve.controls.name.errors?.required\">Campo requerido</mat-error>                   \r\n                </mat-form-field>\r\n                <mat-form-field class=\"w-100\"> \r\n                    <mat-label>Fecha nacimiento</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" formControlName=\"date\">\r\n                    <mat-hint>MM/DD/YYYY</mat-hint>\r\n                    <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-100\">\r\n                    <mat-label>Genero</mat-label> \r\n                    <mat-select placeholder=\"genero\" formControlName=\"gender\">\r\n                        <mat-option *ngFor=\"let gender of optionsGender\" [value]=\"gender\">\r\n                            {{gender.name}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"w-100\">\r\n                    <mat-label>Tipo de documento</mat-label> \r\n                    <mat-select placeholder=\"123 456789\" formControlName=\"typeDocument\">\r\n                        <mat-option *ngFor=\"let document of optionsDocument\" [value]=\"document\">\r\n                            {{document.name}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                    <mat-label>Ingrese su numero de documento</mat-label>\r\n                    <input matInput placeholder=\"ingrese aqui\" autocomplete=\"off\" formControlName=\"numDocument\" type=\"number\"> \r\n                    <mat-error *ngIf=\"contactReserve.controls.numDocument.errors?.required\">{{'FIELD.PHONE'|translate}} {{'FIELD.REQUIRED'|translate}}</mat-error>                 \r\n                </mat-form-field>\r\n\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                    <mat-label>Ingrese su correo</mat-label> \r\n                    <input matInput placeholder=\"example@.domino.com\" autocomplete=\"off\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"contactReserve.controls.email.errors?.required\">{{'FIELD.EMAIL'|translate}} {{'FIELD.REQUIRED'|translate}}</mat-error>\r\n                    <mat-error *ngIf=\"contactReserve.controls.email.hasError('invalidEmail')\">Campo requerido</mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                    <mat-label>ingrese su numero Celular</mat-label>\r\n                    <input matInput placeholder=\"000 0000 00 00\" autocomplete=\"off\" formControlName=\"phone\" type=\"number\"> \r\n                    <mat-error *ngIf=\"contactReserve.controls.phone.errors?.required\">Campo requerido</mat-error>                 \r\n                </mat-form-field>\r\n\r\n                <div>\r\n                    <h3>Contacto de emergencia</h3>\r\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <mat-label>Ingrese su nombre completo</mat-label>\r\n                        <input matInput placeholder=\"ingrse su nombre\" autocomplete=\"off\" formControlName=\"nameEmergency\">\r\n                        <mat-error *ngIf=\"contactReserve.controls.nameEmergency.errors?.required\">ingrese su nombre</mat-error>                   \r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <mat-label>Celular</mat-label>\r\n                        <input matInput placeholder=\"000 00 00\" autocomplete=\"off\" formControlName=\"phoneEmergency\" type=\"number\"> \r\n                        <mat-error *ngIf=\"contactReserve.controls.phoneEmergency.errors?.required\">Campo requerido</mat-error>                 \r\n                    </mat-form-field>\r\n                </div>\r\n\r\n            </form>\r\n            \r\n        </mat-card>  \r\n\r\n        <div class=\"text-center\" style=\"margin: 20px 0;\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" >Resevar</button>\r\n        </div>\r\n        </form>\r\n\r\n    </div>\r\n\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact_contact_module_ts.js.map