import DiscussionContainer from "./DiscussionContainer";

const appDom = document.querySelector(".app");

class App{
    // const addDiscussion = new AddDiscussion();
    constructor(){
        this.discussionContainer = new DiscussionContainer();
    }
        
    // addDiscussion.render();

    render(){

        appDom.innerHTML = `<div class="add-discussion" ></div>
        <div class="discussion-main" ></div>`
        this.discussionContainer.render();
    }
}

export default App;