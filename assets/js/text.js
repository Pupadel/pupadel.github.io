//хуйня сверху анимированная
$(function () { 
    var title = document.title, 
        animSeq = ["|"], 
        animIndex = 0, 
        titleIndex = 0; 
    function doInverseSpinZeroPitch() { 
        var loadTitle = title.substring(0, titleIndex); 
        if (titleIndex > title.length) { 
            animIndex = 0; 
            titleIndex = 0 
        } 
        if (animIndex > 1) { 
            titleIndex++; 
            animIndex = 0 
        } 
       document.title = loadTitle + animSeq[0]; 
        animIndex++ 
    } 
    window.setInterval(doInverseSpinZeroPitch, 150); 
}); 
//Дескрипшен анимированный
$(function () { 
    $(".typed").typed({ 
        strings: ["Хто ето?", "Обсасыватель кода", "Любитель музяки...", "МазэХакер", "Сбежал из дурки", "Полон решимости⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣ брух", "Любит cumming inside anime girl"], 
        typeSpeed: 100, 
        loop: true, 
        cursorChar: "|", 
    }); 
});
