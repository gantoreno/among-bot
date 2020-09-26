require('dotenv').config();

const discord = require('discord.js');
const utils = require('./extras/utils');

(async client => {
  client.on('message', async message => {
    try {
      if (message.content === '-m') {
        if (utils.channel.notInVoiceChannel(message.member)) {
          await message.channel.send('❌ No estás en un canal de voz, sucio.');

          return true;
        }

        await message.channel.send('🔈 ¡Shhhh! Silencio mamagüevos.');
        await utils.channel.toggleGlobalMuteState(
          message.member.voice.channel.members,
          true
        );
      } else if (message.content === '-u') {
        if (notInVoiceChannel(message.member)) {
          await message.channel.send('❌ No estás en un canal de voz, sucio.');

          return;
        }

        await message.channel.send('🔊 Ya pueden hablar putos.');
        await utils.channel.toggleGlobalMuteState(
          message.member.voice.channel.members,
          false
        );
      }
    } catch (e) {
      console.error(e);
    }
  });

  await startClient(client, process.env.DISCORD_BOT_TOKEN);
})(new discord.Client());
