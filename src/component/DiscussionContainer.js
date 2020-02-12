import UsenameService from '../service/UsenameService';
import DiscussionService from '../service/DiscussionService';
import Discussion from "./Discussion";


const discussion = new Discussion();

class DiscussionContainer{

    constructor(){
        this.discussions = DiscussionService.fetchDiscussion(); // Fetch all discussions
        this.comments = DiscussionService.fetchComments(); // Fetch all comments
    }

    render(){
        const discussionMainDom = document.querySelector(".discussion-main");
        const addDiscussionDom = document.querySelector(".add-discussion");
        addDiscussionDom.innerHTML = `
            <input 
                placeholder="Create a new discussion" 
                class="add-discussion_textField textField" 
                type="text" 
                id="topic" 
                name="lname" 
            />`;

        //Rendering all discussions
        this.discussions.forEach(element => {
            discussion.render(discussionMainDom,element);
        });

        //Rendering all comments to there respective discussions
        this.comments.forEach(element => {
            const commentsDiv = document.querySelector(`#comments-${element.parentId}`);
            discussion.render(commentsDiv,element);
        });

        //adding event listner
        this.addDiscussionListeners();
        this.addVoteListeners();
        this.addCommentListner();
        this.addEnableCommentListener();
    }

    //listner for add new discussion
    addDiscussionListeners(){

        const discussionMainDom = document.querySelector(".discussion-main");
        
        const newTopicDom = document.querySelector('#topic');
        newTopicDom.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                if(newTopicDom.value !== ""){
                    const newDiscussion = DiscussionService.startDiscussion("discussion",null,newTopicDom.value);
                    this.discussions.push(newDiscussion);
                    discussion.render(discussionMainDom,newDiscussion);
    
                    const upBtn = Array.from(document.querySelectorAll(".discussion-up"))
                            .filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    this.updateVote(upBtn,newDiscussion.id,"upVote");
    
                    const downBtn = Array.from(document.querySelectorAll(".discussion-down"))
                        .filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    this.updateVote(downBtn,newDiscussion.id,"downVote");
    
                    this.addComment(newDiscussion.id);
    
                    const enableCommentBtnDom = Array.from(document.querySelectorAll(".enable-comment"))
                        .filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    this.enableCommentBtn(enableCommentBtnDom,newDiscussion.id);
                    newTopicDom.value = "";
                }
            }
        });
    };

    //listner for up vote and down vote
    addVoteListeners(){

        const upVoteBtns = document.querySelectorAll(".discussion-up");
        
        upVoteBtns.forEach( btn => {
            const id = parseInt(btn.dataset.id);
            this.updateVote(btn,id,"upVote");
        });

        const downVoteBtns = document.querySelectorAll(".discussion-down");
        
        downVoteBtns.forEach( btn => {
            const id = parseInt(btn.dataset.id);
            btn.addEventListener("click", () => {
                this.updateVote(btn,id,"downVote");
            });
        })

    };

    //listner for add new comment
    addCommentListner(){
        const commentInputs = document.querySelectorAll(".comment_textField");
        
        commentInputs.forEach( input => {
            const id = parseInt(input.id.split('-')[1]);
            this.addComment(id);
        })
    }

    //listner for to show/hide comment section
    addEnableCommentListener(){
        const enableComment = document.querySelectorAll(".enable-comment");

        enableComment.forEach( btn => {
            const id = parseInt(btn.dataset.id);
            this.enableCommentBtn(btn,id);
            
        });
    }


    //Adding new comment on discussion with id
    addComment(id){
        const commentDom = document.getElementById(`comment-${id}`);

        commentDom.addEventListener('keypress', (event) => {

            if(event.key === 'Enter'){
                if(commentDom.value !== ""){

                    const commentsDiv = document.querySelector(`#comments-${id}`);
                    const newDiscussion = DiscussionService.startDiscussion("comment",id,commentDom.value);
                    
                    discussion.render(commentsDiv,newDiscussion);
                    
                    const upBtn = Array.from(document.querySelectorAll(".discussion-up"))
                        .filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    this.updateVote(upBtn,newDiscussion.id,"upVote");
    
                    const downBtn = Array.from(document.querySelectorAll(".discussion-down"))
                        .filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    this.updateVote(downBtn,newDiscussion.id,"downVote");
    
                    const enableCommentBtn = Array.from(document.querySelectorAll(".enable-comment"))
                        .filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    this.enableCommentBtn(enableCommentBtn,newDiscussion.id);

                    this.addComment(newDiscussion.id);
    
                    document.getElementById(`add-comment-${id}`).style.display = 'none';
                    commentDom.value="";
                }
            }
        });
    }

    // Updating vote in storage
    updateVote(btn,id,task){
        btn.addEventListener("click", () => {
            const vote = DiscussionService.updateVote(id,task);
            const voteSpan = document.querySelector(`#${task}-${id}`);
            voteSpan.innerHTML = vote;
        });
    }

    enableCommentBtn(enablceCommentDom,id){
        enablceCommentDom.addEventListener("click", () => {
            let displayProp = document.getElementById(`add-comment-${id}`).style.display;
            if(displayProp === 'unset' ){
                document.getElementById(`add-comment-${id}`).style.display = 'none';
            } else {
                document.getElementById(`add-comment-${id}`).style.display = 'unset'
            }
        });
    }
};

export default DiscussionContainer;