require('dotenv').config();

const { Client } = require('discord.js');
const {
  getChannelMembers,
  toggleGlobalMuteState,
  startClient,
} = require('./extras/utils');

(async client => {
  client.on('message', async message => {
    try {
      if (message.content === '-m') {
        await toggleGlobalMuteState(getChannelMembers(message), true);

        await message.channel.send('🔈 ¡Shhhh! Silencio mamagüevos.');
      } else if (message.content === '-u') {
        await toggleGlobalMuteState(getChannelMembers(message), false);

        await message.channel.send('🔊 Ya pueden hablar putos.');
      }
    } catch (e) {
      console.error(e);
    }
  });

  await startClient(client, process.env.DISCORD_BOT_TOKEN);
})(new Client());
