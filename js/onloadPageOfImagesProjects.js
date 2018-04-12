function onloadPageOfImagesProjects() {
    var pagesAndDescriptionsOfProjects = getFirstPageAndTitleOfProjects();

    var containerOfArticle = document.getElementsByTagName("article")[0];

    var scansOfProject = document.createElement("div");

    var descriptionOfProject = document.createElement("p");
    descriptionOfProject.classList = "descriptionOfProject";

    createImagesOfProjectPagesAndDescription();

    containerOfArticle.appendChild(descriptionOfProject);
    containerOfArticle.appendChild(scansOfProject);


    function createImagesOfProjectPagesAndDescription() {
        for (var counter = 0; counter < pagesAndDescriptionsOfProjects.length; counter++) {

            var titleOfProject = document.getElementsByClassName("titleOfProject")[0];

            if (titleOfProject.textContent == pagesAndDescriptionsOfProjects[counter].title) {

                deleteLeftAndRightButtonsAndFirstPageAndTitle();

                var pagesOfProject = pagesAndDescriptionsOfProjects[counter].images;

                for (var quantity = 0; quantity < pagesOfProject.length; quantity++) {
                    var imageOfProject = document.createElement("img");
                    imageOfProject.classList = "imageOfProject";
                    imageOfProject.src = pagesOfProject[quantity].image;
                    scansOfProject.appendChild(imageOfProject);
                }

                descriptionOfProject.textContent = pagesAndDescriptionsOfProjects[counter].description;

                break;
            }
        }
    }

    function deleteLeftAndRightButtonsAndFirstPageAndTitle() {
        var leftButton = document.getElementsByClassName("icon-left-open-outline")[0];
        leftButton.parentNode.removeChild(leftButton);

        var rightButton = document.getElementsByClassName("icon-right-open-outline")[0];
        rightButton.parentNode.removeChild(rightButton);

        var referenceToTheLink = document.getElementById("referenceToTheLink");
        referenceToTheLink.parentNode.removeChild(referenceToTheLink);
    }
}