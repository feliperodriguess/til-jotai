import React from 'react';
import { useAtom } from 'jotai';
import { ageAtom } from '../../jotai';

const Footer = () => {
  const age = useAtom(ageAtom);

  return (
    <footer className="footer">
      <p>Sua idade atual é: {age}</p>
    </footer>
  );
};

export default Footer;
