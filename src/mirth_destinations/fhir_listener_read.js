/**
 * @author Frazer Smith
 * @description Rewritten example FHIR read destination to be usable for TrakCare calls.
 */
try {
	const type = $('fhirType').toLowerCase();
	const id = $('fhirId');

	// Build up WHERE clause then pass to buildResourceQuery to be called
	let wherePredicate;
	switch (`${type}`) {
		case 'allergyintolerance':
			wherePredicate = [
				`(REPLACE(alle.ALG_RowId, ''||'', ''-'') = ''${id}'')`
			];
			break;
		case 'condition':
			break;
		case 'documentreference':
			break;
		case 'encounter':
			wherePredicate = [
				`(REPLACE(app.APPT_RowId, ''||'', ''-'') = ''${id}'')`,
				`(REPLACE(PAADM_ADMNo, ''/'', ''-'') = ''${id}'')`,
				`(REPLACE(TRANS_ParRef->PAADM_ADMNo, ''/'', ''-'') = ''${id}'')`
			];
			break;
		case 'medicationstatement':
			wherePredicate = [
				`(REPLACE(oi.OEORI_RowID, ''||'', ''-'') = ''${id}'')`,
				''
			];

			break;
		case 'patient':
			wherePredicate = [`(patmas.PAPMI_No = ''${id}'')`];
			break;

		default:
			break;
	}
	const result = buildResourceQuery(type, wherePredicate);

	if (result.next()) {
		// Pass it out to external channel that will transform into
		// Care Connect FHIR Resource and return
		let data;
		switch (`${type}`) {
			case 'allergyintolerance':
				data = buildAllergyIntoleranceResource(result);
				break;
			case 'condition':
				// data = buildConditionResource(result);
				break;
			case 'documentreference':
				// data = buildDocumentReferenceResource(result);
				break;
			case 'encounter':
				data = buildEncounterResource(result);
				break;
			case 'flag':
				data = buildFlagResource(result);
				break;
			case 'medicationstatement':
				data = buildMedicationStatementResource(result);
				break;
			case 'patient':
				data = buildPatientResource(result);
				break;
			default:
				break;
		}

		// Hard coded version as we don't keep past versions of records, only one
		const version = '1';
		const lastModified = new Date(
			getResultSetString(result, 'lastUpdated')
		);
		const response = FhirResponseFactory.getReadResponse(
			JSON.stringify(data),
			version,
			lastModified,
			200,
			'application/fhir+json'
		);
		responseMap.put('response', response);
		return response.getMessage();
	}
	return createOperationOutcome(
		'error',
		'processing',
		`${$('fhirType')} ID ${id} not found.`,
		404
	);
} catch (error) {
	return createOperationOutcome(
		'error',
		'transient',
		'Error reading resource.',
		500,
		e
	);
}
