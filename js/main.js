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
});
