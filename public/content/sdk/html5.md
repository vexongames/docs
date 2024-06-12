# SDK - HTML5

Add our script to handle the SDK in the documents head or end of body.

```html
<script src="//sdk.vexon.games/v1.js"></script>
```

In any linked javascript files add something like this. If it doesn't
work you may need to implement the functionality to your game. Once
complete, we will handle the rest as soon as the game is on our
servers.

```javascript
function DoneLoading() {
  window.VexonSDK.GameReady(); // The game is ready for user interaction
}

function ShowAd() {
  window.VexonSDK.AdBreak(() => {
    // Reward functionality
  });
}
```
