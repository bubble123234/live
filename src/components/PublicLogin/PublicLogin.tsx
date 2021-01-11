import React from 'react';
import style from './style.scss';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p onClick={handleClickOpen}>登陆/注册</p>
      <Dialog open={open} onClose={handleClose}>
        <div className={style.loginBox}>
          <div className={style.headLogin}>
            <p className={style.chooseBtn}>手机验证码登录</p>
            <p>账号密码登录</p>
          </div>
          <div className={style.phoneNum}>
            <div className={style.regionCode}>
              <span>+86</span>
              <img src='1.png' />
            </div>
            <input placeholder='请输入手机号码' />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
