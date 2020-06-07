#import other files representing granular actions
. .\1_ListItemsProvisioning.ps1
function ConnectToProvisioningTenant(){
    #connect to provisioning tenant

    [xml]$ConfigFile = Get-Content "Config.xml"


    $siteURL = $ConfigFile.Credentials.Website
    $username = $ConfigFile.Credentials.Username

    $Credential = Get-Credential -UserName $username -Message "Type password here"
    Connect-PnPOnline -Url $siteURL -Credentials $Credential
}

function GetProvisioningTemplateToXml(){
    # receive template of provisioning tenant
    [xml]$ConfigFile = Get-Content "Config.xml"

    $listToBeExtracted = $ConfigFile.Credentials.ListToBeExtracted

    Get-PnPProvisioningTemplate -Out ListItems.xml -Handlers Lists -ListsToExtract $listToBeExtracted
}

function AddItemsToProvisioningTemplate(){
    [xml]$ConfigFile = Get-Content "Config.xml"

    $listToBeAddedItems = $ConfigFile.Credentials.ListToBeExtracted

    Add-PnPDataRowsToProvisioningTemplate -Path ListItems.xml -List $listToBeAddedItems -Query "<view></view>"
}

function Main(){
    ConnectToProvisioningTenant

    GetProvisioningTemplateToXml

    AddItemsToProvisioningTemplate


    ConnectToReceivingTenant

    AddListItems
}

Main
