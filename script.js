const profilePhoto = document.getElementById("profilePhoto");

const photoModal = document.getElementById("photoModal");

const closePhoto = document.getElementById("closePhoto");


/* Open photo */

profilePhoto.addEventListener("click", function () {

    photoModal.classList.add("show");

});


/* Close photo */

closePhoto.addEventListener("click", function () {

    photoModal.classList.remove("show");

});


/* Close when clicking outside the photo */

photoModal.addEventListener("click", function (event) {

    if (event.target === photoModal) {

        photoModal.classList.remove("show");

    }

});