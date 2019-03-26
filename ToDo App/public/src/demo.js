var helpers;

//https://my-json-server.typicode.com/typicode/demo/posts

helpers = {
    log: function(msg) {
        var console, message;

        console = document.getElementById('console');

        message = document.createElement('div');
        message.innerText = msg;

        console.appendChild(message);
    },

    onSubmit: function(e) {
        console.log(e);
        e.preventDefault();
    },

    onClickSubmit: function() {
        var form;

        form = document.forms[0];
        form = document.getElementById('form0');

        form.submit();
    },

    onClickSync: function() {
        var xhr;

        xhr = new XMLHttpRequest();

        xhr.open(
            'GET', 
            'https://my-json-server.typicode.com/typicode/demo/posts', 
            false
        );
        xhr.send();

        helpers.log('response status: ' + xhr.status);
        helpers.log('response text: ' + xhr.responseText);
    },

    onClickAsync: function() {
        var xhr;

        xhr = new XMLHttpRequest();

        xhr.open(
            'GET', 
            'https://my-json-server.typicode.com/typicode/demo/posts', 
            true
        );
        xhr.send();

        //helpers.log('response status: ' + xhr.status);
        //helpers.log('response text: ' + xhr.responseText);

        //xhr.onreadystatechange
        xhr.addEventListener('readystatechange', function(e) {
            helpers.log('ready state changed: ' + xhr.readyState);

            /*
                0   UNSENT  open() has not been called yet.
                1   OPENED  send() has been called.
                2   HEADERS_RECEIVED    send() has been called, and headers and status are available.
                3   LOADING Downloading; responseText holds partial data.
                4   DONE    The operation is complete.
             */
            if (xhr.readyState == 4) {
                helpers.log('response status: ' + xhr.status);
                helpers.log('response text: ' + xhr.responseText);
            }
        });
    },

    onClickSubmitUpload: function(e) {
        var form, formData, xhr;

        e.preventDefault();

        form = document.getElementById('form1');
        formData = new FormData(form);
        formData.append('test', 123);
        //formData.append("userfile", fileInputElement.files[0]);

        // JavaScript file-like object
        //var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
        //var blob = new Blob([content], { type: "text/xml"});

        //formData.append("webmasterfile", blob);

        xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://my-json-server.typicode.com/typicode/demo/posts');
        xhr.send(formData);

        form.reset();
    },

    init: function() {
        var form, input;

        form = document.getElementById('form0');
        form.addEventListener('submit', helpers.onSubmit);

        input = document.getElementById('sendForm');
        input.addEventListener('click', helpers.onClickSubmit);

        input = document.getElementById('sendSync');
        input.addEventListener('click', helpers.onClickSync);

        input = document.getElementById('sendAsync');
        input.addEventListener('click', helpers.onClickAsync);

        form = document.getElementById('form1');
        form.addEventListener('submit', helpers.onClickSubmitUpload);
    }
};

document.addEventListener('DOMContentLoaded', helpers.init);
