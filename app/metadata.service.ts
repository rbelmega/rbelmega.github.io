import {aboutMe} from './metadata';
import {Injectable} from 'angular2/core';

@Injectable()

export class MetaDataService {
	getAboutMeInfo() {
		return Promise.resolve(aboutMe);
	}
}