//Thu Oct 09 2025 03:01:54 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var inputField = document.getElementById("input-field"),
  clearInputButton = document.getElementById("clear-input-button"),
  optionsList = document.getElementById("optionsList");
inputField.addEventListener("input", function () {
  inputField.value.trim() !== "" ? clearInputButton.style.display = "flex" : clearInputButton.style.display = "none";
});
function clearInput() {
  inputField.value = "";
  clearInputButton.style.display = "none";
  optionsList.style.display = "none";
}
let cachedData = null;
async function fetchData() {
  if (cachedData) return cachedData;
  try {
    const _0x1a09a8 = await fetch("/static/M.json", {
      "cache": "no-store"
    });
    if (!_0x1a09a8.ok) throw new Error("HTTP 错误！状态码: " + _0x1a09a8.status);
    const _0x3997e8 = await _0x1a09a8.json();
    cachedData = _0x3997e8;
    return _0x3997e8;
  } catch (_0x35feea) {
    {
      console.error("获取数据失败:", _0x35feea);
      throw _0x35feea;
    }
  }
}
function renderOptions(_0x1f46de) {
  const _0x4077c6 = document.getElementById("optionsList"),
    _0x2d157e = document.getElementById("input-container");
  _0x4077c6.innerHTML = "";
  _0x4077c6.style.width = _0x2d157e.offsetWidth + "px";
  _0x1f46de.urls && _0x1f46de.urls.length > 0 ? _0x1f46de.urls.forEach(_0x412e60 => {
    const _0x485326 = document.createElement("div");
    _0x485326.classList.add("option");
    _0x485326.onclick = () => selectOption(_0x412e60.url);
    const _0x14a4ff = document.createElement("span");
    _0x14a4ff.textContent = _0x412e60.name;
    const _0x4350bd = document.createElement("span");
    _0x4350bd.textContent = _0x412e60.url;
    _0x4350bd.classList.add("url");
    const _0x2e5148 = document.createElement("div");
    _0x2e5148.classList.add("scrollable");
    _0x2e5148.appendChild(_0x4350bd);
    _0x485326.appendChild(_0x14a4ff);
    _0x485326.appendChild(_0x2e5148);
    _0x4077c6.appendChild(_0x485326);
  }) : _0x4077c6.innerHTML = "<div class=\"error\">无可用数据</div>";
}
function toggleOptions() {
  const _0xb60d89 = document.getElementById("optionsList");
  if (_0xb60d89.style.display === "block") {
    _0xb60d89.style.display = "none";
    return;
  }
  _0xb60d89.innerHTML = "<div class=\"loading\">加载中...</div>";
  _0xb60d89.style.display = "block";
  fetchData().then(_0x38fe66 => {
    renderOptions(_0x38fe66);
  }).catch(_0x10cac3 => {
    console.error("加载失败:", _0x10cac3);
    _0xb60d89.innerHTML = "<div class=\"error\">加载失败，请刷新重试</div>";
  });
}
function selectOption(_0x535baa) {
  inputField.value = _0x535baa;
  optionsList.style.display = "none";
  clearInputButton.style.display = "flex";
}
document.addEventListener("click", function (_0x326759) {
  !_0x326759.target.closest("#input-wrapper") && (optionsList.style.display = "none");
});
function getIPTV() {
  var _0x4f2520 = inputField.value;
  if (_0x4f2520 === "") {
    {
      showErrorMessage("请输入接口链接！");
      return;
    }
  }
  document.getElementById("loading-message").style.display = "block";
  document.getElementById("error-message").style.display = "none";
  fetch("http://www.2015888.xyz/jiemi/get_jiemi.php", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "body": "url=" + encodeURIComponent(_0x4f2520)
  }).then(_0x3d575d => {
    {
      document.getElementById("loading-message").style.display = "none";
      if (!_0x3d575d.ok) {
        showErrorMessage("请求失败，状态码：" + _0x3d575d.status);
        throw new Error("请求失败，状态码：" + _0x3d575d.status);
      }
      return _0x3d575d.text();
    }
  }).then(_0x5c1e97 => {
    if (_0x5c1e97.trim() === "") showErrorMessage("请检查链接是否正确。");else try {
      var _0x33cc1f = JSON.parse(_0x5c1e97),
        _0x353e5a = JSON.stringify(_0x33cc1f, null, 4);
      _0x353e5a = _0x353e5a.replace(/("(sites|lives|parses|rules|proxy|flags|ijk|doh|ips)": \[\n)([\s\S]*?)(\n    ])/g, function (_0x7f9e00, _0x59e0ac, _0x39a75b, _0x412750, _0x42d547) {
        var _0x46f19b = _0x412750.replace(/^ {4}/gm, "");
        return _0x59e0ac + _0x46f19b + _0x42d547;
      });
      document.getElementById("output").value = _0x353e5a;
    } catch (_0x5dac24) {
      document.getElementById("output").value = _0x5c1e97;
    }
  }).catch(_0x158a78 => {
    document.getElementById("loading-message").style.display = "none";
    showErrorMessage("网络请求失败，请检查网页链接的合法性，或者稍后重试。错误详情：" + _0x158a78.message + "。");
  });
}
function toggleLoading(_0x2003d5) {
  if (_0x2003d5) document.body.style.cursor = "progress";else {
    document.body.style.cursor = "default";
  }
}
function copyInput() {
  if (inputField.value === "") {
    {
      showErrorMessage("输入框为空，无法复制！");
      return;
    }
  }
  inputField.select();
  document.execCommand("copy");
  alert("已复制接口链接到剪贴板！");
}
function copyOutput() {
  var _0x47c2ab = document.getElementById("output");
  if (_0x47c2ab.value.trim() === "") {
    showErrorMessage("输出框为空，无法复制！");
    return;
  }
  _0x47c2ab.select();
  document.execCommand("copy");
  alert("已复制内容到剪贴板！");
}
function downloadJar() {
  const _0x12621e = document.getElementById("output"),
    _0x11775f = document.getElementById("input-field"),
    _0x3a8937 = _0x12621e.value.trim(),
    _0x4a9089 = _0x11775f.value.trim();
  if (!_0x3a8937) {
    {
      alert("输出框为空，无法提取链接！");
      return;
    }
  }
  if (!_0x4a9089) {
    {
      alert("输入框为空，无法获取链接！");
      return;
    }
  }
  const _0x4ba204 = _0x3a8937.match(/"spider":\s*"(.*?)(?=[";])/);
  if (!_0x4ba204?.[1]) {
    alert("输出框中未找到 spider 属性下的链接！");
    return;
  }
  let _0x8062c1 = _0x4ba204[1].trim();
  if (_0x8062c1.startsWith("./")) {
    const _0x5a5cb5 = _0x4a9089.match(/(https?:\/\/[^\/]+(?:\/[^\/]*)*\/)/);
    if (!_0x5a5cb5) {
      {
        alert("无法从输入框提取基础链接！");
        return;
      }
    }
    _0x8062c1 = _0x5a5cb5[1] + _0x8062c1.slice(2);
  }
  alert(" jar 下载链接：\n" + _0x8062c1);
  if (/^https?:\/\/我不是\.摸鱼儿\.com\//.test(_0x8062c1) || /^https?:\/\/jar\.u\.xn--dkw\.xn/.test(_0x8062c1)) {
    {
      copyAndAlert(_0x8062c1);
      return;
    }
  }
  tryAllDownloadMethods(_0x8062c1);
}
function tryAllDownloadMethods(_0xc63fc) {
  if (isSpecialDomain(_0xc63fc)) {
    copyAndAlert(_0xc63fc);
    return;
  }
  simpleDownload(_0xc63fc);
  setTimeout(() => {
    !downloadSuccess && iframeDownload(_0xc63fc);
    setTimeout(() => {
      !downloadSuccess && forceBlobDownload(_0xc63fc);
    }, 2000);
  }, 5000);
}
let downloadSuccess = false;
function isSpecialDomain(_0x2e7cf5) {
  return /^https?:\/\/我不是\.摸鱼儿\.com\//.test(_0x2e7cf5) || /^https?:\/\/jar\.u\.xn--dkw\.xn/.test(_0x2e7cf5);
}
function simpleDownload(_0x42ccd2) {
  const _0xcbad50 = document.createElement("a");
  _0xcbad50.href = _0x42ccd2;
  _0xcbad50.download = getFileName(_0x42ccd2);
  _0xcbad50.style.display = "none";
  _0xcbad50.onclick = () => {
    downloadSuccess = true;
  };
  document.body.appendChild(_0xcbad50);
  _0xcbad50.click();
  setTimeout(() => _0xcbad50.remove(), 100);
}
function iframeDownload(_0xb2ff03) {
  const _0x215d55 = document.createElement("iframe");
  _0x215d55.src = _0xb2ff03;
  _0x215d55.style.display = "none";
  _0x215d55.onload = () => {
    downloadSuccess = true;
  };
  document.body.appendChild(_0x215d55);
  setTimeout(() => _0x215d55.remove(), 5000);
}
function forceBlobDownload(_0x315637) {
  fetch(_0x315637, {
    "headers": {
      "User-Agent": "okhttp/5.0.0"
    },
    "redirect": "follow"
  }).then(_0x2886da => {
    if (!_0x2886da.ok) throw new Error("HTTP " + _0x2886da.status);
    return _0x2886da.blob();
  }).then(_0x1d964b => {
    {
      const _0x442be9 = URL.createObjectURL(_0x1d964b),
        _0x30d1a9 = document.createElement("a");
      _0x30d1a9.href = _0x442be9;
      _0x30d1a9.download = getFileName(_0x315637);
      _0x30d1a9.style.display = "none";
      _0x30d1a9.onclick = () => {
        downloadSuccess = true;
      };
      document.body.appendChild(_0x30d1a9);
      _0x30d1a9.click();
      setTimeout(() => {
        _0x30d1a9.remove();
        URL.revokeObjectURL(_0x442be9);
      }, 100);
    }
  }).catch(_0x5b9284 => console.error("Blob下载失败:", _0x5b9284));
}
function getFileName(_0x592d66) {
  const _0x3df75a = new URL(_0x592d66).pathname.split("/").pop() || "file.jar";
  return _0x3df75a.endsWith(".jar") ? _0x3df75a : "file.jar";
}
function copyAndAlert(_0x1d4446) {
  copyToClipboard(_0x1d4446).then(() => alert("请粘贴到支持修改UA的下载工具或浏览器中手动下载\n\n推荐使用手机浏览器、\"IDM+\"等下载工具\n\njar下载链接：\n\n" + _0x1d4446)).catch(() => alert("无法复制链接，请手动记录：\n" + _0x1d4446));
}
function copyToClipboard(_0x2e1517) {
  return new Promise((_0x19e227, _0xcbed4c) => {
    if (navigator.clipboard) navigator.clipboard.writeText(_0x2e1517).then(_0x19e227).catch(_0xcbed4c);else {
      const _0x1057c3 = document.createElement("textarea");
      _0x1057c3.value = _0x2e1517;
      _0x1057c3.style.position = "fixed";
      document.body.appendChild(_0x1057c3);
      _0x1057c3.select();
      try {
        {
          const _0x357990 = document.execCommand("copy");
          document.body.removeChild(_0x1057c3);
          _0x357990 ? _0x19e227() : _0xcbed4c(new Error("复制失败"));
        }
      } catch (_0x499d9d) {
        document.body.removeChild(_0x1057c3);
        _0xcbed4c(_0x499d9d);
      }
    }
  });
}
function clearOutput() {
  var _0xb64c4a = document.getElementById("input-field");
  var _0x209f5a = document.getElementById("output");
  if (_0xb64c4a.value.trim() === "" && _0x209f5a.value.trim() === "") {
    showErrorMessage("无数据，无需清空！😂");
    return;
  }
  _0xb64c4a.value = "";
  _0x209f5a.value = "";
  clearInputButton.style.display = "none";
  optionsList.style.display = "none";
}
function showErrorMessage(_0x5d52ab) {
  var _0x161f5b = document.getElementById("error-message");
  _0x161f5b.textContent = _0x5d52ab;
  _0x161f5b.style.display = "block";
}
document.getElementById("output").readOnly = true;