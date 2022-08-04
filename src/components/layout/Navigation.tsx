/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, NavLink } from 'react-router-dom';

import calendarIcon from '../../assets/calendar-icon.svg';
import activeCalendarIcon from '../../assets/calendar-orange-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';
import activePlusIcon from '../../assets/plus-orange-icon.svg';

const Navigation = () => {
  return (
    <nav css={Nav}>
      <ul css={Ul}>
        <li>
          <NavLink
            to="/"
            children={(navData) =>
              navData.isActive ? (
                <img src={activeCalendarIcon} alt="캘린더" />
              ) : (
                <img src={calendarIcon} alt="캘린더" />
              )
            }
          />
        </li>
        <li>
          <NavLink
            to="/add"
            children={(navData) =>
              navData.isActive ? (
                <img src={activePlusIcon} alt="일정 추가" />
              ) : (
                <img src={plusIcon} alt="일정 추가" />
              )
            }
          />
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
