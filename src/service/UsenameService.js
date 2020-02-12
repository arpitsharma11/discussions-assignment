import { USERNAMES } from '../utils/constants';

class UsernameService {


    //Genrate random name from list in constants
    static fetchUsername() {
        return USERNAMES[Math.floor(Math.random()*USERNAMES.length)];
    }

}

export default UsernameService;