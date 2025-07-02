define([], function () {
    function loadScript(src) {
        return new Promise(function (resolve, reject) {
            if (document.querySelector('script[src="' + src + '"]')) {
                resolve();
                return;
            }
            var s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }

    function loadCss(href) {
        if (!document.querySelector('link[href="' + href + '"]')) {
            var l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = href;
            document.head.appendChild(l);
        }
    }

    function renderReact($element) {
        if (!window.React || !window.ReactDOM || !window.ReactDatePicker) {
            return;
        }
        var container = $element[0];
        if (!container) {
            return;
        }
        function App() {
            var _React = window.React,
                useState = _React.useState,
                createElement = _React.createElement;
            var _useState = useState(new Date()),
                startDate = _useState[0],
                setStartDate = _useState[1];
            return createElement(window.ReactDatePicker.default || window.ReactDatePicker, {
                selected: startDate,
                onChange: function (date) { return setStartDate(date); }
            });
        }
        window.ReactDOM.render(window.React.createElement(App), container);
    }

    return {
        paint: function ($element) {
            var scripts = [
                loadScript('https://unpkg.com/react@17/umd/react.development.js'),
                loadScript('https://unpkg.com/react-dom@17/umd/react-dom.development.js'),
                loadScript('https://unpkg.com/react-datepicker/dist/react-datepicker.min.js')
            ];
            loadCss('https://unpkg.com/react-datepicker/dist/react-datepicker.css');
            Promise.all(scripts).then(function () {
                renderReact($element);
            });
        }
    };
});
