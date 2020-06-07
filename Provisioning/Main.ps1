#import other files representing granular actions
function AddListItems(){
    Apply-PnpProvisioningTemplate ListItems.xml
}
#get data from config.xml
#connect to tenant

function Connect-SPOSiteApproach() {
    $userName = "DavidCatalin@davidcatalin.onmicrosoft.com"
    $site = "https://davidcatalin-admin.sharepoint.com"
    $password = "-password-here-"
    $securePassword = ConvertTo-SecureString $password -AsPlainText -Force

    if ((Get-Module Microsoft.Online.SharePoint.PowerShell).Count -eq 0) {
        Import-Module Microsoft.Online.SharePoint.PowerShell -DisableNameChecking
    }

    $cred = New-Object -TypeName System.Management.Automation.PSCredential -argumentlist $userName, $securePassword
    Connect-SPOSite -Url $site -Credential $cred
}

function ConnectContextApproach(){
    $siteURL = "https://davidcatalin.sharepoint.com/sites/AccesaNews"
    $username = "DavidCatalin@davidcatalin.onmicrosoft.com"
    $password = "-password-here-"
    
    $securePassword = ConvertTo-SecureString $password -AsPlainText -Force

    $Credential = New-Object Microsoft.SharePoint.Client.SharePointOnlineCredentials($username, $securePassword)
    $Context = New-Object Microsoft.SharePoint.Client.ClientContext($siteURL)
    $Context.Credentials = $Credential

    $SPOWeb = $Context.Web
    $Context.load($SPOWeb)
    Get-PnpListItem -List MyNewList
}

function Connect-PnpOnlineApproach(){
    [xml]$ConfigFile = Get-Content "Config.xml"


    $siteURL = $ConfigFile.Credentials.Website
    $username = $ConfigFile.Credentials.Username
    #$password = "-password-here-"
    #$securePassword = ConvertTo-SecureString $password -AsPlainText -Force

    $Credential = Get-Credential -UserName $username -Message "Type password here"
    Connect-PnPOnline -Url $siteURL -Credentials $Credential
}

function GetProvisioningTemplateToXml(){
    Get-PnPProvisioningTemplate -Out ListItems.xml -ListsToExtract "MyNewList"

    Add-PnPDataRowsToProvisioningTemplate -Path ListItems.xml -List "MyNewList" -Query "<view></view>"
}

function ConnectToNewTenant(){
    [xml]$ConfigFile = Get-Content "Config.xml"

    $siteURL = $ConfigFile.Credentials.ReceivingWebsite
    $username = $ConfigFile.Credentials.Username

    $Credential = Get-Credential -UserName $username -Message "Type password here"
    Connect-PnpOnline -Url $siteURL -Credentials $Credential
}

function Main(){
    #AddListItems
    #Connect-SPOSiteApproach
    #ConnectContextApproach
    Connect-PnpOnlineApproach


    GetProvisioningTemplateToXml

    ConnectToNewTenant

    AddListItems
}
#call functions from the other files

Main