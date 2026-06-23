$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$indexPath = Join-Path $root "index.html"
$indexContent = Get-Content -Raw $indexPath

$footerMatch = [regex]::Match($indexContent, '(?s)<footer\b.*?</footer>')
if (-not $footerMatch.Success) {
  throw "Could not find footer in index.html"
}
$indexFooter = $footerMatch.Value

$footerCssTag = '<link rel="stylesheet" href="css/css/footer.css" />'
$htmlFiles = Get-ChildItem -Path $root -Filter *.html

foreach ($file in $htmlFiles) {
  if ($file.Name -eq "index.html") {
    continue
  }

  $content = Get-Content -Raw $file.FullName
  $updated = $content

  if ($updated -notmatch [regex]::Escape($footerCssTag)) {
    $updated = [regex]::Replace(
      $updated,
      '(?m)^(\s*<link rel="stylesheet" href="css/css/Newnavbar\.css" />\r?\n)',
      "`$1    $footerCssTag`r`n",
      1
    )
  }

  if ($updated -match '(?s)<footer\b.*?</footer>') {
    $updated = [regex]::Replace($updated, '(?s)<footer\b.*?</footer>', [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $indexFooter }, 1)
  }

  if ($updated -ne $content) {
    [System.IO.File]::WriteAllText($file.FullName, $updated, [System.Text.Encoding]::UTF8)
  }
}
