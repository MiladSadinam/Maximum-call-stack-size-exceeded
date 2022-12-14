/**
 * This file is auto generated by de.sage.scheduler.api_generator.ApiGenerator.
 */

/**
 * All locale ids that are available in our App.
 */
export enum PSupportedLocaleIds {
	de_DE = 'de-DE',
	de_AT = 'de-AT',
	de_CH = 'de-CH',
	en_NL = 'en-NL',
	en_BE = 'en-BE',
	en_GB = 'en-GB',
	en_CZ = 'en-CZ',
	en_SE = 'en-SE',
	de_LU = 'de-LU',
	en = 'en',
}


/**
 * All languages that are available in our App (first two chars from LOCALE_ID).
 */
export enum PSupportedLanguageCodes {
	de = 'de',
	en = 'en',
}

/**
 * All country-codes that are available in our App (last two chars from LOCALE_ID).
 */
export enum PSupportedCountryCodes {
	DE = 'DE',
	AT = 'AT',
	CH = 'CH',
	NL = 'NL',
	BE = 'BE',
	GB = 'GB',
	CZ = 'CZ',
	SE = 'SE',
	LU = 'LU',
}

/**
 * All countries that are available in our App.
 */
export enum PSupportedCountries {
	GERMANY = 'GERMANY',
	AUSTRIA = 'AUSTRIA',
	SWITZERLAND = 'SWITZERLAND',
	NETHERLANDS = 'NETHERLANDS',
	BELGIUM = 'BELGIUM',
	UNITED_KINGDOM = 'UNITED_KINGDOM',
	CZECH_REPUBLIC = 'CZECH_REPUBLIC',
	SWEDEN = 'SWEDEN',
	LUXEMBOURG = 'LUXEMBOURG',
}

/**
 * All currency codes that are available in our App.
 */
export enum PSupportedCurrencyCodes {
	EUR = 'EUR',
	CHF = 'CHF',
	GBP = 'GBP',
	CZK = 'CZK',
	SEK = 'SEK',
}

/**
 * All time-zones that are available in our App.
 */
export enum PSupportedTimeZones {
	EUROPE_BERLIN = 'Europe/Berlin',
	ETC_GMT = 'Etc/GMT',
}

/**
 * All primitive types used by the api.
 */
export enum PApiPrimitiveTypes {

	/**
	 * Type used for api-lists.
	 */
	ApiList = 'ApiList',

	/**
	 * A bank account BIC code.
	 */
	Bic = 'Bic',

	/**
	 * A currency value.
	 */
	Currency = 'Currency',

	/**
	 * Milliseconds since 1970 describing a date. It is always start of a day.
	 */
	Date = 'Date',

	/**
	 * Like `Date` with the difference that this is the exclusive end of an interval. So, when for example 1. of January should be selected the start of 2. of January should be set but still 1. of January should be visualized to the user.
	 */
	DateExclusiveEnd = 'DateExclusiveEnd',

	/**
	 * Milliseconds since 1970 describing a date-time.
	 */
	DateTime = 'DateTime',

	/**
	 * A decimal number of days.
	 */
	Days = 'Days',

	/**
	 * Milliseconds defining a duration.
	 */
	Duration = 'Duration',

	/**
	 * An email string.
	 */
	Email = 'Email',

	Enum = 'Enum',

	/**
	 * A decimal number of hours.
	 */
	Hours = 'Hours',

	/**
	 * A bank account IBAN code.
	 */
	Iban = 'Iban',

	/**
	 * A general api id object.
	 */
	Id = 'Id',

	/**
	 * This contains the full url to the image file. Empty string means that there is no image available. To store a new image set here the base-64 data (e.g. 'data:image/png;base64,iVBORw0KGgoAAAANSUh...' and save api. Api will then return again the full url to the image. To remove an existing image set an empty string and and save api. cspell:disable-line
	 */
	Image = 'Image',

	/**
	 * A whole number.
	 */
	Integer = 'Integer',

	/**
	 * Milliseconds defining a time for a given day.
	 */
	LocalTime = 'LocalTime',

	/**
	 * A decimal number of minutes.
	 */
	Minutes = 'Minutes',

	/**
	 * A decimal number of months.
	 */
	Months = 'Months',

	/**
	 * A password value.
	 */
	Password = 'Password',

	/**
	 * A percentage value. E.g. 0.1 means 10 %.
	 */
	Percent = 'Percent',

	/**
	 * A postal-code value.
	 */
	PostalCode = 'PostalCode',

	/**
	 * A search input string.
	 */
	Search = 'Search',

	/**
	 * A shift id object which selects exactly one shift.
	 */
	ShiftId = 'ShiftId',

	/**
	 * A shift id object which selects a group of shifts.
	 */
	ShiftSelector = 'ShiftSelector',

	/**
	 * A telephone number.
	 */
	Tel = 'Tel',

	/**
	 * An url string.
	 */
	Url = 'Url',

	/**
	 * A decimal number of years.
	 */
	Years = 'Years',

	any = 'any',

	boolean = 'boolean',

	number = 'number',

	string = 'string',

}

/**
 * A bank account BIC code.
 */
export type Bic = string;

/**
 * A currency value.
 */
export type Currency = number;

/**
 * Milliseconds since 1970 describing a date. It is always start of a day.
 */
export type Date = number;

/**
 * Like `Date` with the difference that this is the exclusive end of an interval. So, when for example 1. of January should be selected the start of 2. of January should be set but still 1. of January should be visualized to the user.
 */
export type DateExclusiveEnd = number;

/**
 * Milliseconds since 1970 describing a date-time.
 */
export type DateTime = number;

/**
 * A decimal number of days.
 */
export type Days = number;

/**
 * Milliseconds defining a duration.
 */
export type Duration = number;

/**
 * An email string.
 */
export type Email = string;

/**
 * A decimal number of hours.
 */
export type Hours = number;

/**
 * A bank account IBAN code.
 */
export type Iban = string;

/**
 * This contains the full url to the image file. Empty string means that there is no image available. To store a new image set here the base-64 data (e.g. 'data:image/png;base64,iVBORw0KGgoAAAANSUh...' and save api. Api will then return again the full url to the image. To remove an existing image set an empty string and and save api. cspell:disable-line
 */
export type Image = string;

/**
 * A whole number.
 */
export type Integer = number;

/**
 * Milliseconds defining a time for a given day.
 */
export type LocalTime = number;

/**
 * A decimal number of minutes.
 */
export type Minutes = number;

/**
 * A decimal number of months.
 */
export type Months = number;

/**
 * A password value.
 */
export type Password = string;

/**
 * A percentage value. E.g. 0.1 means 10 %.
 */
export type Percent = number;

/**
 * A postal-code value.
 */
export type PostalCode = string;

/**
 * A search input string.
 */
export type Search = string;

/**
 * A telephone number.
 */
export type Tel = string;

/**
 * An url string.
 */
export type Url = string;

/**
 * A decimal number of years.
 */
export type Years = number;

