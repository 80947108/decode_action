//Tue Dec 02 2025 11:25:56 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function main(_0xe423fa) {
  const _0xf7bb52 = ku9.getQuery(_0xe423fa.url, "id"),
    _0x1e8ec9 = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      "Referer": "https://saileitv.com/",
      "Cookie": "userId=1762354487236"
    };
  let _0x8a9e5b = "";
  const _0x49caf6 = "https://saileitv.com/api/checkout?channelId=" + _0xf7bb52;
  try {
    const _0xbf5ebc = ku9.request(_0x49caf6, "GET", _0x1e8ec9);
    if (_0xbf5ebc.code === 200 && ku9.isJsonObject(_0xbf5ebc.body)) {
      const _0x9f24c7 = JSON.parse(_0xbf5ebc.body);
      _0x9f24c7.success && _0x9f24c7.streamUrl && (_0x8a9e5b = _0x9f24c7.streamUrl);
    }
  } catch (_0x3efc55) {}
  const _0x24d52a = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "referer": "https://saileitv.com/",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
  };
  return JSON.stringify({
    "url": _0x8a9e5b,
    "headers": _0x24d52a
  });
}