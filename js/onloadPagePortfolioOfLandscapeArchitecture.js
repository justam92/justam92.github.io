(function onloadPagePortfolioOfLandscapeArchitecture() {
    var firstPageAndTitleOfProjects = getFirstPageAndTitleOfProjects();

    var containerOfArticle = document.getElementsByTagName("article")[0]; //pobiera z html'a tag article

    var leftButton = document.createElement("i");
    leftButton.classList = "icon-left-open-outline";
    containerOfArticle.appendChild(leftButton);

    var rightButton = document.createElement("i");
    rightButton.classList = "icon-right-open-outline";
    containerOfArticle.appendChild(rightButton);

    var referenceToTheLink = document.createElement("a"); //tworzy <a></a>
    referenceToTheLink.href = "#";

    var mainScanOfProject = document.createElement("img");
    mainScanOfProject.classList = "mainScanOfProject";
    mainScanOfProject.src = firstPageAndTitleOfProjects[0].pageImage;
    referenceToTheLink.appendChild(mainScanOfProject); //wrzuca <img> do <a></a>

    var titleOfProject = document.createElement("p");
    titleOfProject.classList = "titleOfProject";
    titleOfProject.textContent = firstPageAndTitleOfProjects[0].title;
    referenceToTheLink.appendChild(titleOfProject);

    containerOfArticle.appendChild(referenceToTheLink);

    function getNextProject() {

        for (var counter = 0; counter < firstPageAndTitleOfProjects.length; counter++) {

            if (titleOfProject.textContent == firstPageAndTitleOfProjects[counter].title) {

                var firstPageAndTitleOfNextProjects = firstPageAndTitleOfProjects[counter + 1];

                mainScanOfProject.src = firstPageAndTitleOfNextProjects.pageImage;
                titleOfProject.textContent = firstPageAndTitleOfNextProjects.title;
                break;
            }
            if (titleOfProject.textContent == firstPageAndTitleOfProjects[11].title) {

                var firstPageAndTitleOfFirstProject = firstPageAndTitleOfProjects[0];

                mainScanOfProject.src = firstPageAndTitleOfFirstProject.pageImage;
                titleOfProject.textContent = firstPageAndTitleOfFirstProject.title;
                break;
            }
        }

    }

    rightButton.onclick = getNextProject;

    function getPreviousProject() {

        for (var counter = 0; counter < firstPageAndTitleOfProjects.length; counter++) {

            if (titleOfProject.textContent == firstPageAndTitleOfProjects[0].title) {

                var firstPageAndTitleOfLastProject = firstPageAndTitleOfProjects[11];

                mainScanOfProject.src = firstPageAndTitleOfLastProject.pageImage;
                titleOfProject.textContent = firstPageAndTitleOfLastProject.title;
                break;
            }
            if (titleOfProject.textContent == firstPageAndTitleOfProjects[counter].title) {

                var firstPageAndTitleOfPreviousProjects = firstPageAndTitleOfProjects[counter - 1];

                mainScanOfProject.src = firstPageAndTitleOfPreviousProjects.pageImage;
                titleOfProject.textContent = firstPageAndTitleOfPreviousProjects.title;
                break;
            }

        }
    }
    leftButton.onclick = getPreviousProject;
})();