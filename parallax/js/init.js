(function($) {
  $(function() {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init('da5134840e84bd4ff5f6d9da1477c3c9');

    shareKakao = function() {
      // 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
      Kakao.Link.sendTalkLink({
        label: "['이 마시멜로는 내꺼야 우적우적'] 인앱SDK로 Android 6.0에 완벽 대응하고 업데이트 검증으로 빠르게 출시하세요!",
        image: {
          src: "http://dusskapark.github.io/jQuery101/parallax/img/oct-touch-icon-150.png",
          width: "150px",
          height: "150px"
        },
        fail: Materialize.toast('카카오톡 링크는 모바일 기기에서만 전송 가능합니다.', 4000, 'rounded'),
        // webLink : {
        //   text: "[원스토어]인앱SDK 및 검증정책 업데이트 안내!",
        //   url: "http://skpla.net/UpgradeCenter"
        // },
        webButton: {
          text: "[원스토어]통합개발자센터",
          url: "http://dusskapark.github.io/jQuery101/parallax/index.html" // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
        }
      });
      // Kakao.Link.cleanup();
      // 카카오 공유를 GA로 추적
      ga('send', 'event', "shareLink", "sendkakao", "UpgradeCenter");
    };

    // Menu의 버튼을 눌렀는지 분석
    $(".c_btn").click(function() {
      var section = $(this).parents('div[id]').attr('id');
      var content = $(this).text();
      console.log(content);
      ga('send', 'event', section, 'clicked', content);
    });

    // 상세 내용을 읽었는지 / 어떤 것을 읽었는지 분석
    $('.collapsible-header').click(function() {
      var header = $(this).text();
      ga('send', 'event', 'description', 'clicked', header);
    })

    //스크롤 시 GA코드 보내기
    var options = [
      {
        selector: '#IAP',
        offset: 200,
        callback: "ga('send', 'event', 'In-app purchase 공지', 'Scrolled', 'read')"
      }, {
        selector: '#review',
        offset: 200,
        callback: "ga('send', 'event', '업데이트 검증 업데이트 공지', 'Scrolled', 'read')"
      }
    ];

    Materialize.scrollFire(options);

    // 회전목마형 이미지 추가
    $('.carousel.carousel-slider').carousel({fullWidth: true});

  }); // end of document ready
})(jQuery); // end of jQuery name space
