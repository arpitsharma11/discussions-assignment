import DiscussionService from '../service/DiscussionService';
import Discussion from "./Discussion";

const discussion = new Discussion();

const addDiscussionDom = document.querySelector(".add-discussion");

class AddDiscussion{

    render(){
        addDiscussionDom.innerHTML = `<button class="addDiscussion" >Start Convo</button>`;
        this.addEventListeners();      
    };

    addEventListeners(){
        const addDiscussionBtn = document.querySelector(".addDiscussion");
        
        addDiscussionBtn.addEventListener("click", () => {
            DiscussionService.startDiscussion("discussion");
            
        })
    };

}

export default AddDiscussion;