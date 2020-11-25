  $(".fa-plus").click(function (event) {
    event.stopPropagation;
    $(".container-input").css("display", "block");
    $("section.options").slideToggle("slow", function () {
      $(".options input").focus(function () {
        $("section.option").css("position", "relative");
      });
    });
    $(".options").css("display", "fixed");
  });

  $(".adicionarTarefa").click(function () {
    $("section.options").slideToggle("slow");
  });

  function verificar() {
    $(".button").click(function () {
      const name = $(".input_name").val();
      const like = $(".input_like").val();
      const time = $(".input-time").val();
      const date = $(".input-date").val();
      const setName = localStorage.setItem("Nome", name);
      let verifyName = localStorage.getItem("Nome");
      if (verifyName) {
        console.log("verdadeiro");
        window.location.href = "app.html";
      } else {
        console.log("false");
        console.log(verifyName);
        return false;
      }
    });

    $(".verifyKey").click(function () {
      let verifyName = localStorage.getItem("Nome");
      if (verifyName) {
        window.location.href = "app.html";
        document.getElementById("html").innerHTML = "<b>teste</b>";
      } else {
        window.location.href = "form.html";
      }
    });
  }
  verificar();

  $("body").dblclick(function () {
    $("section.options").slideToggle("slow");
  });

 