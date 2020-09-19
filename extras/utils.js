const getChannelMembers = message => {
  return message.member.voice.channel.members;
};

const toggleLocalMuteState = async (member, state) => {
  await member.voice.setMute(state);

  const action = state ? '🔈 Muting' : '🔊 Unmuting';

  console.log(`${action} ${member.user.username}`);
};

const toggleGlobalMuteState = async (members, state) => {
  members.forEach(async member => await toggleLocalMuteState(member, state));
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
  getChannelMembers,
  toggleLocalMuteState,
  toggleGlobalMuteState,
  startClient,
};
