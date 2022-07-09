import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import IUser from './interfaces/iUser';

// This object is set to avoid TypeScript errors caused by default user recoil state's type
const userDefault: IUser = { nickname: ``, email: `` };

const userDataState = atom({
  key: `userDataState`,
  default: { user: userDefault, loggedIn: false },
});

const currentProfileUserState = atom({
  key: `currentProfileUserState`,
  default: userDefault,
});

const isRegisterSuccessState = atom({
  key: `isRegisterSuccessState`,
  default: false,
});

export { userDataState, currentProfileUserState, isRegisterSuccessState };
