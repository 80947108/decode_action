//Tue Mar 10 2026 14:29:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function main(_0x402bac) {
  const _0x1ea5ba = ku9.Uri(_0x402bac.url),
    _0x3ac12e = _0x1ea5ba.Params,
    _0x50848d = _0x3ac12e.id || "",
    _0x170652 = _0x3ac12e.key || "",
    _0x5ddeb6 = _0x3ac12e.ts || "",
    _0x50fdbd = "湘西卫视2026";
  if (_0x170652 !== _0x50fdbd) return {
    "error": "访问被拒绝",
    "message": "请提供有效的密钥参数"
  };
  if (_0x5ddeb6) {
    const _0x4f5936 = Math.floor(Date.now() / 1000),
      _0x5af31c = parseInt(_0x5ddeb6);
    if (Math.abs(_0x4f5936 - _0x5af31c) > 600) return {
      "error": "链接已过期",
      "message": "请重新生成链接"
    };
  }
  if (!_0x50848d) return {
    "error": "请提供频道ID",
    "example": "?key=" + _0x50fdbd + "&id=4gtv-4gtv001&ts=" + Math.floor(Date.now() / 1000)
  };
  const _0x349ec1 = "https://litv.goiptv.de5.net/litv.php?id=" + _0x50848d;
  return {
    "url": _0x349ec1,
    "headers": {
      "User-Agent": "okhttp/1.31"
    }
  };
}