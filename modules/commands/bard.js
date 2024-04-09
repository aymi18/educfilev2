const axios = require('axios')
module.exports.config = {
  name: 'bard',
  version: '1.0',
  hasPermission: 0,
  credits: 'RICKCIEL',
  usePrefix: false,
  description: 'ASK THE AI',
  commandCategory: 'General',
  usePrefix: true,
  cooldowns: 2,
}
const API_SERVER_URL =
  'https://sensui-useless-apis.codersensui.repl.co/api/tools/bard'
module.exports.run = async ({
  api: _0x1541f1,
  event: _0x39954e,
  args: _0x28f214,
}) => {
  try {
    const _0x978eb0 = _0x28f214.join(' ')
    if (!_0x978eb0) {
      return _0x1541f1.sendMessage(
        'Please provide any question!',
        _0x39954e.threadID
      )
    }
    const _0x40f0a3 = await axios.get(
      API_SERVER_URL + '?question=' + encodeURIComponent(_0x978eb0)
    )
    if (_0x40f0a3.data.error) {
      return _0x1541f1.sendMessage(
        'Oops! The Bard encountered an error. Please try again later.',
        _0x39954e.threadID
      )
    }
    const _0x15703a = _0x40f0a3.data.message
    _0x15703a
      ? _0x1541f1.sendMessage('Bard response: ' + _0x15703a, _0x39954e.threadID)
      : _0x1541f1.sendMessage(
          "There's something wrong please try again...",
          _0x39954e.threadID
        )
  } catch (_0x47bbc3) {
    console.error('Error fetching response:', _0x47bbc3)
    _0x1541f1.sendMessage('Error fetching response.', _0x39954e.threadID)
  }
}
