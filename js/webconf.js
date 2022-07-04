window.onload = function () {
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.addEventListener("click", function() {
        Swal.fire ({
            title: "Inscrição na WebConference"
        })
    });
}