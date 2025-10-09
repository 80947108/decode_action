//Thu Oct 09 2025 02:57:52 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
document.addEventListener("DOMContentLoaded", () => {
  const _0x3add7c = document.getElementById("output"),
    _0x3514c1 = document.getElementById("scrollButton");
  let _0x5947bc = 0,
    _0x170ded = false,
    _0x2dce6f = null;
  _0x3add7c.addEventListener("touchstart", _0x2a392f => {
    _0x5947bc = _0x2a392f.touches[0].clientY;
    _0x170ded = false;
    _0x2dce6f = null;
  });
  _0x3add7c.addEventListener("touchmove", _0x56bc36 => {
    const _0x3ffea4 = _0x56bc36.touches[0].clientY,
      _0x3ea922 = _0x3ffea4 - _0x5947bc;
    Math.abs(_0x3ea922) > 10 && (_0x170ded = true, _0x2dce6f = _0x3ea922 > 0 ? "down" : "up");
  });
  _0x3add7c.addEventListener("touchend", () => {
    if (_0x170ded) {
      {
        if (_0x3add7c.scrollTop === 0) {
          _0x3514c1.textContent = "跳转底部";
          _0x3514c1.style.backgroundColor = "#009966";
        } else {
          if (_0x3add7c.scrollTop >= _0x3add7c.scrollHeight - _0x3add7c.clientHeight) _0x3514c1.textContent = "返回顶部", _0x3514c1.style.backgroundColor = "#ff5722";else {
            if (_0x2dce6f === "up") _0x3514c1.textContent = "跳转底部", _0x3514c1.style.backgroundColor = "#009966";else _0x2dce6f === "down" && (_0x3514c1.textContent = "返回顶部", _0x3514c1.style.backgroundColor = "#ff5722");
          }
        }
        _0x3514c1.style.display = "block";
      }
    }
  });
  document.addEventListener("click", _0x187afb => {
    !_0x3add7c.contains(_0x187afb.target) && (_0x3514c1.style.display = "none");
  });
  _0x3514c1.addEventListener("click", () => {
    {
      if (_0x3514c1.textContent === "跳转底部") _0x3add7c.scrollTop = _0x3add7c.scrollHeight;else _0x3514c1.textContent === "返回顶部" && (_0x3add7c.scrollTop = 0);
    }
  });
  _0x3add7c.addEventListener("scroll", () => {
    {
      if (_0x3add7c.scrollTop === 0) _0x3514c1.textContent = "跳转底部";else _0x3add7c.scrollTop >= _0x3add7c.scrollHeight - _0x3add7c.clientHeight && (_0x3514c1.textContent = "返回顶部");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const _0x51d731 = document.getElementById("output"),
    _0x31f18a = document.getElementById("progressBar");
  _0x51d731.addEventListener("scroll", () => {
    const _0x16cf13 = _0x51d731.scrollTop,
      _0x5b308f = _0x51d731.scrollHeight - _0x51d731.clientHeight,
      _0x56eb8b = _0x16cf13 / _0x5b308f * 100;
    _0x31f18a.style.width = _0x56eb8b + "%";
  });
});