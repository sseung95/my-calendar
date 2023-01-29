import { NavLink } from 'react-router-dom';

import calendarIcon from '@/assets/calendar-icon.svg';
import activeCalendarIcon from '@/assets/calendar-orange-icon.svg';
import plusIcon from '@/assets/plus-icon.svg';
import activePlusIcon from '@/assets/plus-orange-icon.svg';
import { NavWrapper, Ul } from '@/components/Navigation/Navigation.styled';

const Navigation = () => {
  return (
    <NavWrapper>
      <Ul>
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
      </Ul>
    </NavWrapper>
  );
};

export default Navigation;
