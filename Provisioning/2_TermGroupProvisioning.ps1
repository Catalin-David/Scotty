function ImportTermGroupFromXmlToSharepointTenant(){
    # takes the termgroup stored in TermGroup.xml and adds it to the currently connected sharepoint tenant
    Apply-PnPProvisioningTemplate -Path TermGroup.xml
}

function AddDocumentLibraryToSharepointSite(){
    # takes the document library stored in DocumentLibraryTemplate.xml and adds it to the currently connected sharepoint site
    Apply-PnPProvisioningTemplate -Path .\DocumentLibraryTemplate.xml
}