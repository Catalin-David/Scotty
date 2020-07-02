function ApplyUserJourneyListTemplate(){
    Apply-PnpProvisioningTemplate -Path UserJourneysTemplate.xml
}

function CreateLookupColumn(){
    $lookupListName = "JourneyList"
    $targetListName = "UserJourneys"
    $lookupList = Get-PnPList -Identity $lookupListName
    $lookupColumnId = [guid]::NewGuid().Guid
    $schemaXML = '<Field Type="Lookup" DisplayName="Journey" Name="Journey" ShowField="ID" EnforceUniqueValues="FALSE" Required="FALSE" ID="' + $lookupColumnId + '" RelationshipDeleteBehavior="None" List="' + $lookupList.Id + '" />'
    Add-PnPFieldFromXml -FieldXml $schemaXml  -List $targetListName
}