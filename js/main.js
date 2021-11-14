var mobileSubMenuAccordion = document.getElementsByClassName(
  "mobile_sub_menu_content"
);
var mobileMenyItem = document.getElementsByClassName("mobile_menu_item_head");

for (let i = 0; i < mobileSubMenuAccordion.length; i++) {
  mobileSubMenuAccordion[i].addEventListener("click", function () {
    let srcVal = this.getElementsByTagName("img")[0].getAttribute("src");
    if (srcVal === "./images/plus.svg") {
      this.getElementsByTagName("img")[0].setAttribute(
        "src",
        "./images/minus.svg"
      );
    } else {
      this.getElementsByTagName("img")[0].setAttribute(
        "src",
        "./images/plus.svg"
      );
    }
    this.classList.toggle("active");
  });
}

$(function () {
  $(".menu").click(function () {
    $(".mobile_menu").slideToggle();
  });

  $(".mobile_menu_item_head").click(function () {
    // this.parent().children(".mobile_sub_menu").show();
    // $(this).parents(".mobile_menu").find(".mobile_sub_menu").hide(250);
    $(this).parent().siblings().find(".mobile_sub_menu").slideUp(250);
    $(this)
      .parent()
      .siblings()
      .find(".mobile_menu_item_head")
      .removeClass("active");
    $(this).siblings().slideToggle();
    $(this).toggleClass("active");
  });

  // on click kettels navigators
  $(".navigate_item").click(function () {
    const image = $(".slider_img img");
    let dataVal = $(this).data("color");
    let imagSrc = image.attr("src");
    let targetSrc = `./images/${dataVal}.png`;

    if (imagSrc !== targetSrc) {
      // slide animate
      slideAnimateVertical(image, targetSrc);
      // change active
      makeTargetActive($(this));
      // change background header to the image color
      changeHeaderBackground(dataVal);
      // change small navigator to active
      makeSmallNavigateActive(dataVal);
    } else {
      // make logic if he clicked the same active
    }
  });

  function slideAnimateVertical(image, targetSrc) {
    image.animate({ top: "2000px" }, 500);
    image.animate({ right: "2000px" }, 0);
    image.animate({ top: "-2000px" }, 0);
    image.animate({ right: "0px" }, 0, function () {
      image.attr("src", targetSrc);
    });
    image.animate({ top: "0px" }, 500);
  }

  function makeTargetActive(target) {
    target.addClass("active");
    target.siblings().removeClass("active");
  }

  function changeHeaderBackground(classValue) {
    const header = $(".slider_header");
    header.removeClass("kettle-1 kettle-2 kettle-3");
    header.addClass(classValue);
  }

  function makeSmallNavigateActive(targetVal) {
    let target = $(
      ".small_navigate[data-" + targetVal + '="' + targetVal + '"]'
    );
    target.addClass("active");
    target.siblings().removeClass("active");
  }

  $(".wrapper").swipe({
    //Generic swipe handler for all directions
    swipe: function (
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") {
        console.log("left");
      }
      if (direction == "right") {
        console.log("right");
      }
      if (direction == "down") {
        console.log("down");
      }
      if (direction == "up") {
        console.log("up");
      }
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 0,
  });
});
