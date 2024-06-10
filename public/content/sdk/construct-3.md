# SDK - Construct 3

Add this to your main script of your Construct game. If you don't have
one right click on scripts folder and click "Add Script". To ensure it
is a main script go to Script Properties and set "Purpose" to "Main
script"

```javascript
const vxnSDK = document.createElement("script");
vxnSDK.src = "//sdk.vexon.games/v1.js";
document.body.appendChild(vxnSDK);
```

It should look something like this:

```javascript
runOnStartup(async (runtime) => {
  runtime.addEventListener("beforeprojectstart", () =>
    OnBeforeProjectStart(runtime)
  );
});

async function OnBeforeProjectStart(runtime) {
  runtime.addEventListener("tick", () => Tick(runtime));
  VexonSDK.GameReady(); // Loading completion goes here
}

function Tick(runtime) {}

// Put the script here
```
