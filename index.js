const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

var currentTimeout;

app.message('start pomodoro', ({ message, say }) => {
  say(`Ok <@${message.user}>, setting a timer for a Pomodoro!`);
  currentTimeout = setTimeout(() => {
    say(`Time for a break <@${message.user}>!`);
  },1500000)
});

app.message('start break', ({ message, say }) => {
  say(`Ok <@${message.user}>, setting a timer for a break!`);
  currentTimeout = setTimeout(() => {
    say(`Go back to work <@${message.user}>!`);
  },300000)
});

app.message('start long break', ({ message, say }) => {
  say(`Ok <@${message.user}>, setting a timer for a long break!`);
  currentTimeout = setTimeout(() => {
    say(`Go back to work <@${message.user}>!`);
  },900000)
});

app.message('stop', ({ message, say }) => {
  clearTimeout(currentTimeout)
  say(`Your timer was stopped <@${message.user}>!`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 8000);

  console.log('⚡️ Bolt app is running!');
})();
