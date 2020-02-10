import AddDiscussion from "./component/AddDiscussion";
import DiscussionContainer from "./component/DiscussionContainer";

document.addEventListener("DOMContentLoaded", () => {

    const addDiscussion = new AddDiscussion();
    const discussionContainer = new DiscussionContainer();
    
    addDiscussion.render();
    discussionContainer.render();
});