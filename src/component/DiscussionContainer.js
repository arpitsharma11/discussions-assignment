import UsenameService from '../service/UsenameService';
import DiscussionService from '../service/DiscussionService';
import Discussion from "./Discussion";

const discussionContainerDom = document.querySelector(".discussion-container");

const discussion = new Discussion();

class DiscussionContainer{
    render(){
        DiscussionService.fetchDiscussion().forEach(element => {
            discussion.render(discussionContainerDom,element);
        });

        this.addEventListeners();
    }
    
    addEventListeners(){
        const upVoteBtns = document.querySelectorAll(".discussion-up");
        
        upVoteBtns.forEach( btn => {
            const id = parseInt(btn.dataset.id);
            btn.addEventListener("click", () => {
                DiscussionService.updateVote(id,"UPVOTE");
            });
        });

        const downVoteBtns = document.querySelectorAll(".discussion-down");
        
        downVoteBtns.forEach( btn => {
            const id = parseInt(btn.dataset.id);
            btn.addEventListener("click", () => {
                DiscussionService.updateVote(id,"DOWNVOTE");
            });
        })

        const commentVoteBtns = document.querySelectorAll(".discussion-comment");
        
        commentVoteBtns.forEach( btn => {
            const id = parseInt(btn.dataset.id);
            btn.addEventListener("click", () => {
                DiscussionService.addComment(id,"comments");
            });
        })
    };
};

export default DiscussionContainer;