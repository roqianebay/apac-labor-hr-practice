$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Gh = "$env:ProgramFiles\GitHub CLI\gh.exe"
if (-not (Test-Path $Gh)) { $Gh = "$env:LocalAppData\Programs\GitHub CLI\gh.exe" }
if (-not (Test-Path $Gh)) { throw "Install GitHub CLI: winget install GitHub.cli" }

Set-Location $Root
& $Gh auth status

$Name = "apac-labor-hr-practice"
$User = & $Gh api user -q .login

if (-not ((git remote) -contains "origin")) {
  & $Gh repo create $Name --public --source=. --remote=origin --description "APAC labor law comparison and ER HR practice guide"
  if ($LASTEXITCODE -ne 0) { git remote add origin "https://github.com/$User/$Name.git" }
}

git push -u origin main
& $Gh api "repos/$User/$Name/pages" -X POST -f build_type=workflow 2>$null | Out-Null

Write-Host "https://$User.github.io/$Name/"