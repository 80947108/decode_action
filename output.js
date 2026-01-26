//Mon Jan 26 2026 08:47:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const CENTRAL_API_URL = "https://smarttelegrambot.horsenma.net/get-params";
const CHANNELS_URL = "https://smarttelegrambot.horsenma.net/get-channels";
const CHANNELS_KEY = "channels_json";
const AUTH_PARAMS_KEY = "auth_params";
const AUTH_EXPIRED_KEY = "auth_expired";
const CACHE_EXPIRE_SECONDS = 86400;
const SEED = "tvata nginx auth module";
export default {
  async fetch(request, _0x150421) {
    const _0xc2f2a = new URL(request.url);
    const _0x317a32 = _0x150421.REQUIRED_TOKEN || "";
    const _0x10716d = _0xc2f2a.searchParams.get("id") || "";
    const ts = _0xc2f2a.searchParams.get("ts") || "";
    const _0x3957b3 = await _0x150421.KV.get(AUTH_EXPIRED_KEY);
    if (_0x3957b3 === "true") {
      console.log("全局失效标志已设，所有请求失效");
      return _0x10716d ? new Response("Authentication parameters expired.", {
        status: 403
      }) : new Response("#EXTM3U\n#ERROR: Parameters expired, please refresh or contact admin", {
        headers: {
          "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8"
        },
        status: 403
      });
    }
    let cachedAuthParams = await getCachedAuthParams(_0x150421);
    if (!cachedAuthParams) {
      return new Response("Failed to fetch auth parameters.", {
        status: 500
      });
    }
    const authParams = cachedAuthParams;
    if (_0x10716d) {
      if (_0xc2f2a.searchParams.get("kv_key") !== authParams.kv_key || _0xc2f2a.searchParams.get("username") !== authParams.username || _0xc2f2a.searchParams.get("password") !== authParams.password || _0xc2f2a.searchParams.get("token") !== authParams.token) {
        return new Response("Invalid or missing authentication parameters.", {
          status: 403
        });
      }
    } else {
      const token = _0xc2f2a.searchParams.get("token") || "";
      if (!_0x317a32 || token !== _0x317a32) {
        return new Response("Invalid or missing token.", {
          status: 403
        });
      }
    }
    let _0x43362d = await getParamsFromCentral(_0x150421);
    if (!_0x43362d) {
      return new Response("Failed to fetch parameters.", {
        status: 500
      });
    }
    const {
      SERVER_HOSTS: _0x58250d,
      POSSIBLE_TIDS: _0x4f5c31,
      CHANNEL_API_BASE: _0x3ff34f
    } = _0x43362d;
    const _0x3647cc = _0xc2f2a.searchParams.get("refresh") === "1";
    if (_0x10716d) {
      if (ts) {
        return proxyTS(request, _0x10716d, ts, _0x58250d);
      }
      return proxyM3U8(request, _0x10716d, _0x150421, authParams, _0x58250d, _0x4f5c31);
    }
    return handleM3UList(request, _0x150421, _0x3647cc, _0xc2f2a, _0x317a32, _0x3ff34f, _0x4f5c31, authParams);
  }
};
async function getCachedAuthParams(_0x8deac3) {
  const _0x36e916 = AUTH_PARAMS_KEY;
  console.log("[authParams] 开始获取 auth_params，cacheKey:", _0x36e916);
  try {
    console.log("[authParams] 尝试读取 KV 缓存...");
    const _0xc72f1f = await _0x8deac3.KV.get(_0x36e916);
    if (_0xc72f1f) {
      console.log("[authParams] KV 缓存存在，长度:", _0xc72f1f.length);
      const _0x46dafe = JSON.parse(_0xc72f1f);
      const _0x4b1ba5 = Date.now() - _0x46dafe._cacheTime;
      console.log("[authParams] 缓存时间戳:", _0x46dafe._cacheTime, "当前时间差(ms):", _0x4b1ba5);
      if (_0x4b1ba5 < CACHE_EXPIRE_SECONDS * 1000) {
        console.log("[authParams] 使用有效 KV 缓存");
        return _0x46dafe.params;
      } else {
        console.log("[authParams] 缓存已过期，将从 API 重新获取");
      }
    } else {
      console.log("[authParams] KV 中无缓存");
    }
  } catch (_0xa2ad2) {
    console.error("[authParams] KV 缓存读取失败:", _0xa2ad2.message, _0xa2ad2.stack);
  }
  const _0x44485c = _0x8deac3.MY_KV_KEY || "";
  const _0x1e603e = _0x8deac3.MY_USERNAME || "";
  const _0x2adbaf = _0x8deac3.MY_PASSWORD || "";
  const _0x2c807e = _0x8deac3.MY_TOKEN || "";
  console.log("[authParams] 环境变量检查:");
  console.log(" MY_KV_KEY :", _0x44485c ? "存在" : "缺失/空");
  console.log(" MY_USERNAME :", _0x1e603e ? "存在" : "缺失/空");
  console.log(" MY_PASSWORD :", _0x2adbaf ? "存在" : "缺失/空");
  console.log(" MY_TOKEN :", _0x2c807e ? "存在" : "缺失/空");
  if (!_0x44485c || !_0x1e603e || !_0x2adbaf || !_0x2c807e) {
    console.error("[authParams] 缺少必要的凭证环境变量，无法继续");
    return null;
  }
  const _0x3d6ddf = CENTRAL_API_URL + "?kv_key=" + encodeURIComponent(_0x44485c) + "&username=" + encodeURIComponent(_0x1e603e) + "&password=" + encodeURIComponent(_0x2adbaf) + "&token=" + encodeURIComponent(_0x2c807e);
  console.log("[authParams] 调用中央 API:", _0x3d6ddf);
  try {
    console.log("[authParams] 发起 fetch 请求...");
    const _0x532440 = await fetch(_0x3d6ddf);
    console.log("[authParams] API 响应状态:", _0x532440.status);
    if (_0x532440.ok) {
      const text = await _0x532440.text();
      console.log("[authParams] API 返回内容长度:", text.length);
      try {
        const _0x1711da = JSON.parse(text);
        console.log("[authParams] 解析成功，newParams keys:", Object.keys(_0x1711da));
        const newAuth = {
          kv_key: _0x1711da.kv_key || _0x44485c,
          username: _0x1711da.username || _0x1e603e,
          password: _0x1711da.password || _0x2adbaf,
          token: _0x1711da.token || _0x2c807e
        };
        const _0x34866f = await _0x8deac3.KV.get(_0x36e916);
        if (_0x34866f) {
          const _0xc2b153 = JSON.parse(_0x34866f).params;
          (newAuth.kv_key !== _0xc2b153.kv_key || newAuth.username !== _0xc2b153.username || newAuth.password !== _0xc2b153.password || newAuth.token !== _0xc2b153.token) && (console.log("[authParams] 参数变化检测到，设置失效标志"), await _0x8deac3.KV.put(AUTH_EXPIRED_KEY, "true", {
            expirationTtl: CACHE_EXPIRE_SECONDS
          }));
        }
        const cacheData = {
          params: newAuth,
          _cacheTime: Date.now()
        };
        await _0x8deac3.KV.put(_0x36e916, JSON.stringify(cacheData), {
          expirationTtl: CACHE_EXPIRE_SECONDS
        });
        console.log("[authParams] 新参数已缓存到 KV");
        return newAuth;
      } catch (_0x4100bd) {
        console.error("[authParams] JSON 解析失败:", _0x4100bd.message);
        return null;
      }
    } else {
      console.error("[authParams] Bot 接口返回错误:", _0x532440.status, await _0x532440.text());
      await _0x8deac3.KV.put(AUTH_EXPIRED_KEY, "true", {
        expirationTtl: CACHE_EXPIRE_SECONDS
      });
      return null;
    }
  } catch (_0x2b77b7) {
    console.error("[authParams] fetch Bot 接口失败:", _0x2b77b7.message);
    return null;
  }
}
async function getParamsFromCentral(_0x4942cc) {
  const _0x237de2 = _0x4942cc.MY_KV_KEY || "";
  const _0x19880a = _0x4942cc.MY_USERNAME || "";
  const _0x349484 = _0x4942cc.MY_PASSWORD || "";
  const _0x4f700c = _0x4942cc.MY_TOKEN || "";
  if (!_0x237de2 || !_0x19880a || !_0x349484 || !_0x4f700c) {
    console.error("[params] 缺少环境变量");
    return null;
  }
  const _0x5f1870 = CENTRAL_API_URL + "?kv_key=" + encodeURIComponent(_0x237de2) + "&username=" + encodeURIComponent(_0x19880a) + "&password=" + encodeURIComponent(_0x349484) + "&token=" + encodeURIComponent(_0x4f700c);
  try {
    const _0x290ad2 = await fetch(_0x5f1870);
    if (!_0x290ad2.ok) {
      console.error("[params] 接口错误:", _0x290ad2.status);
      return null;
    }
    const text = await _0x290ad2.text();
    const _0x3a4139 = JSON.parse(text);
    console.log("[params] 实时获取成功");
    return _0x3a4139;
  } catch (_0x491eed) {
    console.error("[params] fetch 失败:", _0x491eed.message);
    return null;
  }
}
async function handleM3UList(request, _0xe613b, _0x4c668c, _0x4c297f, _0xd8e868, _0x26d36b, _0x2d32c6, authParams) {
  let _0x3ca055 = [];
  try {
    const _0x4776da = await _0xe613b.KV.get(CHANNELS_KEY);
    if (_0x4776da) {
      const _0x5a3f23 = JSON.parse(_0x4776da);
      const _0x7980dc = _0x5a3f23._cacheTime || 0;
      Date.now() - _0x7980dc < CACHE_EXPIRE_SECONDS * 1000 && !_0x4c668c && (_0x3ca055 = _0x5a3f23.channels || []);
    }
  } catch (_0x31e75c) {
    console.error("KV channels read error:", _0x31e75c);
  }
  if (_0x4c668c || _0x3ca055.length === 0) {
    try {
      const _0x540a5e = await fetch(CHANNELS_URL, {
        headers: {
          "Cache-Control": "no-cache"
        }
      });
      if (_0x540a5e.ok) {
        const _0x503173 = await _0x540a5e.json();
        _0x3ca055 = _0x503173.channels || [];
        if (_0x3ca055.length > 0) {
          const dataToStore = {
            channels: _0x3ca055,
            _cacheTime: Date.now()
          };
          await _0xe613b.KV.put(CHANNELS_KEY, JSON.stringify(dataToStore), {
            expirationTtl: CACHE_EXPIRE_SECONDS * 24
          });
          console.log("从服务器拉取 channels 成功，频道数：" + _0x3ca055.length);
        }
      } else {
        console.error("服务器 channels 接口失败:", _0x540a5e.status);
      }
    } catch (_0x1370bb) {
      console.error("fetch channels from server error:", _0x1370bb.message);
    }
  }
  const _0x201ed6 = new Date();
  const futureDate = new Date(_0x201ed6);
  futureDate.setDate(_0x201ed6.getDate() + 30);
  futureDate.setHours(futureDate.getHours() + 8);
  const limitedDateStr = futureDate.toISOString().split("T")[0];
  let _0x2012cf = "#EXTM3U @horsenma limited_date:" + limitedDateStr + " x-tvg-url=\"https://epg.iill.top/epg.xml\"\n";
  for (const _0x2a5ea6 of _0x3ca055) {
    if (!_0x2a5ea6.id) {
      continue;
    }
    const _0x208b3a = _0x2a5ea6.channel_name || "未知";
    const _0x180f99 = _0x2a5ea6.tvg_logo || "";
    const _0x2e8bdd = _0x2a5ea6.group_title || "其他";
    const authQuery = new URLSearchParams({
      id: _0x2a5ea6.id,
      kv_key: authParams.kv_key,
      username: authParams.username,
      password: authParams.password,
      token: authParams.token
    }).toString();
    const _0x4ece95 = _0x4c297f.origin + "/?" + authQuery;
    _0x2012cf += "#EXTINF:-1 tvg-id=\"" + _0x208b3a + "\" tvg-name=\"" + _0x208b3a + "\" tvg-logo=\"" + _0x180f99 + "\" group-title=\"" + _0x2e8bdd + "\"," + _0x208b3a + "\n";
    _0x2012cf += _0x4ece95 + "\n";
  }
  _0x3ca055.length === 0 && (_0x2012cf += "#ERROR: 没有拉到频道，请检查服务器 channels.json 或联系管理员\n");
  const _0x2d7be8 = "https://newcrypto.horsenma.net";
  const _0x419e76 = 2;
  let encryptedHex = "";
  let lastError = "";
  for (let attempt = 1; attempt <= _0x419e76 + 1; attempt++) {
    try {
      const _0x466a1b = await fetch(_0x2d7be8 + "/api/crypto/encode", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
          Referer: _0x2d7be8 + "/",
          Origin: _0x2d7be8,
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        body: _0x2012cf
      });
      if (_0x466a1b.ok) {
        encryptedHex = await _0x466a1b.text();
        if (encryptedHex.startsWith("Error") || encryptedHex.length < 20) {
          lastError = "加密结果异常: " + encryptedHex;
          encryptedHex = "";
          console.log(lastError);
          if (attempt < _0x419e76 + 1) {
            continue;
          }
        } else {
          console.log("加密成功，hex 长度:", encryptedHex.length);
          break;
        }
      } else {
        lastError = "加密接口失败，状态码: " + _0x466a1b.status + ", 响应: " + (await _0x466a1b.text());
        console.log(lastError);
        if (attempt < _0x419e76 + 1) {
          continue;
        }
      }
    } catch (_0x573887) {
      lastError = "调用加密接口异常: " + _0x573887.message;
      console.error(lastError);
      if (attempt < _0x419e76 + 1) {
        continue;
      }
    }
  }
  return encryptedHex ? new Response(encryptedHex, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": "attachment; filename=\"smt.txt\"",
      "Cache-Control": "no-cache"
    }
  }) : new Response("#EXTM3U\n#ERROR: 自动加密失败，请联系管理员\n#原因: " + (lastError || "未知"), {
    status: 503,
    headers: {
      "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
      "Cache-Control": "no-cache"
    }
  });
}
async function proxyTS(request, _0x52afbc, ts, _0x499894) {
  const _0x3acf2f = new Headers(request.headers);
  const _0x307f5e = _0x3acf2f.get("Range") || "";
  for (const host of _0x499894) {
    const targetUrl = ts.startsWith("/") ? "http://" + host + ts : "http://" + host + "/" + _0x52afbc + "/" + ts;
    try {
      const _0x518e68 = await fetch(targetUrl, {
        headers: {
          Range: _0x307f5e
        }
      });
      if (_0x518e68.ok) {
        return new Response(_0x518e68.body, {
          status: _0x518e68.status,
          headers: {
            "Content-Type": "video/mp2t",
            "Cache-Control": "public, max-age=30",
            "Accept-Ranges": "bytes"
          }
        });
      }
    } catch {}
  }
  return new Response("TS not found.", {
    status: 404
  });
}
async function proxyM3U8(request, _0x2c2a03, _0x5a16a6, authParams, _0x4605c5, _0xe453d5) {
  const _0x536db3 = new URL(request.url);
  const playlistPath = "/" + _0x2c2a03 + "/playlist.m3u8";
  let m3u8Text = null;
  for (const host of _0x4605c5) {
    for (const tid of _0xe453d5) {
      const t = Math.floor(Date.now() / 1000 / 150).toString();
      const signStr = SEED + playlistPath + tid + t;
      const tsumBuffer = await crypto.subtle.digest("MD5", new TextEncoder().encode(signStr));
      const tsum = Array.from(new Uint8Array(tsumBuffer)).map(_0x304354 => _0x304354.toString(16).padStart(2, "0")).join("");
      const _0x49a53e = new URLSearchParams({
        ct: t,
        tsum: tsum
      });
      const targetUrl = "http://" + host + playlistPath + "?tid=" + tid + "&" + _0x49a53e;
      try {
        const _0x44e7f5 = await fetch(targetUrl);
        if (_0x44e7f5.ok) {
          m3u8Text = await _0x44e7f5.text();
          if (m3u8Text.includes("#EXTM3U")) {
            break;
          }
        }
      } catch {}
    }
    if (m3u8Text) {
      break;
    }
  }
  if (!m3u8Text || !m3u8Text.includes("#EXTM3U")) {
    return new Response("#EXTM3U\n#ERROR: Failed to fetch playlist", {
      status: 404
    });
  }
  const _0xd8e5b3 = m3u8Text.split(/\r?\n/);
  const output = [];
  for (let _0x22856b of _0xd8e5b3) {
    _0x22856b = _0x22856b.trim();
    if (!_0x22856b) {
      continue;
    }
    if (_0x22856b.startsWith("#")) {
      output.push(_0x22856b);
      continue;
    }
    if (_0x22856b.includes(".ts")) {
      let tsPath = _0x22856b;
      if (tsPath.match(/^https?:\/\//i)) {
        const _0x18804d = new URL(tsPath);
        tsPath = _0x18804d.pathname + _0x18804d.search;
      }
      const authQuery = new URLSearchParams({
        id: _0x2c2a03,
        ts: tsPath,
        kv_key: authParams.kv_key,
        username: authParams.username,
        password: authParams.password,
        token: authParams.token
      }).toString();
      const _0x2c397b = _0x536db3.origin + "/?" + authQuery;
      output.push(_0x2c397b);
    } else {
      output.push(_0x22856b);
    }
  }
  return new Response(output.join("\n") + "\n", {
    headers: {
      "Content-Type": "application/vnd.apple.mpegurl",
      "Cache-Control": "public, max-age=3"
    }
  });
}