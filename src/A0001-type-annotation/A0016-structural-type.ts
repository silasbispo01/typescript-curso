type verifyUser = (user: User, sentUser: User) => boolean;
type User = { username: string; password: string };

const verifyUser: verifyUser = (user, sentUser) => {
  return (
    user.username === sentUser.username && user.password === sentUser.password
  );
};

const bdUser = { username: 'SilasBispo', password: '123' };
const sentUser = { username: 'SilasBispo', password: '123' };
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
