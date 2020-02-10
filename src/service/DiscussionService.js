import UsernameService from '../service/UsenameService';

class DiscussionService{

    static startDiscussion(type) {
        const discussions = JSON.parse(localStorage.getItem('discussions')) || [];

        const newDiscussion = {
            id: discussions.length ? discussions.length : 0,
            createdBy: UsernameService.fetchUsername(),
            createdAt: new Date(),
            vote: 0,
            type: type,
            comments: []
        };

        localStorage.setItem('discussions',JSON.stringify([...discussions,newDiscussion]));
        return newDiscussion;
    }

    static fetchDiscussion() {
        const discussions = JSON.parse(localStorage.getItem('discussions')) || [];
        return discussions.filter(discussion => discussion.type === "discussion") || [];
    }

    static updateVote(id,type) {
        const discussions = JSON.parse(localStorage.getItem('discussions')) || [];

        if(discussions.length > id){
            const updateDiscussion = {
                id: id,
                createdBy: discussions[id].createdBy,
                createdAt: discussions[id].createdAt,
                vote: type === "UPVOTE" ? 
                    discussions[id].vote + 1 :
                    discussions[id].vote && discussions[id].vote - 1,
                type: discussions[id].type,
                comments: discussions[id].comments
            };

            localStorage.setItem(
                'discussions',
                JSON.stringify( 
                    [...discussions.slice(0,id),
                        updateDiscussion,
                        ...discussions.slice(id+1)])
                );
        }
    }

    static addComment(id){

        const discussions = JSON.parse(localStorage.getItem('discussions')) || [];

        const updateDiscussion = {
            id: id,
            createdBy: discussions[id].createdBy,
            createdAt: discussions[id].createdAt,
            vote: discussions[id].vote,
            type: discussions[id].type,
            comments: [...discussions[id].comments,this.startDiscussion('comment').id]
        };

        const updatedDiscussions = JSON.parse(localStorage.getItem('discussions')) || [];
        localStorage.setItem(
            'discussions',
            JSON.stringify( 
                [...updatedDiscussions.slice(0,id),
                    updateDiscussion,
                    ...updatedDiscussions.slice(id+1)])
            );
    }

}

export default DiscussionService;