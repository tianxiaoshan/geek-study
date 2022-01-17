import React, { useState } from 'react'
import Input from '@/components/Input'
import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import { sendCode, login } from '@/store/actions/login'
import { useDispatch } from 'react-redux'
import { Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [time, setTime] = useState(0)
  const onSendCode = async () => {
    if (time > 0) return
    // 先对手机号进行验证
    if (!/^1[3-9]\d{9}$/.test(mobile)) {
      formik.setTouched({
        mobile: true,
      })
      return
    }

    await dispatch(sendCode(mobile))
    Toast.success('获取验证码成功', 1)
    // 开启倒计时
    setTime(60)
    let timer = setInterval(() => {
      setTime((time) => {
        // 要想拿最新的状态 就得使用箭头函数
        if (time === 1) {
          clearInterval(timer)
        }
        return time - 1
      })
    }, 1000)
  }
  const formik = useFormik({
    initialValues: {
      mobile: '18711111111',
      code: '246810',
    },
    // 当表单提交的时候会触发
    async onSubmit(values) {
      await dispatch(login(values))
      Toast.success('登录成功')
      // 跳转到首页
      navigate('/home')
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .required('手机号不能为空')
        .matches(/^1[3-9]\d{9}$/, '手机号格式错误'),
      code: Yup.string()
        .required('验证码不能为空')
        .matches(/^\d{6}$/, '验证码格式错误'),
    }),
  })
  // console.log(formik)
  const {
    values: { mobile, code },
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isValid,
  } = formik

  return (
    <div className={styles.root}>
      <NavBar>登录</NavBar>
      <div className="content">
        <h3>短信登录</h3>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            value={mobile}
            name="mobile"
            placeholder="请输入手机号"
            autoComplete="off"
            onBlur={handleBlur}
            maxLength={11}
          ></Input>
          {touched.mobile && errors.mobile ? (
            <div className="validate">{errors.mobile}</div>
          ) : null}

          <Input
            onChange={handleChange}
            value={code}
            name="code"
            placeholder="请输入验证码"
            autoComplete="off"
            onBlur={handleBlur}
            maxLength={6}
          ></Input>
          <div className={styles.extra} onClick={onSendCode}>
            {time == 0 ? '获取验证码' : time + 's后获取'}
          </div>
          {touched.code && errors.code ? (
            <div className="validate">{errors.code}</div>
          ) : null}

          {/* <div className="input-item">
            <input type="text" />
            <div className="validate">手机验证错误信息</div>
          </div>
          <div className="input-item">
            <input type="text" />
            <div className="validate">验证码验证错误信息</div>
          </div> */}
          <button
            type="submit"
            className={classNames('login-btn', { disabled: !isValid })}
            disabled={!isValid}
          >
            登录
          </button>
        </form>
      </div>
    </div>
  )
}
