import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const userDataState = atom({
  key: `userDataState`,
  default: { user: { nickname: `` }, loggedIn: false },
});

export { userDataState };
