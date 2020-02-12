import DiscussionContainer from "./DiscussionContainer";

const appDom = document.querySelector(".app");

class App{
    constructor(){
        this.discussionContainer = new DiscussionContainer();
    }

    render(){

        appDom.innerHTML = `
            <div class="add-discussion" ></div>
            <div class="discussion-main" ></div>
        `
        this.discussionContainer.render();
    }
}

export default App;