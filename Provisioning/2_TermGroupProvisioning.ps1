#term group provisioning function

function ImportTermSets(){
    Import-PnPTermGroupFromXml -Path TermGroup.xml
}

#create document library function
function AddDocumentLibrary(){
    New-PnPList -Title "Skill resources" -Template DocumentLibrary -OnQuickLaunch
}