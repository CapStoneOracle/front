import React, { useState,useEffect } from 'react';
import BackNavbar from '../component/BackNavbar';
import InputUnderBar from '../component/InputUnderBar';
import WarningMessage from '../component/WarningMessage';
import BlueButton2 from '../component/BlueButton2';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import EmailDropDown from '../component/EmailDropDown';

const SignUp = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('ID:', id);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Nickname:', nickname);
  }, [id, email, password, nickname]);

  const handleIdChange = (value) => {
    setId(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleNicknameChange = (value) => {
    setNickname(value);
  };

  const handleFormSubmit = () => {
    console.log('아이디:', id);
    console.log('이메일:', email);
    console.log('암호:', password);
    console.log('별명:', nickname);
  };

  return (
    <Container>
      <BackNavbar />
      <div className='text-center'>
        <div className='login-page-header mt-5 ft28b' style={{ left: '10px' }}>
          회원가입
        </div>
        <InputUnderBar
          className='mt-5'
          item='아이디를 입력해주세요.'
          onSave={handleIdChange}
        />
        <WarningMessage
          item1={'이미 가입한 아이디입니다'}
          item2={'############'}
        />
        <div className='email-input'>
          <InputUnderBar
            className='mt-4'
            style={{ maxWidth: '460px', width: '46vw' }}
            item='이메일을 입력해주세요.'
            onSave={handleEmailChange}
          />
          <div className='mail-box'>
            <div className='ft20b e9e9e9'>@</div>
            <EmailDropDown email={email} setEmail={setEmail} />

          </div>
        </div>
        <WarningMessage
          item1={'이미 가입한 이메일입니다'}
          item2={'인증번호 발송'}
        />

        <div className='signup-box'>
          <InputUnderBar
            style={{ backgroundColor: '#f0f0f0' }}
            item='인증번호를 입력해주세요.'
          />
          <WarningMessage
            style={{ marginTop: '30px' }}
            item1={'인증번호가 도착하지 않았다면?'}
            item2={'인증번호 재발송'}
          />
        </div>

        <InputUnderBar
          className='mt-4'
          item='암호를 입력해주세요.(최소 8자 최대 12자)'
          onSave={handlePasswordChange}
        />
        <InputUnderBar
          className='mt-4'
          item='암호를 재입력해주세요.'
        />
        <WarningMessage
          item1={'암호가 일치하지 않습니다.'}
          item2={'############'}
        />
        <InputUnderBar
          className='mt-4'
          item='별명을 입력해주세요.'
          onSave={handleNicknameChange}
        />
        <WarningMessage
          item1={'이미 존재하는 별명입니다.'}
          item2={'############'}
        />
        <div className='mt-3'></div>
        <BlueButton2
          item={{ path: '/signupend', text: '로그인 화면' }}
          onLinkClick={(path) => navigate(path)}
          onClick={handleFormSubmit}
        />
      </div>
      <div className='mt-5'></div>
    </Container>
  );
};

export default SignUp;
