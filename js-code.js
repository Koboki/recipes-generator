(function () {
  var pageHref = location.href;
  if (!window._ccm_js_ && pageHref.indexOf("/b/blog-preview") === -1 && pageHref.indexOf("/config/") === -1 && pageHref.indexOf("/website/builder/") === -1) {
    window._ccm_js_ = true;
    console.log("RG136");
    var head = document.getElementsByTagName("head")[0];
    var $card = document.querySelector('.ccm-card');
    if (pageHref.indexOf('4e8285aa-d993-4706-940b-605552caaaa4.usrfiles.com') > -1) {
      document.body.innerHTML = ''; 
    }
    if (pageHref.indexOf('chenoadickerson.com') > -1) {
      $card.remove();
    }
    if (pageHref.indexOf('the-brook.co.uk') > -1) {
      document.querySelectorAll(".ccm-card").forEach(function($c) {
        $c.remove();
      });
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
      if(headContent.indexOf("squarespace") > -1 || headContent.indexOf("kajabi") > -1 || headContent.indexOf("jimdo") > -1) {
        console.log("headContent true");
        var s = document.createElement("script");
        s.src = "https://common.recipesgenerator.com/styles-code.js";
        head.appendChild(s);
      }
    })();

    (function () {
      if (pageHref.indexOf('ketorevolution') > -1) {
        var s = document.createElement("link");
        s.rel= 'stylesheet';
        s.href = "https://cdn.recipesgenerator.com/PobZyCRItIX0Gl24SEmYwRXKcHD2/styles.css";
        head.appendChild(s);
      }
    })();

    (function () {
      var hostName = location.hostname;
      var ex = ["www.flowersnotflour.com","myustudios.com","www.crumbcoatsandwine.com","www.delishinapinch.com","www.marydisomma.com","www.inspiredwithatwist.com","403db1a2-157b-4b6f-8cd6-feffe3723928.usrfiles.com","www.nutrilee.nl","www.vegoskafferiet.se","www.ourbigbeautifullife.com","fitnessgypsies.com","bitesandbokeh.com","ad9e006e-a5cc-4d50-801f-c176319cab02.usrfiles.com","www.yasmeenskitchendiary.com","www.allpowertotheplants.com","www.kelseyperucchi.com","www.blog.birdsparty.com", "eatrunlift.me", "www.spiritofhealthkc.com", "www.brittneydacosta.com", "www.whisknwhip.com", "www.healthcoverage.me", "plantpassionate.com", "www.jacquitoumbas.com", "fittyfoodlicious.com", "deliciously-free.com", "www.castirongourmetla.com", "www.hautepot.co", "www.brittneydacosta.com", "www.prolongliving.com", "www.tabletocrave.com", "www.riceguysla.com"]
      var credits = document.querySelector(".ccm-credit");
      if (hostName !== "" && ex.indexOf(hostName) === -1) {
        if (credits) {
          credits.innerHTML = 'Created using The Recipes Generator';
        } else {
          credits = document.createElement("div");
          credits.className = "ccm-credit ccm-hide-on-print";
          credits.innerHTML = 'Created using The Recipes Generator';
          document.querySelector(".ccm-wrapper").appendChild(credits);
        }
      } else {
        document.querySelector(".ccm-credit").remove();      
      }
    })();
    
    try {
      if (!localStorage.getItem(location.pathname)) {
        localStorage.setItem(location.pathname, "true");
        var rgstats = document.createElement("iframe");
        rgstats.src = "https://rgstats.blogspot.com";
        rgstats.style = "position:absolute;width:0;height:0;visibility:hidden;";
        document.body.appendChild(rgstats);
      }
    } catch(err) {
      console.log(err); 
    }
  }
})();
