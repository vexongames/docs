# SDK - Unity

[Download](https://github.com/vexongames/unity-sdk/archive/refs/heads/main.zip) our premade plugin, C# namespace so you won't need to setup the JavaScript SDK manually. Start by extracting the zip file it into your Asset Folder.

### Usage:

Same as the HTML5 SDK just put **_Instance_** before everything.

```csharp
using UnityEngine;
using VexonSDK;
public class Demo: MonoBehaviour {
  void Start() {
    VexonSDK.Instance.Ready();
  }

  void DisplayAd() {
    VexonSDK.Instance.AdBreak(() => {
        // Reward functionality
    })
  }
}
```
