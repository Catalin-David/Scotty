. .\1_ListItemsProvisioning.ps1

[xml]$script:configFile = Get-Content "Config.xml"

Main

function Main(){

    ConnectToSharepointSite($script:configFile.Credentials.ProvisioningWebsiteUrl)

    GetProvisioningTemplateOfListAsXml

    AddItemsToProvisioningTemplateOfListFromXml

    ConnectToSharepointSite($script:configFile.Credentials.ReceivingWebsiteUrl)

    AddListFromXmlToSharepointSite
}

function ConnectToSharepointSite($url){
    #connect to a sharepoint site with the url given as a parameter

    $username = $script:configFile.Credentials.Username
    $passwordPath = $script:configFile.Credentials.PasswordPath

    $password = Get-Content $passwordPath | ConvertTo-SecureString

    $credentials = New-Object System.Management.Automation.PSCredential($username, $password)

    Connect-PnPOnline -Url $url -Credentials $credentials
}

function GetProvisioningTemplateOfListAsXml(){
    # stores the provisioning template of the list whose name is found at ListToBeExtraced field from Config.xml into ListItems.xml

    $listToBeExtracted = $script:configFile.Credentials.ListToBeExtracted

    Get-PnPProvisioningTemplate -Out ListItems.xml -Handlers Lists -ListsToExtract $listToBeExtracted -Force
}

function AddItemsToProvisioningTemplateOfListFromXml(){
    # adds items to the List from the provisioning template which can be found in ListItems.xml

    $listToWhichItemsAreAdded = $script:configFile.Credentials.ListToBeExtracted

    Add-PnPDataRowsToProvisioningTemplate -Path ListItems.xml -List $listToWhichItemsAreAdded -Query "<view></view>"
}