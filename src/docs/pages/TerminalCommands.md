---
title: "Terminal Commands"
date: 2019-01-19
---

# Shell Management

[Source](https://ss64.com/)

### Operators and Expressions

```PS
+   Add                set /a "_num=_num+5"
+=  Add variable       set /a "_num+=5"
-   Subtract           set /a "_num=_num-5"
-=  Subtract variable  set /a "_num-=5"
*   Multiply           set /a "_num=_num*5"
*=  Multiply variable  set /a "_num*=5"
/   Divide             set /a "_num=_num/5"
/=  Divide variable    set /a "_num/=5"
%%  Modulus            set /a "_num=17%%5"
%%= Modulus            set /a "_num%%=5"
!   Logical negation  0 (FALSE) ⇨ 1 (TRUE) and any non-zero value (TRUE) ⇨ 0 (FALSE)
~   Bitwise invert
&   AND                set /a "_num=5&3"    0101 AND 0011 = 0001 (decimal 1)
&=  AND variable       set /a "_num&=3"
|   OR                 set /a "_num=5|3"    0101 OR 0011 = 0111 (decimal 7)
|=  OR variable        set /a "_num|=3"
^   XOR                set /a "_num=5^3"    0101 XOR 0011 = 0110 (decimal 6)
^=  XOR variable       set /a "_num=^3"
<<  Left Shift.    (sign bit ⇨ 0) An arithmetic shift.
>>  Right Shift.   (Fills in the sign bit such that a negative number always remains negative.)
                       Neither ShiftRight nor ShiftLeft will detect overflow.
<<= Left Shift variable     set /a "_num<<=2"
>>= Right Shift variable    set /a "_num>>=2"

( )  Parenthesis group expressions  set /a "_num=(2+3)*5"
,   Commas separate expressions    set /a "_num=2,_result=_num*5"
```

# Alias

`PS User> get-alias | format-table name,definition,options -auto`

**Returns:**

```ps
Name    Definition                                Options
----    ----------                                -------
%       ForEach-Object                 ReadOnly, AllScope
?       Where-Object                   ReadOnly, AllScope
ac      Add-Content                    ReadOnly, AllScope
asnp    Add-PSSnapIn                   ReadOnly, AllScope
cat     Get-Content                              AllScope
cd      Set-Location                             AllScope
CFS     ConvertFrom-String                           None
chdir   Set-Location                             AllScope
clc     Clear-Content                  ReadOnly, AllScope
clear   Clear-Host                               AllScope
clhy    Clear-History                  ReadOnly, AllScope
cli     Clear-Item                     ReadOnly, AllScope
clp     Clear-ItemProperty             ReadOnly, AllScope
cls     Clear-Host                               AllScope
clv     Clear-Variable                 ReadOnly, AllScope
cnsn    Connect-PSSession              ReadOnly, AllScope
compare Compare-Object                 ReadOnly, AllScope
copy    Copy-Item                                AllScope
cp      Copy-Item                                AllScope
cpi     Copy-Item                      ReadOnly, AllScope
cpp     Copy-ItemProperty              ReadOnly, AllScope
curl    Invoke-WebRequest                        AllScope
cvpa    Convert-Path                   ReadOnly, AllScope
dbp     Disable-PSBreakpoint           ReadOnly, AllScope
del     Remove-Item                              AllScope
diff    Compare-Object                 ReadOnly, AllScope
dir     Get-ChildItem                            AllScope
dnsn    Disconnect-PSSession           ReadOnly, AllScope
ebp     Enable-PSBreakpoint            ReadOnly, AllScope
echo    Write-Output                             AllScope
epal    Export-Alias                   ReadOnly, AllScope
epcsv   Export-Csv                     ReadOnly, AllScope
epsn    Export-PSSession                         AllScope
erase   Remove-Item                              AllScope
etsn    Enter-PSSession                          AllScope
exsn    Exit-PSSession                           AllScope
fc      Format-Custom                  ReadOnly, AllScope
fhx     Format-Hex                                   None
fl      Format-List                    ReadOnly, AllScope
foreach ForEach-Object                 ReadOnly, AllScope
ft      Format-Table                   ReadOnly, AllScope
fw      Format-Wide                    ReadOnly, AllScope
gal     Get-Alias                      ReadOnly, AllScope
gbp     Get-PSBreakpoint               ReadOnly, AllScope
gc      Get-Content                    ReadOnly, AllScope
gcb     Get-Clipboard                                None
gci     Get-ChildItem                  ReadOnly, AllScope
gcm     Get-Command                    ReadOnly, AllScope
gcs     Get-PSCallStack                ReadOnly, AllScope
gdr     Get-PSDrive                    ReadOnly, AllScope
ghy     Get-History                    ReadOnly, AllScope
gi      Get-Item                       ReadOnly, AllScope
gin     Get-ComputerInfo                             None
gjb     Get-Job                                  AllScope
gl      Get-Location                   ReadOnly, AllScope
gm      Get-Member                     ReadOnly, AllScope
gmo     Get-Module                     ReadOnly, AllScope
gp      Get-ItemProperty               ReadOnly, AllScope
gps     Get-Process                    ReadOnly, AllScope
gpv     Get-ItemPropertyValue          ReadOnly, AllScope
group   Group-Object                   ReadOnly, AllScope
gsn     Get-PSSession                            AllScope
gsnp    Get-PSSnapIn                   ReadOnly, AllScope
gsv     Get-Service                    ReadOnly, AllScope
gtz     Get-TimeZone                                 None
gu      Get-Unique                     ReadOnly, AllScope
gv      Get-Variable                   ReadOnly, AllScope
gwmi    Get-WmiObject                  ReadOnly, AllScope
h       Get-History                              AllScope
history Get-History                              AllScope
icm     Invoke-Command                           AllScope
iex     Invoke-Expression              ReadOnly, AllScope
ihy     Invoke-History                 ReadOnly, AllScope
ii      Invoke-Item                    ReadOnly, AllScope
ipal    Import-Alias                   ReadOnly, AllScope
ipcsv   Import-Csv                     ReadOnly, AllScope
ipmo    Import-Module                  ReadOnly, AllScope
ipsn    Import-PSSession                         AllScope
irm     Invoke-RestMethod              ReadOnly, AllScope
ise     powershell_ise.exe             ReadOnly, AllScope
iwmi    Invoke-WMIMethod               ReadOnly, AllScope
iwr     Invoke-WebRequest              ReadOnly, AllScope
kill    Stop-Process                             AllScope
lp      Out-Printer                              AllScope
ls      Get-ChildItem                            AllScope
man     help                                     AllScope
md      mkdir                                    AllScope
measure Measure-Object                 ReadOnly, AllScope
mi      Move-Item                      ReadOnly, AllScope
mount   New-PSDrive                              AllScope
move    Move-Item                                AllScope
mp      Move-ItemProperty              ReadOnly, AllScope
mv      Move-Item                                AllScope
nal     New-Alias                      ReadOnly, AllScope
ndr     New-PSDrive                    ReadOnly, AllScope
ni      New-Item                       ReadOnly, AllScope
nmo     New-Module                     ReadOnly, AllScope
npssc   New-PSSessionConfigurationFile ReadOnly, AllScope
nsn     New-PSSession                            AllScope
nv      New-Variable                   ReadOnly, AllScope
ogv     Out-GridView                   ReadOnly, AllScope
oh      Out-Host                       ReadOnly, AllScope
popd    Pop-Location                             AllScope
ps      Get-Process                              AllScope
pushd   Push-Location                            AllScope
pwd     Get-Location                             AllScope
r       Invoke-History                           AllScope
rbp     Remove-PSBreakpoint            ReadOnly, AllScope
rcjb    Receive-Job                              AllScope
rcsn    Receive-PSSession              ReadOnly, AllScope
rd      Remove-Item                              AllScope
rdr     Remove-PSDrive                 ReadOnly, AllScope
ren     Rename-Item                              AllScope
ri      Remove-Item                    ReadOnly, AllScope
rjb     Remove-Job                               AllScope
rm      Remove-Item                              AllScope
rmdir   Remove-Item                              AllScope
rmo     Remove-Module                  ReadOnly, AllScope
rni     Rename-Item                    ReadOnly, AllScope
rnp     Rename-ItemProperty            ReadOnly, AllScope
rp      Remove-ItemProperty            ReadOnly, AllScope
rsn     Remove-PSSession                         AllScope
rsnp    Remove-PSSnapin                ReadOnly, AllScope
rujb    Resume-Job                               AllScope
rv      Remove-Variable                ReadOnly, AllScope
rvpa    Resolve-Path                   ReadOnly, AllScope
rwmi    Remove-WMIObject               ReadOnly, AllScope
sajb    Start-Job                                AllScope
sal     Set-Alias                      ReadOnly, AllScope
saps    Start-Process                  ReadOnly, AllScope
sasv    Start-Service                  ReadOnly, AllScope
sbp     Set-PSBreakpoint               ReadOnly, AllScope
sc      Set-Content                    ReadOnly, AllScope
scb     Set-Clipboard                                None
select  Select-Object                  ReadOnly, AllScope
set     Set-Variable                             AllScope
shcm    Show-Command                   ReadOnly, AllScope
si      Set-Item                       ReadOnly, AllScope
sl      Set-Location                   ReadOnly, AllScope
sleep   Start-Sleep                    ReadOnly, AllScope
sls     Select-String                                None
sort    Sort-Object                    ReadOnly, AllScope
sp      Set-ItemProperty               ReadOnly, AllScope
spjb    Stop-Job                                 AllScope
spps    Stop-Process                   ReadOnly, AllScope
spsv    Stop-Service                   ReadOnly, AllScope
start   Start-Process                  ReadOnly, AllScope
stz     Set-TimeZone                                 None
sujb    Suspend-Job                              AllScope
sv      Set-Variable                   ReadOnly, AllScope
swmi    Set-WMIInstance                ReadOnly, AllScope
tee     Tee-Object                     ReadOnly, AllScope
trcm    Trace-Command                  ReadOnly, AllScope
type    Get-Content                              AllScope
wget    Invoke-WebRequest                        AllScope
where   Where-Object                   ReadOnly, AllScope
wjb     Wait-Job                                 AllScope
write   Write-Output                   ReadOnly, AllScope
```
