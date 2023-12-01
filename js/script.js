'use strict';

//ハンバーガーメニュー
$(function () {
    var $body = $('.gnav-wrapper,.menu-btn');

    //開閉用ボタンをクリックでクラスの切替え
    $('#js_btn').on('click', function () {
        $body.toggleClass('open');
    });

    //メニュー名以外の部分をクリックで閉じる
    $('a').on('click', function () {
        $body.removeClass('open');
    });
});


//画像ループ
$(function () {
    const loop = document.getElementById('loop_js');
  
    //タイムラインを作成
    const loopAnim = new TimelineMax({
      repeat: -1 //繰り返し無制限
    });
  
    //画像を複製してdiv内に挿入
    let loopItem = (window.innerWidth, loop.children[0]);
    loop.appendChild(loopItem.cloneNode(true));
    loop.appendChild(loopItem.cloneNode(true));
  
    //アニメーションの設定
    loopAnim
      .to(loop, 50, { ease: Power0.easeNone, xPercent: -66.66666 })
      .to(loop, 0, { ease: Power0.easeNone, x: 0 });
  });


//モーダル
//テキストを含む一般的なモーダル
$(".info").modaal({
    overlay_close:true,//モーダル背景クリック時に閉じるか
    before_open:function(){// モーダルが開く前に行う動作
      $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
    },
    after_close:function(){// モーダルが閉じた後に行う動作
      $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
    }
  });