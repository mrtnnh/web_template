
$(function(){
//アコーディオン
    $('.accordion_item1, .accordion_item2, .accordion_item3').hide();
    $('.accordion_title1').on("click", function () {

        $('.accordion_item1').slideToggle(300);

        $(this).toggleClass("open");
    });

    $('.accordion_title2').on("click", function () {

        $('.accordion_item2').slideToggle(300);

        $(this).toggleClass("open");

    });

    $('.accordion_title3').on("click", function () {

        $('.accordion_item3').slideToggle(300);

        $(this).toggleClass("open");

    });

    // 一覧画面から詳細画面へのリンク
    $(function(){
        $('tr[data-href]').on('click', function(){
          location.href = $(this).data('href');
        });
      });


});