import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroService) {
        this.heroService = heroService;
        this.searchTerms = new Subject();
    }
    // Push a search term into the observable stream.
    // Push a search term into the observable stream.
    HeroSearchComponent.prototype.search = 
    // Push a search term into the observable stream.
    function (term) {
        this.searchTerms.next(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300), 
        // ignore new term if same as previous term
        distinctUntilChanged(), 
        // switch to new search observable each time the term changes
        switchMap(function (term) { return _this.heroService.searchHeroes(term); }));
    };
    HeroSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-hero-search',
                    templateUrl: './hero-search.component.html',
                    styleUrls: ['./hero-search.component.css']
                },] },
    ];
    /** @nocollapse */
    HeroSearchComponent.ctorParameters = function () { return [
        { type: HeroService, },
    ]; };
    return HeroSearchComponent;
}());
export { HeroSearchComponent };
//# sourceMappingURL=hero-search.component.js.map