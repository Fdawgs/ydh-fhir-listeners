/**
	Builds Flag FHIR Resource that adheres to its Care-Connect profile,
	see https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Flag-1 for more info.
 
	@author Frazer Smith
	@param {object} data - Java RowSet object.
	@returns {object} Flag FHIR resource.
 */
function buildFlagResource(data) {
	const result = getResultSet(data);

	/**
	 * Hard-coding meta profile and resourceType into resource as this should not
	 * be changed for this resource, ever.
	 */
	const resource = {
		meta: {
			profile: [
				'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Flag-1'
			]
		},
		resourceType: 'Flag'
	};

	resource.id = newStringOrUndefined(result.flagId);
	resource.status = newStringOrUndefined(result.flagStatusCode);

	if (result.flagCategoryCodingCode != undefined) {
		resource.category = {
			coding: [
				{
					system: 'https://trakcare.ydh.nhs.uk',
					code: newStringOrUndefined(result.flagCategoryCodingCode),
					display: newStringOrUndefined(
						result.flagCategoryCodingDisplay
					)
				}
			]
		};
	}

	resource.code = {
		coding: []
	};

	if (result.flagCodeCodingCode != undefined) {
		const ydhCode = {
			system: 'https://trakcare.ydh.nhs.uk',
			code: newStringOrUndefined(result.flagCodeCodingCode),
			display: newStringOrUndefined(result.flagCodeCodingDisplay)
		};
		resource.code.coding.push(ydhCode);
	}

	if (result.flagCodeCodingSnomedCode != undefined) {
		const snomedCode = {
			system: 'https://snomed.info/sct',
			code: newStringOrUndefined(result.flagCodeCodingSnomedCode),
			display: newStringOrUndefined(result.flagCodeCodingSnomedDisplay)
		};
		resource.code.coding.push(snomedCode);
	}

	resource.period = {};
	if (
		result.periodStart != undefined &&
		result.periodStart.substring(0, 1) != 'T' &&
		result.periodStart.substring(0, 4) != '1900'
	) {
		resource.period.start = result.periodStart;
	}
	if (
		result.periodStart != undefined &&
		result.periodStart.substring(0, 1) != 'T' &&
		result.periodStart.substring(0, 4) != '1900'
	) {
		resource.period.end = result.periodStart;
	}

	resource.subject = {
		reference: `${$cfg('apiUrl')}/r3/Patient/${result.flagSubjectReference}`
	};

	return resource;
}
