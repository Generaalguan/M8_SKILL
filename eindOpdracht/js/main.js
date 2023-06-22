
class Cleaner {
    clean(WhatToClean) {
        document.querySelector(WhatToClean).innerHTML = "";
    }
}

class Renderer {
    render(whatToRender, whereToRender) {
        whereToRender.appendChild(whatToRender);
    }

}

class Api {

    async getData(url) {
        let dataToBeReturned = {};

        await fetch(url).then(
            (response) => {
                return response.json();
            }

        ).then((data) => {
            dataToBeReturned = data.data;
        })
        return dataToBeReturned;
    }
}

class App {
    api;
    switcher;

    constructor() {

        this.api = new Api();
        this.api.getData("../json/data.json").then((data) => {
            this.switcher = new Switcher(data, this)
        });

    }



}

class Switcher {
    app;
    data;
    cleaner;
    yubtub;

    constructor(incommingData, incommingApp) {
        this.data = incommingData;
        this.app = incommingApp;
        this.cleaner = new Cleaner();
        this.yubtub = new Yubtub(this, this.data);

    }


}


class Yubtub {

    switcher;
    renderer;
    header;
    main;
    aside;
    HTMLElement;
    HTMLWrapper;
    data;

    constructor(incommingSwitcher, incommingData) {
        this.switcher = incommingSwitcher;
        this.data = incommingData;
        this.renderer = new Renderer();

        this.HTMLElement = document.createElement("main");
        this.HTMLElement.classList = ("yubtub");

        this.HTMLWrapper = document.createElement("div");
        this.HTMLWrapper.classList = "yubtub__wrapper";



        this.header = new Header(this);
        this.main = new Main(this, this.data);
        this.aside = new Aside(this, this.data);

        this.renderer.render(this.HTMLElement, document.querySelector("body"));
        this.renderer.render(this.HTMLWrapper, this.HTMLElement);


    }

    clickedVideo(title, video, profile) {
        this.main.video.laatVideoZien(title, video, profile);
    }


}


class Header {
    HTMLElement;
    yubtub;

    constructor(incommingYubtub) {
        this.yubtub = incommingYubtub;
        this.HTMLElement = document.createElement("header");
        this.HTMLElement.classList = "header";
        //this.yubtub.renderer.render(this.HTMLElement, this.yubtub.HTMLElement);

    }
}

class Main {
    yubtub;
    data;
    HTMLElement;
    video;
    comments;
    HTMLWrapper;

    constructor(incommingYubtub, incommingData) {
        this.yubtub = incommingYubtub;
        this.data = incommingData;

        this.HTMLElement = document.createElement("section");
        this.HTMLElement.classList = "main";

        this.HTMLWrapper = document.createElement("div");
        this.HTMLWrapper.classList = "main__wrapper";

        this.video = new Video(this, this.data);
        this.comments = new Comments(this, this.data);

        this.yubtub.renderer.render(this.HTMLElement, this.yubtub.HTMLWrapper);
        this.yubtub.renderer.render(this.HTMLWrapper, this.HTMLElement);



    }


}


class Video {
    main;
    data;
    HTMLElement;
    title;
    source;


    constructor(incommingMain, incommingData) {
        this.main = incommingMain;
        this.data = incommingData;
        this.HTMLElement = document.createElement("iframe");
        this.HTMLElement.classList = "main__video";

        this.videoDescription = document.createElement("article");
        this.videoDescription.classList = "main__article";

        this.title = document.createElement("h2");
        this.title.classList = "main__title";

        this.profile = document.createElement("img");
        this.profile.classList = "main__profile";

        this.star_logo = document.createElement("i");
        this.star_logo.classList = "main__icons fa-solid fa-star";

        this.arrow_logo = document.createElement("i");
        this.arrow_logo.classList = " main__icons fa-solid fa-arrow-right";

        this.star_top = document.createElement("i");
        this.star_top.classList = " main__icons--top fa-solid fa-star";

        let randomNum = Math.floor(Math.random() * 3);


        this.HTMLElement.src = this.data[randomNum].video;
        this.title.innerText = this.data[randomNum].title;
        this.profile.src = this.data[randomNum].poster;


        this.main.yubtub.renderer.render(this.HTMLElement, this.main.HTMLWrapper);
        this.main.yubtub.renderer.render(this.star_top, this.main.HTMLWrapper);
        this.main.yubtub.renderer.render(this.videoDescription, this.main.HTMLWrapper);
        this.main.yubtub.renderer.render(this.profile, this.videoDescription);
        this.main.yubtub.renderer.render(this.title, this.videoDescription);
        this.main.yubtub.renderer.render(this.star_logo, this.videoDescription);
        this.main.yubtub.renderer.render(this.arrow_logo, this.videoDescription);


    }

    laatVideoZien(title, video, profile) {
        this.HTMLElement.src = video;
        this.title.innerText = title;
        this.profile.src = profile;
    }
}

class Comments {

    main;
    HTMLElement;
    comment;
    data;

    constructor(incommingMain, incommingData) {
        this.main = incommingMain;
        this.data = incommingData;
        this.HTMLElement = document.createElement("ul");
        this.HTMLElement.classList = "main__comments";
        this.HTMLWrapper = document.createElement("div")
        this.HTMLWrapper.classList = "main__ulwrapper";

        this.comment = new Comment(this, this.data);

        this.main.yubtub.renderer.render(this.HTMLElement, this.main.HTMLWrapper);
        this.main.yubtub.renderer.render(this.HTMLWrapper, this.HTMLElement);

    }
}

class Comment {
    comments;
    HTMLElement;
    data;
    constructor(incommingComments, incommingData) {
        this.comments = incommingComments;
        this.data = incommingData;
        this.commentsArray = [];
        this.inputElement = document.createElement("input");
        this.inputElement.classList = "main__input";
        this.inputElement.placeholder = "Plaats hier je comment.... ";
        this.buttonElement = document.createElement("button");
        this.buttonElement.classList = "main__button";
        this.buttonElement.innerText = "Verstuur";
        this.buttonElement.addEventListener("click", this.addComment.bind(this));
        this.comments.main.yubtub.renderer.render(this.inputElement, this.comments.HTMLWrapper);
        this.comments.main.yubtub.renderer.render(this.buttonElement, this.comments.HTMLWrapper);
    }

    addComment() {
        this.commentText = this.inputElement.value.trim();
        if (this.commentText !== "") {
            this.HTMLElement = document.createElement("li");
            this.HTMLElement.classList = ("main__comment")
            this.HTMLElement.innerText = this.commentText;
            this.comments.main.yubtub.renderer.render(this.HTMLElement, this.comments.HTMLElement);

            this.profile = document.createElement("img");
            this.profile.classList = "main__comment__profile";

            for (let i = 0; i < this.data.length; i++) {
                this.profile.src = this.data[i].poster;
            }

            this.comments.main.yubtub.renderer.render(this.profile, this.HTMLElement);



            this.commentsArray.push(this.commentText);
            this.inputElement.value = "";
            this.inputElement.placeholder = "Plaats hier je comment....";

        }
    }
}







class Aside {

    yubtub;
    data;
    HTMLElement;
    nextVideo;



    constructor(incommingYubtub, incommingData) {
        this.yubtub = incommingYubtub;
        this.data = incommingData;

        this.HTMLElement = document.createElement("section");
        this.HTMLElement.classList = "aside";

        this.posters = document.createElement("ul");
        this.posters.classList = "aside__posters";
        this.nextVideo = new NextVideo(this, this.data);

        this.yubtub.renderer.render(this.HTMLElement, this.yubtub.HTMLWrapper);
        this.yubtub.renderer.render(this.posters, this.HTMLElement);




    }

}

class NextVideo {
    aside;
    data
    constructor(incommingAside, incommingData) {
        this.aside = incommingAside;
        this.data = incommingData;


        for (let i = 0; i < this.data.length; i++) {
            this.poster = document.createElement("li");
            this.poster.classList = "aside__poster";
            this.aside.yubtub.renderer.render(this.poster, this.aside.posters);

            this.poster.onclick = () => {
                this.aside.yubtub.clickedVideo(this.data[i].title, this.data[i].video, this.data[i].poster);
            }


            this.img = document.createElement("img");
            this.img.classList = "aside__img";
            this.img.src = this.data[i].poster;
            this.aside.yubtub.renderer.render(this.img, this.poster);

            this.title = document.createElement("p");
            this.title.classList = "aside__p";
            this.title.innerText = this.data[i].title;
            this.aside.yubtub.renderer.render(this.title, this.poster);
            this.aside.yubtub.renderer.render(this.poster, this.aside.posters);
        }


    }
}







const app = new App();