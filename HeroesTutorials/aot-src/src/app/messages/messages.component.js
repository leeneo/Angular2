import { Component } from '@angular/core';
import { MessageService } from '../message.service';
var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-messages',
                    templateUrl: './messages.component.html',
                    styleUrls: ['./messages.component.css']
                },] },
    ];
    /** @nocollapse */
    MessagesComponent.ctorParameters = function () { return [
        { type: MessageService, },
    ]; };
    return MessagesComponent;
}());
export { MessagesComponent };
//# sourceMappingURL=messages.component.js.map