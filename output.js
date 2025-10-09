//Thu Oct 09 2025 03:27:16 GMT+0000 (Coordinated Universal Time)
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
    const _0xf2d12f = await fetch("/static/M.json", {
      "cache": "no-store"
    });
    if (!_0xf2d12f.ok) throw new Error("HTTP 错误！状态码: " + _0xf2d12f.status);
    const _0xad8b2b = await _0xf2d12f.json();
    cachedData = _0xad8b2b;
    return _0xad8b2b;
  } catch (_0x1dddfe) {
    console.error("获取数据失败:", _0x1dddfe);
    throw _0x1dddfe;
  }
}
function renderOptions(_0x11524f) {
  const _0x523809 = document.getElementById("optionsList"),
    _0x23b669 = document.getElementById("input-container");
  _0x523809.innerHTML = "";
  _0x523809.style.width = _0x23b669.offsetWidth + "px";
  _0x11524f.urls && _0x11524f.urls.length > 0 ? _0x11524f.urls.forEach(_0x35bbd3 => {
    const _0x1fa367 = document.createElement("div");
    _0x1fa367.classList.add("option");
    _0x1fa367.onclick = () => selectOption(_0x35bbd3.url);
    const _0x6dded7 = document.createElement("span");
    _0x6dded7.textContent = _0x35bbd3.name;
    const _0x49eb8f = document.createElement("span");
    _0x49eb8f.textContent = _0x35bbd3.url;
    _0x49eb8f.classList.add("url");
    const _0x2d4788 = document.createElement("div");
    _0x2d4788.classList.add("scrollable");
    _0x2d4788.appendChild(_0x49eb8f);
    _0x1fa367.appendChild(_0x6dded7);
    _0x1fa367.appendChild(_0x2d4788);
    _0x523809.appendChild(_0x1fa367);
  }) : _0x523809.innerHTML = "<div class=\"error\">无可用数据</div>";
}
function toggleOptions() {
  const _0x23c3ff = document.getElementById("optionsList");
  if (_0x23c3ff.style.display === "block") {
    _0x23c3ff.style.display = "none";
    return;
  }
  _0x23c3ff.innerHTML = "<div class=\"loading\">加载中...</div>";
  _0x23c3ff.style.display = "block";
  fetchData().then(_0x2620ff => {
    renderOptions(_0x2620ff);
  }).catch(_0x35966c => {
    console.error("加载失败:", _0x35966c);
    _0x23c3ff.innerHTML = "<div class=\"error\">加载失败，请刷新重试</div>";
  });
}
function selectOption(_0x3eb121) {
  inputField.value = _0x3eb121;
  optionsList.style.display = "none";
  clearInputButton.style.display = "flex";
}
document.addEventListener("click", function (_0x20cd71) {
  if (!_0x20cd71.target.closest("#input-wrapper")) {
    optionsList.style.display = "none";
  }
});
function getIPTV() {
  var _0x4a4cac = inputField.value;
  if (_0x4a4cac === "") {
    showErrorMessage("请输入接口链接！");
    return;
  }
  document.getElementById("loading-message").style.display = "block";
  document.getElementById("error-message").style.display = "none";
  fetch("https://yf2025.lovestoblog.com/jiemi/get_jiemi.php", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "body": "url=" + encodeURIComponent(_0x4a4cac)
  }).then(_0x4af813 => {
    {
      document.getElementById("loading-message").style.display = "none";
      if (!_0x4af813.ok) {
        showErrorMessage("请求失败，状态码：" + _0x4af813.status);
        throw new Error("请求失败，状态码：" + _0x4af813.status);
      }
      return _0x4af813.text();
    }
  }).then(_0x4e0ee0 => {
    if (_0x4e0ee0.trim() === "") showErrorMessage("请检查链接是否正确。");else {
      try {
        var _0x229563 = JSON.parse(_0x4e0ee0),
          _0x521dae = JSON.stringify(_0x229563, null, 4);
        _0x521dae = _0x521dae.replace(/("(sites|lives|parses|rules|proxy|flags|ijk|doh|ips)": \[\n)([\s\S]*?)(\n    ])/g, function (_0x37ef7b, _0x5d08eb, _0x49cf94, _0x4d598a, _0x123543) {
          {
            var _0x2f71b9 = _0x4d598a.replace(/^ {4}/gm, "");
            return _0x5d08eb + _0x2f71b9 + _0x123543;
          }
        });
        document.getElementById("output").value = _0x521dae;
      } catch (_0x52675d) {
        document.getElementById("output").value = _0x4e0ee0;
      }
    }
  }).catch(_0xea12e1 => {
    document.getElementById("loading-message").style.display = "none";
    showErrorMessage("网络请求失败，请检查网页链接的合法性，或者稍后重试。错误详情：" + _0xea12e1.message + "。");
  });
}
function toggleLoading(_0x5c3fe8) {
  _0x5c3fe8 ? document.body.style.cursor = "progress" : document.body.style.cursor = "default";
}
function copyInput() {
  if (inputField.value === "") {
    showErrorMessage("输入框为空，无法复制！");
    return;
  }
  inputField.select();
  document.execCommand("copy");
  alert("已复制接口链接到剪贴板！");
}
function copyOutput() {
  var _0x70cf61 = document.getElementById("output");
  if (_0x70cf61.value.trim() === "") {
    showErrorMessage("输出框为空，无法复制！");
    return;
  }
  _0x70cf61.select();
  document.execCommand("copy");
  alert("已复制内容到剪贴板！");
}
function downloadJar() {
  const _0x3d316b = document.getElementById("output"),
    _0x1145f6 = document.getElementById("input-field"),
    _0x12d972 = _0x3d316b.value.trim(),
    _0x5b48d6 = _0x1145f6.value.trim();
  if (!_0x12d972) {
    {
      alert("输出框为空，无法提取链接！");
      return;
    }
  }
  if (!_0x5b48d6) {
    alert("输入框为空，无法获取链接！");
    return;
  }
  const _0x18fb5c = _0x12d972.match(/"spider":\s*"(.*?)(?=[";])/);
  if (!_0x18fb5c?.[1]) {
    alert("输出框中未找到 spider 属性下的链接！");
    return;
  }
  let _0x193caf = _0x18fb5c[1].trim();
  if (_0x193caf.startsWith("./")) {
    {
      const _0x1b6c52 = _0x5b48d6.match(/(https?:\/\/[^\/]+(?:\/[^\/]*)*\/)/);
      if (!_0x1b6c52) {
        {
          alert("无法从输入框提取基础链接！");
          return;
        }
      }
      _0x193caf = _0x1b6c52[1] + _0x193caf.slice(2);
    }
  }
  alert(" jar 下载链接：\n" + _0x193caf);
  if (/^https?:\/\/我不是\.摸鱼儿\.com\//.test(_0x193caf) || /^https?:\/\/jar\.u\.xn--dkw\.xn/.test(_0x193caf)) {
    {
      copyAndAlert(_0x193caf);
      return;
    }
  }
  tryAllDownloadMethods(_0x193caf);
}
function tryAllDownloadMethods(_0x4d5ee7) {
  if (isSpecialDomain(_0x4d5ee7)) {
    copyAndAlert(_0x4d5ee7);
    return;
  }
  simpleDownload(_0x4d5ee7);
  setTimeout(() => {
    !downloadSuccess && iframeDownload(_0x4d5ee7);
    setTimeout(() => {
      !downloadSuccess && forceBlobDownload(_0x4d5ee7);
    }, 2000);
  }, 5000);
}
let downloadSuccess = false;
function isSpecialDomain(_0xd559f) {
  return /^https?:\/\/我不是\.摸鱼儿\.com\//.test(_0xd559f) || /^https?:\/\/jar\.u\.xn--dkw\.xn/.test(_0xd559f);
}
function simpleDownload(_0x1ad942) {
  const _0x46d0ff = document.createElement("a");
  _0x46d0ff.href = _0x1ad942;
  _0x46d0ff.download = getFileName(_0x1ad942);
  _0x46d0ff.style.display = "none";
  _0x46d0ff.onclick = () => {
    downloadSuccess = true;
  };
  document.body.appendChild(_0x46d0ff);
  _0x46d0ff.click();
  setTimeout(() => _0x46d0ff.remove(), 100);
}
function iframeDownload(_0x243d29) {
  const _0x3fd5e7 = document.createElement("iframe");
  _0x3fd5e7.src = _0x243d29;
  _0x3fd5e7.style.display = "none";
  _0x3fd5e7.onload = () => {
    downloadSuccess = true;
  };
  document.body.appendChild(_0x3fd5e7);
  setTimeout(() => _0x3fd5e7.remove(), 5000);
}
function forceBlobDownload(_0x365fda) {
  fetch(_0x365fda, {
    "headers": {
      "User-Agent": "okhttp/5.0.0"
    },
    "redirect": "follow"
  }).then(_0xed056a => {
    if (!_0xed056a.ok) throw new Error("HTTP " + _0xed056a.status);
    return _0xed056a.blob();
  }).then(_0x5b4b28 => {
    {
      const _0x24bfcc = URL.createObjectURL(_0x5b4b28),
        _0x336fd1 = document.createElement("a");
      _0x336fd1.href = _0x24bfcc;
      _0x336fd1.download = getFileName(_0x365fda);
      _0x336fd1.style.display = "none";
      _0x336fd1.onclick = () => {
        downloadSuccess = true;
      };
      document.body.appendChild(_0x336fd1);
      _0x336fd1.click();
      setTimeout(() => {
        _0x336fd1.remove();
        URL.revokeObjectURL(_0x24bfcc);
      }, 100);
    }
  }).catch(_0x54bb9d => console.error("Blob下载失败:", _0x54bb9d));
}
function getFileName(_0x560dbc) {
  const _0x1c258a = new URL(_0x560dbc).pathname.split("/").pop() || "file.jar";
  return _0x1c258a.endsWith(".jar") ? _0x1c258a : "file.jar";
}
function copyAndAlert(_0x140f67) {
  copyToClipboard(_0x140f67).then(() => alert("请粘贴到支持修改UA的下载工具或浏览器中手动下载\n\n推荐使用手机浏览器、\"IDM+\"等下载工具\n\njar下载链接：\n\n" + _0x140f67)).catch(() => alert("无法复制链接，请手动记录：\n" + _0x140f67));
}
function copyToClipboard(_0x1dcf9d) {
  return new Promise((_0x136ba2, _0x1fbb50) => {
    {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(_0x1dcf9d).then(_0x136ba2).catch(_0x1fbb50);
      } else {
        {
          const _0x1b1533 = document.createElement("textarea");
          _0x1b1533.value = _0x1dcf9d;
          _0x1b1533.style.position = "fixed";
          document.body.appendChild(_0x1b1533);
          _0x1b1533.select();
          try {
            {
              const _0x4a2e07 = document.execCommand("copy");
              document.body.removeChild(_0x1b1533);
              _0x4a2e07 ? _0x136ba2() : _0x1fbb50(new Error("复制失败"));
            }
          } catch (_0x4ab209) {
            document.body.removeChild(_0x1b1533);
            _0x1fbb50(_0x4ab209);
          }
        }
      }
    }
  });
}
function clearOutput() {
  var _0x74f8fd = document.getElementById("input-field");
  var _0x5c6381 = document.getElementById("output");
  if (_0x74f8fd.value.trim() === "" && _0x5c6381.value.trim() === "") {
    showErrorMessage("无数据，无需清空！😂");
    return;
  }
  _0x74f8fd.value = "";
  _0x5c6381.value = "";
  clearInputButton.style.display = "none";
  optionsList.style.display = "none";
}
function showErrorMessage(_0x107aa6) {
  var _0x5b4399 = document.getElementById("error-message");
  _0x5b4399.textContent = _0x107aa6;
  _0x5b4399.style.display = "block";
}
document.getElementById("output").readOnly = true;