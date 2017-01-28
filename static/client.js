$(function() {

    "use strict";

    $(document).ready((e) => {
        $(document).on("submit", (e) => {
            e.preventDefault();
            let text = $("#textarea1").val();
            let url = $("#input1").val();
            if (!text || !url) {
                $("#result").text("ERRORE: Campi mancanti o url non corretto").css("color", "red");
                return;
            }

            $.ajax({
                    method: "POST",
                    url: "/updateFile/",
                    data: {
                        text,
                        url
                    }
                })
                .then((result) => {
                    console.info(result);
                    $("#result").text(result).css("color", "green");
                })
                .catch((error) => {
                    console.error(error);
                    $("#result").text("ERRORE: Campi mancanti o url non corretto").css("color", "red");
                });

        });
    });

});
