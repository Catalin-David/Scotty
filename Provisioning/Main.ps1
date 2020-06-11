#import other files representing granular actions
. .\2_TermGroupProvisioning.ps1
function ConnectToTenant(){
    #connect to tenant

    [xml]$ConfigFile = Get-Content "Config.xml"


    $siteURL = $ConfigFile.Credentials.Website
    $username = $ConfigFile.Credentials.Username

    $Credential = Get-Credential -UserName $username -Message "Type password here"
    Connect-PnPOnline -Url $siteURL -Credentials $Credential
}

function Main(){
    ConnectToTenant
    ImportTermSets
    AddDocumentLibrary
}

Main