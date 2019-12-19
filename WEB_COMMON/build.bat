if not exist .\build\style md .\build\style
if not exist .\build\config md .\build\config 
if not exist .\build\dist md .\build\dist 
if not exist .\build\utils md .\build\utils 

xcopy .\style\* .\build\style /s /e /c /y /h /r
xcopy .\config\* .\build\config /s /e /c /y /h /r
xcopy .\dist\* .\build\dist /s /e /c /y /h /r
xcopy .\utils\* .\build\utils /s /e /c /y /h /r
xcopy .\package.json .\build  /y /c /h /r