/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "./heroes.component.css.shim.ngstyle";
import * as i1 from "@angular/core";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "./heroes.component";
import * as i5 from "../hero.service";
var styles_HeroesComponent = [i0.styles];
var RenderType_HeroesComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HeroesComponent, data: {} });
export { RenderType_HeroesComponent as RenderType_HeroesComponent };
function View_HeroesComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(2, 0, null, null, 5, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["\n      "])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "span", [["class", "badge"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵted(7, null, [" ", "\n    "])), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(9, 0, null, null, 1, "button", [["class", "delete"], ["title", "delete hero"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.delete(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["x"])), (_l()(), i1.ɵted(-1, null, ["\n  "]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/detail/", _v.context.$implicit.id, ""); _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.id; _ck(_v, 6, 0, currVal_3); var currVal_4 = _v.context.$implicit.name; _ck(_v, 7, 0, currVal_4); }); }
export function View_HeroesComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["My Heroes"])), (_l()(), i1.ɵted(-1, null, ["\n\n"])), (_l()(), i1.ɵeld(3, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(5, 0, null, null, 3, "label", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hero name:\n    "])), (_l()(), i1.ɵeld(7, 0, [["heroName", 1]], null, 0, "input", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.add(i1.ɵnov(_v, 7).value);
        var pd_0 = ((i1.ɵnov(_v, 7).value = "") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    add\n  "])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n\n"])), (_l()(), i1.ɵeld(15, 0, null, null, 4, "ul", [["class", "heroes"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroesComponent_1)), i1.ɵdid(18, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.heroes; _ck(_v, 18, 0, currVal_0); }, null); }
export function View_HeroesComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-heroes", [], null, null, null, View_HeroesComponent_0, RenderType_HeroesComponent)), i1.ɵdid(1, 114688, null, 0, i4.HeroesComponent, [i5.HeroService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeroesComponentNgFactory = i1.ɵccf("app-heroes", i4.HeroesComponent, View_HeroesComponent_Host_0, {}, {}, []);
export { HeroesComponentNgFactory as HeroesComponentNgFactory };
//# sourceMappingURL=heroes.component.ngfactory.js.map