//=======================================================
// HTML5 Spelling 題庫設定檔: 使用自定的 MP3 語音檔
//=======================================================
//
//【測試區塊】
//-------------------------------
//用來偵測換行字元用的測試區塊
//請勿更動
//並且放在題庫設定區塊之前
//-------------------------------
//測試區塊開始
CR_LF_test = function(){/*--這一行請勿更改--
CR_LF testing block
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2,-9);
CR_LF_First_Pos = CR_LF_test.indexOf('_LF')-'CR_LF'.indexOf('_LF');
//測試區塊結束
//-------------------------------
//

//---------------------------------------------------
//【TTS 語音設定】
//---------------------------------------------------
//
//是否使用 TTS 的語音(使用: true, 不使用: false)
tts_enabled = true;

//
//----------------
//Google TTS 文字轉語音的設定
//【注意】不能和 iSpeech TTS 同時使用
//----------------
//
//如果要使用 Google TTS，就拿掉下面這[4行]最左邊的註解(兩個斜線)
tts_language = 'en';  // en : 英語,   zh_tw : 中文
tts_speed = 0.3;  //語音的速度 0 ~ 1 (可用小數)
tts_base_url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl='+tts_language+'&client=tw-ob&ttsspeed='+tts_speed+'&q=';
tts_cut_last_seconds = 0; //裁掉最後面的聲音長度(秒為單位)

//
//----------------
//iSpeech TTS 文字轉語音的設定
//【注意】不能和 Google TTS 同時使用
//----------------
//原始網站參數說明: http://www.ispeech.org/api/#voices-standard
//
//如果要使用 iSpeech TTS，就拿掉下面這[5行]最左邊的註解(兩個斜線)
//tts_language = 'ukenglishfemale';  //auenglishfemale , usenglishfemale , chchinesefemale
//tts_speed = 0;  	//語音的速度 10 ~ -10 (10:最快, 0:一般, -10最慢)
//tts_pitch = 100; 	//音高 0~200 (100:預設值)
//tts_base_url = 'https://www.ispeech.org/p/generic/getaudio?action=convert&pitch='+tts_pitch+'&speed='+tts_speed+'&voice='+tts_language+'&text=';
//tts_cut_last_seconds = 2.54; //english: 2.54 chinese: 5.5 裁掉 iSpeech 最後面的聲音長度(秒為單位)


//
//---------------------------------------------------
//【題庫設定】
//---------------------------------------------------
//
//計時幾秒
timer = 180;

//
//答對一題加幾分
number_of_points_for_one_question = 10;

//
//每題要拿掉幾個字母當填空
blanks_total_number = 1;

//
//欄位分隔符號為兩個井字號(##)
seperator = '##';

//
//【題目設定】
//  一行一題, 
//  欄位左起
//    第一欄為英文
//    第二欄為中文
//    第三欄為MP3語音檔的路徑(沒有的話，tts_enabled = true 會以第一欄為TTS的朗讀內容)
//
questionLines = function(){/*--這一行請勿更改--
gu[m]##你聽到的字尾音是 m 還是 n
hu[m]##你聽到的字尾音是 m 還是 n
ha[m]##你聽到的字尾音是 m 還是 n
ja[m]##你聽到的字尾音是 m 還是 n
Ki[m]##你聽到的字尾音是 m 還是 n
mo[m]##你聽到的字尾音是 m 還是 n
Pa[m]##你聽到的字尾音是 m 還是 n
ra[m]##你聽到的字尾音是 m 還是 n
Ti[m]##你聽到的字尾音是 m 還是 n
ya[m]##你聽到的字尾音是 m 還是 n
dru[m]##你聽到的字尾音是 m 還是 n
va[n]##你聽到的字尾音是 m 還是 n
to[n]##你聽到的字尾音是 m 還是 n
bu[n]##你聽到的字尾音是 m 還是 n
Be[n]##你聽到的字尾音是 m 還是 n
fu[n]##你聽到的字尾音是 m 還是 n
fa[n]##你聽到的字尾音是 m 還是 n
gu[n]##你聽到的字尾音是 m 還是 n
he[n]##你聽到的字尾音是 m 還是 n
ma[n]##你聽到的字尾音是 m 還是 n
nu[n]##你聽到的字尾音是 m 還是 n
pa[n]##你聽到的字尾音是 m 還是 n
ra[n]##你聽到的字尾音是 m 還是 n
su[n]##你聽到的字尾音是 m 還是 n
te[n]##你聽到的字尾音是 m 還是 n
va[n]##你聽到的字尾音是 m 還是 n
wi[n]##你聽到的字尾音是 m 還是 n
Ke[n]##你聽到的字尾音是 m 還是 n
moo[n]##你聽到的字尾音是 m 還是 n
violi[n]##你聽到的字尾音是 m 還是 n
[m]om##你聽到的字首音是 m 還是 n
[m]oon##你聽到的字首音是 m 還是 n
[m]urmur##你聽到的字首音是 m 還是 n
[m]other##你聽到的字首音是 m 還是 n
[m]ummy##你聽到的字首音是 m 還是 n
[m]an##你聽到的字首音是 m 還是 n
[m]inute##你聽到的字首音是 m 還是 n
[m]onkey##你聽到的字首音是 m 還是 n
[m]acbook##你聽到的字首音是 m 還是 n
[m]en##你聽到的字首音是 m 還是 n
[m]useum##你聽到的字首音是 m 還是 n
[m]ain##你聽到的字首音是 m 還是 n
[n]ot##你聽到的字首音是 m 還是 n
[n]umber##你聽到的字首音是 m 還是 n
[n]oodles##你聽到的字首音是 m 還是 n
[n]eighbor##你聽到的字首音是 m 還是 n
[n]oon##你聽到的字首音是 m 還是 n
[n]ine##你聽到的字首音是 m 還是 n
[n]inety##你聽到的字首音是 m 還是 n
[n]anny##你聽到的字首音是 m 還是 n
[n]utrient##你聽到的字首音是 m 還是 n
[n]urse##你聽到的字首音是 m 還是 n
[n]ose##你聽到的字首音是 m 還是 n
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);

