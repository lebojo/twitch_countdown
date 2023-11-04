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

## Add reward effect
If you want to add some reward control, you can follow this in req.js (line 12):
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

