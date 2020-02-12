import UsernameService from '../service/UsenameService';

class DiscussionService{

    //create new discussion
    static startDiscussion(type,parentId,topic) {
        const discussions = JSON.parse(localStorage.getItem('discussions')) || [];

        const newDiscussion = {
            id: discussions.length ? discussions.length : 0,
            createdBy: UsernameService.fetchUsername(),
            createdAt: new Date(),
            upVote: 0,
            downVote: 0,
            type: type,
            parentId,
            topic
        };

        localStorage.setItem('discussions',JSON.stringify([...discussions,newDiscussion]));
        return newDiscussion;
    }

    //fetch all discussions
    static fetchDiscussion() {
        const discussions = JSON.parse(localStorage.getItem('discussions')) || [];
        return discussions.filter(discussion => discussion.type === "discussion");
    }

    //fetch all comments
    static fetchComments() {
        const discussions = JSON.parse(localStorage.getItem('discussions')) || [];
        return discussions.filter(discussion => discussion.type === "comment");
    }

    //updateing vote
    static updateVote(id,type) {
        const discussions = JSON.parse(localStorage.getItem('discussions')) || [];

        if(discussions.length > id){
            const updateDiscussion = {
                id: id,
                createdBy: discussions[id].createdBy,
                createdAt: discussions[id].createdAt,
                upVote: type === "upVote" ? 
                    discussions[id].upVote + 1 :
                    discussions[id].upVote,
                downVote: type === "downVote" ? 
                    discussions[id].downVote + 1 :
                    discussions[id].downVote,
                type: discussions[id].type,
                comments: discussions[id].comments,
                parentId: discussions[id].parentId,
                topic: discussions[id].topic
            };

            localStorage.setItem(
                'discussions',
                JSON.stringify( 
                    [...discussions.slice(0,id),
                        updateDiscussion,
                        ...discussions.slice(id+1)])
                );

            return type === "upVote" ? updateDiscussion.upVote : updateDiscussion.downVote ;
        } 
    }  

    // adding comment to discussion
    static addComment(id){
        return this.startDiscussion('comment',id);
    }

}

export default DiscussionService;