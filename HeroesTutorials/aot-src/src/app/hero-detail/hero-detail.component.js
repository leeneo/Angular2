import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
var HeroDetailComponent = (function () {
    function HeroDetailComponent(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.updateHero(this.hero)
            .subscribe(function () { return _this.goBack(); });
    };
    HeroDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-hero-detail',
                    templateUrl: './hero-detail.component.html',
                    styleUrls: ['./hero-detail.component.css']
                },] },
    ];
    /** @nocollapse */
    HeroDetailComponent.ctorParameters = function () { return [
        { type: ActivatedRoute, },
        { type: HeroService, },
        { type: Location, },
    ]; };
    HeroDetailComponent.propDecorators = {
        "hero": [{ type: Input },],
    };
    return HeroDetailComponent;
}());
export { HeroDetailComponent };
//# sourceMappingURL=hero-detail.component.js.map