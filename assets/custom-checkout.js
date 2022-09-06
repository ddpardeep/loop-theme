(function ($) {
  $(document).on("page:load page:change", function () {
    // LIST OF COUNTRIES THAT FAILS PAYMENT FOR KLARNA APP
    var country = [`States`, `Sweden`, `Australia`, `Norway`, `Greece`,`Switzerland`,`Kingdom`,`Finland`,`Colombia`,`France`,`Germany`,`Malta`,`Slovenia`,`Spain`];
    // TAKES TEXT FROM DIV WITH ADDRESS IN IT
    var divTex = $("div .address").text();
    const arrTex = divTex.replace("\n", "");
    // console.log(divTex);
    // CONVERTING TEXT INSIDE DIV INTO ARRAY AND FILTERING EMPTY VALUES
    const arrlen = arrTex.replace("\n", "").split(" ");
    var arrlenFilter = arrlen.filter(function (el) {
      return el != null && el != "";
    });
    // REVERSE ARRAY AND MAKES COUNTRY AS 1ST ELEMENT IN ARRAY
    var arrFinal = arrlenFilter.reverse();

    // console.log(arrFinal);
    // TAKES FIRST ELEMENT OF THE ARRAY i.e COUNTRY NAME
    const arrFirst = arrFinal.slice(0, 1);
    // console.log(arrFirst);

    // IF COUNTRY HAVE "Island,Republic..." AT THE END OF ITS NAME
    if (arrFirst != "Islands" && arrFirst != "Republic") {
      // CHECKS IF FIRST ELEMENT IS IN THE "country" ARRAY OR NOT
      $.each(country, function (key, value) {
        var index = $.inArray(value, arrFirst);
        if (index != -1) {
          // console.log(index);
          // HIDES PAYMENT METHOD FOR KLARNA 
          $("#payment-gateway-subfields-74080420036").hide();
          $("div").find(`[data-select-gateway='74080420036']`).hide();
          $("div").find(`[data-select-gateway='74080321732']`).hide();
        }
      });
    } else if (arrFirst == "Islands" || arrFirst == "Republic") {
      // STORES 2ND ELEMENT IN ARRAY 
      const arrSecond = arrFinal.slice(1, 2);
      // console.log(arrSecond);
      // CHECKS IF 2ND ELEMENT IS IN THE "country" ARRAY OR NOT
      $.each(country, function (key, value) {
        var index_1 = $.inArray(value, arrSecond);
        if (index_1 != -1) {
          // HIDES PAYMENT METHOD FOR KLARNA 
          $("#payment-gateway-subfields-74080420036").hide();
          $("div").find(`[data-select-gateway='74080420036']`).hide();
          $("div").find(`[data-select-gateway='74080321732']`).hide();
        }
      });
    }
  });
})(Checkout.$);