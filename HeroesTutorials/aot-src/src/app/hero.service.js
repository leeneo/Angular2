import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var HeroService = (function () {
    function HeroService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.heroesUrl = 'api/heroes';
    }
    /** GET heroes from the server */
    /** GET heroes from the server */
    HeroService.prototype.getHeroes = /** GET heroes from the server */
    function () {
        var _this = this;
        return this.http.get(this.heroesUrl)
            .pipe(tap(function (heroes) { return _this.log("fetched heroes"); }), catchError(this.handleError('getHeroes', [])));
    };
    /** GET hero by id. Return `undefined` when id not found */
    /** GET hero by id. Return `undefined` when id not found */
    HeroService.prototype.getHeroNo404 = /** GET hero by id. Return `undefined` when id not found */
    function (id) {
        var _this = this;
        var url = this.heroesUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(map(function (heroes) { return heroes[0]; }), // returns a {0|1} element array
        // returns a {0|1} element array
        tap(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " hero id=" + id);
        }), catchError(this.handleError("getHero id=" + id)));
    };
    /** GET hero by id. Will 404 if id not found */
    /** GET hero by id. Will 404 if id not found */
    HeroService.prototype.getHero = /** GET hero by id. Will 404 if id not found */
    function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).pipe(tap(function (_) { return _this.log("fetched hero id=" + id); }), catchError(this.handleError("getHero id=" + id)));
    };
    /* GET heroes whose name contains search term */
    /* GET heroes whose name contains search term */
    HeroService.prototype.searchHeroes = /* GET heroes whose name contains search term */
    function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.http.get("api/heroes/?name=" + term).pipe(tap(function (_) { return _this.log("found heroes matching \"" + term + "\""); }), catchError(this.handleError('searchHeroes', [])));
    };
    //////// Save methods //////////
    /** POST: add a new hero to the server */
    /** POST: add a new hero to the server */
    HeroService.prototype.addHero = /** POST: add a new hero to the server */
    function (hero) {
        var _this = this;
        return this.http.post(this.heroesUrl, hero, httpOptions).pipe(tap(function (hero) { return _this.log("added hero w/ id=" + hero.id); }), catchError(this.handleError('addHero')));
    };
    /** DELETE: delete the hero from the server */
    /** DELETE: delete the hero from the server */
    HeroService.prototype.deleteHero = /** DELETE: delete the hero from the server */
    function (hero) {
        var _this = this;
        var id = typeof hero === 'number' ? hero : hero.id;
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(tap(function (_) { return _this.log("deleted hero id=" + id); }), catchError(this.handleError('deleteHero')));
    };
    /** PUT: update the hero on the server */
    /** PUT: update the hero on the server */
    HeroService.prototype.updateHero = /** PUT: update the hero on the server */
    function (hero) {
        var _this = this;
        return this.http.put(this.heroesUrl, hero, httpOptions).pipe(tap(function (_) { return _this.log("updated hero id=" + hero.id); }), catchError(this.handleError('updateHero')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    /**
       * Handle Http operation that failed.
       * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
    HeroService.prototype.handleError = /**
       * Handle Http operation that failed.
       * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
    function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    /** Log a HeroService message with the MessageService */
    HeroService.prototype.log = /** Log a HeroService message with the MessageService */
    function (message) {
        this.messageService.add('HeroService: ' + message);
    };
    HeroService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HeroService.ctorParameters = function () { return [
        { type: HttpClient, },
        { type: MessageService, },
    ]; };
    return HeroService;
}());
export { HeroService };
//# sourceMappingURL=hero.service.js.map