import React from 'react';
import PublicLogin from '@/components/PublicLogin/PublicLogin';
import style from './style.scss';

class PublicHeader extends React.Component {
  render() {
    return (
      <div className={style.PublicHeader}>
        <div className={style.leftHeader}>
          <div className={style.logoBox}>
            <img src='1.png' className={style.imgLogo} />
            <div className={style.logoWord}>
              <p className={style.firstWord}>快看球</p>
              <p>kuaikanqiu.com</p>
            </div>
          </div>
          <ul className={style.listBox}>
            <li className={style.firstList}>首页</li>
            <li>直播</li>
            <li>看球</li>
          </ul>
        </div>
        <div className={style.rightHeader}>
          <div className={style.searchBox}>
            <input />
            <img src='1.png' className={style.imgSearch} />
          </div>
          <ul className={style.listBtn}>
            <li>
              <img src='1.png' />
              <span>解说</span>
            </li>
            <li>
              <img src='1.png' />
              <span>APP下载</span>
            </li>
            <li>
              <img src='1.png' />
              <span>
                <PublicLogin />
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PublicHeader;
