#list items provisioning function

function AddListFromXmlToSharepointSite(){
    # adds the list found inside the provisiong template stored in ListItems.xml to the sharepoint site to which we are currently connected
    Apply-PnpProvisioningTemplate ListItems.xml
}