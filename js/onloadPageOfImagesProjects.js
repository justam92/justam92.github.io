function onloadPageOfImagesProjects() {
    var pagesAndDescriptionsOfProjects = getFirstPageAndTitleOfProjects();

    var containerOfArticle = document.getElementsByTagName("article")[0];

    var scansOfProject = document.createElement("div");
    scansOfProject.id = "scansOfProject";

    var descriptionOfProject = document.createElement("p");
    descriptionOfProject.classList = "descriptionOfProject";

    createImagesOfProjectPagesAndDescription();

    containerOfArticle.appendChild(descriptionOfProject);
    containerOfArticle.appendChild(scansOfProject);

    var backToThePreviousPage = document.createElement("a");
    backToThePreviousPage.id = "backToThePreviousPage";
    backToThePreviousPage.href = "portfolio-of-landscape-architecture.html";

    var undo = document.createElement("i");
    undo.classList = "icon-undo";
    undo.textContent = "Wróć do poprzedniej strony";

    backToThePreviousPage.appendChild(undo);
    containerOfArticle.appendChild(backToThePreviousPage);


    function createImagesOfProjectPagesAndDescription() {
        for (var counter = 0; counter < pagesAndDescriptionsOfProjects.length; counter++) {

            var titleOfProject = document.getElementsByClassName("titleOfProject")[0];

            if (titleOfProject.textContent == pagesAndDescriptionsOfProjects[counter].title) {

                deleteLeftAndRightButtonsAndFirstPageAndTitle();

                var pagesOfProject = pagesAndDescriptionsOfProjects[counter].images;

                for (var quantity = 0; quantity < pagesOfProject.length; quantity++) {

                    var storageForImage = document.createElement('a');
                    storageForImage.classList.add('storageForImage');

                    var magnifier = document.createElement("i");
                    magnifier.classList = "icon-search-1";
                    storageForImage.appendChild(magnifier);
                    
                    var imageOfProject = document.createElement("img");
                    imageOfProject.classList = "imageOfProject";
                    imageOfProject.src = pagesOfProject[quantity].image;
                    storageForImage.appendChild(imageOfProject);

                    scansOfProject.appendChild(storageForImage);
                    
                    
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