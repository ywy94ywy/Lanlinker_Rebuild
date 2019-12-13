md .\build\styles
md .\build\config
md .\build\dist
xcopy .\styles\* .\build\styles /s /e /c /y /h /r
xcopy .\config\* .\build\config /s /e /c /y /h /r
xcopy .\dist\* .\build\dist /s /e /c /y /h /r
xcopy .\package.json .\build  /y /c /h /r