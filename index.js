const { App } = require('@slack/bolt');
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Listens to incoming messages that contain "hello"

app.message('start break', ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  say(`Ok <@${message.user}>, setting a timer for a break!`);
  setTimeoutPromise(300000, 'foobar').then((value) => {
    // value === 'foobar' (passing values is optional)
    // This is executed after about 40 milliseconds.
    say(`Go back to work <@${message.user}>!`);
  });
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 8000);

  console.log('⚡️ Bolt app is running!');
})();
