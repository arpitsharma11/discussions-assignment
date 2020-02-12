import Comment from './Comment';
import { dateParse } from '../utils/helper';
import UpArrow from '../icons/arrow-up.svg';
import DownArrow from '../icons/arrow-down.svg';
import CommentIcon from '../icons/comment.svg'

const comment = new Comment();

class Discussion{

    render(parentDom,discussion){
        const discussionDiv = document.createElement("div");
        discussionDiv.setAttribute('class','discussion');
        discussionDiv.setAttribute('data-discussion-id',discussion.id);
        parentDom.appendChild(discussionDiv);
        discussionDiv.innerHTML = `
            <div style="${discussion.type ==='comment' && 'margin-left: 5%;margin-top: 10px;' }">
                <span class="discussion-heading">${discussion.topic}</span><br/>
                <span class="discussion-created-by" >${discussion.createdBy} (${dateParse(discussion.createdAt)})</span><br/>
                <span id="upVote-${discussion.id}" class="discussion-action" >${discussion.upVote}</span><img class="discussion-up action_icons" data-id=${discussion.id} src="${UpArrow}" />
                <span id="downVote-${discussion.id}" class="discussion-action" >${discussion.downVote}</span><img class="discussion-down action_icons" data-id=${discussion.id} src="${DownArrow}" />
                <img class="enable-comment action_icons" data-id=${discussion.id} src="${CommentIcon}" />
                <div class="comment" id="add-comment-${discussion.id}" >
                    <input placeholder="Add a comment" class="comment_textField textField" type="text" id="comment-${discussion.id}" name="comment">
                </div>
                <div id="comments-${discussion.id}" ></div>
            </div>
        `;
    };

}

export default Discussion;