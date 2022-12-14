import { Injectable, NgZone, Injector } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiBase, INITIALIZED_IN_BACKEND, NullableInDraftMode } from '@plano/shared/api/base/api-base';
import { Id } from '@plano/shared/api/base/id';
import { Meta } from '@plano/shared/api/base/meta';
import { ApiAttributeInfo } from '@plano/shared/api/base/api-attribute-info';
import { PApiPrimitiveTypes } from '@plano/shared/api/base/generated-types.ag';
import { ApiSaveArgs, ApiLoadArgs, ShiftId, ShiftSelector, ApiListWrapper, SchedulingApiPosSystem, SchedulingApiBooking, SchedulingApiAccountHolderState, ApiObjectWrapper, AuthenticatedApiRole } from '@plano/shared/api';
import { DateTime, Date, DateExclusiveEnd, LocalTime, Duration, Minutes, Hours, Days, Months, Years, Percent, Email, Search, Tel, Currency, Password, PostalCode, Integer, Url, Iban, Bic, Image } from '@plano/shared/api/base/generated-types.ag';
import { Config } from '@plano/shared/core/config';
import { AbstractControl } from '@angular/forms';
import { ApiErrorService } from '@plano/shared/api/api-error.service';



/**
 * This service enables access to the api "register_test_account".
 * This file is auto generated by de.sage.scheduler.api_generator.ApiGenerator.
 */

// constants
class Consts
{
	OWNER_GENDER = 1;
	OWNER_FIRST_NAME = 2;
	OWNER_LAST_NAME = 3;
	OWNER_EMAIL = 4;
	OWNER_PHONE = 5;
	OWNER_PASSWORD = 6;
	COMPANY = 7;
	POSTAL_CODE = 8;
	COUNTRY = 9;
	HOW_DO_YOU_KNOW = 10;
	HOW_DO_YOU_KNOW_TEXT = 11;
}


@Injectable({
  providedIn: 'root',
})
export class RegisterTestAccountApiService<ValidationMode extends 'draft' | 'validated' = 'validated'> extends ApiBase
{
	consts = new Consts();

	constructor(h : HttpClient
			,	router : Router
			,	apiE : ApiErrorService
			,	zone : NgZone
			,	injector : Injector) {
		super(h, router, apiE, zone, injector, 'register_test_account');
	}

	protected version() : string {
		return '03546e3bfc4fddd8b395cc395ddd182e,2fb0510cd975bd4914b7e9c7bcc64e96';
	}

	private dataWrapper = new RegisterTestAccountApiRoot<ValidationMode>(this);

	get data() : RegisterTestAccountApiRoot<ValidationMode> {
		return this.dataWrapper;
	}

	protected getRootWrapper() : RegisterTestAccountApiRoot<ValidationMode> {
		return this.dataWrapper;
	}

	protected recreateRootWrapper() : void {
		this.dataWrapper = new RegisterTestAccountApiRoot<ValidationMode>(this);
	}
}

		 
export class RegisterTestAccountApiRoot<ValidationMode extends 'draft' | 'validated' = 'validated'> extends ApiObjectWrapper<any, any>
{
	

	constructor(override readonly api : RegisterTestAccountApiService<ValidationMode> | null, idRaw : any = null) {
		super(api, RegisterTestAccountApiRoot as any);

		this._updateRawData(Meta.createNewObject(false, idRaw), true);

		// set parent attribute
	}


	private _id : Id | null = null;
	get id() : Id {
		return this._id !== null ? this._id : Id.create(Meta.getNewItemId(this.rawData) as any);
	}

	override attributeInfoThis : ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, RegisterTestAccountApiRoot<ValidationMode>> = new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, RegisterTestAccountApiRoot<ValidationMode>>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: '',
			id: 'ROOT',
		});
	attributeInfoOwnerGender =  new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, RegisterTestAccountApiGender>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: 'ownerGender',
			id: 'OWNER_GENDER',
			primitiveType: PApiPrimitiveTypes.Enum,
			validations: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
				return [
					() => {
		return this.api!.validators.required(PApiPrimitiveTypes.Enum, undefined);
							return null;
					},
				];
			},
		});
	attributeInfoOwnerFirstName =  new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, string>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: 'ownerFirstName',
			id: 'OWNER_FIRST_NAME',
			primitiveType: PApiPrimitiveTypes.string,
			validations: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
				return [
					() => {
		return this.api!.validators.required(PApiPrimitiveTypes.string, undefined);
							return null;
					},
				];
			},
		});
	attributeInfoOwnerLastName =  new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, string>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: 'ownerLastName',
			id: 'OWNER_LAST_NAME',
			primitiveType: PApiPrimitiveTypes.string,
			validations: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
				return [
					() => {
		return this.api!.validators.required(PApiPrimitiveTypes.string, undefined);
							return null;
					},
				];
			},
		});
	attributeInfoOwnerEmail =  new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, Email>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: 'ownerEmail',
			id: 'OWNER_EMAIL',
			primitiveType: PApiPrimitiveTypes.Email,
			validations: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
				return [
					() => {
		return this.api!.validators.required(PApiPrimitiveTypes.Email, undefined);
							return null;
					},
				];
			},
		});
	attributeInfoOwnerPhone =  new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, Tel>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: 'ownerPhone',
			id: 'OWNER_PHONE',
			primitiveType: PApiPrimitiveTypes.Tel,
			validations: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
				return [
					() => {
		return this.api!.validators.required(PApiPrimitiveTypes.Tel, undefined);
							return null;
					},
				];
			},
		});
	attributeInfoOwnerPassword =  new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, Password>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: 'ownerPassword',
			id: 'OWNER_PASSWORD',
			primitiveType: PApiPrimitiveTypes.Password,
			validations: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
				return [
					() => {
		return this.api!.validators.required(PApiPrimitiveTypes.Password, undefined);
							return null;
					},
				];
			},
		});
	attributeInfoCompany =  new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, string>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: 'company',
			id: 'COMPANY',
			primitiveType: PApiPrimitiveTypes.string,
			validations: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
				return [
					() => {
		return this.api!.validators.required(PApiPrimitiveTypes.string, undefined);
							return null;
					},
				];
			},
		});
	attributeInfoPostalCode =  new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, PostalCode>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: 'postalCode',
			id: 'POSTAL_CODE',
			primitiveType: PApiPrimitiveTypes.PostalCode,
			validations: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
				return [
					() => {
		return this.api!.validators.required(PApiPrimitiveTypes.PostalCode, undefined);
							return null;
					},
				];
			},
		});
	attributeInfoCountry =  new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, RegisterTestAccountApiCountry>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: 'country',
			id: 'COUNTRY',
			primitiveType: PApiPrimitiveTypes.Enum,
			validations: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
				return [
					() => {
		return this.api!.validators.required(PApiPrimitiveTypes.Enum, undefined);
							return null;
					},
				];
			},
		});
	attributeInfoHowDoYouKnow =  new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, RegisterTestAccountApiHowDoYouKnow>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: 'howDoYouKnow',
			id: 'HOW_DO_YOU_KNOW',
			primitiveType: PApiPrimitiveTypes.Enum,
			validations: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
				return [
					() => {
		return this.api!.validators.required(PApiPrimitiveTypes.Enum, undefined);
							return null;
					},
				];
			},
		});
	attributeInfoHowDoYouKnowText =  new ApiAttributeInfo<RegisterTestAccountApiRoot<ValidationMode>, string>({
			apiObjWrapper: this as any as RegisterTestAccountApiRoot<ValidationMode>,
			name: 'howDoYouKnowText',
			id: 'HOW_DO_YOU_KNOW_TEXT',
			primitiveType: PApiPrimitiveTypes.string,
			show: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
		if(!((this.howDoYouKnow === RegisterTestAccountApiHowDoYouKnow.OTHER)))
		{
			return false;
		}
				return true;
			},
			validations: function(this : RegisterTestAccountApiRoot<ValidationMode>) {
				return [
					() => {
		return this.api!.validators.required(PApiPrimitiveTypes.string, undefined);
							return null;
					},
				];
			},
		});


	set ownerGender(v : NullableInDraftMode<RegisterTestAccountApiGender, ValidationMode>) {
        this.setterImpl(1, v, 'ownerGender');
	}


	set ownerFirstName(v : NullableInDraftMode<string, ValidationMode>) {
        this.setterImpl(2, v, 'ownerFirstName');
	}


	set ownerLastName(v : NullableInDraftMode<string, ValidationMode>) {
        this.setterImpl(3, v, 'ownerLastName');
	}


	set ownerEmail(v : NullableInDraftMode<Email, ValidationMode>) {
        this.setterImpl(4, v, 'ownerEmail');
	}


	set ownerPhone(v : NullableInDraftMode<Tel, ValidationMode>) {
        this.setterImpl(5, v, 'ownerPhone');
	}


	set ownerPassword(v : NullableInDraftMode<Password, ValidationMode>) {
        this.setterImpl(6, v, 'ownerPassword');
	}


	set company(v : NullableInDraftMode<string, ValidationMode>) {
        this.setterImpl(7, v, 'company');
	}


	set postalCode(v : NullableInDraftMode<PostalCode, ValidationMode>) {
        this.setterImpl(8, v, 'postalCode');
	}


	set country(v : NullableInDraftMode<RegisterTestAccountApiCountry, ValidationMode>) {
        this.setterImpl(9, v, 'country');
	}


	set howDoYouKnow(v : NullableInDraftMode<RegisterTestAccountApiHowDoYouKnow, ValidationMode>) {
        this.setterImpl(10, v, 'howDoYouKnow');
	}

	/**
     *  only set when HOW_DO_YOU_KNOW==OTHER
	 *
	 * @type {string}
     */
	get howDoYouKnowText() : NullableInDraftMode<string, ValidationMode> {
		return this.data[11];
	}

	set howDoYouKnowText(v : NullableInDraftMode<string, ValidationMode>) {
        this.setterImpl(11, v, 'howDoYouKnowText');
	}


	_fixIds(_idReplacements : Map<any, number>) : void {
	}

	override _updateRawData(data : any[] | null, generateMissingData : boolean) : void {
		super._updateRawData(data, generateMissingData);

		this.data = data;

		// update id wrapper
		const idRawData = Meta.getId(data);
		this._id = idRawData === null ? null : Id.create(idRawData as any);

		// create missing/default data
		if(generateMissingData && data) {
			this.fillWithDefaultValues(data, 12);

		}

		// propagate new raw data to children
	}

	protected get dni() : string {
		return '1';
	}

	static loadDetailed(	api : RegisterTestAccountApiService<any>
						,	id : Id
						,	{success = null, error = null, searchParams = null} : ApiLoadArgs = {}) : Promise<HttpResponse<unknown>> {
		return ApiObjectWrapper.loadDetailedImpl(api, id, '1', { success: success, error: error, searchParams: searchParams});
	}

	protected assumeValidated() : asserts this is RegisterTestAccountApiRoot<'validated'> {
		// TODO: PLANO-151346
	}
}

export enum RegisterTestAccountApiGender {
	MALE = 1,
	FEMALE = 2,
	DIVERSE = 3,
}
export enum RegisterTestAccountApiCountry {
	GERMANY = 1,
	AUSTRIA = 2,
	SWITZERLAND = 3,
	NETHERLANDS = 4,
	BELGIUM = 5,
	UNITED_KINGDOM = 6,
	CZECH_REPUBLIC = 7,
	SWEDEN = 8,
	LUXEMBOURG = 9,
}
export enum RegisterTestAccountApiHowDoYouKnow {
	RECOMMENDATION = 1,
	INTERNET_SEARCH = 2,
	ASKED_BY_PLANO = 3,
	SOCIAL_MEDIA_FACEBOOK = 4,
	FAIR = 5,
	OTHER = 6,
}


