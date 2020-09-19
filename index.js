require('dotenv').config();

const { Client } = require('discord.js');
const {
  notInVoiceChannel,
  toggleGlobalMuteState,
  startClient,
} = require('./extras/utils');

(async client => {
  client.on('message', async message => {
    try {
      if (message.content === '-m') {
        if (notInVoiceChannel(message.member)) {
          await message.channel.send('❌ No estás en un canal de voz, sucio.');

          return;
        }

        await toggleGlobalMuteState(message.member.voice.channel.members, true);

        await message.channel.send('🔈 ¡Shhhh! Silencio mamagüevos.');
      } else if (message.content === '-u') {
        if (notInVoiceChannel(message.member)) {
          await message.channel.send('❌ No estás en un canal de voz, sucio.');

          return;
        }

        await toggleGlobalMuteState(
          message.member.voice.channel.members,
          false
        );

        await message.channel.send('🔊 Ya pueden hablar putos.');
      }
    } catch (e) {
      console.error(e);
    }
  });

  await startClient(client, process.env.DISCORD_BOT_TOKEN);
})(new Client());
