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

const isRegisterSuccessState = atom({
  key: `isRegisterSuccessState`,
  default: false,
});

export { userDataState, isRegisterSuccessState };
