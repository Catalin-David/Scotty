. .\2_TermGroupProvisioning.ps1

[xml]$script:configFile = Get-Content "Config.xml"

Main

function Main(){

    ConnectToSharepointUrl($script:configFile.Credentials.TenantUrl)

    ImportTermGroupFromXmlToSharepointTenant

    ConnectToSharepointUrl($script:configFile.Credentials.SiteUrl)

    AddDocumentLibraryToSharepointSite
}

function ConnectToSharepointUrl($url){
    #connect to sharepoint tenant or site with the url given as a parameter

    $username = $script:configFile.Credentials.Username
    $passwordPath = $script:configFile.Credentials.PasswordPath

    $password = Get-Content $passwordPath | ConvertTo-SecureString

    $credentials = New-Object System.Management.Automation.PSCredential($username, $password)

    Connect-PnPOnline -Url $url -Credentials $credentials
}