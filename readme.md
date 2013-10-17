# fileDownload for Alloy
## Overview
This is a widget for the [Appcelerator] [Alloy] MVC framework which allows easy URL download to a local file and progress bar.

### NOTE: This is very much "work in progress" and I'm tweaking as I use this in current projects

## Latest
* Initial Upload

## Features
* Easy to add to existing XML
* Specify URL and Filename
* Events fire on completion, error
* Works on Android, iOS

### Wishlist
* None at present

## Quick Start
* [Download the latest version] of the widget as a ZIP file.
* Unzip the folder to your project under `app/widgets/com.jasonkneen.fileDownload`.
* Add the widget as a dependency to your `app/config.json` file:

```js
"dependencies": \{
'' "com.jasonkneen.fileDownload":"1.0"
}
```

* Add the widget as the last item in the view container you want to make it appear.

```xml
~<Alloy>~
'' <Window>
''     <Widget id="tabGroup" src="com.jasonkneen.fileDownload"/>
'' </Window>
~</Alloy>~
```

* Configure the widget from the controller .js file

\`\`\`js
$.progress.url = "http://download/file/image.png";
$.progress.fileName = "temp.bin";
$.progress.start();
});


\`\`\`

## License

~~ <pre>
~~ Copyright 2013 Jason Kneen
~~ 
~~ Licensed under the Apache License, Version 2.0 (the "License");
~~ you may not use this file except in compliance with the License.
~~ You may obtain a copy of the License at
~~ 
~~    http://www.apache.org/licenses/LICENSE-2.0
~~ 
~~ Unless required by applicable law or agreed to in writing, software
~~ distributed under the License is distributed on an "AS IS" BASIS,
~~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
~~ See the License for the specific language governing permissions and
~~ limitations under the License.
~~ </pre>