/**
	Builds AllergyIntolerance FHIR Resource that adheres to its Care-Connect profile,
	see https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-AllergyIntolerance-1 for more info.
 
	@author Frazer Smith
	@param {object} data - Java RowSet object.
	@returns {object} AllergyIntolerance FHIR resource.
 */
function buildAllergyIntoleranceResource(data) {
	const result = getResultSet(data);

	/**
	 * Set keys with empty string values as undefined.
	 * Unable to use `Object.keys(result).forEach` due to it being Java object
	 */
	for (let index = 0; index < Object.keys(result).length; index++) {
		if ("".concat(result[Object.keys(result)[index]]).trim() == "") {
			result[Object.keys(result)[index]] = undefined;
		}
	}

	/**
	 * Hard-coding meta profile and resourceType into resource as this should not
	 * be changed for this resource, ever.
	 */
	const resource = {
		meta: {
			profile: [
				"https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-AllergyIntolerance-1",
			],
		},
		resourceType: "AllergyIntolerance",
	};

	// Add meta data
	if (
		result.lastUpdated != undefined &&
		result.lastUpdated.substring(0, 1) != "T" &&
		result.lastUpdated.substring(0, 4) != "1900"
	) {
		resource.meta.lastUpdated = result.lastUpdated;
	}

	/**
	 * Add SIDeR specific tags
	 * Set tag to 'Do not Display' for all resources; decided by Paul Foster CCIO on 2020-11-19
	 * due to low number of allergies recorded in TrakCare PAS
	 */
	resource.meta.tag = [
		{
			system: "https://fhir.blackpear.com/ui/shared-care-record-visibility",
			code: "none",
			display: "Do not Display",
		},
	];

	resource.id = newStringOrUndefined(result.id);
	resource.assertedDate = newStringOrUndefined(result.assertedDate);

	// Very unlikely that an allergy record will have multiple components like this
	// but better to be safe than sorry
	let allergyResult = [];
	allergyResult.push(newStringOrUndefined(result.allergyGroupDesc));
	allergyResult.push(newStringOrUndefined(result.allergyCodingDesc));
	allergyResult.push(newStringOrUndefined(result.allergyDrugDesc));
	allergyResult.push(newStringOrUndefined(result.allergyDrugGenericDesc));
	allergyResult.push(newStringOrUndefined(result.allergyDrugCategoryDesc));
	allergyResult.push(newStringOrUndefined(result.allergyDrugFormDesc));
	allergyResult.push(newStringOrUndefined(result.allergyDrugIngredientDesc));
	allergyResult.push(newStringOrUndefined(result.allergyComment));
	allergyResult = allergyResult.filter((element) => element != null);
	if (allergyResult.length > 0) {
		resource.code = {
			text: allergyResult.join("; "),
		};
	}

	resource.patient = {
		reference: `${$cfg("apiUrl")}/STU3/Patient/${result.patientReference}`,
	};

	resource.clinicalStatus = newStringOrUndefined(result.clinicalStatusCode);
	resource.verificationStatus = newStringOrUndefined(
		result.verificationStatusCode
	);
	resource.type = newStringOrUndefined(result.typeCode);
	resource.criticality = newStringOrUndefined(result.criticalityCode);

	return resource;
}
