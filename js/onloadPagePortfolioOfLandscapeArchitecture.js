function onloadPagePortfolioOfLandscapeArchitecture() {
    var firstPageAndTitleOfProject = getFirstPageAndTitleOfProject();

    var containerOfArticle = document.getElementsByTagName("article")[0]; //pobiera z html'a tag article

    var clickLeftOutline = document.createElement("i");
    clickLeftOutline.classList = "icon-left-open-outline";

    var referenceToTheLink = document.createElement("a"); //tworzy <a></a>
    referenceToTheLink.href = "#";

    var mainScanOfProject = document.createElement("img");
    mainScanOfProject.classList = "mainScanOfProject";
    mainScanOfProject.src = firstPageAndTitleOfProject[0].image;

    var titleOfProject = document.createElement("p");
    titleOfProject.classList = "titleOfProject";
    titleOfProject.textContent = firstPageAndTitleOfProject[0].title;

    var clickRightOutline = document.createElement("i");
    clickRightOutline.classList = "icon-right-open-outline";

    referenceToTheLink.appendChild(mainScanOfProject); //wrzuca <img> do <a></a>

    referenceToTheLink.appendChild(titleOfProject);

    containerOfArticle.appendChild(clickLeftOutline);

    containerOfArticle.appendChild(referenceToTheLink);

    containerOfArticle.appendChild(clickRightOutline);
    
    
    function getNextProject() {
        
        var textOfTitleOfProject = titleOfProject.textContent;

        var positionOfTitle = getFirstPageAndTitleOfProject().title;


        debugger;

        for (var x = 0; x < getFirstPageAndTitleOfProject().length; x++) {
            mainScanOfProject.src = firstPageAndTitleOfProject[x].image;
            titleOfProject.textContent = firstPageAndTitleOfProject[x].title;
        }

    }
    
    clickRightOutline.onclick = getNextProject;

    function getPreviousProject() {
        for (var x = 0; x < length.getFirstPageAndTitleOfProject; x--) {
            mainScanOfProject.src = firstPageAndTitleOfProject[x].image;
            titleOfProject.textContent = firstPageAndTitleOfProject[x].title;
        }
    }
    clickLeftOutline.onclick = getPreviousProject;
}


onloadPagePortfolioOfLandscapeArchitecture();