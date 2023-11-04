let timer = document.getElementById('timer');

let twitchID = 'YOUR_ID_HERE'; //The id of the channel you want to listen to, and the token must be the owner of the channel
let twitchToken = 'YOUR_TOKEN_HERE'; // token witch scope: 'channel:read:redemptions'

let time = { //Starting time
	seconds: 0,
	minutes: 5
}

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

let loop = setInterval(() => {
	time.seconds--;

	if (time.seconds <= 0 && time.minutes <= 0) {
		timer.textContent = 'FINI'; // Final text
		timer.style.color = 'red';
		clearInterval(loop);
		return;
	}
	else if (time.seconds <= 0 && time.minutes >= 0) {
		time.seconds = 59;
		time.minutes--;
	}
	timer.textContent = `${time.minutes}:${time.seconds}`;
}, 1000);

function removeTime(times) {
	if (time.minutes - times <= 0) {
		time.minutes = 0;
		time.seconds = 0;
	}
	else {
		time.minutes -= times;
		console.log(times);
	}
}


const ws = new WebSocket('wss://pubsub-edge.twitch.tv');
ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'LISTEN',
    data: {
      topics: [`channel-points-channel-v1.${twitchID}`],
      auth_token: twitchToken
    }
  }));
  console.log('Connexion WebSocket établie.');
};

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.type == 'MESSAGE') {
    const eventData = JSON.parse(message.data.message)['data']['redemption']['reward'];
	processRewards(eventData['title']);
  }
};
