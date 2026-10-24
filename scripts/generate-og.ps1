# Script to generate public/og-image.png from scripts/og-template.html using headless Edge
param()

$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

$repoRoot = (Get-Item $PSScriptRoot).Parent.FullName
$templateUrl = "file:///" + ($repoRoot -replace '\\', '/') + "/scripts/og-template.html"
$outputFile = Join-Path $repoRoot "public\og-image.png"

Write-Host "Rendering $templateUrl to $outputFile..."
Start-Process -FilePath $edgePath -ArgumentList "--headless", "--screenshot=`"$outputFile`"", "--window-size=1200,630", "--hide-scrollbars", "--virtual-time-budget=2000", "`"$templateUrl`"" -Wait

Write-Host "Generated $outputFile successfully."
