//Tue Sep 30 2025 08:51:01 GMT+0000 (Coordinated Universal Time)
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
    const _0x51a0fc = await fetch("/static/M.json", {
      "cache": "no-store"
    });
    if (!_0x51a0fc.ok) throw new Error("HTTP 错误！状态码: " + _0x51a0fc.status);
    const _0x348629 = await _0x51a0fc.json();
    cachedData = _0x348629;
    return _0x348629;
  } catch (_0x26d290) {
    console.error("获取数据失败:", _0x26d290);
    throw _0x26d290;
  }
}
function renderOptions(_0x998d9a) {
  const _0x1dc6c9 = document.getElementById("optionsList"),
    _0x4e2d59 = document.getElementById("input-container");
  _0x1dc6c9.innerHTML = "";
  _0x1dc6c9.style.width = _0x4e2d59.offsetWidth + "px";
  if (_0x998d9a.urls && _0x998d9a.urls.length > 0) _0x998d9a.urls.forEach(_0x4740fe => {
    const _0x5cd5f6 = document.createElement("div");
    _0x5cd5f6.classList.add("option");
    _0x5cd5f6.onclick = () => selectOption(_0x4740fe.url);
    const _0x51ff70 = document.createElement("span");
    _0x51ff70.textContent = _0x4740fe.name;
    const _0x2b7bfa = document.createElement("span");
    _0x2b7bfa.textContent = _0x4740fe.url;
    _0x2b7bfa.classList.add("url");
    const _0x38a237 = document.createElement("div");
    _0x38a237.classList.add("scrollable");
    _0x38a237.appendChild(_0x2b7bfa);
    _0x5cd5f6.appendChild(_0x51ff70);
    _0x5cd5f6.appendChild(_0x38a237);
    _0x1dc6c9.appendChild(_0x5cd5f6);
  });else {
    _0x1dc6c9.innerHTML = "<div class=\"error\">无可用数据</div>";
  }
}
function toggleOptions() {
  const _0x49d440 = document.getElementById("optionsList");
  if (_0x49d440.style.display === "block") {
    _0x49d440.style.display = "none";
    return;
  }
  _0x49d440.innerHTML = "<div class=\"loading\">加载中...</div>";
  _0x49d440.style.display = "block";
  fetchData().then(_0x2b8bec => {
    renderOptions(_0x2b8bec);
  }).catch(_0x2b6c43 => {
    console.error("加载失败:", _0x2b6c43);
    _0x49d440.innerHTML = "<div class=\"error\">加载失败，请刷新重试</div>";
  });
}
function selectOption(_0xc42dcc) {
  inputField.value = _0xc42dcc;
  optionsList.style.display = "none";
  clearInputButton.style.display = "flex";
}
document.addEventListener("click", function (_0x129e93) {
  !_0x129e93.target.closest("#input-wrapper") && (optionsList.style.display = "none");
});
function getIPTV() {
  var _0x1fd0a1 = inputField.value;
  if (_0x1fd0a1 === "") {
    {
      showErrorMessage("请输入接口链接！");
      return;
    }
  }
  document.getElementById("loading-message").style.display = "block";
  document.getElementById("error-message").style.display = "none";
  fetch("https://412.2015888.xyz/jiemi/get_jiemi.php", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "body": "url=" + encodeURIComponent(_0x1fd0a1)
  }).then(_0x3ad9df => {
    document.getElementById("loading-message").style.display = "none";
    if (!_0x3ad9df.ok) {
      {
        showErrorMessage("请求失败，状态码：" + _0x3ad9df.status);
        throw new Error("请求失败，状态码：" + _0x3ad9df.status);
      }
    }
    return _0x3ad9df.text();
  }).then(_0x4714ca => {
    {
      if (_0x4714ca.trim() === "") showErrorMessage("请检查链接是否正确。");else try {
        {
          var _0x26c088 = JSON.parse(_0x4714ca),
            _0x4b4ba4 = JSON.stringify(_0x26c088, null, 4);
          _0x4b4ba4 = _0x4b4ba4.replace(/("(sites|lives|parses|rules|proxy|flags|ijk|doh|ips)": \[\n)([\s\S]*?)(\n    ])/g, function (_0x203ddc, _0x564860, _0x1ad8a6, _0x1544f6, _0x570cd9) {
            var _0x603222 = _0x1544f6.replace(/^ {4}/gm, "");
            return _0x564860 + _0x603222 + _0x570cd9;
          });
          document.getElementById("output").value = _0x4b4ba4;
        }
      } catch (_0x2066f4) {
        document.getElementById("output").value = _0x4714ca;
      }
    }
  }).catch(_0x2caee0 => {
    document.getElementById("loading-message").style.display = "none";
    showErrorMessage("网络请求失败，请检查网页链接的合法性，或者稍后重试。错误详情：" + _0x2caee0.message + "。");
  });
}
function toggleLoading(_0xe62db4) {
  if (_0xe62db4) document.body.style.cursor = "progress";else {
    document.body.style.cursor = "default";
  }
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
  var _0x14ae97 = document.getElementById("output");
  if (_0x14ae97.value.trim() === "") {
    showErrorMessage("输出框为空，无法复制！");
    return;
  }
  _0x14ae97.select();
  document.execCommand("copy");
  alert("已复制内容到剪贴板！");
}
function downloadJar() {
  const _0x7cd388 = document.getElementById("output"),
    _0x2fb9bb = document.getElementById("input-field"),
    _0x21be6b = _0x7cd388.value.trim(),
    _0x27d9b8 = _0x2fb9bb.value.trim();
  if (!_0x21be6b) {
    alert("输出框为空，无法提取链接！");
    return;
  }
  if (!_0x27d9b8) {
    {
      alert("输入框为空，无法获取链接！");
      return;
    }
  }
  const _0x18c9cc = _0x21be6b.match(/"spider":\s*"(.*?)(?=[";])/);
  if (!_0x18c9cc?.[1]) {
    {
      alert("输出框中未找到 spider 属性下的链接！");
      return;
    }
  }
  let _0x2825fe = _0x18c9cc[1].trim();
  if (_0x2825fe.startsWith("./")) {
    const _0x3819b8 = _0x27d9b8.match(/(https?:\/\/[^\/]+(?:\/[^\/]*)*\/)/);
    if (!_0x3819b8) {
      {
        alert("无法从输入框提取基础链接！");
        return;
      }
    }
    _0x2825fe = _0x3819b8[1] + _0x2825fe.slice(2);
  }
  alert(" jar 下载链接：\n" + _0x2825fe);
  if (/^https?:\/\/我不是\.摸鱼儿\.com\//.test(_0x2825fe) || /^https?:\/\/jar\.u\.xn--dkw\.xn/.test(_0x2825fe)) {
    copyAndAlert(_0x2825fe);
    return;
  }
  tryAllDownloadMethods(_0x2825fe);
}
function tryAllDownloadMethods(_0x9cd51a) {
  if (isSpecialDomain(_0x9cd51a)) {
    copyAndAlert(_0x9cd51a);
    return;
  }
  simpleDownload(_0x9cd51a);
  setTimeout(() => {
    !downloadSuccess && iframeDownload(_0x9cd51a);
    setTimeout(() => {
      if (!downloadSuccess) {
        forceBlobDownload(_0x9cd51a);
      }
    }, 2000);
  }, 5000);
}
let downloadSuccess = false;
function isSpecialDomain(_0x5206f6) {
  return /^https?:\/\/我不是\.摸鱼儿\.com\//.test(_0x5206f6) || /^https?:\/\/jar\.u\.xn--dkw\.xn/.test(_0x5206f6);
}
function simpleDownload(_0x29cc18) {
  const _0x5c37ee = document.createElement("a");
  _0x5c37ee.href = _0x29cc18;
  _0x5c37ee.download = getFileName(_0x29cc18);
  _0x5c37ee.style.display = "none";
  _0x5c37ee.onclick = () => {
    downloadSuccess = true;
  };
  document.body.appendChild(_0x5c37ee);
  _0x5c37ee.click();
  setTimeout(() => _0x5c37ee.remove(), 100);
}
function iframeDownload(_0xf8d568) {
  const _0x493329 = document.createElement("iframe");
  _0x493329.src = _0xf8d568;
  _0x493329.style.display = "none";
  _0x493329.onload = () => {
    downloadSuccess = true;
  };
  document.body.appendChild(_0x493329);
  setTimeout(() => _0x493329.remove(), 5000);
}
function forceBlobDownload(_0x2d2e09) {
  fetch(_0x2d2e09, {
    "headers": {
      "User-Agent": "okhttp/5.0.0"
    },
    "redirect": "follow"
  }).then(_0x1216fd => {
    if (!_0x1216fd.ok) throw new Error("HTTP " + _0x1216fd.status);
    return _0x1216fd.blob();
  }).then(_0x406b => {
    const _0x31de52 = URL.createObjectURL(_0x406b),
      _0x3dd17d = document.createElement("a");
    _0x3dd17d.href = _0x31de52;
    _0x3dd17d.download = getFileName(_0x2d2e09);
    _0x3dd17d.style.display = "none";
    _0x3dd17d.onclick = () => {
      downloadSuccess = true;
    };
    document.body.appendChild(_0x3dd17d);
    _0x3dd17d.click();
    setTimeout(() => {
      _0x3dd17d.remove();
      URL.revokeObjectURL(_0x31de52);
    }, 100);
  }).catch(_0x4cf7ca => console.error("Blob下载失败:", _0x4cf7ca));
}
function getFileName(_0x48f1f8) {
  const _0x322df5 = new URL(_0x48f1f8).pathname.split("/").pop() || "file.jar";
  return _0x322df5.endsWith(".jar") ? _0x322df5 : "file.jar";
}
function copyAndAlert(_0xd52a31) {
  copyToClipboard(_0xd52a31).then(() => alert("请粘贴到支持修改UA的下载工具或浏览器中手动下载\n\n推荐使用手机浏览器、\"IDM+\"等下载工具\n\njar下载链接：\n\n" + _0xd52a31)).catch(() => alert("无法复制链接，请手动记录：\n" + _0xd52a31));
}
function copyToClipboard(_0x12c099) {
  return new Promise((_0x44e376, _0x2ba072) => {
    if (navigator.clipboard) navigator.clipboard.writeText(_0x12c099).then(_0x44e376).catch(_0x2ba072);else {
      {
        const _0x116ffc = document.createElement("textarea");
        _0x116ffc.value = _0x12c099;
        _0x116ffc.style.position = "fixed";
        document.body.appendChild(_0x116ffc);
        _0x116ffc.select();
        try {
          {
            const _0x484c10 = document.execCommand("copy");
            document.body.removeChild(_0x116ffc);
            _0x484c10 ? _0x44e376() : _0x2ba072(new Error("复制失败"));
          }
        } catch (_0x17ce99) {
          document.body.removeChild(_0x116ffc);
          _0x2ba072(_0x17ce99);
        }
      }
    }
  });
}
function clearOutput() {
  var _0xd68f5d = document.getElementById("input-field");
  var _0x7a1218 = document.getElementById("output");
  if (_0xd68f5d.value.trim() === "" && _0x7a1218.value.trim() === "") {
    showErrorMessage("无数据，无需清空！😂");
    return;
  }
  _0xd68f5d.value = "";
  _0x7a1218.value = "";
  clearInputButton.style.display = "none";
  optionsList.style.display = "none";
}
function showErrorMessage(_0x316c04) {
  var _0x4ddc14 = document.getElementById("error-message");
  _0x4ddc14.textContent = _0x316c04;
  _0x4ddc14.style.display = "block";
}
document.getElementById("output").readOnly = true;