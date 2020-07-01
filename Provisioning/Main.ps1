. .\2_TermGroupProvisioning.ps1
. .\1_ListItemsProvisioning.ps1
. .\UserJourneyListProvisioning.ps1

[xml]$script:configFile = Get-Content "Config.xml"

Main

function Main(){

    #ListItemsProvisioning
    #TermGroupProvisioning
    #DocumentLibraryProvisioning
    UserJourneyListProvisioning
}

function ListItemsProvisioning(){
    ConnectToSharepointUrl -Url $script:configFile.Credentials.ProvisioningWebsiteUrl

    GetProvisioningTemplateOfListAsXml -List $script:configFile.Credentials.ListToBeExtracted

    AddPnPDataRowsToProvisioningTemplate -List $script:configFile.Credentials.ListToBeExtracted

    Disconnect-PnPOnline

    ConnectToSharepointUrl -Url $script:configFile.Credentials.ReceivingWebsiteUrl

    AddListFromXmlToSharepointSite

    Disconnect-PnPOnline
}

function TermGroupProvisioning(){
    ConnectToSharepointUrl -Url $script:configFile.Credentials.TenantUrl

    ImportTermGroupFromXmlToSharepointTenant

    Disconnect-PnPOnline
}

function DocumentLibraryProvisioning(){
    ConnectToSharepointUrl -Url $script:configFile.Credentials.SiteUrl

    AddDocumentLibraryToSharepointSite

    Disconnect-PnPOnline
}

function UserJourneyListProvisioning(){
    ConnectToSharepointUrl -Url $script:configFile.Credentials.UserJourneyListTargetSite

    ApplyUserJourneyListTemplate

    CreateLookupColumn

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