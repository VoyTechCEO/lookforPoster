import React from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Gradient from '../gradient/Gradient';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { userDataState, userImageState } from '../../recoil';

interface Props {
  children: JSX.Element;
}

const Overlay = ({ children }: Props) => {
  const [userData, setUserData] = useRecoilState(userDataState);
  const [userImage, setUserImage] = useRecoilState(userImageState);

  let retriesLeft = 1;

  const getUserData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/auth/login`, {
        method: `GET`,
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
      });
      if (res.status === 401 && retriesLeft > 0) {
        await fetch(`http://localhost:5000/auth/refresh`, {
          method: `POST`,
          mode: 'cors',
          credentials: 'include',
        });
        retriesLeft--;
        await getUserData();
        return;
      }
      const data = await res.json();
      console.log(data);
      if (data.loggedIn) {
        const resImg = await fetch(
          `http://localhost:5000/img/${data.user.picture}`,
          {
            method: `GET`,
            mode: 'cors',
            credentials: 'include',
          }
        );
        const imageBlob = await resImg.blob();
        const imageURL = URL.createObjectURL(imageBlob);
        setUserImage(imageURL);
      }
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const { isLoading, error } = useQuery(`userData`, async () => {
    await getUserData();
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>An error occurred.</h1>;
  }

  return (
    <>
      <Nav />
      <Gradient />
      {children}
      <Footer />
    </>
  );
};

export default Overlay;
