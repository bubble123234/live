import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import history from '@/utils/history';
import style from './style.scss';
import { staticAction } from '@/actions';
import { RootState } from '@/reducers';
import PublicHeader from '@/components/PublicHeader/PublicHeader';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const staticStore = useSelector((state: RootState) => state.statics);
  const time = useRef<any>();
  const [count, setCount] = useState<number>(0);

  const goUser = () => {
    history.push('/user');
  };

  useEffect(() => {
    // 调用preinfo接口
    // dispatch({
    //   type: `static/${staticAction.GET_PREINFO_EPIC}`
    // });
  }, []);

  useEffect(() => {
    // 开启一个定时任务
    // time.current = setInterval(() => {
    //   setCount(count + 1);
    //   console.log(count);
    // }, 3000);

    // 清除副作用
    return () => {
      clearInterval(time.current);
    };
  }, [count]);

  useEffect(() => {
    console.log(staticStore);
  }, []);

  return (
    <div className={style.homeBox}>
      <div className={style.PublicMain}>
        <PublicHeader />
      </div>
      <a onClick={goUser} className={style.btn}>
        跳去个人中心
      </a>
    </div>
  );
};

export default Home;
