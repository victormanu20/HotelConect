"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_properties_properties_module_ts"],{

/***/ 67839:
/*!**********************************************************!*\
  !*** ./src/app/pages/properties/properties.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesComponent": () => (/* binding */ PropertiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties.component.html?ngResource */ 43557);
/* harmony import */ var _properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.component.scss?ngResource */ 69789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 44658);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ 70900);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.models */ 5396);










let PropertiesComponent = class PropertiesComponent {
    constructor(appSettings, appService, mediaObserver, platformId) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.platformId = platformId;
        this.sidenavOpen = true;
        this.psConfig = {
            wheelPropagation: true
        };
        this.viewType = 'grid';
        this.viewCol = 33.3;
        this.count = 12;
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, 2, 0, 0);
        this.settings = this.appSettings.settings;
        this.watcher = mediaObserver.asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)((changes) => changes.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((changes) => changes[0]))
            .subscribe((change) => {
            if (change.mqAlias == 'xs') {
                this.sidenavOpen = false;
                this.viewCol = 100;
            }
            else if (change.mqAlias == 'sm') {
                this.sidenavOpen = false;
                this.viewCol = 50;
            }
            else if (change.mqAlias == 'md') {
                this.viewCol = 50;
                this.sidenavOpen = true;
            }
            else {
                this.viewCol = 33.3;
                this.sidenavOpen = true;
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
};
PropertiesComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.MediaObserver },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_8__.PLATFORM_ID,] }] }
];
PropertiesComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['sidenav',] }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator,] }]
};
PropertiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-properties',
        template: _properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertiesComponent);



/***/ }),

/***/ 29506:
/*!*******************************************************!*\
  !*** ./src/app/pages/properties/properties.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesModule": () => (/* binding */ PropertiesModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _properties_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.component */ 67839);
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property/property.component */ 36692);








const routes = [
    { path: '', component: _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent, pathMatch: 'full' },
    { path: ':id', component: _property_property_component__WEBPACK_IMPORTED_MODULE_2__.PropertyComponent }
];
let PropertiesModule = class PropertiesModule {
};
PropertiesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent,
            _property_property_component__WEBPACK_IMPORTED_MODULE_2__.PropertyComponent
        ],
        exports: [
            _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmCoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], PropertiesModule);



/***/ }),

/***/ 36692:
/*!*****************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyComponent": () => (/* binding */ PropertyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _property_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.component.html?ngResource */ 7906);
/* harmony import */ var _property_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.component.scss?ngResource */ 96810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-swiper-wrapper */ 70598);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-embed-video */ 81015);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 38955);











let PropertyComponent = class PropertyComponent {
    constructor(appSettings, appService, activatedRoute, embedService, fb) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.embedService = embedService;
        this.fb = fb;
        this.psConfig = {
            wheelPropagation: true
        };
        this.sidenavOpen = true;
        this.config = {};
        this.config2 = {};
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.stateTransaction = JSON.parse(localStorage.getItem('stateTransaction'));
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.getPropertyById(params['id']);
        });
        this.getRelatedProperties();
        this.getFeaturedProperties();
        this.getAgent(1);
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
            if (this.sidenav) {
                this.sidenav.close();
            }
        }
        ;
        this.mortgageForm = this.fb.group({
            principalAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            downPayment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            interestRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            period: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
        this.contactForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_5__.emailValidator])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    getPropertyById(id) {
        this.appService.getPropertyById(id).subscribe(data => {
            this.property = data;
            setTimeout(() => {
                this.config.observer = true;
                this.config2.observer = true;
                this.swipers.forEach(swiper => {
                    if (swiper) {
                        swiper.setIndex(0);
                    }
                });
            });
        });
    }
    ngAfterViewInit() {
        this.config = {
            observer: false,
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            }
        };
        this.config2 = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: false,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                200: {
                    slidesPerView: 2
                },
                480: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 4
                }
            }
        };
    }
    onOpenedChange() {
        this.swipers.forEach(swiper => {
            if (swiper) {
                swiper.update();
            }
        });
    }
    selectImage(index) {
        this.swipers.forEach(swiper => {
            if (swiper['elementRef'].nativeElement.id == 'main-carousel') {
                swiper.setIndex(index);
            }
        });
    }
    onIndexChange(index) {
        this.swipers.forEach(swiper => {
            let elem = swiper['elementRef'].nativeElement;
            if (elem.id == 'small-carousel') {
                swiper.setIndex(index);
                for (let i = 0; i < elem.children[0].children.length; i++) {
                    const element = elem.children[0].children[i];
                    if (element.classList.contains('thumb-' + index)) {
                        element.classList.add('active-thumb');
                    }
                    else {
                        element.classList.remove('active-thumb');
                    }
                }
            }
        });
    }
    onCompare() {
        return this.appService.Data.compareList.filter(item => item.id == this.property.id)[0];
    }
    onFavorites() {
        return this.appService.Data.favorites.filter(item => item.id == this.property.id)[0];
    }
    getRelatedProperties() {
        this.appService.getRelatedProperties().subscribe(properties => {
            this.relatedProperties = properties;
        });
    }
    getFeaturedProperties() {
        this.appService.getFeaturedProperties().subscribe(properties => {
            this.featuredProperties = properties.slice(0, 3);
        });
    }
    getAgent(agentId = 1) {
        var ids = [1, 2, 3, 4, 5]; //agent ids 
        agentId = ids[Math.floor(Math.random() * ids.length)]; //random agent id
        this.agent = this.appService.getAgents().filter(agent => agent.id == agentId)[0];
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
        }
    }
    onMortgageFormSubmit(values) {
        if (this.mortgageForm.valid) {
            var principalAmount = values['principalAmount'];
            var down = values['downPayment'];
            var interest = values['interestRate'];
            var term = values['period'];
            this.monthlyPayment = this.calculateMortgage(principalAmount, down, interest / 100 / 12, term * 12).toFixed(2);
        }
    }
    calculateMortgage(principalAmount, downPayment, interestRate, period) {
        return ((principalAmount - downPayment) * interestRate) / (1 - Math.pow(1 + interestRate, -period));
    }
};
PropertyComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: ngx_embed_video__WEBPACK_IMPORTED_MODULE_4__.EmbedVideoService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder }
];
PropertyComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['sidenav',] }],
    swipers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChildren, args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__.SwiperDirective,] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener, args: ['window:resize',] }]
};
PropertyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-property',
        template: _property_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_property_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertyComponent);



/***/ }),

/***/ 69789:
/*!***********************************************************************!*\
  !*** ./src/app/pages/properties/properties.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 96810:
/*!******************************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".main-carousel .swiper-slide {\n  text-align: center;\n  padding-bottom: 66.25%;\n  position: relative;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.04);\n}\n.main-carousel img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n}\n.main-carousel .control-icons {\n  position: absolute;\n  z-index: 2;\n  top: 24px;\n  right: 20px;\n}\n.main-carousel .control-icons button.mat-button {\n  min-width: 36px;\n  width: 36px;\n  padding: 0;\n  margin: 0 4px;\n  background: rgba(255, 252, 252, 0.6);\n  transition: 0.2s;\n  color: rgba(0, 0, 0, 0.87);\n}\n.main-carousel .control-icons button.mat-button:disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.main-carousel .control-icons button.mat-button:hover:enabled {\n  background: rgb(255, 252, 252);\n}\n.small-carousel .swiper-slide img {\n  display: block;\n  opacity: 0.3;\n}\n.small-carousel .swiper-slide.active-thumb img {\n  border-width: 3px;\n  border-style: solid;\n  box-sizing: border-box;\n  opacity: 1;\n}\n.small-carousel .swiper-slide .swiper-lazy-preloader {\n  margin-top: 10px;\n}\n.widget {\n  margin-bottom: 40px;\n}\n.widget .widget-title {\n  margin: 0 -16px 16px;\n  padding: 8px 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.widget:first-child .widget-title {\n  margin: -16px -16px 16px;\n  padding: 8px 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQVI7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFDWjtBQUFZO0VBQ0ksMEJBQUE7QUFFaEI7QUFBWTtFQUNJLDhCQUFBO0FBRWhCO0FBS1E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUZaO0FBS1k7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBSGhCO0FBTVE7RUFDSSxnQkFBQTtBQUpaO0FBU0E7RUFDSSxtQkFBQTtBQU5KO0FBT0k7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUxSO0FBUVE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQU5aIiwiZmlsZSI6InByb3BlcnR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY2Fyb3VzZWx7IFxyXG4gICAgLnN3aXBlci1zbGlkZXsgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjYuMjUlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTsgICAgICAgICBcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH0gXHJcbiAgICAuY29udHJvbC1pY29uc3sgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7IFxyXG4gICAgICAgIHRvcDogMjRweDtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICBidXR0b24ubWF0LWJ1dHRvbntcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1MiwgMjUyLCAwLjYpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzOyBcclxuICAgICAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgICAgICAgICAgJjpkaXNhYmxlZHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyOmVuYWJsZWR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjUyLCAyNTIsIDEpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uc21hbGwtY2Fyb3VzZWx7IFxyXG4gICAgLnN3aXBlci1zbGlkZXsgIFxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmUtdGh1bWJ7XHJcbiAgICAgICAgICAgIGltZ3sgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICAuc3dpcGVyLWxhenktcHJlbG9hZGVye1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfSBcclxufVxyXG4gXHJcbi53aWRnZXR7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC53aWRnZXQtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luOiAwIC0xNnB4IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1jaGlsZHsgIFxyXG4gICAgICAgIC53aWRnZXQtdGl0bGV7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLTE2cHggLTE2cHggMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSAiXX0= */";

/***/ }),

/***/ 43557:
/*!***********************************************************************!*\
  !*** ./src/app/pages/properties/properties.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n    \r\n</div>";

/***/ }),

/***/ 7906:
/*!******************************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"px-3\">     \r\n    <div class=\"theme-container\"> \r\n    \r\n        <mat-sidenav-container class=\"single-property mt-3\">\r\n            <mat-sidenav-content ngClass.gt-sm=\"distance\">\r\n                <mat-card fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\">             \r\n                    <div>\r\n                        <h2 class=\"uppercase\" ngClass.xs=\"text-center\">{{property?.title}}</h2>\r\n                        <p fxLayout=\"row\" fxLayoutAlign.xs=\"center\" class=\"address mb-0\">\r\n                            <mat-icon class=\"text-muted\">location_on</mat-icon>\r\n                            <span>{{property?.formattedAddress}}</span>\r\n                        </p>\r\n                    </div>\r\n\r\n                    <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                        <mat-icon>more_vert</mat-icon>\r\n                    </button>                                  \r\n                </mat-card>\r\n\r\n                <div  fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"20px\" >\r\n                    <mat-card class=\"mt-3\" fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                        <h2>{{\"TEXT_INPUT.SINGLE_ROOM\" | translate}}</h2>\r\n                        <h2  class=\"primary-color price\">\r\n                            <span *ngIf=\"property.singleRoomPrice\">{{property.singleRoomPrice| currencyCOP }} / {{\"TEXT_INPUT.NIGTH\" | translate}}</span>\r\n                        </h2>\r\n                        <h3  class=\"primary-color\" *ngIf=\"stateTransaction.priceTotalSimple\">\r\n                            <span>{{stateTransaction.dayStay}} </span>\r\n                            <span>{{\"TEXT_INPUT.NIGTH_FOR\" | translate}}: </span>\r\n                            <span >{{stateTransaction.priceTotalSimple | currencyCOP }}</span>\r\n                        </h3>\r\n                        <button mat-raised-button color=\"primary\" [routerLink]=\"['/booking-transaction']\" >{{\"BTN.BOOK_NOW\" | translate}}</button>\r\n\r\n                    </mat-card>\r\n                    <mat-card class=\"mt-3\" class=\"mt-3\" fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                        <h2>{{\"TEXT_INPUT.DOUBLE_ROOM\" | translate}}</h2>\r\n                        <h2  class=\"primary-color price\">\r\n                            <span *ngIf=\"property.doubleRoomPrice\">{{property.doubleRoomPrice | currencyCOP }} /  {{\"TEXT_INPUT.NIGTH\" | translate}}</span>\r\n                        </h2>\r\n                        <h3  class=\"primary-color\" *ngIf=\"stateTransaction.priceTotalDuo\">\r\n                            <span>{{stateTransaction.dayStay}} </span>\r\n                            <span>{{\"TEXT_INPUT.NIGTH_FOR\" | translate}}: </span>\r\n                            <span >{{stateTransaction.priceTotalDuo | currencyCOP }}</span>\r\n                        </h3>\r\n                        <button mat-raised-button color=\"primary\">{{\"BTN.BOOK_NOW\" | translate}}</button>\r\n\r\n                    </mat-card>\r\n\r\n                </div>\r\n\r\n                <mat-card class=\"mt-3\">\r\n                    <div class=\"main-carousel mb-3\"> \r\n                        <div *ngIf=\"property\" class=\"control-icons\">\r\n                            <button mat-button [disabled]=\"onFavorites()\" (click)=\"addToFavorites()\" matTooltip=\"Add To Favorite\">\r\n                                <mat-icon class=\"\">favorite_border</mat-icon>\r\n                            </button>\r\n                            <button mat-button [disabled]=\"onCompare()\" (click)=\"addToCompare()\" matTooltip=\"Add To Compare\">\r\n                                <mat-icon class=\"\">compare_arrows</mat-icon>\r\n                            </button>  \r\n                        </div>   \r\n                        <div id=\"main-carousel\" class=\"swiper-container\" [swiper]=\"config\" (indexChange)=\"onIndexChange($event)\"> \r\n                            <div class=\"swiper-wrapper\">      \r\n                                <div *ngFor=\"let image of property?.gallery\" class=\"swiper-slide\">\r\n                                    <img [attr.data-src]=\"image.big\" class=\"swiper-lazy\">\r\n                                    <div class=\"swiper-lazy-preloader\"></div>          \r\n                                </div>\r\n                            </div>                      \r\n                            <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                            <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"small-carousel\">   \r\n                        <div id=\"small-carousel\" class=\"swiper-container\" [swiper]=\"config2\"> \r\n                            <div class=\"swiper-wrapper\">      \r\n                                <div *ngFor=\"let image of property?.gallery; let i=index;\" class=\"swiper-slide\" [ngClass]=\"'thumb-'+i\" [class.active-thumb]=\"i == 0\">\r\n                                    <img [attr.data-src]=\"image.small\" class=\"swiper-lazy mw-100\" (click)=\"selectImage(i)\">\r\n                                    <div class=\"swiper-lazy-preloader\"></div>          \r\n                                </div>\r\n                            </div>  \r\n                        </div>\r\n                    </div>\r\n                </mat-card> \r\n                \r\n                \r\n                <mat-card *ngIf=\"property\" class=\"mt-3\">\r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">{{\"TEXT_INPUT.DETAILS\" | translate}}</mat-card-title> \r\n                    </mat-card-header>\r\n                    <div fxLayout=\"row wrap\" class=\"details\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>TIPO HOTEL:</span>\r\n                            <span>{{property.propertyType}}</span>\r\n                        </div> \r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>CIUDAD:</span>\r\n                            <span>{{property.city}}</span>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>BARRIO:</span>\r\n                            <div fxLayout=\"row wrap\" class=\"list\">\r\n                                <span *ngFor=\"let neighborhood of property.neighborhood; let last=last\" [class.list-item]=\"property.neighborhood.length > 1\" [class.last]=\"last\">{{neighborhood}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>DIRECCION:</span>\r\n                            <div fxLayout=\"row wrap\" class=\"list\">\r\n                                <span *ngFor=\"let street of property.street; let last=last\" [class.list-item]=\"property.street.length > 1\" [class.last]=\"last\">{{street}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>PARQUEADERO:</span>\r\n                            <span>{{property.garages}}</span>\r\n                        </div>\r\n                    </div>   \r\n                </mat-card>\r\n\r\n                <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">{{\"TEXT_INPUT.FEATURES\" | translate}}</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <div fxLayout=\"row wrap\">\r\n                            <div *ngFor=\"let feature of property?.features\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\">\r\n                                <mat-icon class=\"mat-icon-sm\" color=\"primary\">check</mat-icon>\r\n                                <span class=\"mx-2\">{{feature}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card-content>\r\n                </mat-card>\r\n\r\n\r\n                <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">{{\"TEXT_INPUT.DESC\" | translate}}</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <p>{{property?.desc}}</p>\r\n                    </mat-card-content>\r\n                </mat-card> \r\n\r\n                <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">{{\"TEXT_INPUT.UBICATION\" | translate}}</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <agm-map [latitude]=\"property?.location.lat\" [longitude]=\"property?.location.lng\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\">\r\n                            <agm-marker [latitude]=\"property?.location.lat\" [longitude]=\"property?.location.lng\" [markerDraggable]=\"false\"></agm-marker>\r\n                        </agm-map>\r\n                    </mat-card-content>                   \r\n                </mat-card>\r\n\r\n            </mat-sidenav-content>\r\n        </mat-sidenav-container>\r\n\r\n    </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_properties_properties_module_ts.js.map