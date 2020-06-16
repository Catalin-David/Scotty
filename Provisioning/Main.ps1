. .\1_ListItemsProvisioning.ps1

[xml]$script:configFile = Get-Content "Config.xml"

Main

function Main(){

    ConnectToSharepointUrl -Url $script:configFile.Credentials.ProvisioningWebsiteUrl

    GetProvisioningTemplateOfListAsXml -List $script:configFile.Credentials.ListToBeExtracted

    AddPnPDataRowsToProvisioningTemplate -List $script:configFile.Credentials.ListToBeExtracted

    ConnectToSharepointUrl -Url $script:configFile.Credentials.ReceivingWebsiteUrl

    AddListFromXmlToSharepointSite
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