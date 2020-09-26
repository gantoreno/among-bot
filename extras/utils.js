const notInVoiceChannel = member => {
  return !member.voice.channel;
};

const setLocalMuteState = async (member, state) => {
  await member.voice.setMute(state);

  const action = state ? '🔈 Muting' : '🔊 Unmuting';

  console.log(`${action} ${member.user.username}`);
};

const seteGlobalMuteState = async (members, state) => {
  members.forEach(async member => await setLocalMuteState(member, state));
};

const startClient = async (client, token) => {
  try {
    await client.login(token);

    console.log('🤖 MuteBot started');
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  channel: {
    notInVoiceChannel,
    setLocalMuteState,
    seteGlobalMuteState,
    startClient,
  },
};
