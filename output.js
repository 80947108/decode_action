//Thu Dec 11 2025 02:05:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let headers = {
  "User-Agent": "okhttp/3.15"
};
let classes = [];
let cates = {};
let picUrl = "";
let webPaths = {};
function init(IiIIi1i) {
  let i1Ii11I1 = "";
  if (IiIIi1i.indexOf("$$$") > 0) {
    i1Ii11I1 = IiIIi1i.split("$$$")[0].trim();
    IiIIi1i = IiIIi1i.split("$$$")[1].trim();
  }
  if (IiIIi1i.indexOf("&&&") > 0) {
    picUrl = IiIIi1i.split("&&&")[1].trim();
    if (picUrl.indexOf("://") < 0) {
      picUrl = i1Ii11I1 + picUrl;
    }
    IiIIi1i = IiIIi1i.split("&&&")[0].trim();
  }
  console.log("picUrl: " + picUrl);
  let IIlIlI1I = IiIIi1i.split("#");
  for (const IlII1I1 of IIlIlI1I) {
    if (IlII1I1.indexOf("$") > 0) {
      let illIl111 = IlII1I1;
      let Ill1iIi = IlII1I1.split("$")[0];
      if (illIl111.indexOf("://") < 0) {
        illIl111 = illIl111.replace("$", "$" + i1Ii11I1);
      }
      classes.push({
        "type_id": illIl111,
        "type_name": Ill1iIi.replace("!!", "")
      });
    } else {
      let II1lIlli = IlII1I1;
      if (II1lIlli.indexOf("://") < 0) {
        II1lIlli = i1Ii11I1 + II1lIlli;
      }
      II1lIlli = II1lIlli.replace("/file/livesourcelist", "/livesourcelist");
      let Illi11ll = req(II1lIlli, {
        "method": "GET",
        "headers": headers
      });
      try {
        let l1lIiill = JSON.parse(Illi11ll.content);
        let lillI11l = II1lIlli.substring(0, II1lIlli.lastIndexOf("/") + 1);
        for (const i1iilII1 of l1lIiill) {
          let Iillil = i1iilII1.name;
          let lI1iIl = i1iilII1.url;
          let illIl111 = Iillil + "$" + (lI1iIl.indexOf("://") < 0 ? lillI11l : "") + lI1iIl;
          classes.push({
            "type_id": illIl111,
            "type_name": Iillil.replace("!!", "")
          });
          webPaths[illIl111] = lillI11l;
        }
      } catch (Ii1Ii11) {
        console.log("==== >>> " + Ii1Ii11);
      }
    }
  }
}
function home(I1iiIiIl) {
  return JSON.stringify({
    "class": classes,
    "filters": null
  });
}
function parseM3u(iIi1Ii1I, I1IlIIIi) {
  let iI1iiIii = {};
  let iiI11111 = /(#EXTINF:.+?),([^,]+?)\s*\n(.+?)\s*\n/g;
  let ii1iilil = null;
  while ((ii1iilil = iiI11111.exec(iIi1Ii1I)) != null) {
    let lllli1iI = ii1iilil[1];
    let il1Ili1I = ii1iilil[2];
    let liIlll1l = ii1iilil[3];
    if (il1Ili1I == null || liIlll1l == null || il1Ili1I == "" || liIlll1l == "") {
      continue;
    }
    il1Ili1I = il1Ili1I.trim();
    liIlll1l = liIlll1l.trim();
    let IiI1lI1l = I1IlIIIi;
    let ilIl1i1i = /group-title="(.*?)"/;
    if (ilIl1i1i.test(lllli1iI)) {
      IiI1lI1l = lllli1iI.match(ilIl1i1i)[1];
    }
    if (!iI1iiIii[IiI1lI1l]) {
      iI1iiIii[IiI1lI1l] = [];
    }
    iI1iiIii[IiI1lI1l].push(il1Ili1I + "," + liIlll1l);
  }
  let ll11III1 = "";
  for (const li1Ili in iI1iiIii) {
    ll11III1 += li1Ili + "\n";
    let IlIil1ll = iI1iiIii[li1Ili];
    for (const li1iI11 of IlIil1ll) {
      ll11III1 += li1iI11 + "\n";
    }
  }
  return ll11III1;
}
function parseFm(IliiIl1I) {
  let lliiI1i1 = "";
  let Iii1ll = JSON.parse(IliiIl1I);
  for (const i1lIlli1 of Iii1ll) {
    let I111Il1l = i1lIlli1.name;
    let ilI11li = i1lIlli1.channel;
    lliiI1i1 += I111Il1l + ",#genre#\n";
    for (const iiilI1iI of ilI11li) {
      let I11111l1 = iiilI1iI.name;
      let IlI1l1I1 = iiilI1iI.urls;
      for (const l1II1lll of IlI1l1I1) {
        lliiI1i1 += I11111l1 + "," + l1II1lll + "\n";
      }
    }
  }
  return lliiI1i1;
}
function parseLu(iIliI1lI) {
  let IIlilI1i = "";
  let I11ilI1i = JSON.parse(iIliI1lI).data;
  for (const i1Ii1l1 of I11ilI1i.datalist) {
    let I11111l = i1Ii1l1.prov;
    let IiIiii1l = i1Ii1l1.list;
    IIlilI1i += I11111l + ",#genre#\n";
    for (const l1111lI of IiIiii1l) {
      let lIlI1iI = l1111lI.name;
      let ll11i1II = l1111lI.urls;
      for (const Iliilii of ll11i1II) {
        IIlilI1i += lIlI1iI + "---" + Iliilii.line + "," + Iliilii.url + "\n";
      }
    }
  }
  return IIlilI1i;
}
function getCateData(IliI1i) {
  let iI1I1I1I = picUrl;
  if (IliI1i.indexOf("&&&") > 0) {
    iI1I1I1I = IliI1i.split("&&&")[1].trim();
    if (iI1I1I1I.indexOf("://") < 0 && webPaths[IliI1i]) {
      iI1I1I1I = webPaths[IliI1i] + iI1I1I1I;
    }
    IliI1i = IliI1i.split("&&&")[0].trim();
  }
  console.log("webPicUrl: " + iI1I1I1I);
  let ll1iIiiI = IliI1i.split("$")[1];
  let i1I1l1i = IliI1i.split("$")[0];
  if (!cates[IliI1i]) {
    cates[IliI1i] = [];
    let iIl11Iii = headers;
    if (ll1iIiiI.indexOf("|") > 0) {
      let ii111I1I = decodeURIComponent(ll1iIiiI.split("|")[1]);
      ll1iIiiI = ll1iIiiI.split("|")[0];
      for (const II1Ii1l of ii111I1I.split("&")) {
        if (II1Ii1l.indexOf("=") > 0) {
          let lI1lliii = II1Ii1l.split("=")[0];
          let I11Iii1i = II1Ii1l.split("=")[1];
          iIl11Iii[lI1lliii] = I11Iii1i;
        }
      }
    }
    let I111lilI = req(ll1iIiiI, {
      "method": "GET",
      "headers": iIl11Iii
    });
    I111lilI = I111lilI.content.trim();
    if (I111lilI.indexOf("#EXTM3U") >= 0) {
      I111lilI = parseM3u(I111lilI, i1I1l1i);
    } else if (I111lilI.indexOf("\"channel\"") > 0 && I111lilI.indexOf("\"urls\"") > 0) {
      I111lilI = parseFm(I111lilI);
    } else if (I111lilI.indexOf("\"datalist\"") > 0 && I111lilI.indexOf("\"urls\"") > 0) {
      I111lilI = parseLu(I111lilI);
    }
    let li1IiiII = (i1I1l1i + "\n" + I111lilI.replace("\r", "")).split("\n");
    let lli11iI = i1I1l1i;
    let iiiI1l = "";
    for (let i1ii1IIl = 0; i1ii1IIl < li1IiiII.length; i1ii1IIl++) {
      let lIliIii = li1IiiII[i1ii1IIl].replace(/\s+/g, "");
      if (lIliIii != "" && lIliIii.indexOf("://") < 0 && (lIliIii.indexOf(",") < 0 || lIliIii.indexOf("#genre#") > 0)) {
        if (iiiI1l != "") {
          let ilIIIl = iI1I1I1I.replace("{name}", encodeURIComponent(lli11iI)).replace("{cate}", encodeURIComponent(i1I1l1i));
          let ilI1ilI = ilIIIl.indexOf("<");
          let iili1I1i = ilIIIl.lastIndexOf(">");
          if (ilI1ilI > -1 && iili1I1i > ilI1ilI) {
            let I11Ilili = ilIIIl.substring(ilI1ilI, iili1I1i + 1);
            let I1liliII = new RegExp(I11Ilili.replace(/<|>/g, ""));
            let lii11liI = lli11iI.replace(I1liliII, function (Ili1lIi1, iiliII1l) {
              return iiliII1l;
            });
            ilIIIl = ilIIIl.replace(I11Ilili, lii11liI);
            console.log(lli11iI + ", " + ilIIIl);
          }
          let IiiIIiIi = {
            "vod_id": IliI1i + "$$$" + cates[IliI1i].length,
            "vod_name": lli11iI,
            "vod_pic": ilIIIl,
            "vod_remarks": "",
            "type_name": "直播列表",
            "vod_year": "",
            "vod_area": "",
            "vod_actor": "",
            "vod_director": "",
            "vod_content": "",
            "vod_play_from": i1I1l1i,
            "vod_play_url": iiiI1l
          };
          cates[IliI1i].push(IiiIIiIi);
        }
        lli11iI = lIliIii.split(",")[0].trim();
        iiiI1l = "";
      } else if (lIliIii.indexOf(",") > 0 && /http|rtmp|rtsp|rsp/.test(lIliIii)) {
        let l1iiI1ii = lIliIii.split(",");
        if (iiiI1l != "") {
          iiiI1l += "#";
        }
        iiiI1l += l1iiI1ii[0].trim() + "$" + l1iiI1ii[1].trim();
      }
    }
    if (iiiI1l != "") {
      let II1Iliil = iI1I1I1I.replace("{name}", encodeURIComponent(lli11iI)).replace("{cate}", encodeURIComponent(i1I1l1i));
      let ilI1ilI = II1Iliil.indexOf("<");
      let iili1I1i = II1Iliil.lastIndexOf(">");
      if (ilI1ilI > -1 && iili1I1i > ilI1ilI) {
        let I11Ilili = II1Iliil.substring(ilI1ilI, iili1I1i + 1);
        let I1liliII = new RegExp(I11Ilili.replace(/<|>/g, ""));
        let lii11liI = I1liliII.test(lli11iI) ? lli11iI.match(I1liliII)[1] : "null";
        II1Iliil = II1Iliil.replace(I11Ilili, lii11liI);
      }
      let IiiIIiIi = {
        "vod_id": IliI1i + "$$$" + cates[IliI1i].length,
        "vod_name": lli11iI,
        "vod_pic": II1Iliil,
        "vod_remarks": "",
        "type_name": "直播列表",
        "vod_year": "",
        "vod_area": "",
        "vod_actor": "",
        "vod_director": "",
        "vod_content": "",
        "vod_play_from": i1I1l1i,
        "vod_play_url": iiiI1l
      };
      cates[IliI1i].push(IiiIIiIi);
    }
  }
  return cates[IliI1i];
}
function homeVod(liIIlIl1) {
  let iIl1IIii = getCateData(classes[0].type_id);
  let I1l1iil = JSON.stringify({
    "list": iIl1IIii
  });
  return I1l1iil;
}
function category(I1l1i1Ii, l1IiiIli, IIi1Illi, lilIliIl) {
  let IIi1i1ll = [];
  if (l1IiiIli == 1) {
    IIi1i1ll = getCateData(I1l1i1Ii);
  }
  let iIiiIi1i = JSON.stringify({
    "list": IIi1i1ll
  });
  return iIiiIi1i;
}
function detail(lIl11iii) {
  let I1IIIil = lIl11iii.split("$$$");
  let liiiil1i = I1IIIil[0];
  let l1l111II = liiiil1i.split("$")[0];
  let Il1li11i = parseInt(I1IIIil[1]);
  let Iill11Ii = getCateData(liiiil1i)[Il1li11i];
  console.log(JSON.stringify(Iill11Ii));
  if (l1l111II.indexOf("!!") >= 0) {
    l1l111II = l1l111II.replace("!!", "");
    const ii1l1iil = Iill11Ii.vod_play_url.split("#");
    console.log(JSON.stringify(ii1l1iil));
    let i1Ili1I = {};
    let IIIllli1 = {};
    for (const i1IiIlIl of ii1l1iil) {
      let Ill1iii1 = i1IiIlIl.split("$")[0];
      let IIiIII11 = l1l111II;
      if (Ill1iii1.indexOf("---") > 0) {
        IIiIII11 = Ill1iii1.split("---")[1];
        Ill1iii1 = Ill1iii1.split("---")[0];
      }
      if (!i1Ili1I.hasOwnProperty(Ill1iii1)) {
        i1Ili1I[Ill1iii1] = 1;
      } else {
        i1Ili1I[Ill1iii1]++;
      }
      IIiIII11 = l1l111II + (i1Ili1I[Ill1iii1] > 1 ? " " + i1Ili1I[Ill1iii1] : "");
      if (!IIIllli1.hasOwnProperty(IIiIII11)) {
        IIIllli1[IIiIII11] = [];
      }
      IIIllli1[IIiIII11].push(Ill1iii1 + "$" + i1IiIlIl.split("$")[1]);
    }
    let III1i1ii = [];
    let iii1lIIi = [];
    for (let iliI1I1i in IIIllli1) {
      III1i1ii.push(iliI1I1i);
      iii1lIIi.push(IIIllli1[iliI1I1i].join("#"));
    }
    Iill11Ii.vod_play_from = III1i1ii.join("$$$");
    Iill11Ii.vod_play_url = iii1lIIi.join("$$$");
  }
  return JSON.stringify({
    "list": [Iill11Ii]
  });
}
function play(l1llIIii, illiiIII, lIIIiIiI) {
  return JSON.stringify({
    "parse": 0,
    "url": illiiIII
  });
}
function search(I1lll, lI1iiIII) {
  return null;
}
__JS_SPIDER__ = {
  "init": init,
  "home": home,
  "homeVod": homeVod,
  "category": category,
  "detail": detail,
  "play": play,
  "search": search
};
iｉl = "jsjiami.com.v6";