import { ICommonConfig, EScheme } from '../../config-types';

export const config: ICommonConfig = {
	back: {
		scheme: EScheme.Http,
		fqdn: 'api.e-make.io',
		port: 8765,
		auth:{
			baseAuthRoute: '/auth',
			availableMethods: ['google'],
		},
		apiBaseUrl: '/api',
	},
	front: {
		scheme: EScheme.Http,
		fqdn: 'www.e-make.io',
		port: 4200,
		afterAuthRoute: 'auth-ok',
	},
	production: false,
};
