'use strict';

/*
 *Function that handles offer dropdown list appearance
 */
(function() {
    var btnList = document.getElementsByClassName('snippet-card__show-offers');
    var dropdown = document.querySelectorAll('.offers')
    var product = document.querySelectorAll('.products-list__item');

    function showOffers(item, i) {
        function handleClick(e) {
            var offset;
            var text = this.getElementsByClassName('snippet-card__show-offers-text')[0];

            e.preventDefault();

            this.classList.toggle('snippet-card__btn-clicked');
            dropdown[i].classList.toggle('offers--active');

            if (!this.classList.contains('snippet-card__btn-clicked')) {
                offset = 30;
                text.textContent = "показать другие предложения";
            } else {
                offset = dropdown[i].offsetHeight + 30;
                text.textContent = "скрыть другие предложения";
            }

            product[i].style.marginBottom = offset + 'px';
        }
        item.addEventListener('click', handleClick);
    }

    [].forEach.call(btnList, function(item, i) {
        showOffers(item, i)
    });
})();

/*
 *Function that handles catalog opening
 */
(function() {
    var openBtn = document.getElementsByClassName('search__catalog-btn')[0];
    var burger = document.getElementsByClassName('search__burger')[0];
    var catalog = document.getElementsByClassName('catalog')[0];

    function handleClick(e) {
        catalog.classList.toggle('catalog--active');
        burger.classList.toggle('search__burger-clicked');
    }
    openBtn.addEventListener('click', handleClick);
})();

/*
 *Function that handles full catalog behavior
 */
(function() {
    var tree = document.getElementsByClassName('catalog__tree')[0];
    var treeLis = tree.getElementsByTagName('li');

    for (var i = 0; i < treeLis.length; i++) {
        var li = treeLis[i];
        var strong = document.createElement('strong');
        li.insertBefore(strong, li.firstChild);
        strong.appendChild(strong.nextSibling);
    }

    function clickHandler(e) {
        var target = e.target;

        if (target.tagName != 'STRONG') {
            return;
        }

        var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
        if (!childrenContainer) return;

        childrenContainer.hidden = !childrenContainer.hidden;
    }
    tree.addEventListener('click', clickHandler);
})();
