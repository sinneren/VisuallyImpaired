var VisuallyImpaired = (function() {
    function createButtonToggler() {
        var container = document.createElement('div');
        container.classList.add('vi-button');
        container.innerHTML = 'Переключить';
        return container;
    }
    function createPanel() {
        var container = document.createElement('div');
        container.classList.add('vi-container');

        container.appendChild(createFontController());
        container.appendChild(createCerningController());
        return container;
    }
    function createFontController() {
        var container = document.createElement('div');
        container.classList.add('vi-item');

        var itemLabel = document.createElement('div');
        itemLabel.classList.add('vi-item__label');
        itemLabel.innerHTML = 'Размер шрифта';

        var btnFontDecrement = document.createElement('div');
        btnFontDecrement.classList.add('vi-btn');
        btnFontDecrement.innerHTML = 'A-';

        var btnFontIncrement = document.createElement('div');
        btnFontIncrement.classList.add('vi-btn');
        btnFontIncrement.innerHTML = 'A+';

        container.appendChild(itemLabel);
        container.appendChild(btnFontDecrement);
        container.appendChild(btnFontIncrement);

        btnFontDecrement.addEventListener('click', function(e) {
            e.preventDefault();
            if (document.body.style.fontSize !== '') {
                document.body.style.fontSize = parseInt(document.body.style.fontSize) - 10 + '%';
            } else {
                document.body.style.fontSize = '90%';
            }
        });

        btnFontIncrement.addEventListener('click', function (e) {
            e.preventDefault();

            if (document.body.style.fontSize !== '') {
                document.body.style.fontSize = parseInt(document.body.style.fontSize) + 10 + '%';
            } else {
                document.body.style.fontSize = '90%';
            }
        });

        return container;
    }
    function createCerningController() {
        var container = document.createElement('div');
        container.classList.add('vi-item');

        var itemLabel = document.createElement('div');
        itemLabel.classList.add('vi-item__label');
        itemLabel.innerHTML = 'Размер кернинга';

        var btnCerningDecrement = document.createElement('div');
        btnCerningDecrement.classList.add('vi-btn');
        btnCerningDecrement.innerHTML = 'C-';

        var btnCerningIncrement = document.createElement('div');
        btnCerningIncrement.classList.add('vi-btn');
        btnCerningIncrement.innerHTML = 'C+';

        container.appendChild(itemLabel);
        container.appendChild(btnCerningDecrement);
        container.appendChild(btnCerningIncrement);

        btnCerningDecrement.addEventListener('click', function (e) {
            e.preventDefault();
            if (document.body.style.letterSpacing !== '') {
                document.body.style.letterSpacing = parseInt(document.body.style.letterSpacing) - 1 + 'px';
            } else {
                document.body.style.letterSpacing = '1px';
            }
        });
        btnCerningIncrement.addEventListener('click', function (e) {
            e.preventDefault();
            if (document.body.style.letterSpacing !== '') {
                document.body.style.letterSpacing = parseInt(document.body.style.letterSpacing) + 1 + 'px';
            } else {
                document.body.style.letterSpacing = '1px';
            }
        });

        return container;
    }
    function styleTag() {
        var container = document.createElement('style');
        container.innerHTML = `
            .vi-button {
                position: absolute;
                top: 0;
                right: 20px;
                height: 20px;
                border: 1px solid black;
                font-size: 16px;
                letter-spacing: initial;
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
            }
            .vi-container {
                position: absolute;
                top: 0;
                left: 50%;
                margin-left: -450px;
                width: 900px;
                padding: 13px 10px;
                border-bottom: 1px solid rgba(0,0,0,.06);
                border-left: 1px solid rgba(0,0,0,.06);
                border-right: 1px solid rgba(0,0,0,.06);
                background-color: #f6f5f3;
                font-size: 16px;
                letter-spacing: initial;
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
            }
            .vi-btn {
                display: inline-block;
                padding: 0 7px;
                margin-left: 3px;
                margin-right: 3px;
                border: 1px solid gray;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                text-align: center;
                white-space: nowrap;
                outline: 0;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                -ms-touch-action: manipulation;
                touch-action: manipulation;
                font: 1em Arial,Helvetica,sans-serif;
                font-size: 13px;
                line-height: 28px;
                border: 1px solid rgba(0,0,0,.2);
                border-radius: 3px;
                background-color: #fff;
            }
            .vi-item {
                float: left;
                text-align: center;
                padding: 10px 5px;
            }
            .vi-item__label {
                margin-bottom: 10px;
                text-align: center;
                font: .8em Arial,Helvetica,sans-serif;
            }
        `;
        return container;
    }
    return {
        init: function() {
            document.body.appendChild(createButtonToggler());
            document.body.appendChild(createPanel());
            document.body.appendChild(styleTag());
        }
    };
})();

VisuallyImpaired.init();