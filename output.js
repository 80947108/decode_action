//Fri Dec 26 2025 03:57:12 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function m_decode(_0xc80413) {
  var _0x3893e9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var _0x2a04dd;
  var _0x5bfb1a;
  var _0x29b813;
  var _0x46e6fc;
  var _0x59d57c;
  var _0x22eb7c;
  var _0x92bc4;
  var _0x166eb1;
  var _0xade4c5 = 0;
  var _0x542b56 = 0;
  var _0x550948 = "";
  var _0x4b1441 = [];
  if (!_0xc80413) {
    return _0xc80413;
  }
  _0xc80413 += "";
  do {
    _0x46e6fc = _0x3893e9.indexOf(_0xc80413.charAt(_0xade4c5++));
    _0x59d57c = _0x3893e9.indexOf(_0xc80413.charAt(_0xade4c5++));
    _0x22eb7c = _0x3893e9.indexOf(_0xc80413.charAt(_0xade4c5++));
    _0x92bc4 = _0x3893e9.indexOf(_0xc80413.charAt(_0xade4c5++));
    _0x166eb1 = _0x46e6fc << 18 | _0x59d57c << 12 | _0x22eb7c << 6 | _0x92bc4;
    _0x2a04dd = _0x166eb1 >> 16 & 255;
    _0x5bfb1a = _0x166eb1 >> 8 & 255;
    _0x29b813 = _0x166eb1 & 255;
    _0x22eb7c == 64 ? _0x4b1441[_0x542b56++] = String.fromCharCode(_0x2a04dd) : _0x92bc4 == 64 ? _0x4b1441[_0x542b56++] = String.fromCharCode(_0x2a04dd, _0x5bfb1a) : _0x4b1441[_0x542b56++] = String.fromCharCode(_0x2a04dd, _0x5bfb1a, _0x29b813);
  } while (_0xade4c5 < _0xc80413.length);
  _0x550948 = _0x4b1441.join("");
  return _0x550948;
}
function startPlayer(_0x153d48, _0x350412, _0x202898, _0x4ff90f) {
  function _0x5b0b60(_0x4799d2, _0x5a4395) {
    let _0x15ee81 = _0x49a283(_0x4799d2);
    let _0x323e22 = _0x5a4395.length;
    let _0x3bea7 = "";
    for (let _0x543067 = 0; _0x543067 < _0x15ee81.length; _0x543067++) {
      let _0x1d8d78 = _0x543067 % _0x323e22;
      _0x3bea7 += String.fromCharCode(_0x15ee81.charCodeAt(_0x543067) ^ _0x5a4395.charCodeAt(_0x1d8d78));
    }
    let _0x514f2e = _0x49a283(_0x3bea7);
    return _0x514f2e;
  }
  function _0x49a283(_0x3b77a4) {
    var _0x2029f2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var _0x1d0508;
    var _0xcaceb9;
    var _0x19656b;
    var _0x394f55;
    var _0x160a54;
    var _0xec8cfd;
    var _0x535b0d;
    var _0x1f00ce;
    var _0x458dae = 0;
    var _0x504a47 = 0;
    var _0x1928e5 = "";
    var _0x460106 = [];
    if (!_0x3b77a4) {
      return _0x3b77a4;
    }
    _0x3b77a4 += "";
    do {
      _0x394f55 = _0x2029f2.indexOf(_0x3b77a4.charAt(_0x458dae++));
      _0x160a54 = _0x2029f2.indexOf(_0x3b77a4.charAt(_0x458dae++));
      _0xec8cfd = _0x2029f2.indexOf(_0x3b77a4.charAt(_0x458dae++));
      _0x535b0d = _0x2029f2.indexOf(_0x3b77a4.charAt(_0x458dae++));
      _0x1f00ce = _0x394f55 << 18 | _0x160a54 << 12 | _0xec8cfd << 6 | _0x535b0d;
      _0x1d0508 = _0x1f00ce >> 16 & 255;
      _0xcaceb9 = _0x1f00ce >> 8 & 255;
      _0x19656b = _0x1f00ce & 255;
      if (_0xec8cfd == 64) {
        _0x460106[_0x504a47++] = String.fromCharCode(_0x1d0508);
      } else {
        _0x535b0d == 64 ? _0x460106[_0x504a47++] = String.fromCharCode(_0x1d0508, _0xcaceb9) : _0x460106[_0x504a47++] = String.fromCharCode(_0x1d0508, _0xcaceb9, _0x19656b);
      }
    } while (_0x458dae < _0x3b77a4.length);
    _0x1928e5 = _0x460106.join("");
    return _0x1928e5;
  }
  _0x153d48 = _0x153d48.split("").reverse().join("");
  _0x153d48 = _0x5b0b60(_0x153d48, _0x350412);
  _0x153d48 = _0x153d48.replace("token=123", "token=" + _0x4ff90f);
  _0x153d48 = _0x153d48.replace("token=" + _0x202898, "token=" + _0x4ff90f);
  _0x153d48 = _0x153d48.replace(_0x350412, "");
  return _0x153d48;
}
function m_parse_url(_0x2ee1ff) {
  let _0x15d57f = _0x2ee1ff.split("&p=")[0];
  let _0x2c70c9 = _0x2ee1ff.split("&p=")[1];
  let _0x93058f = req(_0x15d57f, {
    headers: config.headers2
  }).content;
  let _0x146ee1 = _0x1ba294.load(_0x93058f);
  if (_0x2c70c9 >= _0x146ee1("select option").length) {
    return "";
  }
  let _0x3d67f3 = _0x146ee1("select option").eq(_0x2c70c9).val();
  let _0x1fe469 = _0x93058f.match(/<script>(.*?var string.*?)<\/script>/);
  eval(_0x1fe469[1].replace(/$/gm, ";m_js_1=string;"));
  var _0x2b3b9d = "iptv.com";
  m_js_1 = m_decode(m_js_1);
  let _0x21c614 = _0x2b3b9d.length;
  let _0x49af8a = "";
  for (let _0x19f686 = 0; _0x19f686 < m_js_1.length; _0x19f686++) {
    let _0x147112 = _0x19f686 % _0x21c614;
    _0x49af8a += String.fromCharCode(m_js_1.charCodeAt(_0x19f686) ^ _0x2b3b9d.charCodeAt(_0x147112));
  }
  var _0x933492 = m_decode(_0x49af8a);
  _0x933492 = unescape(_0x933492);
  _0x933492 = _0x933492.match(/<script>(var.*?)<\/script>/)[1];
  _0x933492 = _0x933492.replace(/$/gm, "m_hken=gghken;m_hkens=gghkens;m_token=ggtoken;");
  eval(_0x933492);
  let _0x2d36f6 = startPlayer(_0x3d67f3, m_hken, m_hkens, m_token);
  return _0x2d36f6;
}
function make_detail_videos(_0x4342df) {
  let _0xd99efc = [];
  let _0x2a2d28 = "";
  let _0x454997 = "";
  for (let _0x3e6d27 in _0x4342df) {
    _0x2a2d28 = _0x2a2d28 + "$$$" + _0x3e6d27;
  }
  for (let _0x56d0cc in _0x4342df) {
    _0x454997 = _0x454997 + "$$$";
    _0x4342df[_0x56d0cc].forEach(_0x48e810 => {
      _0x454997 = _0x454997 + _0x48e810.name + "$" + _0x48e810.url + "#";
    });
    _0x454997 = _0x454997.replace(/#$/m, "");
  }
  _0xd99efc.vod_play_from = _0x2a2d28.replace(/^\$\$\$/, "");
  _0xd99efc.vod_play_url = _0x454997.replace(/^\$\$\$/, "");
  return _0xd99efc;
}
function computer_last_path(_0xe5614b, _0x3ce4c9) {
  let _0x50a4dc = "http://127.0.0.1:9978/file/";
  let _0x42b8ef = _0x3ce4c9.slice(0, _0x3ce4c9.lastIndexOf("/") + 1);
  _0xe5614b.match(/^(\/)/) && (_0x42b8ef = _0x50a4dc);
  let _0x1f69cc = _0xe5614b.split("/").slice(0, -1);
  let _0x934b6a = _0xe5614b.split("/").pop();
  for (let _0x1be829 = 0; _0x1be829 < _0x1f69cc.length; _0x1be829++) {
    if (!(_0x1f69cc[_0x1be829] == ".")) {
      if (_0x1f69cc[_0x1be829] == "..") {
        _0x42b8ef != _0x50a4dc && (_0x42b8ef = _0x42b8ef.replace(/[^\/]*\/$/, ""));
      } else {
        if (!(_0x1f69cc[_0x1be829] == "")) {
          _0x42b8ef = _0x42b8ef + _0x1f69cc[_0x1be829] + "/";
        }
      }
    }
  }
  return _0x42b8ef + _0x934b6a;
}
function parseSub(_0x2c5748) {
  const _0x1350e3 = /^#([^#\n]*?)\n([^#\n]+)/gm;
  let _0x359580 = "";
  let _0x52e597 = "";
  let _0x282c24 = req(_0x2c5748, {
    headers: config.headers
  }).content;
  while ((_0x359580 = _0x1350e3.exec(_0x282c24)) !== null) {
    _0x359580.index === _0x1350e3.lastIndex && _0x1350e3.lastIndex++;
    if (_0x359580[1] == "订阅名") {
      continue;
    }
    if (_0x359580[1] == "IPTV" || _0x359580[1] == "iptv") {
      _0x359580[2] == "1" ? config.iptv_flag = true : config.iptv_flag = false;
      continue;
    }
    let _0x1b57a1 = _0x359580[1];
    let _0x31731a = config.defaultPicUrl;
    if (_0x359580[1].indexOf("(") != -1) {
      let _0x4c71ec = _0x359580[1].match(/(.*?)\((.*?)\)/);
      _0x1b57a1 = _0x4c71ec[1];
      _0x31731a.match(/https?/) ? _0x31731a = _0x4c71ec[2] : _0x31731a = computer_last_path(_0x4c71ec[2], _0x2c5748);
    }
    _0x359580[2].match(/https?/) ? _0x52e597 = _0x359580[2] : _0x52e597 = computer_last_path(_0x359580[2], _0x2c5748);
    config.pics[_0x52e597] = _0x31731a;
    config.pics[_0x1b57a1] = _0x31731a;
    config.classes.push({
      type_id: _0x52e597,
      type_name: _0x1b57a1
    });
  }
}
function local_db() {
  config.search_flag = false;
  let _0x5ec292 = [];
  let _0x401b5b = [];
  let _0x3beffb = "";
  for (let _0x1a63f0 = 0; _0x1a63f0 < config.classes.length; _0x1a63f0++) {
    let _0x5877f8 = config.classes[_0x1a63f0].type_id;
    let _0x422c4 = config.classes[_0x1a63f0].type_name;
    let _0x335c0f = config.headers;
    _0x5877f8.match(/gitcode.net\/ygbh66/) && (_0x335c0f = config.headers2);
    let _0x370655 = req(_0x5877f8, {
      headers: _0x335c0f
    }).content;
    if (_0x370655.indexOf("#EXTM3U") == 0) {
      let _0x57e9f0 = /(.*),(.*)\s*?((?:http|rtmp|mitv)[^#\s]*)/gm;
      while ((_0x5ec292 = _0x57e9f0.exec(_0x370655)) !== null) {
        _0x5ec292.index === _0x57e9f0.lastIndex && _0x57e9f0.lastIndex++;
        let _0x170ca9 = "未分组";
        _0x170ca9 = (_0x5ec292[1].match(/group-title="(.*?)"/) || [null, _0x170ca9])[1];
        _0x401b5b.indexOf(_0x170ca9) == -1 && (_0x401b5b.push(_0x170ca9), config.groupDB.push({
          sname: _0x422c4,
          surl: _0x5877f8,
          gname: _0x170ca9
        }));
        !config.channelDB[_0x422c4 + "-" + _0x170ca9] && (config.channelDB[_0x422c4 + "-" + _0x170ca9] = {});
        config.channelDB[_0x422c4 + "-" + _0x170ca9][_0x5ec292[2]] ? config.channelDB[_0x422c4 + "-" + _0x170ca9][_0x5ec292[2]].push(_0x5ec292[3]) : (config.channelDB[_0x422c4 + "-" + _0x170ca9][_0x5ec292[2]] = [], config.channelDB[_0x422c4 + "-" + _0x170ca9][_0x5ec292[2]].push(_0x5ec292[3]));
      }
    } else {
      let _0x3308ba = /()(?:\B\$c_start|\B#{1,2})?(.*?),?(##|头#|\$c_end|,?#genre#|(?:http|rtmp|mitv)[^\s]*)/gm;
      while ((_0x5ec292 = _0x3308ba.exec(_0x370655)) !== null) {
        _0x5ec292.index === _0x3308ba.lastIndex && _0x3308ba.lastIndex++;
        ["#genre#", "##", "头#", "$c_end"].includes(_0x5ec292[3]) ? (_0x3beffb = _0x5ec292[2], config.channelDB[_0x422c4 + "-" + _0x3beffb] = {}, config.groupDB.push({
          sname: _0x422c4,
          surl: _0x5877f8,
          gname: _0x5ec292[2]
        })) : config.channelDB[_0x422c4 + "-" + _0x3beffb][_0x5ec292[2]] ? config.channelDB[_0x422c4 + "-" + _0x3beffb][_0x5ec292[2]].push(_0x5ec292[3]) : (config.channelDB[_0x422c4 + "-" + _0x3beffb][_0x5ec292[2]] = [], config.channelDB[_0x422c4 + "-" + _0x3beffb][_0x5ec292[2]].push(_0x5ec292[3]));
      }
    }
  }
}
function local_db_gsearch(_0x6b91a8) {
  let _0x572a37 = [];
  let _0x553e1a = new RegExp(_0x6b91a8, "i");
  for (let _0x4fbef2 = 0; _0x4fbef2 < config.groupDB.length; _0x4fbef2++) {
    config.groupDB[_0x4fbef2].gname.match(_0x553e1a) && _0x572a37.push({
      vod_id: config.groupDB[_0x4fbef2].gname + "$$$" + config.groupDB[_0x4fbef2].surl,
      vod_name: config.groupDB[_0x4fbef2].gname,
      vod_pic: config.pics[config.groupDB[_0x4fbef2].sname],
      vod_remarks: config.groupDB[_0x4fbef2].sname
    });
  }
  return _0x572a37;
}
function local_db_csearch(_0x161166) {
  let _0x36ec3c = [];
  let _0x49a5b7 = new RegExp(_0x161166, "i");
  for (let _0x49aa4e in config.channelDB) {
    for (let _0xfcf420 in config.channelDB[_0x49aa4e]) {
      _0xfcf420.match(_0x49a5b7) && _0x36ec3c.push({
        vod_id: _0xfcf420 + "$$$[epwdr]" + config.channelDB[_0x49aa4e][_0xfcf420].join("###"),
        vod_name: _0xfcf420,
        vod_pic: config.pics[_0x49aa4e.split("-")[0]],
        vod_remarks: _0x49aa4e
      });
    }
  }
  return _0x36ec3c;
}
function direct_play_youtube0(_0x3e55dd) {
  let _0x9bb79e = "";
  let _0x57ab86 = "";
  let _0x1bf98f = req("https://deturl.com/?url=" + _0x3e55dd, {
    headers: config.headers
  }).content;
  let _0x3cb7b3 = _0x1ba294.load(_0x1bf98f);
  let _0x56556e = _0x3cb7b3(".download .line:eq(0) a");
  _0x56556e.each(function (_0x1c4f57) {
    let _0x11f3b8 = _0x3cb7b3(this, this).attr("href");
    _0x11f3b8.match("getyoutubehd.com") && (_0x57ab86 = _0x11f3b8.match(/https:\/\/getyoutubehd.com\/v\/(.*)/m)[1]);
  });
  let _0x5607aa = "https://getyoutubehd.com/api/info?v=" + _0x57ab86;
  _0x1bf98f = req(_0x5607aa, {
    headers: config.headers
  }).content;
  _0x56556e = JSON.parse(_0x1bf98f);
  _0x56556e = _0x56556e.formats;
  for (let _0x58b75b = 0; _0x58b75b < _0x56556e.length; _0x58b75b++) {
    _0x56556e[_0x58b75b].format_note == "360p" && (_0x9bb79e = _0x56556e[_0x58b75b].url);
    _0x56556e[_0x58b75b].format_note == "720p" && (_0x9bb79e = _0x56556e[_0x58b75b].url);
  }
  return _0x9bb79e;
}
function direct_play_youtube1(_0x51f614) {
  let _0x436829 = _0x51f614.slice(0, _0x51f614.lastIndexOf("/"));
  let _0xfec2dc = _0x51f614.slice(_0x51f614.lastIndexOf("/") + 1);
  let _0x17dc0b = "";
  let _0x5638c6 = config.headers;
  _0x436829.match(/gitcode.net\/ygbh66/) && (_0x5638c6 = config.headers2);
  let _0x1b505e = req(_0x436829, {
    headers: _0x5638c6
  }).content;
  let _0x300109 = _0x1ba294.load(_0x1b505e);
  let _0x53b127 = JSON.parse(_0x300109("body script:eq(1)").text().replace("var ytInitialPlayerResponse = ", "").replace(/;$/, ""));
  let _0x44010f = _0x53b127.streamingData.adaptiveFormats;
  _0x44010f.forEach(_0x588cd8 => {
    _0x588cd8.mimeType.match(/video\/mp4/) && _0x588cd8.qualityLabel == _0xfec2dc && (_0x17dc0b = _0x588cd8.url);
  });
  console.log("url: " + _0x17dc0b);
  return _0x17dc0b;
}
function direct_play_youtube2(_0x3498d2) {
  let _0x4112e6 = _0x3498d2.slice(0, _0x3498d2.lastIndexOf("/"));
  let _0x1c8849 = _0x3498d2.slice(_0x3498d2.lastIndexOf("/") + 1);
  let _0x3a1c04 = "";
  let _0x1c9e5e = req("https://10downloader.com/download?v=" + _0x4112e6 + "&lang=en&type=video", {
    headers: config.headers
  }).content;
  let _0x1fa19c = _0x1ba294.load(_0x1c9e5e);
  let _0x3e9c74 = _0x1fa19c(".downloadsTable:eq(0) tbody tr").map(function () {
    return {
      title: _0x1fa19c(".downloadBtn", this).attr("download"),
      resolution: _0x1fa19c("td:eq(0)", this).text(),
      url: _0x1fa19c(".downloadBtn", this).attr("href")
    };
  }).toArray();
  for (let _0x4481ef = 0; _0x4481ef < _0x3e9c74.length; _0x4481ef++) {
    if (_0x3e9c74[_0x4481ef].resolution == _0x1c8849) {
      _0x3a1c04 = _0x3e9c74[_0x4481ef].url;
      break;
    }
  }
  _0x3a1c04 = _0x3a1c04.replace(/&title=.*/, "");
  return _0x3a1c04;
}
function direct_play_youtube3(_0x585965) {
  let _0x18ca6b = _0x585965.slice(0, _0x585965.lastIndexOf("/"));
  let _0x1ceb61 = _0x585965.slice(_0x585965.lastIndexOf("/") + 1);
  let _0x8aa761 = _0x18ca6b.match(/v=(.*?)(&|$)/m)[1];
  let _0x22a1bf = "";
  let _0x211b9d = {};
  let _0x562ccc = "";
  let _0x5eb8d4 = req("https://www.y2mate.com/mates/analyzeV2/ajax", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "user-agent": "okhttp/3.12.10"
    },
    method: "POST",
    body: "k_query=" + _0x18ca6b + "&k_page=home&hl=en&q_auto=0"
  }).content;
  _0x5eb8d4 = JSON.parse(_0x5eb8d4);
  _0x211b9d = _0x5eb8d4.links.mp4;
  _0x22a1bf = "";
  for (let _0xe84851 in _0x211b9d) {
    if (_0x1ceb61 == _0x211b9d[_0xe84851].q) {
      _0x22a1bf = _0x211b9d[_0xe84851].k;
      break;
    }
  }
  _0x5eb8d4 = req("https://www.y2mate.com/mates/convertV2/index", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "user-agent": "okhttp/3.12.10"
    },
    method: "POST",
    body: "vid=" + _0x8aa761 + "&k=" + _0x22a1bf
  }).content;
  _0x5eb8d4 = JSON.parse(_0x5eb8d4);
  _0x562ccc = _0x5eb8d4.dlink;
  console.log(_0x562ccc);
  return _0x562ccc;
}
import _0x1ba294 from "assets://js/lib/cheerio.min.js";
import "assets://js/lib/crypto-js.js";
var m_js_1 = "";
var m_hken = "";
var m_hkens = "";
var m_token = "";
const config = {
  iptv_flag: true,
  epgtw_flag: false,
  search_flag: true,
  groupDB: [],
  channelDB: {},
  defaultPicUrl: "https://tuapi.eees.cc/api.php?category=meinv&type=302",
  pics: {},
  classes: [],
  headers: {
    "user-agent": "okhttp/3.12.10"
  },
  headers2: {
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/47.0.2526.107 Mobile/13C75 Safari/601.1.46"
  },
  player: {},
  filter: {}
};
function init(_0x2ac96e) {
  console.log("路飞开始调试了！！！");
  parseSub(_0x2ac96e);
  try {
    setTimeout(() => {
      local_db();
    }, 8000);
  } catch (_0x4bdc87) {
    console.log("蜂蜜当前版本不支持异步!请更新到最新版本!");
  }
}
function home(_0x5ac87b) {
  let _0x735762 = {};
  _0x5ac87b && (_0x735762.filters = config.filter);
  _0x735762.class = config.classes;
  return JSON.stringify(_0x735762);
}
function homeVod() {
  let _0x5b97bc = {};
  let _0x3312c3 = [];
  if (config.iptv_flag) {
    let _0x25e7e6 = req("http://m.iptv807.com/?act=home", {
      headers: config.headers2
    }).content;
    let _0xe1db0c = _0x1ba294.load(_0x25e7e6);
    let _0x26eb5a = _0xe1db0c("ul[data-role=\"listview\"] li");
    _0x26eb5a.each(function (_0x5cafbc) {
      _0xe1db0c("a", this).text() != "" && _0x3312c3.push({
        vod_id: "IPTV_" + _0xe1db0c("a", this).text() + "$$$" + _0xe1db0c("a", this).attr("href"),
        vod_name: _0xe1db0c("a", this).text(),
        vod_pic: config.defaultPicUrl,
        vod_remarks: ""
      });
    });
    _0x5b97bc = {
      list: _0x3312c3
    };
  }
  return JSON.stringify(_0x5b97bc);
}
function category(_0x35b42e, _0x18cf42, _0x2f8e7f, _0x15931b) {
  let _0x1d70a9 = {};
  let _0x27d66b = [];
  let _0x5f1132 = [];
  let _0x5464ee = [];
  _0x18cf42 = parseInt(_0x18cf42);
  if (_0x18cf42 >= 2) {
    return JSON.stringify({});
  }
  if (!(_0x35b42e == "www.histar.tv")) {
    if (!(_0x35b42e == "myIPTV")) {
      let _0xe5cb38 = config.headers;
      _0x35b42e.match(/gitcode.net\/ygbh66/) && (_0xe5cb38 = config.headers2);
      let _0x28a7e0 = req(_0x35b42e, {
        headers: _0xe5cb38
      }).content;
      if (_0x28a7e0.indexOf("#EXTM3U") == 0) {
        let _0x3a0151 = /(.*),(.*)\s*?((?:http|rtmp|mitv)[^#\s]*)/gm;
        while ((_0x5464ee = _0x3a0151.exec(_0x28a7e0)) !== null) {
          _0x5464ee.index === _0x3a0151.lastIndex && _0x3a0151.lastIndex++;
          let _0x367b6a = "未分组";
          _0x367b6a = (_0x5464ee[1].match(/group-title="(.*?)"/) || [null, _0x367b6a])[1];
          _0x5f1132.indexOf(_0x367b6a) == -1 && (_0x5f1132.push(_0x367b6a), _0x27d66b.push({
            vod_id: _0x367b6a + "$$$" + _0x35b42e,
            vod_name: _0x367b6a,
            vod_pic: config.pics[_0x35b42e],
            vod_remarks: ""
          }));
        }
      } else {
        let _0x582cda = /()(?:\B\$c_start|\B#{1,2})?(.*?),?(##|头#|\$c_end|,?#genre#|(?:http|rtmp|mitv)[^\s]*)/gm;
        while ((_0x5464ee = _0x582cda.exec(_0x28a7e0)) !== null) {
          _0x5464ee.index === _0x582cda.lastIndex && _0x582cda.lastIndex++;
          if (["#genre#", "##", "头#", "$c_end"].includes(_0x5464ee[3])) {
            let _0x15965c = _0x5464ee[2];
            _0x5f1132.indexOf(_0x15965c) == -1 && (_0x5f1132.push(_0x15965c), _0x27d66b.push({
              vod_id: _0x15965c + "$$$" + _0x35b42e,
              vod_name: _0x15965c,
              vod_pic: config.pics[_0x35b42e],
              vod_remarks: ""
            }));
          }
        }
      }
    }
  }
  _0x1d70a9 = {
    list: _0x27d66b,
    page: _0x18cf42,
    pagecount: 1,
    limit: 100,
    total: 999
  };
  return JSON.stringify(_0x1d70a9);
}
function search(_0x5f1c6c, _0x5be792) {
  let _0xc0c821 = {};
  let _0x21d4af = [];
  config.search_flag && local_db();
  if (config.epgtw_flag) {
    let _0x5340af = req("https://epg.pw/search/channel/?lang=zh-hant", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "user-agent": "okhttp/3.12.10"
      },
      method: "POST",
      body: "csrfmiddlewaretoke=pUq0NQiiWg7EpSuU0w1Fif4q8bo0RnPe&channel_search=" + _0x5f1c6c + "&search_type=c"
    }).content;
    let _0x131567 = _0x1ba294.load(_0x5340af);
    let _0x526ebd = _0x131567("section:eq(2) a");
    if (_0x526ebd.length === 0) {
      let _0x1a17fd = req("https://epg.pw/search/channel/?lang=zh-hant", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "user-agent": "okhttp/3.12.10"
        },
        method: "POST",
        body: "csrfmiddlewaretoke=pUq0NQiiWg7EpSuU0w1Fif4q8bo0RnPe&channel_search=" + _0x5f1c6c + "&search_type=s"
      }).content;
      let _0x50a87f = _0x1ba294.load(_0x1a17fd);
      let _0x143dc8 = _0x50a87f(".table-container tbody tr");
      let _0x2a251d = {};
      _0x143dc8.each(function (_0x598013) {
        let _0x3ef4ab = _0x50a87f("td", this).eq(0).text().replace(/@@\d+$/, "").replace("台", "").replace("衛視", "卫视");
        _0x2a251d[_0x3ef4ab] ? _0x2a251d[_0x3ef4ab].push(_0x50a87f("td:eq(4) a", this).attr("href")) : _0x2a251d[_0x3ef4ab] = [_0x50a87f("td:eq(4) a", this).attr("href")];
      });
      for (let _0x41f751 in _0x2a251d) {
        _0x21d4af.push({
          vod_id: _0x41f751 + "$$$[epwdr]" + _0x2a251d[_0x41f751].join("###"),
          vod_name: _0x41f751,
          vod_pic: config.defaultPicUrl,
          vod_remarks: "Web_EPG"
        });
      }
    } else {
      _0x526ebd.each(function (_0x22d36b) {
        _0x21d4af.push({
          vod_id: _0x131567(this, this).text() + "$$$https://epg.pw" + _0x131567(this, this).attr("href"),
          vod_name: _0x131567(this, this).text(),
          vod_pic: config.defaultPicUrl,
          vod_remarks: "Web_EPG"
        });
      });
    }
  }
  _0x21d4af = _0x21d4af.concat(local_db_gsearch(_0x5f1c6c));
  _0x21d4af = _0x21d4af.concat(local_db_csearch(_0x5f1c6c));
  _0xc0c821 = {
    list: _0x21d4af
  };
  return JSON.stringify(_0xc0c821);
}
function detail(_0x2f4473) {
  let _0x210125 = {};
  let _0x486fc9 = {};
  let _0x27bd24 = [];
  let _0x3633a5 = _0x2f4473.split("$$$")[1];
  _0x2f4473 = _0x2f4473.split("$$$")[0];
  let _0x561b42 = {
    vod_id: _0x2f4473,
    vod_name: _0x2f4473,
    vod_pic: config.pics[_0x3633a5],
    type_name: "",
    vod_year: "",
    vod_area: "",
    vod_remarks: "",
    vod_actor: "",
    vod_director: "",
    vod_content: "",
    vod_play_from: "",
    vod_play_url: ""
  };
  if (_0x3633a5.match("\\[epwdr\\]")) {
    let _0x59ea75 = "";
    let _0x3dfd22 = "";
    _0x3633a5 = _0x3633a5.replace("[epwdr]", "");
    _0x3633a5 = _0x3633a5.split("###");
    for (let _0x107c4b = 0; _0x107c4b < _0x3633a5.length; _0x107c4b++) {
      _0x59ea75 = _0x59ea75 + "$$$线路" + _0x107c4b;
      _0x3dfd22 = _0x3dfd22 + "$$$" + _0x2f4473 + "$" + _0x3633a5[_0x107c4b];
    }
    _0x561b42.vod_play_from = _0x59ea75.replace(/^\$\$\$/, "");
    _0x561b42.vod_play_url = _0x3dfd22.replace(/^\$\$\$/, "");
  } else {
    if (_0x3633a5.match("epg.pw")) {
      let _0x58bac6 = "";
      let _0x5e5594 = "";
      let _0x2c233f = 0;
      let _0x57870c = req(_0x3633a5, {
        headers: config.headers
      }).content;
      let _0x578de1 = _0x1ba294.load(_0x57870c);
      let _0x79e469 = _0x578de1("section tbody tr");
      _0x79e469.each(function (_0x427162) {
        _0x58bac6 = _0x58bac6 + "$$$线路" + _0x2c233f;
        _0x5e5594 = _0x5e5594 + "$$$" + _0x2f4473 + "$" + _0x578de1("td a", this).eq(0).attr("href");
        _0x2c233f++;
      });
      _0x561b42.vod_play_from = _0x58bac6.replace(/^\$\$\$/, "");
      _0x561b42.vod_play_url = _0x5e5594.replace(/^\$\$\$/, "");
    } else {
      if (!(_0x3633a5 == "www.histar.tv")) {
        if (_0x2f4473.startsWith("IPTV")) {
          let _0x28bdf1 = "";
          let _0x5c28d5 = "";
          _0x3633a5 = "http://m.iptv807.com/" + _0x3633a5;
          let _0x5796f6 = req(_0x3633a5, {
            headers: config.headers2
          }).content;
          let _0x355f51 = _0x1ba294.load(_0x5796f6);
          let _0x57cf01 = _0x355f51("ul[data-role=\"listview\"] li");
          for (let _0x36f0d3 = 1; _0x36f0d3 < 11; _0x36f0d3++) {
            _0x28bdf1 = _0x28bdf1 + "$$$" + "线路" + _0x36f0d3;
            _0x57cf01.each(function (_0x23ad52) {
              _0x355f51("a", this).text() != "" && (_0x5c28d5 = _0x5c28d5 + "#" + _0x355f51("a", this).text() + "$" + "http://m.iptv807.com/" + _0x355f51("a", this).attr("href") + "&p=" + (_0x36f0d3 - 1));
            });
            _0x5c28d5 = _0x5c28d5.replace(/^#/, "");
            _0x5c28d5 = _0x5c28d5 + "$$$";
          }
          _0x561b42.vod_play_from = _0x28bdf1.replace(/^\$\$\$/, "");
          _0x561b42.vod_play_url = _0x5c28d5.replace(/\$\$\$#/g, "$$$$$$");
        } else {
          let _0x1e74ce = config.headers;
          _0x3633a5.match(/gitcode.net\/ygbh66/) && (_0x1e74ce = config.headers2);
          let _0x581ad5 = req(_0x3633a5, {
            headers: _0x1e74ce
          }).content;
          _0x581ad5 = _0x581ad5.replace(/^(.*),(.*youtube\.com.*)$/gm, "$1,$2/1080p\n$1,$2/720p\n$1,$2/480p\n$1,$2/360p");
          _0x581ad5 = _0x581ad5.replace(/(.*),(.*)\n((?:http|rtmp|mitv)[^#\s]*youtube\.com[^#\s]*)/gm, "$1,$2\n$3/1080p\n$1,$2\n$3/720p\n$1,$2\n$3/480p\n$1,$2\n$3/360p");
          if (_0x581ad5.indexOf("#EXTM3U") == 0) {
            let _0x193d5e = /(.*),(.*)\s*?((?:http|rtmp|mitv)[^#\s]*)/gm;
            while ((_0x27bd24 = _0x193d5e.exec(_0x581ad5)) !== null) {
              _0x27bd24.index === _0x193d5e.lastIndex && _0x193d5e.lastIndex++;
              let _0x341afb = "未分组";
              _0x341afb = (_0x27bd24[1].match(/group-title="(.*?)"/) || [null, _0x341afb])[1];
              if (_0x341afb == _0x2f4473) {
                if (_0x486fc9[_0x27bd24[2]]) {
                  let _0x214b3a = "线路" + (_0x486fc9[_0x27bd24[2]].length + 1);
                  _0x486fc9[_0x27bd24[2]].push({
                    name: _0x214b3a,
                    url: _0x27bd24[3]
                  });
                } else {
                  _0x486fc9[_0x27bd24[2]] = [];
                  _0x486fc9[_0x27bd24[2]].push({
                    name: "线路1",
                    url: _0x27bd24[3]
                  });
                }
              }
            }
          } else {
            let _0x480789 = /()(?:\B\$c_start|\B#{1,2})?(.*?),?(##|头#|\$c_end|,?#genre#|(?:http|rtmp|mitv)[^\s]*)/gm;
            let _0x5d0270 = true;
            while ((_0x27bd24 = _0x480789.exec(_0x581ad5)) !== null) {
              _0x27bd24.index === _0x480789.lastIndex && _0x480789.lastIndex++;
              if (["#genre#", "##", "头#", "$c_end"].includes(_0x27bd24[3])) {
                if (_0x27bd24[2] == _0x2f4473) {
                  _0x5d0270 = false;
                  continue;
                } else {
                  if (!_0x5d0270) {
                    break;
                  }
                }
              }
              if (_0x5d0270) {
                continue;
              }
              if (_0x486fc9[_0x27bd24[2]]) {
                let _0xfbf398 = "线路" + (_0x486fc9[_0x27bd24[2]].length + 1);
                _0x486fc9[_0x27bd24[2]].push({
                  name: _0xfbf398,
                  url: _0x27bd24[3]
                });
              } else {
                _0x486fc9[_0x27bd24[2]] = [];
                _0x486fc9[_0x27bd24[2]].push({
                  name: "线路1",
                  url: _0x27bd24[3]
                });
              }
            }
          }
          let _0x29d681 = 0;
          for (let _0xd53186 in _0x486fc9) {
            _0x486fc9[_0xd53186].length > _0x29d681 && (_0x29d681 = _0x486fc9[_0xd53186].length);
          }
          let _0x7aedd4 = {};
          for (let _0x49938c = 1; _0x49938c <= _0x29d681; _0x49938c++) {
            _0x7aedd4["线路" + _0x49938c] = [];
            for (let _0x35ee18 in _0x486fc9) {
              let _0x37451b = "";
              _0x49938c <= _0x486fc9[_0x35ee18].length ? _0x37451b = _0x486fc9[_0x35ee18][_0x49938c - 1].url : _0x37451b = _0x486fc9[_0x35ee18][_0x486fc9[_0x35ee18].length - 1].url;
              _0x7aedd4["线路" + _0x49938c].push({
                name: _0x35ee18,
                url: _0x37451b
              });
            }
          }
          let _0x278f6f = make_detail_videos(_0x7aedd4);
          _0x561b42.vod_play_from = _0x278f6f.vod_play_from;
          _0x561b42.vod_play_url = _0x278f6f.vod_play_url;
        }
      }
    }
  }
  let _0x3fd8aa = true;
  let _0x1d842a = _0x561b42.vod_play_url.match(/(https:\/\/.*?)(#|\$\$\$|$)/gm);
  if (_0x561b42.vod_play_from.split("$$$").length != 4) {
    _0x3fd8aa = false;
  } else {
    for (let _0x525d42 = 0; _0x525d42 < _0x1d842a.length; _0x525d42++) {
      if (_0x1d842a[_0x525d42].indexOf("youtube.com") == -1) {
        _0x3fd8aa = false;
        break;
      }
    }
  }
  _0x3fd8aa && (_0x561b42.vod_play_from = _0x561b42.vod_play_from.replace("线路1", "1080p"), _0x561b42.vod_play_from = _0x561b42.vod_play_from.replace("线路2", "720p"), _0x561b42.vod_play_from = _0x561b42.vod_play_from.replace("线路3", "480p"), _0x561b42.vod_play_from = _0x561b42.vod_play_from.replace("线路4", "360p"));
  _0x210125 = {
    list: [_0x561b42]
  };
  return JSON.stringify(_0x210125);
}
function play(_0x5ac9a9, _0x426fb7, _0x542a27) {
  let _0x40a002 = {};
  _0x426fb7.indexOf("iptv807") != -1 && (_0x426fb7 = m_parse_url(_0x426fb7));
  _0x426fb7.match(/youtube\.com/m) && (_0x426fb7 = direct_play_youtube3(_0x426fb7));
  _0x40a002 = {
    parse: "0",
    jx: "0",
    headers: "",
    playUrl: "",
    url: _0x426fb7
  };
  return JSON.stringify(_0x40a002);
}
__JS_SPIDER__ = {
  init: init,
  home: home,
  homeVod: homeVod,
  category: category,
  detail: detail,
  play: play,
  search: search
};