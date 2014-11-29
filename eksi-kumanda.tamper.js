// ==UserScript==
// @name          eksi kumanda
// @namespace     http://github.com/mehmettaskiner/
// @author        mehmettaskiner @github
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

function whoAmI(elem) {
    switch (elem) {
        case SINEMA:
            console.log("omg sinema!!!");
            savePreference(SINEMA);
            break;
        case MUZIK:
            console.log("omg müzik!!!");
            savePreference(MUZIK);
            break;
        case SIYASET:
            console.log("omg siyaset!!!");
            savePreference(SIYASET);
            break;
        case BILIM:
            console.log("omg bilim!!!");
            savePreference(BILIM);
            break;
        case EDEBIYAT:
            console.log("omg edebiyat!!!");
            savePreference(EDEBIYAT);
            break;
        case SPOR:
            console.log("omg spor!!!");
            savePreference(SPOR);
            break;
        case ILISKILER:
            console.log("omg ilişkiler!!!");
            savePreference(ILISKILER);
            break;
        case TARIH:
            console.log("omg tarih!!!");
            savePreference(TARIH);
            break;
        case TEKNOLOJI:
            console.log("omg teknoloji!!!");
            savePreference(TEKNOLOJI);
            break;
        case SANAT:
            console.log("omg sanat!!!");
            savePreference(SANAT);
            break;
        case TV:
            console.log("omg tv!!!");
            savePreference(TV);
            break;
        case OYUN:
            console.log("omg oyun!!!");
            savePreference(OYUN);
            break;
        case ANKET:
            console.log("omg anket!!!");
            savePreference(ANKET);
            break;
        case PROGRAMLAMA:
            console.log("omg programlama!!!");
            savePreference(PROGRAMLAMA);
            break;
        case META:
            console.log("omg meta!!!");
            savePreference(META);
            break;
        case SAGLIK:
            console.log("omg sağlık!!!");
            savePreference(SAGLIK);
            break;
    }
}

function savePreference(elem) {
    var exist = GM_getValue(elem);
    if (exist) {
        GM_deleteValue(elem);
    } else {
        GM_setValue(elem, elem);
    }
    console.log(elem);
    console.log(elem + " " + typeof GM_getValue(elem));
    populateNavBar();
}

function populateNavBar() {
    var channels = [SINEMA, MUZIK, SIYASET, BILIM, EDEBIYAT, SPOR, ILISKILER, TARIH, TEKNOLOJI, SANAT, TV, OYUN, ANKET, PROGRAMLAMA, META, SAGLIK];

    for (channelName in channels) {
        var exist = GM_getValue(channels[channelName]);

        if (typeof exist == "string") {
            console.log("exist in populatenavbar");
            html = "<li name=" + channels[channelName] + "><a class=\"index-link\" href=\"/basliklar/channel?channelname=" + channels[channelName].replace("#", "") + "\">" + channels[channelName] + "</a></li>";
            var item = $("[name=" + channels[channelName] + "]").length;
            if (item == 0){
                $("#quick-index-nav").append(html);
            }
        } else {
            console.log("not exist in populatenavbar");
            $("[name=" + channels[channelName] + "]").remove();
        }
    }
}

function settings() {
    var button = $('<input type="button" class="channel-button primary" value="kısayol"/>');
    $("#channel-follow-list li h3").append(button).click(function() {
        a = $(this).find(".index-link").text();
        whoAmI(a);
    });
}


$(document).ready(function() {
    populateNavBar();
    settings();
});

