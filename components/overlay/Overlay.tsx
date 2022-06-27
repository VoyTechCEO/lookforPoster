import React, { useEffect } from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Gradient from '../gradient/Gradient';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { userDataState } from '../../recoil';

interface Props {
  children: JSX.Element;
}

const Overlay = ({ children }: Props) => {
  const [userData, setUserData] = useRecoilState(userDataState);

  const { isLoading, error, data } = useQuery(`userData`, async () => {
    try {
      const res = await fetch(`http://localhost:5000/auth/login`, {
        method: `GET`,
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
      });
      if (res.status === 401) {
        await fetch(`http://localhost:5000/auth/refresh`, {
          method: `POST`,
          mode: 'cors',
          credentials: 'include',
        });
      }
      const data = await res.json();
      console.log(data);
      setUserData(data);
      return data;
    } catch (err) {
      console.log(err);
    }
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
