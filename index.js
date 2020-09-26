require('dotenv').config();

const discord = require('discord.js');
const utils = require('./extras/utils');

(async client => {
  client.on('message', async message => {
    if (message.content === '-m') {
      if (utils.channel.notInVoiceChannel(message.member)) {
        await message.react('😐');
        await message.reply('❌ No estás en un canal de voz, sucio.');
      } else {
        await message.react('👍🏻');
        await message.channel.send('🔈 ¡Shhhh! Silencio mamagüevos.');
        await utils.channel.setGlobalMuteState(
          message.member.voice.channel.members,
          true
        );
      }
    }

    if (message.content === '-u') {
      if (utils.channel.notInVoiceChannel(message.member)) {
        await message.react('😐');
        await message.reply('❌ No estás en un canal de voz, sucio.');
      } else {
        await message.react('👍🏻');
        await message.channel.send('🔊 Ya pueden hablar putos.');
        await utils.channel.setGlobalMuteState(
          message.member.voice.channel.members,
          false
        );
      }
    }
  });

  await utils.client.startClient(client, process.env.DISCORD_BOT_TOKEN);
})(new discord.Client());
