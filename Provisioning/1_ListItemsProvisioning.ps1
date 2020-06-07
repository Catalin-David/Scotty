#list items provisioning function
function ConnectToReceivingTenant(){
    # connect to receiving tenant

    [xml]$ConfigFile = Get-Content "Config.xml"

    $siteURL = $ConfigFile.Credentials.ReceivingWebsite
    $username = $ConfigFile.Credentials.Username

    $Credential = Get-Credential -UserName $username -Message "Type password here"
    Connect-PnpOnline -Url $siteURL -Credentials $Credential
}

function AddListItems(){
    # add items to the receiving tenant
    Apply-PnpProvisioningTemplate ListItems.xml
}