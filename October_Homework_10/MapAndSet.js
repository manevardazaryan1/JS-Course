// Map & Set.


class Users{
    constructor(users=null){
        this.users = new Map();

        this.addUsers(users);
    }

    getUserById(id) {
        return this.users.get(id);
    }

    addUsers(users) {
        if (users) {
            for (let idx = 0; idx < users.length; ++idx){
                const id = this.users.get(users[idx]['id']);
                const emails = Array.from(this.users.values());

                if (!id && !emails.includes(users[idx]['email'])) 
                    this.users.set(users[idx]['id'], users[idx]);
            }
        }
    }
}
