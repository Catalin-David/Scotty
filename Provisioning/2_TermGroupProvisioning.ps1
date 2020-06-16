#term group provisioning function

function ImportTermGroupFromXmlToSharepointTenant(){
    # takes the termgroup stored in TermGroup.xml and adds it to the currently connected sharepoint tenant
    Apply-PnPProvisioningTemplate -Path TermGroup.xml
}

#create document library function
function AddDocumentLibrary(){
    New-PnPList -Title "Skill resources" -Template DocumentLibrary -OnQuickLaunch
}