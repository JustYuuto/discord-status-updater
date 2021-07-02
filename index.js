const fetch = require('node-fetch');
const ms = require('ms');
const moment = require('moment');
require('dotenv').config();

const apiEndpoint = 'https://discord.com/api/v9';
const urls = {
  settings: `${apiEndpoint}/users/@me/settings`
};
const token = process.env.TOKEN;
const timer = ms('10s');

if (!token || typeof token !== 'string') {
  throw new SyntaxError('Invalid token');
}

const statuses = [
  {
    text: "My status",
    // 2021-07-02T17:25:50.522+02:00
    expires_at: null, //moment(Date.now()).toISOString(true).replace(/\.[0-9]+/, ''), // ⚠ do not change "toISOString(true)"
    // "emoji_id": for custom emojis
    emoji_id: null,
    // "emoji_name": for default emojis
    emoji_name: "😀"
  },
  // Add other statuses here
];

let i = 0;
setInterval(async () => {
  const status = statuses[i];

  await fetch(urls.settings, {
    method: 'PATCH',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      custom_status: status
    })
  });

  const locale = 'en-US';
  const now = new Date(Date.now()).toLocaleString(locale);
  const emoji = (status.emoji_id && status.emoji_id) || (status.emoji_name && status.emoji_name);
  console.log(`[${now}] Status successfully updated to "${status.text}" with emoji "${emoji}"`);

  i = ++i % statuses.length;
}, timer);