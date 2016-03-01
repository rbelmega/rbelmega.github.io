import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {enableProdMode,provide} from 'angular2/core';
enableProdMode();

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);