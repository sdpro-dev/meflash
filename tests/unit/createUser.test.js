import { createUser } from '../../lib/users';
import User from '../../collections/user';

test('can create a user, should return a new user', () => {
    const user = createUser(new User('username', 'plainpass'));
    
    expect(user).toBeInstanceOf(User);
});