// ==UserScript==
// @name          eksi kumanda
// @namespace     http://github.com/mehmettaskiner/
// @author        mehmettaskiner
// @description   navigation'a kanal eklemeye yarar.
// @include       https://eksisozluk.com/*
// @match         https://eksisozluk.com/*
// @require       https://code.jquery.com/jquery-1.10.2.min.js
// @version       0.1
// @run-at        document-end
// ==/UserScript==

var SINEMA = "#sinema";
var MUZIK = "#müzik";
var SIYASET = "#siyaset";
var BILIM = "#bilim";
var EDEBIYAT = "#edebiyat";
var SPOR = "#spor";
var ILISKILER = "#ilişkiler";
var TARIH = "#tarih";
var TEKNOLOJI = "#teknoloji";
var SANAT = "#sanat";
var TV = "#tv";
var OYUN = "#oyun";
var ANKET = "#anket";
var PROGRAMLAMA = "#programlama";
var META = "#meta";
var SAGLIK = "#sağlık";

function savePreference(elem) {
    var exist = GM_getValue(elem);
    if (exist) {
        GM_deleteValue(elem);
    } else {
        GM_setValue(elem, elem);
    }
    populateNavBar();
}

function populateNavBar() {
    var channels = [SINEMA, MUZIK, SIYASET, BILIM, EDEBIYAT, SPOR, ILISKILER, TARIH, TEKNOLOJI, SANAT, TV, OYUN, ANKET, PROGRAMLAMA, META, SAGLIK];

    for (channelName in channels) {
        var exist = GM_getValue(channels[channelName]);

        if (typeof exist == "string") {
            html = "<li name=" + channels[channelName] + "><a class=\"index-link\" href=\"/basliklar/kanal/" + channels[channelName].replace("#", "") + "\">" + channels[channelName] + "</a></li>";
            var item = $("[name=" + channels[channelName] + "]").length;
            if (item == 0){
                $("#quick-index-nav").append(html);
            }
        } else {
            $("[name=" + channels[channelName] + "]").remove();
        }
    }
}

function settings() {
    var button = $('<input type="button" class="channel-button primary" value="kısayol"/>');
    $("#channel-follow-list li h3").append(button).click(function() {
        a = $(this).find(".index-link").text();
        savePreference(a);
    });
}


$(document).ready(function() {
    populateNavBar();
    settings();
});

