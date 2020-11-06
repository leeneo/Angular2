/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "./app.module";
import * as i2 from "./app.component";
import * as i3 from "./dashboard/dashboard.component.ngfactory";
import * as i4 from "./hero-detail/hero-detail.component.ngfactory";
import * as i5 from "./heroes/heroes.component.ngfactory";
import * as i6 from "./app.component.ngfactory";
import * as i7 from "@angular/common";
import * as i8 from "@angular/platform-browser";
import * as i9 from "@angular/forms";
import * as i10 from "@angular/router";
import * as i11 from "@angular/common/http";
import * as i12 from "angular-in-memory-web-api/interfaces";
import * as i13 from "./in-memory-data.service";
import * as i14 from "angular-in-memory-web-api/http-client-in-memory-web-api.module";
import * as i15 from "./message.service";
import * as i16 from "./hero.service";
import * as i17 from "./dashboard/dashboard.component";
import * as i18 from "./hero-detail/hero-detail.component";
import * as i19 from "./heroes/heroes.component";
import * as i20 from "./app-routing.module";
var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.DashboardComponentNgFactory, i4.HeroDetailComponentNgFactory, i5.HeroesComponentNgFactory, i6.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i7.NgLocalization, i7.NgLocaleLocalization, [i0.LOCALE_ID, [2, i7.ɵa]]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i8.DomSanitizer, i8.ɵe, [i7.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i8.DomSanitizer]), i0.ɵmpd(4608, i8.HAMMER_GESTURE_CONFIG, i8.HammerGestureConfig, []), i0.ɵmpd(5120, i8.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i8.ɵDomEventsPlugin(p0_0, p0_1), new i8.ɵKeyEventsPlugin(p1_0), new i8.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i7.DOCUMENT, i0.NgZone, i7.DOCUMENT, i7.DOCUMENT, i8.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i8.EventManager, i8.EventManager, [i8.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i8.ɵDomSharedStylesHost, i8.ɵDomSharedStylesHost, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.ɵDomRendererFactory2, i8.ɵDomRendererFactory2, [i8.EventManager, i8.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i8.ɵDomRendererFactory2]), i0.ɵmpd(6144, i8.ɵSharedStylesHost, null, [i8.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i8.Meta, i8.Meta, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.Title, i8.Title, [i7.DOCUMENT]), i0.ɵmpd(4608, i9.ɵi, i9.ɵi, []), i0.ɵmpd(5120, i10.ActivatedRoute, i10.ɵf, [i10.Router]), i0.ɵmpd(4608, i10.NoPreloading, i10.NoPreloading, []), i0.ɵmpd(6144, i10.PreloadingStrategy, null, [i10.NoPreloading]), i0.ɵmpd(135680, i10.RouterPreloader, i10.RouterPreloader, [i10.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i10.PreloadingStrategy]), i0.ɵmpd(4608, i10.PreloadAllModules, i10.PreloadAllModules, []), i0.ɵmpd(5120, i10.ROUTER_INITIALIZER, i10.ɵi, [i10.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i10.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i11.HttpXsrfTokenExtractor, i11.ɵg, [i7.DOCUMENT, i0.PLATFORM_ID, i11.ɵe]), i0.ɵmpd(4608, i11.ɵh, i11.ɵh, [i11.HttpXsrfTokenExtractor, i11.ɵf]), i0.ɵmpd(5120, i11.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i11.ɵh]), i0.ɵmpd(4608, i12.InMemoryDbService, i13.InMemoryDataService, []), i0.ɵmpd(4608, i11.ɵd, i11.ɵd, []), i0.ɵmpd(6144, i11.XhrFactory, null, [i11.ɵd]), i0.ɵmpd(5120, i11.HttpBackend, i14.httpClientInMemBackendServiceFactory, [i12.InMemoryDbService, i12.InMemoryBackendConfig, i11.XhrFactory]), i0.ɵmpd(5120, i11.HttpHandler, i11.ɵinterceptingHandler, [i11.HttpBackend, [2, i11.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i11.HttpClient, i11.HttpClient, [i11.HttpHandler]), i0.ɵmpd(4608, i11.HttpXhrBackend, i11.HttpXhrBackend, [i11.XhrFactory]), i0.ɵmpd(4608, i15.MessageService, i15.MessageService, []), i0.ɵmpd(4608, i16.HeroService, i16.HeroService, [i11.HttpClient, i15.MessageService]), i0.ɵmpd(512, i7.CommonModule, i7.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i8.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i10.ɵb()]; }, []), i0.ɵmpd(512, i10.ɵg, i10.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0) { return [i8.ɵh(p0_0), i10.ɵh(p1_0)]; }, [[2, i0.NgProbeToken], i10.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i8.BrowserModule, i8.BrowserModule, [[3, i8.BrowserModule]]), i0.ɵmpd(512, i9.ɵba, i9.ɵba, []), i0.ɵmpd(512, i9.FormsModule, i9.FormsModule, []), i0.ɵmpd(1024, i10.ɵa, i10.ɵd, [[3, i10.Router]]), i0.ɵmpd(512, i10.UrlSerializer, i10.DefaultUrlSerializer, []), i0.ɵmpd(512, i10.ChildrenOutletContexts, i10.ChildrenOutletContexts, []), i0.ɵmpd(256, i10.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i7.LocationStrategy, i10.ɵc, [i7.PlatformLocation, [2, i7.APP_BASE_HREF], i10.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i7.Location, i7.Location, [i7.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i10.ROUTES, function () { return [[{ path: "", redirectTo: "/dashboard", pathMatch: "full" }, { path: "dashboard", component: i17.DashboardComponent }, { path: "detail/:id", component: i18.HeroDetailComponent }, { path: "heroes", component: i19.HeroesComponent }]]; }, []), i0.ɵmpd(1024, i10.Router, i10.ɵe, [i0.ApplicationRef, i10.UrlSerializer, i10.ChildrenOutletContexts, i7.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i10.ROUTES, i10.ROUTER_CONFIGURATION, [2, i10.UrlHandlingStrategy], [2, i10.RouteReuseStrategy]]), i0.ɵmpd(512, i10.RouterModule, i10.RouterModule, [[2, i10.ɵa], [2, i10.Router]]), i0.ɵmpd(512, i20.AppRoutingModule, i20.AppRoutingModule, []), i0.ɵmpd(512, i11.HttpClientXsrfModule, i11.HttpClientXsrfModule, []), i0.ɵmpd(512, i11.HttpClientModule, i11.HttpClientModule, []), i0.ɵmpd(512, i14.HttpClientInMemoryWebApiModule, i14.HttpClientInMemoryWebApiModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i11.ɵe, "XSRF-TOKEN", []), i0.ɵmpd(256, i11.ɵf, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i12.InMemoryBackendConfig, { dataEncapsulation: false }, [])]); });
export { AppModuleNgFactory as AppModuleNgFactory };
//# sourceMappingURL=app.module.ngfactory.js.map