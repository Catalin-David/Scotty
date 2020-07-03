#list items provisioning function

function GetProvisioningTemplateOfListAsXml($List){
    Get-PnPProvisioningTemplate -Out ListItems.xml -Handlers Lists -ListsToExtract $List -Force
}

function AddPnPDataRowsToProvisioningTemplate($List){
    Add-PnPDataRowsToProvisioningTemplate -Path ListItems.xml -List $List -Query "<view></view>"
}
function AddListFromXmlToSharepointSite($List){
    Apply-PnpProvisioningTemplate ListItems.xml
}