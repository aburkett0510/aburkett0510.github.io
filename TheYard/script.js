//Referral Spawner
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('#showText');
    const textElement = document.querySelector('#text');

    button.addEventListener('click', function() {
        textElement.innerHTML = const textElement[
            "A multi-faceted and immensely talented individual Austins work ethic is rivaled only by his passion for game creation and his empathy for his peers These traits shine true when I watched him pull together a team to help develop and refine a fully fledged alternate reality game concept he came up with himself as well as from our many talks together about the state of the industry Im truly lucky I got the chance to meet such a wonderful friend and colleague Zach Cabral";


        ]

        const randomIndex = Math.floor(Math.random() * 3);
        document.querySelector('#text').src = textElement[randomIndex];
    });
});