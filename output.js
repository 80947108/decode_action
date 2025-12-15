//Mon Dec 15 2025 05:01:04 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function main(_0x266930) {
  const _0x1b5b69 = {
    sdws: [1, ""],
    xwpd: [3, ""],
    qlpd: [5, ""],
    txyx: [7, ""],
    shpd: [9, ""],
    zypd: [11, ""],
    wlpd: [13, ""],
    nkpd: [15, ""],
    sepd: [17, ""],
    jndst: [29883, "/region"],
    zbdst: [100010, "/region"],
    zzdst: [100023, "/region"],
    dydst: [100011, "/region"],
    ytdst: [100012, "/region"],
    wfdst: [100013, "/region"],
    tadst: [100015, "/region"],
    whdst: [100016, "/region"],
    rzdst: [100017, "/region"],
    lydst: [100019, "/region"],
    dzdst: [100020, "/region"],
    lcdst: [100021, "/region"],
    bzdst: [100022, "/region"],
    hzdst: [100024, "/region"]
  };
  const _0xeff6c1 = _0x266930.url;
  const _0x476c8d = ku9.getQuery(_0xeff6c1, "id") || "sdws";
  const _0x4f8db4 = ku9.getQuery(_0xeff6c1, "key") || "关注公共号❤️❤️：AI科技生活";
  const _0x59591c = {
    "关注公共号❤️❤️：AI绉戞妧鐢熸椿": "sdxw.iqilu.com"
  };
  const _0x5bccdf = _0x1b5b69[_0x476c8d] || _0x1b5b69.sdws;
  const _0x4510a6 = ku9.getQuery(_0xeff6c1, "channelid") || "1";
  var _0x45e80b = ku9.getQuery(_0xeff6c1, "playseek") || "";
  const _0x39d760 = Math.floor(Date.now() / 1000);
  const _0x45c4f9 = ku9.md5("huangye" + _0x39d760 + "211f68ea4aeb687a6561707b6e3523c84e");
  const _0x1231fd = "https://" + _0x59591c[_0x4f8db4] + "/v1/app/play/tv" + _0x5bccdf[1] + "/live?e=1&e=1";
  const _0x1f47d6 = {
    version: "10.1.1",
    orgid: "21",
    platform: "android" + _0x39d760,
    imei: "7f918d21082ed7eb",
    "CQ-AGENT": "{os:android,imei:7f918d21082ed7eb,osversion:7.1.1,network:wifi,device_model:OPPO R9s,version:10.1.1,brand:oppo,core:2.0.0}",
    timestamp: "",
    noncestr: "huangye",
    sign: _0x45c4f9,
    "User-Agent": "chuangqi.o.21.com.iqilu.ksd/10.1.1",
    Host: "sdxw.iqilu.com",
    Connection: "Keep-Alive"
  };
  const _0x1cc25b = ku9.request(_0x1231fd, "GET", _0x1f47d6);
  const _0x7921db = {
    error: "请求失败"
  };
  if (_0x1cc25b.code !== 200) {
    return JSON.stringify(_0x7921db);
  }
  const _0x308b30 = "bb97587cfa85ece5549a3d257f7919f3";
  const _0x1166df = "0000000000000000";
  const _0x285f6b = ku9.opensslDecrypt(_0x1cc25b.body, "AES-256-CBC", _0x308b30, 0, _0x1166df);
  if (_0x45e80b) {
    {
      const [_0x5a33d1, _0x5c9cd4] = _0x45e80b.split("-");
      const _0x12dcf6 = _0x3d983b(_0x5a33d1);
      const _0x5e7ca8 = _0x3d983b(_0x5c9cd4);
      const _0x10c74f = "https://" + _0x59591c[_0x4f8db4] + "/v1/app/play/look/back?start=" + _0x12dcf6 + "&end=" + _0x5e7ca8 + "&channelid=" + _0x4510a6 + "&orgid=21";
      const _0x69fff9 = ku9.get(_0x10c74f, JSON.stringify(_0x1f47d6));
      const _0x135528 = JSON.parse(_0x69fff9);
      playurl = _0x135528.data.url;
      const _0x14b647 = {
        url: playurl
      };
      return JSON.stringify(_0x14b647);
    }
  } else {
    const _0x1b391f = JSON.parse(_0x285f6b);
    const _0xe0136d = {
      error: "无效响应"
    };
    if (!_0x1b391f.data) {
      return JSON.stringify(_0xe0136d);
    }
    const _0x2bfe05 = _0x5bccdf[0];
    for (const _0x24b299 of _0x1b391f.data) {
      if (_0x24b299.id === _0x2bfe05) {
        const _0x495aea = {
          "User-Agent": "okhttp/3.12.11"
        };
        return JSON.stringify({
          url: _0x24b299.stream,
          headers: JSON.stringify(_0x495aea)
        });
      }
    }
  }
  const _0x4eeb2a = {
    error: "未找到频道流地址"
  };
  return JSON.stringify(_0x4eeb2a);
  function _0x3d983b(_0x23cda5) {
    const _0x541a2c = _0x23cda5.slice(0, 4) + "-" + _0x23cda5.slice(4, 6) + "-" + _0x23cda5.slice(6, 8) + "T" + _0x23cda5.slice(8, 10) + ":" + _0x23cda5.slice(10, 12) + ":" + _0x23cda5.slice(12, 14);
    const _0x1980c2 = new Date(_0x541a2c);
    const _0x56c1ea = _0x1980c2.getTime();
    const _0x1eb0a7 = Math.floor(_0x56c1ea / 1000);
    return _0x1eb0a7;
  }
}