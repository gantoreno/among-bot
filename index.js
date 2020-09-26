require('dotenv').config();

const discord = require('discord.js');
const utils = require('./extras/utils');

(async client => {
  client.on('ready', async () => {
    await client.user.setActivity('-info', { type: 'LISTENING' });
  });

  client.on('message', async message => {
    if (message.content.match(/^\-(i|info)$/)) {
      await message.react('😎');
      await message.channel.send(
        new discord.MessageEmbed({
          author: {
            name: 'MuteBot',
            iconURL:
              'https://cdn.discordapp.com/avatars/756745742261157910/5b93edacbf552e0ee3451531e6b38303.png?size=256',
          },
          description:
            'Juega Among Us de la manera correcta, sin soplones, ni gritones. 🔇',
          fields: [
            {
              name: 'Acerca de mí',
              value:
                'MuteBot silenciará a todos los jugadores en partida hasta que sea la hora de discutir y funarse sin piedad. 🔥\n',
            },
            {
              name: 'Comandos',
              value:
                '`-m|-mute` para mutear.\n`-u|-unmute` para desmutear.\n`-i|-info` para información.',
            },
            {
              name: 'Adóptame en tu servidor',
              value:
                'MuteBot funciona en todos los servidores que desees, [haz click aquí para agregarme](https://discord.com/api/oauth2/authorize?client_id=756745742261157910&permissions=0&scope=bot).',
            },
            {
              name: 'Contribuciones',
              value:
                'MuteBot es open source, puedes ver el código fuente y contribuir a su desarrollo [haciendo click aquí](https://github.com/hollandsgabe/mutebot).',
            },
          ],
          footer: {
            text: 'Gabriel Moreno © MuteBot 2020',
          },
        })
      );
    }

    if (message.content.match(/^\-(m|mute)$/)) {
      if (utils.channel.notInVoiceChannel(message.member)) {
        await message.react('😐');
        await message.reply('❌ No estás en un canal de voz, sucio.');
      } else {
        await message.react('👍🏻');
        await message.channel.send('🔇 ¡Shhhh! Silencio mamagüevos.');
        await utils.channel.setGlobalMuteState(
          message.member.voice.channel.members,
          true
        );
      }
    }

    if (message.content.match(/^\-(u|unmute)$/)) {
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
