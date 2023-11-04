# twitch_countdown
It's a simple way to make a countdown on twitch, **controlled by the viewers with channel points**
![timer exemple](https://i.imgur.com/Iwy1Wip.gif)

## Everything is simplified
Just edit theses in "req.js", and your good to go (at the start of the file)!

```js
let twitchID = 'YOUR_ID_HERE'; //The id of the channel you want to listen to, and the token must be the owner of the channel
let twitchToken = 'YOUR_TOKEN_HERE'; // token witch scope: 'channel:read:redemptions'
let finalText = 'FINI'; // Final text

let time = { //Starting time
	seconds: 0,
	minutes: 5
}
```
(for twitchToken, you can have your here: https://twitchtokengenerator.com/, don't forget to check the scope "channel:read:redemptions")

## Add/Modify Reward
If you want to add some reward control, you can follow this in req.js (line 12):

⚠️​**THE TITLE MUST MATCH EXACTLY THE REWARD TITLE YOU PUT ON TWITCH**⚠️​
```js
function processRewards(rewardName)
{
	switch (rewardName) {
		case 'Add 5 minutes': // Reward title, must be the same as the one on twitch!
			time.minutes += 5;
			break;
		case 'Remove 5 minutes':
			removeTime(5); // you have to use this function to remove time, to avoid negative numbers
			break;
		// You can create other rewards like this: 
		// case 'Title of the reward':
		// 	WHAT_YOU_WANT_TO_DO();
		// 	break; <- Don't forget the break!
	}
}
```

## Add to OBS:
Step:
1. Download project files
2. Create a new Browser source in OBS
3. Go into the settings of the new Browser source (double click on it)
4. Check the "local file" in Browser source settings
5. Locate the "countdown.html" file you just downloaded
6. Enjoy :)

*Thanks Lutti for the idea*
