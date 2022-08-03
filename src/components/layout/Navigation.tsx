/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import calendarIcon from '../../assets/calendar-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';
import userIcon from '../../assets/user-icon.svg';

const Navigation = () => {
  return (
    <nav css={Nav}>
      <ul css={Ul}>
        <li>
          <a href="/">
            <img src={calendarIcon} alt="캘린더" />
          </a>
        </li>
        <li>
          <a href="/add">
            <img src={plusIcon} alt="일정 추가" />
          </a>
        </li>
        <li>
          <a href="/mypage">
            <img src={userIcon} alt="마이페이지" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Nav = css`
  height: 9.2rem;
  background: #faf9f9;
`;

const Ul = css`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li > a {
    display: block;
    padding: 20px;
  }
`;

export default Navigation;
