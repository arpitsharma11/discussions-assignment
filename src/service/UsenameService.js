import { USERNAMES } from '../utils/constants';

class UsernameService {

    static fetchUsername() {
        return USERNAMES[Math.floor(Math.random()*USERNAMES.length)];
    }

}

export default UsernameService;