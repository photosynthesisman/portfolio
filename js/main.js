$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    anchors: ["page1", "page2", "page3", "page4", "page5", "page6", "page7"],
    afterLoad: function (anchorLink, index) {
      $(".section").find(".number_wrap").find("h2").removeClass("visible");
      $(".section").find("h3").removeClass("width");
      $(".section.step1").find("h2").removeClass("visible");
      $(".section.step1").find("p").removeClass("visible");
      $(".link_button").removeClass("hover");
      let slice = anchorLink.slice(4);

      $(".go-top").click(function () {
        $.fn.fullpage.moveTo(1);
      });
      $(".paint").each(function () {
        $(this).stop().animate({ height: "0" }, 1200);
      });
      let counters = $(".txt_wrap")
        .find(".eng.num")
        .eq(index - 2);

      if (index == 1) {
        $(".section.step1").find("p").addClass("visible");
      }
      if (index == slice) {
        $(".section")
          .eq(index - 1)
          .find("h2")
          .addClass("visible");
        $(".section")
          .eq(index - 1)
          .find("h3")
          .addClass("width");
        $(".section")
          .eq(index - 1)
          .find($(".link_button"))
          .addClass("hover");
        let classNum = $(".gnb_background .eng")
          .find("a")
          .eq(index - 1);
        $(".gnb_background .eng").find("a").removeClass("add-color");
        classNum.addClass("add-color");
        $(".section")
          .eq(index - 1)
          .find(".paint")
          .each(function () {
            $(this).stop().animate({ height: "100%" }, 5000);
          });

        let targetNum = counters.attr("data-num");
        function numberAnimate() {
          let num = 0;
          let speed = 130;
          let animateTimer = setInterval(function () {
            ++num;
            counters.text(num);
            if (num == targetNum) {
              clearInterval(animateTimer);
            }
          }, speed);
        }
        numberAnimate();
      }
      if (index == 8) {
        $(".section.last_step").addClass("visible");
        $(".section.last_step").find("h2").addClass("fade_down");
        $(".section.last_step").find(".contact").addClass("fade_up");
      } else {
        $(".section.last_step").removeClass("visible");
        $(".section.last_step").find("h2").removeClass("fade_down");
        $(".section.last_step").find(".contact").removeClass("fade_up");
      }
    },
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);

  function link_hover() {
    $(".link_button").mouseover(function () {
      $(this).addClass("hover");
    });
    $(".link_button").mouseleave(function () {
      $(this).removeClass("hover");
    });
  }

  function dim_click() {
    $(".gnb_dim").click(function (e) {
      e.preventDefault();
      $(".menu_list").removeClass("close");
      $(".gnb_background").removeClass("fadeIn");
      $(this).removeClass("block");
    });
  }

  function button_change() {
    $(".menu_list").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("close")) {
        $(this).removeClass("close");
        $(".gnb_background").removeClass("fadeIn");
        $(".gnb_dim").removeClass("block");
      } else {
        $(this).addClass("close");
        $(".gnb_background").addClass("fadeIn");
        $(".gnb_dim").addClass("block");
      }
    });
  }

  function gnb_button() {
    $(".gnb .menu_list").mouseover(function () {
      if (!$(this).hasClass("close")) {
        $(this).addClass("move");
      }
    });
    $(".gnb .menu_list").mouseleave(function () {
      if (!$(this).hasClass("close")) {
        $(this).removeClass("move");
      }
    });
  }

  const $sky = document.querySelectorAll(".sky");
  // 브라우저 창 크기에 따른 별 생성
  window.onresize = () => {
    makeStars();
  };
  const makeStars = () => {
    // 브라우저 가장 큰 크기
    const maxSize = Math.max(window.innerWidth, window.innerHeight);
    // 랜덤한 X 위치 값
    const getRandomX = () => Math.random() * maxSize;
    // 랜덤한 Y 위치 값
    const getRandomY = () => Math.random() * maxSize;
    // 랜덤한 크기 (circle는 반지름이 크기)
    const randomRadius = () => Math.random() * 0.7 + 0.6;
    // 임의의 값
    const _size = Math.floor(maxSize / 2);
    const htmlDummy = new Array(_size)
      .fill()
      .map((_, i) => {
        return `<circle class='star'
        cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star" />`;
      })
      .join("");
    $sky.forEach((element) => {
      element.innerHTML = htmlDummy;
    });
    // $sky.innerHTML = htmlDummy;
  };
  window.onload = () => {
    makeStars();
  };
  dim_click();
  link_hover();
  gnb_button();
  button_change();

  $("#toggle").click(function () {
    if ($(this).is(":checked")) {
      $(this).prop("checked", true);
      $("body").addClass("night");
      makeStars();
    } else {
      $(this).prop("checked", false);
      $("body").removeClass("night");
    }
  });
});
