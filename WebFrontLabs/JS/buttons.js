function checkButton(mainElementId, sectionId) {
    var section = document.getElementById(sectionId);
    var mainElement = document.getElementById(mainElementId);

    if (section.style.display == "none" || section.style.display == "") {
        section.style.display = "block";
        mainElement.style.backgroundColor = "black !important";

        var choices = document.getElementsByClassName("choice");
        for (var i = 0; i < choices.length; i++) {
            choices[i].style.backgroundColor = "black"; // Устанавливаем черный фон
        }
    } else {
        section.style.display = "none";
        mainElement.style.backgroundColor = "";

        var choices = document.getElementsByClassName("choice");
        for (var i = 0; i < choices.length; i++) {
            choices[i].style.backgroundColor = ""; // Сбрасываем фон
        }
    }
}
