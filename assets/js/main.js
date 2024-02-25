function sendMessage() {
    (function () {
        emailjs.init("eLenmPMbrt_LTQuQS");
    })();

    const serviceID = "service_zb4roxl";
    const templateID = "template_oly2w8k";
    const params = {
        sendername:document.querySelector("#name").value,
        senderemail:document.querySelector("#email").value,
        subject:document.querySelector("#subject").value,
        message:document.querySelector("#message").value
    }
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert('thank you, ' + params["sendername"] + '! your message has been sent.');
        })
        .catch();
}