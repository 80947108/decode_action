//Fri Jan 23 2026 12:23:37 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function main(_0x455eec) {
  if (1 === jz.mode) {
    return {
      url: jz.m3u8
    };
  }
  if (2 === jz.mode) {
    const {
      url: _0x59103c,
      query: _0x56cf29
    } = _0x455eec;
    const [_0x57f047, _0x4e5fba, _0x137ac2, _0x327b5a] = ["i", "c", "a", "v"].map(_0x385a36 => jz.getQuery(_0x59103c, _0x385a36));
    if (_0x56cf29) {
      const _0x2bdb83 = "http://?" + _0x56cf29;
      const _0x25fcea = jz.getQuery(_0x2bdb83, "v");
      const _0x2a4d44 = jz.getQuery(_0x2bdb83, "a");
      const _0x5d8611 = "http://tencent.live.cbncdn.cn/__cl/cg:live/__c/" + _0x57f047 + "/__op/default/__f/" + _0x4e5fba + "/";
      const _0x9e513c = Math.floor(Date.now() / 10000) - 4;
      const _0x40462e = 3;
      const _0x2bd1ae = _0x2a4d44 || _0x25fcea || "";
      const _0x54e8fb = Array.from({
        length: _0x40462e
      }, (_0x243281, _0x262e86) => "#EXTINF:10.000,\r\n" + _0x5d8611 + _0x2bd1ae + "/" + (_0x9e513c + _0x262e86) + ".ts").join("\r\n");
      return {
        m3u8: ["#EXTM3U", "#EXT-X-VERSION:3", "#EXT-X-TARGETDURATION:11", "#EXT-X-MEDIA-SEQUENCE:" + _0x9e513c, _0x54e8fb, ""].join("\r\n")
      };
    }
    return {
      m3u8: ["#EXTM3U", "#EXT-X-VERSION:4", "#EXT-X-INDEPENDENT-SEGMENTS", "#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID=\"audio\",NAME=\"audio\",URI=\"" + jz.m3u8 + "?i=" + _0x57f047 + "&c=" + _0x4e5fba + "&a=" + _0x137ac2 + "\"", "#EXT-X-STREAM-INF:BANDWIDTH=4000000,AUDIO=\"audio\"", jz.m3u8 + "?i=" + _0x57f047 + "&c=" + _0x4e5fba + "&v=" + _0x327b5a].join("\r\n") + "\r\n"
    };
  }
}