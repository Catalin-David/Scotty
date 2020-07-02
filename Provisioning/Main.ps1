. .\2_TermGroupProvisioning.ps1
. .\1_ListItemsProvisioning.ps1
. .\UserJourneyListProvisioning.ps1

[xml]$script:configFile = Get-Content "Config.xml"

Main

function Main(){

    ProvisionListItems
    ProvisionTermGroup
    ProvisionResourcesDocumentLibrary
    ProvisionUserJourneyList
}

function ProvisionListItems(){
    ConnectToSharepointUrl -Url $script:configFile.Credentials.ProvisioningWebsiteUrl

    $listExists = Get-PnPList -Identity $script:configFile.Credentials.ListToBeExtracted
    if($null -ne $listExists){
        GetProvisioningTemplateOfListAsXml -List $script:configFile.Credentials.ListToBeExtracted

        AddPnPDataRowsToProvisioningTemplate -List $script:configFile.Credentials.ListToBeExtracted
    }

    Disconnect-PnPOnline

    ConnectToSharepointUrl -Url $script:configFile.Credentials.ReceivingWebsiteUrl

    $listAlreadyProvisioned = Get-PnPList -Identity $script:configFile.Credentials.ListToBeExtracted
    if($null -eq $listAlreadyProvisioned){
        AddListFromXmlToSharepointSite -List $script:configFile.Credentials.ListToBeExtracted
    }

    Disconnect-PnPOnline
}

function ProvisionTermGroup(){
    ConnectToSharepointUrl -Url $script:configFile.Credentials.TenantUrl

    $termGroupAlreadyProvisioned = Get-PnPTermGroup -Identity "Skill resources"
    if($null -eq $termGroupAlreadyProvisioned){
        ImportTermGroupFromXmlToSharepointTenant
    }

    Disconnect-PnPOnline
}

function ProvisionResourcesDocumentLibrary(){
    ConnectToSharepointUrl -Url $script:configFile.Credentials.SiteUrl

    $documentLibraryAlreadyProvisioned = Get-PnPList -Identity "ResourcesDocumentLibrary"
    if($null -eq $documentLibraryAlreadyProvisioned){
        AddDocumentLibraryToSharepointSite
    }

    Disconnect-PnPOnline
}

function ProvisionUserJourneyList(){

    UserJourneys
    ConnectToSharepointUrl -Url $script:configFile.Credentials.UserJourneyListTargetSite

    $userJourneysListAlreadyProvisioned = Get-PnPList -Identity "UserJourneys"
    if($null -eq $userJourneysListAlreadyProvisioned){
        ApplyUserJourneyListTemplate
        CreateLookupColumn
    }

    Disconnect-PnPOnline
}
function ConnectToSharepointUrl($Url){
    $username = $script:configFile.Credentials.Username

    $password = Get-Content "password.txt" | ConvertTo-SecureString

    if($null -eq $password){
        $credentials = Get-Credential -UserName $username -Message "Type password here"
        ConvertFrom-SecureString $credentials.Password | Out-File "password.txt"
    }
    else{
        $credentials = New-Object System.Management.Automation.PSCredential($username, $password)
    }
    
    Connect-PnPOnline -Url $Url -Credentials $credentials
}