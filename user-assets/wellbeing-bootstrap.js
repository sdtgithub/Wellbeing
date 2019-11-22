window.goBack = function() {

    window.location.href = "index.html#/app/ChatHealthIM/config";
}

setTimeout(function () {

    var nodes = document.body.childNodes;

    for(var i = 0; i < nodes.length; i++) {

        if (nodes[i].nodeName === "DIV") {

            nodes[i].parentElement.removeChild(nodes[i]);
        }
    }

    var container = document.createElement("div");
    container.id = "body";

    document.body.appendChild(container);

    const trigger = function() {
        if (typeof LHISWellbeingPortalManager === "undefined") {

            setTimeout(trigger, 200);
            return;
        }

        LHISWellbeingPortalManager.triggerBootstrap();
    };

    trigger();
}, 500);