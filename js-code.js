(function () {
  var pageHref = location.href;
  if (!window._ccm_js_ && pageHref.indexOf("/b/blog-preview") === -1 && pageHref.indexOf("/config/") === -1 && pageHref.indexOf("/website/builder/") === -1) {
    window._ccm_js_ = true;
    console.log("RG133");
    var head = document.getElementsByTagName("head")[0];
    try {
      var $generator = window.parent.document.querySelector('[name="generator"]');
      if ($generator && ($generator.content.indexOf("Wix") > -1)) {
        document.body.style.overflow = "hidden";
        let $allFrames = window.parent.document.querySelectorAll("iframe");
        for (let i = 0; i < $allFrames.length; i++) {
          let $frame = $allFrames[i];
          try {
            let card = $frame.contentDocument.body.querySelector(".ccm-card");
            if (card) {
              let $parent = $frame.closest("[style*='height']");
              $parent.style = "";
              let extraHeightValue = 120;
              if(card.getAttribute('data-ccmcardnum') === "7") {
               extraHeightValue = 400;
              }
              $frame.style.height = card.clientHeight + extraHeightValue + "px";
              let maxHeightChecker = setInterval(function () {
                if($parent.style.maxHeight) {
                  $parent.style.maxHeight = "";
                  clearInterval(maxHeightChecker);
                }
              }, 2000)
              window.onload = function (event) {
                $frame.style.height = card.clientHeight + 50 + "px";
                $parent.style.maxHeight = "";
              };
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    } catch(err) {
      console.log(err); 
    }

    if (!localStorage.getItem(location.pathname)) {
      localStorage.setItem(location.pathname, "true");
      var rgstats = document.createElement("iframe");
      rgstats.src = "https://rgstats.blogspot.com";
      rgstats.style = "position:absolute;width:0;height:0;visibility:hidden;";
      document.body.appendChild(rgstats);
    }

    (function () {
      var ccmscript = document.createElement("script");
      ccmscript.type = "text/javascript";
      ccmscript.innerHTML = `
        var ccmPrintWin = null;
        function ccmpr(btn) {
          var id = btn.id;
          function ccmprNow() {
            if (ccmPrintWin == null || ccmPrintWin.closed) {
              ccmPrintWin = window.open("", "printwin");
            } else {
              ccmPrintWin.close();
              ccmPrintWin = window.open("", "printwin");
            }
            var d = ccmPrintWin.document;
            d.querySelector("body").innerHTML = btn.closest(".ccm-card").outerHTML + "<style>body{font-family:sans-serif}a#ccm-pinit,.mv-ad-box,.adunit,.adunitlabel,.adunitwrapper,.ccm-hide-on-print,.chicory-order-ingredients,.ccm-stars-frame{display: none!important; position: absolute !important; visibility: hidden !important; opacity: 0 !important; width: 0 !important; height: 0 !important; overflow: hidden !important;}.ccm-wrapper{background:#fff!important;box-shadow:none!important}.ccm-wrapper * {color: #000 !important;}</style>";
            if (id == "ccm-printWithoutImage") {
              d.querySelector(".ccm-image").remove();
            }
            var n = d.createElement("style");
            n.innerHTML = document.querySelector(".ccm-card-styles").innerHTML;
            d.querySelector("head").appendChild(n);
            ccmPrintWin.print();
          }
          if (id === "ccm-printbutton") {
            var po = btn.closest(".ccm-wrapper").querySelector(".ccm-print-options");
            po ? po.classList.toggle("ccm-show") : ccmprNow();
          } else {
            ccmprNow();
          }
        }
      `;
      head.appendChild(ccmscript);
    })();
    
    (function () {
      var aaa = document.querySelectorAll(".ccm-btns-wrapper button");
      for (var i = 0; i < aaa.length; i++) {
        aaa[i].setAttribute("onclick", "ccmpr(this);");
      }
      
      aaa = document.querySelectorAll(".ccm-printbutton");

      for (var i = 0; i < aaa.length; i++) {
        aaa[i].setAttribute("onclick", "ccmpr(this);");
      }

      var a = document.querySelectorAll("a.ccm-printbutton");
      var exc = ["ketorevolution"];

      for (var i = 0; i < a.length; i++) {
        if (navigator.userAgent.indexOf("Instagram") > -1) {
          console.log("is instagram");
          var hrefValue = a[i].getAttribute("href");
          a[i].setAttribute("href", hrefValue + "&url=" + location.href);
          a[i].removeAttribute("onclick");
        } else {
          console.log("is NOT instagram");
          a[i].removeAttribute("href");
          a[i].setAttribute("onclick", "ccmpr(this)");
        }
      }

      if (navigator.userAgent.indexOf("Safari") > -1) {
        var a = document.querySelectorAll(".ccm-image img");

        if (a.length > 0) {
          for (var i = 0; i < a.length; i++) {
            var img = a[i];
            if (img.src.indexOf("wixstatic") > -1) {
              img.src = img.src.replace(".webp", ".jpg");
            }
          }
        }
      }
    })();

    (function () {
      let headContent = head.innerHTML;
      if(headContent.indexOf("squarespace") > -1 || headContent.indexOf("kajabi") > -1) {
        console.log("headContent true");
        var s = document.createElement("script");
        s.src = "https://common.recipesgenerator.com/styles-code.js";
        head.appendChild(s);
      }
    })();

    var credits = document.querySelectorAll(".ccm-credit");
    credits.forEach(function (item) {
      item.remove();
    });
  }
})();
