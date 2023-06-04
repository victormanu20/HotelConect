"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_submit-property_submit-property_module_ts"],{

/***/ 98912:
/*!********************************************************************!*\
  !*** ./src/app/pages/submit-property/submit-property.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitPropertyComponent": () => (/* binding */ SubmitPropertyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _submit_property_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-property.component.html?ngResource */ 4319);
/* harmony import */ var _submit_property_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-property.component.scss?ngResource */ 70906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ 93333);



/// <reference types="@types/googlemaps" />




let SubmitPropertyComponent = class SubmitPropertyComponent {
    constructor(appService, fb, mapsAPILoader, ngZone) {
        this.appService = appService;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.features = [];
        this.hotelsTypes = [];
        this.categoriesHotel = [];
        this.cities = [];
        this.neighborhoods = [];
        this.streets = [];
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
    }
    ngOnInit() {
        this.features = this.appService.getFeatures();
        this.hotelsTypes = this.appService.hotelsTypes();
        this.categoriesHotel = this.appService.categoriesHotel();
        this.cities = this.appService.getCities();
        this.neighborhoods = this.appService.getNeighborhoods();
        this.streets = this.appService.getStreets();
        this.submitForm = this.fb.group({
            basic: this.fb.group({
                title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                desc: null,
                hotelType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                hotelCateogry: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                gallery: null
            }),
            address: this.fb.group({
                location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                zipCode: '',
                neighborhood: '',
                street: ''
            }),
            additional: this.fb.group({
                bedrooms: '',
                bathrooms: '',
                garages: '',
                area: '',
                yearBuilt: '',
                features: this.buildFeatures()
            }),
            media: this.fb.group({
                videos: this.fb.array([this.createVideo()]),
                plans: this.fb.array([this.createPlan()]),
                additionalFeatures: this.fb.array([this.createFeature()]),
                featured: false
            })
        });
        this.setCurrentPosition();
        this.placesAutocomplete();
    }
    onSelectionChange(e) {
        if (e.selectedIndex == 4) {
            this.horizontalStepper._steps.forEach(step => step.editable = false);
            console.log(this.submitForm.value);
        }
    }
    reset() {
        this.horizontalStepper.reset();
        const videos = this.submitForm.controls.media.get('videos');
        while (videos.length > 1) {
            videos.removeAt(0);
        }
        const plans = this.submitForm.controls.media.get('plans');
        while (plans.length > 1) {
            plans.removeAt(0);
        }
        const additionalFeatures = this.submitForm.controls.media.get('additionalFeatures');
        while (additionalFeatures.length > 1) {
            additionalFeatures.removeAt(0);
        }
        this.submitForm.reset({
            additional: {
                features: this.features
            },
            media: {
                featured: false
            }
        });
    }
    // -------------------- Address ---------------------------  
    onSelectCity() {
        this.submitForm.controls.address.get('neighborhood').setValue(null, { emitEvent: false });
        this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
    }
    onSelectNeighborhood() {
        this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
    }
    setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
    placesAutocomplete() {
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.addressAutocomplete.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    let place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    ;
                    this.lat = place.geometry.location.lat();
                    this.lng = place.geometry.location.lng();
                    this.getAddress();
                });
            });
        });
    }
    // public getAddress(){    
    //   this.mapsAPILoader.load().then(() => {
    //     let geocoder = new google.maps.Geocoder();
    //     let latlng = new google.maps.LatLng(this.lat, this.lng); 
    //     geocoder.geocode({'location': latlng}, (results, status) => {
    //       if(status === google.maps.GeocoderStatus.OK) {
    //         console.log(results); 
    //         //this.addresstext.nativeElement.focus();  
    //         let address = results[0].formatted_address; 
    //         this.submitForm.controls.location.setValue(address); 
    //         this.setAddresses(results[0]);          
    //       }
    //     });
    //   });
    // }
    getAddress() {
        this.appService.getAddress(this.lat, this.lng).subscribe(response => {
            console.log(response);
            if (response['results'].length) {
                let address = response['results'][0].formatted_address;
                this.submitForm.controls.address.get('location').setValue(address);
                this.setAddresses(response['results'][0]);
            }
        });
    }
    onMapClick(e) {
        this.lat = e.coords.lat;
        this.lng = e.coords.lng;
        this.getAddress();
    }
    onMarkerClick(e) {
        console.log(e);
    }
    setAddresses(result) {
        this.submitForm.controls.address.get('city').setValue(null);
        this.submitForm.controls.address.get('zipCode').setValue(null);
        this.submitForm.controls.address.get('street').setValue(null);
        var newCity, newStreet, newNeighborhood;
        result.address_components.forEach(item => {
            if (item.types.indexOf('locality') > -1) {
                if (this.cities.filter(city => city.name == item.long_name)[0]) {
                    newCity = this.cities.filter(city => city.name == item.long_name)[0];
                }
                else {
                    newCity = { id: this.cities.length + 1, name: item.long_name };
                    this.cities.push(newCity);
                }
                this.submitForm.controls.address.get('city').setValue(newCity);
            }
            if (item.types.indexOf('postal_code') > -1) {
                this.submitForm.controls.address.get('zipCode').setValue(item.long_name);
            }
        });
        if (!newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('administrative_area_level_1') > -1) {
                    if (this.cities.filter(city => city.name == item.long_name)[0]) {
                        newCity = this.cities.filter(city => city.name == item.long_name)[0];
                    }
                    else {
                        newCity = {
                            id: this.cities.length + 1,
                            name: item.long_name
                        };
                        this.cities.push(newCity);
                    }
                    this.submitForm.controls.address.get('city').setValue(newCity);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('neighborhood') > -1) {
                    let neighborhood = this.neighborhoods.filter(n => n.name == item.long_name && n.cityId == newCity.id)[0];
                    if (neighborhood) {
                        newNeighborhood = neighborhood;
                    }
                    else {
                        newNeighborhood = {
                            id: this.neighborhoods.length + 1,
                            name: item.long_name,
                            cityId: newCity.id
                        };
                        this.neighborhoods.push(newNeighborhood);
                    }
                    this.neighborhoods = [...this.neighborhoods];
                    this.submitForm.controls.address.get('neighborhood').setValue([newNeighborhood]);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('route') > -1) {
                    if (this.streets.filter(street => street.name == item.long_name && street.cityId == newCity.id)[0]) {
                        newStreet = this.streets.filter(street => street.name == item.long_name && street.cityId == newCity.id)[0];
                    }
                    else {
                        newStreet = {
                            id: this.streets.length + 1,
                            name: item.long_name,
                            cityId: newCity.id,
                            neighborhoodId: (newNeighborhood) ? newNeighborhood.id : null
                        };
                        this.streets.push(newStreet);
                    }
                    this.streets = [...this.streets];
                    this.submitForm.controls.address.get('street').setValue([newStreet]);
                }
            });
        }
    }
    // -------------------- Additional ---------------------------  
    buildFeatures() {
        const arr = this.features.map(feature => {
            return this.fb.group({
                id: feature.id,
                name: feature.name,
                selected: feature.selected
            });
        });
        return this.fb.array(arr);
    }
    // -------------------- Media --------------------------- 
    createVideo() {
        return this.fb.group({
            id: null,
            name: null,
            link: null
        });
    }
    addVideo() {
        const videos = this.submitForm.controls.media.get('videos');
        videos.push(this.createVideo());
    }
    deleteVideo(index) {
        const videos = this.submitForm.controls.media.get('videos');
        videos.removeAt(index);
    }
    createPlan() {
        return this.fb.group({
            id: null,
            name: null,
            desc: null,
            area: null,
            rooms: null,
            baths: null,
            image: null
        });
    }
    addPlan() {
        const plans = this.submitForm.controls.media.get('plans');
        plans.push(this.createPlan());
    }
    deletePlan(index) {
        const plans = this.submitForm.controls.media.get('plans');
        plans.removeAt(index);
    }
    createFeature() {
        return this.fb.group({
            id: null,
            name: null,
            value: null
        });
    }
    addFeature() {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.push(this.createFeature());
    }
    deleteFeature(index) {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.removeAt(index);
    }
};
SubmitPropertyComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_4__.MapsAPILoader },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone }
];
SubmitPropertyComponent.propDecorators = {
    horizontalStepper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['horizontalStepper',] }],
    addressAutocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['addressAutocomplete',] }]
};
SubmitPropertyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-submit-property',
        template: _submit_property_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_submit_property_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubmitPropertyComponent);



/***/ }),

/***/ 18070:
/*!*****************************************************************!*\
  !*** ./src/app/pages/submit-property/submit-property.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitPropertyModule": () => (/* binding */ SubmitPropertyModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-input-file */ 89618);
/* harmony import */ var _submit_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-property.component */ 98912);








const routes = [
    { path: '', component: _submit_property_component__WEBPACK_IMPORTED_MODULE_1__.SubmitPropertyComponent, pathMatch: 'full' }
];
let SubmitPropertyModule = class SubmitPropertyModule {
};
SubmitPropertyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_submit_property_component__WEBPACK_IMPORTED_MODULE_1__.SubmitPropertyComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_6__.AgmCoreModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_7__.InputFileModule
        ]
    })
], SubmitPropertyModule);



/***/ }),

/***/ 70906:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/submit-property/submit-property.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJtaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 4319:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/submit-property/submit-property.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n  \r\n      <mat-card ngClass.lt-lg=\"p-0\" [formGroup]=\"submitForm\">\r\n  \r\n        <mat-stepper #horizontalStepper orientation=\"horizontal\" linear=\"true\" class=\"submit-property\" (selectionChange)=\"onSelectionChange($event)\">\r\n\r\n            <mat-step [stepControl]=\"submitForm.get('basic')\" [label]=\"'CREATE.BASIC' | translate\">\r\n              <div class=\"step-content\">\r\n\r\n                  <form formGroupName=\"basic\" fxLayout=\"row wrap\">\r\n\r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\"> {{'CREATE.BASIC' | translate}}</h1>\r\n                      </div>\r\n\r\n                      <div fxFlex=\"100\" class=\"py-3\">\r\n                          <mat-slide-toggle formControlName=\"featured\" class=\"uppercase\">{{\"TEXT_INPUT.HABILITY\"| translate }}</mat-slide-toggle>\r\n                      </div>\r\n                              \r\n                      <div fxFlex=\"100\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>{{\"TEXT_INPUT.NAME_HOTEL\" | translate}}</mat-label>\r\n                            <input matInput placeholder=\"\" formControlName=\"title\" required autocomplete=\"off\">\r\n                            <mat-error *ngIf=\"submitForm.get('basic')['controls'].title.errors?.required\">{{\"TEXT_INPUT.NAME_HOTEL\" | translate}} {{ \"TEXT_INPUT.REQUIRED\" | translate}}</mat-error>\r\n                        </mat-form-field>\r\n                      </div>  \r\n                  \r\n                      <div fxFlex=\"100\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>{{\"TEXT_INPUT.DESCRIPTION\" |translate}}</mat-label> \r\n                            <textarea matInput placeholder=\"Description\" formControlName=\"desc\" rows=\"7\"></textarea> \r\n                        </mat-form-field> \r\n                      </div> \r\n                  \r\n                      <!-- <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Price ($)</mat-label>\r\n                            <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceDollar\" autocomplete=\"off\"> \r\n                        </mat-form-field>\r\n                      </div> \r\n                  \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Price (€)</mat-label>\r\n                            <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceEuro\" autocomplete=\"off\"> \r\n                        </mat-form-field>\r\n                      </div>  -->\r\n                  \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>{{\"TEXT_INPUT.CATEGORY_HOTEL\"| translate }}</mat-label>\r\n                            <mat-select placeholder=\"Select Property Status\" formControlName=\"hotelCateogry\">\r\n                                <mat-option *ngFor=\"let category of categoriesHotel\" [value]=\"category\">\r\n                                    {{category.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                            <mat-error *ngIf=\"submitForm.get('basic')['controls'].hotelCateogry.errors?.required\">{{\"TEXT_INPUT.CATEGORY_HOTEL\"| translate }} {{\"TEXT_INPUT.REQUIRED\" |translate }}</mat-error>                                                            \r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label> {{ \"TEXT_INPUT.HOTEL_TYPE\" | translate}}</mat-label> \r\n                            <mat-select placeholder=\"Select Property Type\" formControlName=\"hotelType\" >\r\n                                <mat-option *ngFor=\"let type of hotelsTypes\" [value]=\"type\">\r\n                                    {{type.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                            <mat-error *ngIf=\"submitForm.get('basic')['controls'].hotelType.errors?.required\">{{ \"TEXT_INPUT.HOTEL_TYPE\" | translate}}  {{\"TEXT_INPUT.REQUIRED\" |translate }}</mat-error>                               \r\n                        </mat-form-field>\r\n                      </div>\r\n                  \r\n                  \r\n                      <div fxFlex=\"100\" class=\"step-section pb-2\">\r\n                          <p class=\"mb-0\"><span class=\"uppercase fw-500\">{{\"TEXT_INPUT.GALLERY\" | translate}}</span><span class=\"text-muted mx-3\">({{\"TEXT_INPUT.MAX\" | translate }} 8 {{\"TEXT_INPUT.IMAGES\" | translate }})</span></p>  \r\n                          <input-file formControlName=\"gallery\" fileLimit=\"8\" fileAccept=\"image/*\"></input-file>  \r\n                      </div> \r\n                  \r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"end center\">\r\n                        <button mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <span class=\"mx-1 uppercase\">{{\"BTN.NEXT\" | translate}}</span>                    \r\n                          <mat-icon>navigate_next</mat-icon>\r\n                        </button> \r\n                      </div> \r\n                  \r\n                  </form>\r\n               \r\n              </div>\r\n            </mat-step>\r\n            \r\n            <mat-step [stepControl]=\"submitForm.get('address')\" [label]=\"'CREATE.UBICATION' | translate\">\r\n              <div class=\"step-content\">\r\n\r\n                  <form formGroupName=\"address\" fxLayout=\"row wrap\">\r\n            \r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\">{{'CREATE.UBICATION' | translate}}</h1>\r\n                      </div>\r\n                                \r\n                      <div fxFlex=\"100\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-icon matPrefix class=\"mr-1 text-muted\">location_on</mat-icon>\r\n                            <mat-label>{{'CREATE.UBICATION' | translate}}</mat-label>\r\n                            <input matInput [placeholder]=\"'TEXT_INPUT.LABEL_UBICATION' | translate\" formControlName=\"location\" autocomplete=\"off\" #addressAutocomplete> \r\n                            <button *ngIf=\"submitForm.get('address')['controls'].location.value\" mat-button matSuffix mat-icon-button (click)=\"submitForm.get('address')['controls'].location.setValue(null)\" type=\"button\">\r\n                              <mat-icon>close</mat-icon>\r\n                            </button>\r\n                            <mat-error *ngIf=\"submitForm.get('address')['controls'].location.errors?.required\">{{'CREATE.UBICATION' | translate}} {{ \"TEXT_INPUT.REQUIRED\" | translate}}</mat-error>   \r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n                      <div fxFlex=\"100\" class=\"px-2 mb-4\">\r\n                          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\" (mapClick)=\"onMapClick($event)\">\r\n                              <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\" (markerClick)=\"onMarkerClick($event)\"></agm-marker>\r\n                          </agm-map>\r\n                      </div>\r\n                    \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>{{\"TEXT_INPUT.CITY\" | translate}}</mat-label>\r\n                            <mat-select placeholder=\"Select City...\" formControlName=\"city\" (selectionChange)=\"onSelectCity()\" required> \r\n                              <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\r\n                                {{city.name}}\r\n                              </mat-option>\r\n                            </mat-select> \r\n                            <mat-error *ngIf=\"submitForm.get('address')['controls'].city.errors?.required\">{{\"TEXT_INPUT.CITY\" | translate}} {{ \"TEXT_INPUT.REQUIRED\" | translate}}</mat-error>                    \r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n                      <!-- <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Zip Code</mat-label>\r\n                            <input matInput placeholder=\"exp. 98104\" autocomplete=\"off\" formControlName=\"zipCode\">                  \r\n                          </mat-form-field>\r\n                      </div> -->\r\n                    \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label> {{'TEXT_INPUT.NEIGHBORHOOD' | translate}}</mat-label>\r\n                          <mat-select placeholder=\"Select Neighborhood...\" formControlName=\"neighborhood\"  (selectionChange)=\"onSelectNeighborhood()\">\r\n                            <mat-option *ngFor=\"let neighborhood of neighborhoods | filterNeighborhoods: submitForm.get('address')['controls'].city.value?.id\" [value]=\"neighborhood\">\r\n                              {{neighborhood.name}}\r\n                            </mat-option>\r\n                          </mat-select>   \r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>{{'TEXT_INPUT.DIRECTION' | translate}}</mat-label>\r\n                          <input matInput placeholder=\"\" formControlName=\"street\"  autocomplete=\"off\">\r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                        <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <mat-icon>navigate_before</mat-icon>\r\n                          <span class=\"mx-1 uppercase\">{{\"BTN.BACK\" | translate}}</span>  \r\n                        </button>\r\n                        <button mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <span class=\"mx-1 uppercase\">{{\"BTN.NEXT\" | translate}}</span>                    \r\n                          <mat-icon>navigate_next</mat-icon>\r\n                        </button> \r\n                      </div>  \r\n                    \r\n                  </form>\r\n                \r\n              </div> \r\n            </mat-step>\r\n\r\n            <mat-step [stepControl]=\"submitForm.get('additional')\" [label]=\"'CREATE.BEDROOMS' | translate\">\r\n              <div class=\"step-content\">\r\n\r\n                  <form formGroupName=\"additional\" fxLayout=\"row wrap\">\r\n    \r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\">{{'CREATE.BEDROOMS' | translate}}</h1>\r\n                      </div>\r\n                  \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>{{'TEXT_INPUT.TOTAL_ROOMS'| translate}}</mat-label>\r\n                            <input matInput placeholder=\"\" autocomplete=\"off\" formControlName=\"bedrooms\" onlyNumber maxlength=\"2\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                  \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>{{\"TEXT_INPUT.TOTAL_ROOMS_AVAILABLE\"| translate}}</mat-label>\r\n                            <input matInput placeholder=\"\" autocomplete=\"off\" formControlName=\"bathrooms\" onlyNumber maxlength=\"2\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                  \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>{{\"TEXT_INPUT.SIMPLE_ROOMS\" | translate}}</mat-label>\r\n                            <input matInput placeholder=\"\" autocomplete=\"off\" formControlName=\"garages\" onlyNumber maxlength=\"2\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n\r\n                    <div fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>{{\"TEXT_INPUT.SINGLE_ROOMS_PRICE\" | translate}} $ COP</mat-label>\r\n                            <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceSingleRoom\" autocomplete=\"off\"> \r\n                        </mat-form-field>\r\n                      </div> \r\n                  \r\n                      \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>{{\"TEXT_INPUT.DOUBLE_ROOMS\" | translate}}</mat-label>\r\n                          <input matInput placeholder=\"\" autocomplete=\"off\" formControlName=\"area\"  onlyNumber maxlength=\"2\">                  \r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>{{\"TEXT_INPUT.DOUBLE_ROOMS_PRICE\" | translate}} $ COP</mat-label>\r\n                            <input matInput placeholder=\"\" formControlName=\"priceDoubleRoom\" autocomplete=\"off\"> \r\n                        </mat-form-field>\r\n                      </div> \r\n                          \r\n                      <div fxFlex=\"100\" class=\"mb-2\"> \r\n                          <p class=\"uppercase m-2 fw-500\">{{\"TEXT_INPUT.FEATURES_SINGLE_ROOMS\" | translate}}</p> \r\n                          <div formArrayName=\"features\" fxLayout=\"row wrap\">\r\n                              <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\" class=\"p-2\">\r\n                                  <mat-checkbox formControlName=\"selected\">{{features[i].name}}</mat-checkbox>                         \r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div fxFlex=\"100\" class=\"mb-2\"> \r\n                        <p class=\"uppercase m-2 fw-500\">{{\"TEXT_INPUT.FEATURES_DOUBLE_ROOMS\" | translate}}</p> \r\n                        <div formArrayName=\"features\" fxLayout=\"row wrap\">\r\n                            <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\" class=\"p-2\">\r\n                                <mat-checkbox formControlName=\"selected\">{{features[i].name}}</mat-checkbox>                         \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                  \r\n                  \r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                        <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <mat-icon>navigate_before</mat-icon>\r\n                          <span class=\"mx-1 uppercase\">{{\"BTN.BACK\" | translate}}</span>  \r\n                        </button>\r\n                        <button mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <span class=\"mx-1 uppercase\">{{\"BTN.NEXT\" | translate}}</span>                    \r\n                          <mat-icon>navigate_next</mat-icon>\r\n                        </button> \r\n                      </div>  \r\n                  \r\n                  \r\n                  </form>\r\n                  \r\n                \r\n              </div> \r\n            </mat-step>\r\n\r\n            <mat-step [stepControl]=\"submitForm.get('media')\" [label]=\"'CREATE.MEDIA' | translate \">\r\n              <div class=\"step-content\">\r\n\r\n                  <form formGroupName=\"media\" fxLayout=\"row wrap\">    \r\n                   \r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\">{{'CREATE.MEDIA' | translate}}</h1>\r\n                      </div>\r\n                  \r\n                      <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n                          <p class=\"mb-0\"><span class=\"uppercase fw-500\">{{'CREATE.MEDIA' | translate}}</span><span class=\"text-muted mx-3\"> {{\"TEXT_INPUT.TEXT_MP4\" | translate}}</span></p>                            \r\n                          <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addVideo()\" matTooltip=\"Add New Video\" matTooltipPosition=\"after\">\r\n                              <mat-icon>add_circle</mat-icon>\r\n                          </button>\r\n                      </div> \r\n                      <div formArrayName=\"videos\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n                          <div *ngFor=\"let item of submitForm.get('media')['controls'].videos['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\r\n                              <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                              <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                                      <mat-label>{{\"TEXT_INPUT.NAME\" | translate}}</mat-label>\r\n                                      <input matInput placeholder=\"\" formControlName=\"name\" autocomplete=\"off\">     \r\n                                  </mat-form-field>\r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                                      <mat-label>{{\"TEXT_INPUT.LINK_VIDEO\" |translate}}</mat-label>\r\n                                      <input matInput placeholder=\"\" formControlName=\"link\" autocomplete=\"off\">     \r\n                                  </mat-form-field>                                                 \r\n                              </div>\r\n                              <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                                  <button mat-icon-button color=\"warn\" (click)=\"deleteVideo(i)\" matTooltip=\"Delete Video\">\r\n                                      <mat-icon>cancel</mat-icon>\r\n                                  </button>\r\n                              </div>                            \r\n                          </div>        \r\n                      </div>\r\n                                    \r\n                      \r\n                      <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n                          <p class=\"mb-0 uppercase fw-500\">{{\"TEXT_INPUT.ADITIONAAL_FEATURES\" | translate}}</p>                            \r\n                          <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addFeature()\" matTooltip=\"Add New Feature\" matTooltipPosition=\"after\">\r\n                              <mat-icon>add_circle</mat-icon>\r\n                          </button>\r\n                      </div> \r\n                      <div formArrayName=\"additionalFeatures\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n                          <div *ngFor=\"let item of submitForm.get('media')['controls'].additionalFeatures['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\r\n                              <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                              <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                                      <mat-label>{{\"TEXT_INPUT.NAME\" | translate}}</mat-label>\r\n                                      <input matInput placeholder=\"Feature name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                                  </mat-form-field>\r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                                      <mat-label>{{\"TEXT_INPUT.VALUE\" | translate}}</mat-label>\r\n                                      <input matInput placeholder=\"Feature value\" formControlName=\"value\" autocomplete=\"off\">     \r\n                                  </mat-form-field>                                                 \r\n                              </div>\r\n                              <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                                  <button mat-icon-button color=\"warn\" (click)=\"deleteFeature(i)\" matTooltip=\"Delete Feature\">\r\n                                      <mat-icon>cancel</mat-icon>\r\n                                  </button>\r\n                              </div>                            \r\n                          </div>        \r\n                      </div>\r\n                  \r\n                  \r\n\r\n                     \r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                          <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                              <mat-icon>navigate_before</mat-icon>\r\n                              <span class=\"mx-1 uppercase\">{{\"BTN.BACK\" | translate}}</span>  \r\n                          </button>\r\n                          <button mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                              <span class=\"mx-1 uppercase\"> {{\"BTN.SAVE\" | translate  }}</span>                    \r\n                              <mat-icon>navigate_next</mat-icon>\r\n                          </button> \r\n                      </div> \r\n                   \r\n                  \r\n                  </form>\r\n                \r\n              </div> \r\n            </mat-step>\r\n\r\n            <mat-step [label]=\"'CREATE.CONFIRMATION' | translate\">\r\n              <div class=\"step-content\">\r\n                \r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"pt-5 text-center\"> \r\n                    <button mat-fab color=\"primary\"><mat-icon>check</mat-icon></button>\r\n                    <h2 class=\"mt-3 uppercase\">{{\"TEXT_INPUT.CONGRATULATION\"| translate}}</h2>\r\n                    <h2 class=\"my-3\">{{\"TEXT_INPUT.TEXT_CONGRATULATION\" | translate}} <span class=\"primary-color\">\"{{submitForm.get('basic')['controls'].title.value}}\"</span> {{\"TEXT_INPUT.TEXT_CONGRATULATION_2\"| translate}}</h2>\r\n                    <p class=\"text-muted\">{{\"TEXT_INPUT.TEXT_CONGRATULATION_ALERT\" | translate}}</p>\r\n                  </div>\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pt-3\">  \r\n                    <button mat-raised-button color=\"accent\" (click)=\"reset()\" type=\"button\">{{\"BTN.REGISTER_NEW_HOTEL\" | translate}}</button>       \r\n                  </div>\r\n\r\n              </div> \r\n            </mat-step>\r\n\r\n        </mat-stepper>\r\n\r\n      </mat-card>\r\n\r\n\r\n    </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_submit-property_submit-property_module_ts.js.map