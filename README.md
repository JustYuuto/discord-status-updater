# Discord Status Updater

A tool for updating your Discord custom status automatically

## Starting

- First, [get your token](#how-do-i-get-my-token).
- Configure options in the [index.js](index.js) file.
- Run `npm start`.

## How do I get my token?

Open the "Network" tab in the Developers Tools (`Ctrl + Maj + I`), and update your status manually (from Discord). It's make a request to `https://discord.com/api/v9/users/@me/settings`. Go to the headers section, search for the "Authorization" header. Your token is the value of it!

## BetterDiscord

**If you use this tool, be prudent, BetterDiscord use a plugin like this! You can get banned from differents servers! I'M NOT RESPONSABLE OF ANY BAN OF A SERVER!**