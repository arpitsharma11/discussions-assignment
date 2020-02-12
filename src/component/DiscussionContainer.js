import UsenameService from '../service/UsenameService';
import DiscussionService from '../service/DiscussionService';
import Discussion from "./Discussion";


const discussion = new Discussion();

class DiscussionContainer{

    constructor(){
        this.discussions = DiscussionService.fetchDiscussion();
        this.comments = DiscussionService.fetchComments();
    }

    render(){
        const discussionMainDom = document.querySelector(".discussion-main");
        const addDiscussionDom = document.querySelector(".add-discussion");
        addDiscussionDom.innerHTML = `
            <input placeholder="Create a new discussion" class="add-discussion_textField textField" type="text" id="topic" name="lname" />`;
        this.discussions.forEach(element => {
            discussion.render(discussionMainDom,element);
        });

        this.comments.forEach(element => {
            const commentsDiv = document.querySelector(`#comments-${element.parentId}`);
            discussion.render(commentsDiv,element);
        });

        this.addDiscussionListeners();
        this.addVoteListeners();
        this.addCommentListner();
        this.addEnableCommentListener();
    }

    addDiscussionListeners(){

        const discussionMainDom = document.querySelector(".discussion-main");
        
        const newTopicDom = document.querySelector('#topic');
        newTopicDom.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                if(newTopicDom.value !== ""){
                    const newDiscussion = DiscussionService.startDiscussion("discussion",null,newTopicDom.value);
                    this.discussions.push(newDiscussion);
                    discussion.render(discussionMainDom,newDiscussion);
    
                    const upBtn = Array.from(document.querySelectorAll(".discussion-up")).filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    this.updateVote(upBtn,newDiscussion.id,"upVote");
    
                    const downBtn = Array.from(document.querySelectorAll(".discussion-down")).filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    this.updateVote(downBtn,newDiscussion.id,"downVote");
    
    
                    const enableCommentBtn = Array.from(document.querySelectorAll(".enable-comment")).filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    enableCommentBtn.addEventListener("click", () => {
                        let displayProp = document.getElementById(`add-comment-${newDiscussion.id}`).style.display;
                        if(displayProp === 'unset' ){
                            document.getElementById(`add-comment-${newDiscussion.id}`).style.display = 'none';
                        } else {
                            document.getElementById(`add-comment-${newDiscussion.id}`).style.display = 'unset'
                        }
                    });
                    newTopicDom.value = "";
                }
            }
        });
    };

    
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

    addCommentListner(){
        const commentInputs = document.querySelectorAll(".comment_textField");
        
        commentInputs.forEach( input => {
            const id = parseInt(input.id.split('-')[1]);
            this.addComment(input,id);
        })
    }

    addEnableCommentListener(){
        const enableComment = document.querySelectorAll(".enable-comment");

        enableComment.forEach( btn => {
            const id = parseInt(btn.dataset.id);
            // document.getElementById(`comment-${id}`).style.display = 'unset';
            btn.addEventListener("click", () => {
                let displayProp = document.getElementById(`add-comment-${id}`).style.display;
                if(displayProp === 'unset' ){
                    document.getElementById(`add-comment-${id}`).style.display = 'none';
                } else {
                    document.getElementById(`add-comment-${id}`).style.display = 'unset'
                }
            });
            
        });
    }

    addComment(btn,id){
        const commentDom = document.getElementById(`comment-${id}`);

        commentDom.addEventListener('keypress', (event) => {
            if(event.key === 'Enter'){
                if(commentDom.value !== ""){
                    // const comment = DiscussionService.addComment(id,"comments");
                    const commentsDiv = document.querySelector(`#comments-${id}`);
                    const newDiscussion = DiscussionService.startDiscussion("comment",id,commentDom.value);
                    
                    discussion.render(commentsDiv,newDiscussion);
                    
                    const upBtn = Array.from(document.querySelectorAll(".discussion-up")).filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    this.updateVote(upBtn,newDiscussion.id,"upVote");
    
                    const downBtn = Array.from(document.querySelectorAll(".discussion-down")).filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    this.updateVote(downBtn,newDiscussion.id,"downVote");
    
                    const enableCommentBtn = Array.from(document.querySelectorAll(".enable-comment")).filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
                    enableCommentBtn.addEventListener("click", () => {
                        let displayProp = document.getElementById(`add-comment-${newDiscussion.id}`).style.display;
                        console.log(displayProp);
                        if(displayProp === 'unset' ){
                            console.log('yo');
                            document.getElementById(`add-comment-${newDiscussion.id}`).style.display = 'none';
                        } else {
                            document.getElementById(`add-comment-${newDiscussion.id}`).style.display = 'unset'
                        }
                    });
    
                    document.getElementById(`add-comment-${id}`).style.display = 'none';
                    commentDom.value="";
                }
            }
        });

        // btn.addEventListener("click", () => {

        //     const comment = document.getElementById(`comment-${id}`).value;

        //     if(comment !== ""){
        //         // const comment = DiscussionService.addComment(id,"comments");
        //         const commentsDiv = document.querySelector(`#comments-${id}`);
        //         const newDiscussion = DiscussionService.startDiscussion("comment",id,comment);
                
        //         discussion.render(commentsDiv,newDiscussion);
                
        //         const upBtn = Array.from(document.querySelectorAll(".discussion-up")).filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
        //         this.updateVote(upBtn,newDiscussion.id,"upVote");

        //         const downBtn = Array.from(document.querySelectorAll(".discussion-down")).filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
        //         this.updateVote(downBtn,newDiscussion.id,"downVote");

        //         const commentVoteBtn = Array.from(document.querySelectorAll(".discussion-comment")).filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
        //         this.addComment(commentVoteBtn,newDiscussion.id);

        //         const enableCommentBtn = Array.from(document.querySelectorAll(".enable-comment")).filter( btn => parseInt(btn.dataset.id) === newDiscussion.id)[0];
        //         enableCommentBtn.addEventListener("click", () => {
        //             let displayProp = document.getElementById(`add-comment-${newDiscussion.id}`).style.display;
        //             console.log(displayProp);
        //             if(displayProp === 'unset' ){
        //                 console.log('yo');
        //                 document.getElementById(`add-comment-${newDiscussion.id}`).style.display = 'none';
        //             } else {
        //                 document.getElementById(`add-comment-${newDiscussion.id}`).style.display = 'unset'
        //             }
        //         });

        //         document.getElementById(`add-comment-${id}`).style.display = 'none';
        //         document.getElementById(`comment-${id}`).value="";
        //     }
            
        // });
    }

    updateVote(btn,id,task){
        btn.addEventListener("click", () => {
            const vote = DiscussionService.updateVote(id,task);
            const voteSpan = document.querySelector(`#${task}-${id}`);
            console.log(vote,voteSpan);
            voteSpan.innerHTML = vote;
        });
    }
};

export default DiscussionContainer;