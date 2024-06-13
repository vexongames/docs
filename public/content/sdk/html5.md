# SDK - HTML5

Add our script to handle the SDK in the documents head or end of body.

```html
<script src="//sdk.vexon.games/v1.js"></script>
```

In a javascript file it should look like this.

```javascript
function DoneLoading() {
  window.VexonSDK.GameReady(); // The game is ready for user interaction
}

function ShowAd() {
  window.VexonSDK.AdBreak(<"display" | "rewarded">, () => {
    // Pause
  }).then(() => {
    // Resume & Reward functionality if ad type is rewarded
  });
}
```
