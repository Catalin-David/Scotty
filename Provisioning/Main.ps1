#import other files representing granular actions
. .\2_TermGroupProvisioning.ps1

[xml]$script:configFile = Get-Content "Config.xml"

Main

function Main(){
    #ConnectToSharepointTenant($script:configFile.Credentials.TenantUrl)

    #Get-PnPProvisioningTemplate -Out .\ListItems.xml -Force
    #ImportTermGroupFromXmlToSharepointTenant
    #AddDocumentLibrary
}

function ConnectToSharepointTenant($url){
    #connect to sharepoint tenant with the url given as a parameter

    $username = $script:configFile.Credentials.Username
    $passwordPath = $script:configFile.Credentials.PasswordPath 
    $password = Get-Content $passwordPath | ConvertTo-SecureString

    $credentials = New-Object System.Management.Automation.PSCredential($username, $password)

    #$Credential = Get-Credential -UserName $username -Message "Type password here"
    Connect-PnPOnline -Url $url -Credentials $credentials
}