//Mon Dec 15 2025 06:31:52 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function main(_0xe087bf) {
  let _0x4413ea = _0xe087bf.url,
    _0x19b0ef = ku9.getQuery(_0x4413ea, "id");
  const _0x2c7974 = "https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo?device=phone&platform=html5&scale=3&build=10000&protocol=0,1&format=0,1,2&codec=0,1&room_id=" + _0x19b0ef,
    _0x642e36 = {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://live.bilibili.com/h5/" + _0x19b0ef
    };
  let _0xe2cd7c = ku9.get(_0x2c7974, JSON.stringify(_0x642e36));
  _0xe2cd7c = _0xe2cd7c.replace(/\\u0026/g, "&");
  var _0x18982b = /"fmp4","([^"]+)".*?"codec_name":"([^"]+)".*?"base_url":"([^"]+)".*?"host":"([^"]+)".*?"extra":"([^"]+)"/s,
    _0x3a340d = _0xe2cd7c.match(_0x18982b),
    _0x19b507 = _0x3a340d[0],
    _0x45ebf9 = _0x3a340d[1],
    _0x1a2bdf = _0x3a340d[2],
    _0x42ff55 = _0x3a340d[3],
    _0x34db93 = _0x3a340d[4],
    _0x3e5751 = _0x34db93 + _0x42ff55;
  return JSON.stringify({
    "url": _0x3e5751,
    "headers": _0x642e36
  });
}