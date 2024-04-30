import clsx from 'clsx';
import s from './CreatorCard.module.scss';
import cardEmptyPhoto from '../../images/cardPhoto_empty.png';
import { icons as sprite } from 'shared/icons';

const CreatorCard = ({ data }) => {
  return (
    <li>
      <a href={data.link} className={s.card}>
        <div className={s.cardImgWrap}>
          <img
            className={s.cardImg}
            src={data.picture === '' ? cardEmptyPhoto : data.picture}
            alt={`${data.name} photo`}
          />

          <svg width={16} height={16} className={s.cardImgIcon}>
            <use xlinkHref={`${sprite}#linkedin`}></use>
          </svg>
        </div>
        <div className={s.infoWrap}>
          <p className={s.cardText}>{data.name}</p>
          <p className={clsx(s.cardText, s.cardLightText)}>{data.position}</p>
        </div>
      </a>
    </li>
  );
};

export default CreatorCard;
