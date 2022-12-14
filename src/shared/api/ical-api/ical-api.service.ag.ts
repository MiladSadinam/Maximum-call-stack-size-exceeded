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
 * This service enables access to the api "ical".
 * This file is auto generated by de.sage.scheduler.api_generator.ApiGenerator.
 */

// constants
class Consts
{
}


@Injectable({
  providedIn: 'root',
})
export class IcalApiService<ValidationMode extends 'draft' | 'validated' = 'validated'> extends ApiBase
{
	consts = new Consts();

	constructor(h : HttpClient
			,	router : Router
			,	apiE : ApiErrorService
			,	zone : NgZone
			,	injector : Injector) {
		super(h, router, apiE, zone, injector, 'ical');
	}

	protected version() : string {
		return '8bd837dacf4270c2880e5d33787e252e,2f36ab3dc816647c01b2459c115f86c6';
	}

	private dataWrapper = new IcalApiRoot<ValidationMode>(this);

	get data() : IcalApiRoot<ValidationMode> {
		return this.dataWrapper;
	}

	protected getRootWrapper() : IcalApiRoot<ValidationMode> {
		return this.dataWrapper;
	}

	protected recreateRootWrapper() : void {
		this.dataWrapper = new IcalApiRoot<ValidationMode>(this);
	}
}

		 
export class IcalApiRoot<ValidationMode extends 'draft' | 'validated' = 'validated'> extends ApiObjectWrapper<any, any>
{
	

	constructor(override readonly api : IcalApiService<ValidationMode> | null, idRaw : any = null) {
		super(api, IcalApiRoot as any);

		this._updateRawData(Meta.createNewObject(false, idRaw), true);

		// set parent attribute
	}


	private _id : Id | null = null;
	get id() : Id {
		return this._id !== null ? this._id : Id.create(Meta.getNewItemId(this.rawData) as any);
	}

	override attributeInfoThis : ApiAttributeInfo<IcalApiRoot<ValidationMode>, IcalApiRoot<ValidationMode>> = new ApiAttributeInfo<IcalApiRoot<ValidationMode>, IcalApiRoot<ValidationMode>>({
			apiObjWrapper: this as any as IcalApiRoot<ValidationMode>,
			name: '',
			id: 'ROOT',
			canEdit: () => false,
			readMode: () => true,
		});


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
			this.fillWithDefaultValues(data, 1);

		}

		// propagate new raw data to children
	}

	protected get dni() : string {
		return '1';
	}

	static loadDetailed(	api : IcalApiService<any>
						,	id : Id
						,	{success = null, error = null, searchParams = null} : ApiLoadArgs = {}) : Promise<HttpResponse<unknown>> {
		return ApiObjectWrapper.loadDetailedImpl(api, id, '1', { success: success, error: error, searchParams: searchParams});
	}

	protected assumeValidated() : asserts this is IcalApiRoot<'validated'> {
		// TODO: PLANO-151346
	}
}



