/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "./messages.component.css.shim.ngstyle";
import * as i1 from "@angular/core";
import * as i2 from "@angular/common";
import * as i3 from "./messages.component";
import * as i4 from "../message.service";
var styles_MessagesComponent = [i0.styles];
var RenderType_MessagesComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_MessagesComponent, data: {} });
export { RenderType_MessagesComponent as RenderType_MessagesComponent };
function View_MessagesComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_MessagesComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n\n  "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Messages"])), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "button", [["class", "clear"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.messageService.clear() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["clear"])), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MessagesComponent_2)), i1.ɵdid(9, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵted(-1, null, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messageService.messages; _ck(_v, 9, 0, currVal_0); }, null); }
export function View_MessagesComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_MessagesComponent_1)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messageService.messages.length; _ck(_v, 1, 0, currVal_0); }, null); }
export function View_MessagesComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-messages", [], null, null, null, View_MessagesComponent_0, RenderType_MessagesComponent)), i1.ɵdid(1, 114688, null, 0, i3.MessagesComponent, [i4.MessageService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MessagesComponentNgFactory = i1.ɵccf("app-messages", i3.MessagesComponent, View_MessagesComponent_Host_0, {}, {}, []);
export { MessagesComponentNgFactory as MessagesComponentNgFactory };
//# sourceMappingURL=messages.component.ngfactory.js.map