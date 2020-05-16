﻿var aspnetcore = aspnetcore || {};
(function () {

    aspnetcore.swagger = aspnetcore.swagger || {};

    aspnetcore.swagger.closeAuthDialog = function () {
        if (document.getElementById('aspnetcore-auth-dialog')) {
            document.getElementsByClassName("swagger-ui")[1].removeChild(document.getElementById('aspnetcore-auth-dialog'));
        }
    }

    aspnetcore.swagger.openAuthDialog = function (loginCallback) {
        aspnetcore.swagger.closeAuthDialog();

        var aspnetcoreAuthDialog = document.createElement('div');
        aspnetcoreAuthDialog.className = 'dialog-ux';
        aspnetcoreAuthDialog.id = 'aspnetcore-auth-dialog';

        document.getElementsByClassName("swagger-ui")[1].appendChild(aspnetcoreAuthDialog);

        // -- backdrop-ux
        var backdropUx = document.createElement('div');
        backdropUx.className = 'backdrop-ux';
        aspnetcoreAuthDialog.appendChild(backdropUx);

        // -- modal-ux
        var modalUx = document.createElement('div');
        modalUx.className = 'modal-ux';
        aspnetcoreAuthDialog.appendChild(modalUx);

        // -- -- modal-dialog-ux
        var modalDialogUx = document.createElement('div');
        modalDialogUx.className = 'modal-dialog-ux';
        modalUx.appendChild(modalDialogUx);

        // -- -- -- modal-ux-inner
        var modalUxInner = document.createElement('div');
        modalUxInner.className = 'modal-ux-inner';
        modalDialogUx.appendChild(modalUxInner);

        // -- -- -- -- modal-ux-header
        var modalUxHeader = document.createElement('div');
        modalUxHeader.className = 'modal-ux-header';
        modalUxInner.appendChild(modalUxHeader);

        var modalHeader = document.createElement('h3');
        modalHeader.innerText = 'Authorize';
        modalUxHeader.appendChild(modalHeader);

        // -- -- -- -- modal-ux-content
        var modalUxContent = document.createElement('div');
        modalUxContent.className = 'modal-ux-content';
        modalUxInner.appendChild(modalUxContent);

        modalUxContent.onkeydown = function (e) {
            if (e.keyCode === 13) {
                //try to login when user presses enter on authorize modal
                loginCallback();
            }
        };

        //Inputs
        createInput(modalUxContent, 'username', 'Username');
        createInput(modalUxContent, 'password', 'Password', 'password');

        //Buttons
        var authBtnWrapper = document.createElement('div');
        authBtnWrapper.className = 'auth-btn-wrapper';
        modalUxContent.appendChild(authBtnWrapper);

        //Close button
        var closeButton = document.createElement('button');
        closeButton.className = 'btn modal-btn auth btn-done button';
        closeButton.innerText = 'Close';
        closeButton.style.marginRight = '5px';
        closeButton.onclick = aspnetcore.swagger.closeAuthDialog;
        authBtnWrapper.appendChild(closeButton);

        //Authorize button
        var authorizeButton = document.createElement('button');
        authorizeButton.className = 'btn modal-btn auth authorize button';
        authorizeButton.innerText = 'Login';
        authorizeButton.onclick = function () {
            loginCallback();
        };
        authBtnWrapper.appendChild(authorizeButton);
    }

    function createInput(container, id, title, type) {
        var wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        container.appendChild(wrapper);

        var label = document.createElement('label');
        label.innerText = title;
        wrapper.appendChild(label);

        var section = document.createElement('section');
        section.className = 'block-tablet col-10-tablet block-desktop col-10-desktop';
        wrapper.appendChild(section);

        var input = document.createElement('input');
        input.id = id;
        input.type = type ? type : 'text';
        input.style.width = '100%';

        section.appendChild(input);
    }

})();