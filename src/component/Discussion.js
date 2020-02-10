class Discussion{

    render(parentDom,discussion){
        console.log(discussion);
        const discussionDiv = document.createElement("div");
        discussionDiv.setAttribute('class','discussion-content');
        discussionDiv.setAttribute(`data-discussion-${discussion.id}`,'discussion-content');
        // discussionClass.value("discussion-content");
        parentDom.appendChild(discussionDiv);
        discussionDiv.innerHTML = `
            <div class="discussion-content" data-discussion=${discussion.id}>
                ${discussion.id} --- vote:${discussion.vote} 
                <button class="discussion-up" data-id=${discussion.id} >Up</button> <button class="discussion-down" data-id=${discussion.id}>Down</button>
                <button class="discussion-comment" data-id=${discussion.id} >Comment</button>
            </div>
        `
    };

}

export default Discussion;