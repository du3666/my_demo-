<template>
     <div class="MyInformation">
      <!-- 导航栏 -->
       <div class="tobber">
         <van-nav-bar title="我的资料" left-arrow  @click-left="onClickLeft"/>
       </div>

       <!-- 我的资料内容 -->
       <div class="myinfo_content">

        <!-- 头像 -->
        <div class="mypic" @click="changeAvatar">
         <span>头像</span>
         <img src="@/assets/default-avatar.png" alt="">
         <van-icon name="arrow" />
      </div>
      
      <!-- 昵称 -->
      <div class="myname mystyle">
        <span>姓名</span>
         <!-- <img src="@/assets/default-avatar.png" alt=""> -->
         <p>Yog_Sothoth</p>
         <van-icon name="arrow" />
      </div>

      <!-- 性别 -->
      <div class="mysex mystyle">
        <span>性别</span>
         <!-- <img src="@/assets/default-avatar.png" alt=""> -->
         <p>男</p>
         <van-icon name="arrow" />
      </div>
      
      <!-- 手机号 -->
      <div class=" myphone mystyle">
        <span>学号</span>
         <!-- <img src="@/assets/default-avatar.png" alt=""> -->
         <p>23331031</p>
         <van-icon name="arrow" />
      </div>

      <!-- 学院 -->
       <div class="myid mystyle">
        <span>学院</span>
       
         <p>软件工程学院</p>
         <van-icon name="arrow" />
       </div>

       <!-- 我的身份 -->
        <div class="myidentity mystyle">
        <span>身份</span>
         <!-- <img src="@/assets/default-avatar.png" alt=""> -->
         <p>观众</p>
         <van-icon name="arrow" />
       </div>
       </div>
       <!-- 修改密码按钮 -->
        <button class="mybtn changepassword" @click="changePassword">修改密码</button>
        <!-- 退出登录按钮 -->
        <button class="mybtn exitlogin" @click="exitLogin">退出登录</button>
        <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>

     </div>
    </template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const onClickLeft = () => {
    router.back()
}
// 退出登录
const exitLogin = () => {
    // 清除用户登录状态
    localStorage.removeItem('token')
    // 跳转到登录页面
    router.push('/login_password')
}
// 跳转到修改密码页面
const changePassword = () => {
    router.push('/password_change')
}
//直接修改头像
const changeAvatar = () => {
    // 直接让用户选择图片文件
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    // 监听文件选择事件
    input.addEventListener('change', (e) => {
        const file = e.target.files[0]
        if (file) {
            // 预览图片
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                // 更新头像预览
                document.querySelector('.mypic img').src = reader.result
            }
        }
    })
    input.click()
}
</script>
<style scoped>
.tobber {
    margin: 20px 0 0 0;
}

/* 我的资料 */

/* 我的资料头像 */
.mypic {
    width: 100%;
   height: 60px;
    padding: 10px 5px;
    position: relative;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
    /* display: flex;
    justify-content: flex-start;
    align-items: center; */
}
.mypic span{
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   left: 10px;
    font-size: 16px;
    /* font-weight: bold; */
}
.mypic img{
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right: 30px;
    width: 40px;
    height: 40px;
    border-radius: 12px;
}
.mypic .van-icon{
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right: 10px;
}
/* 我的资料 */
.mystyle {
    width: 100%;
   height: 60px;
    padding: 10px 5px;
    position: relative;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
    /* display: flex;
    justify-content: flex-start;
    align-items: center; */
}
.mystyle span{
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   left: 10px;
    font-size: 16px;
    /* font-weight: bold; */
}
.mystyle .van-icon{
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right: 10px;
}
.mystyle p{
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right: 30px;
    font-size: 16px;
    /* font-weight: bold; */
}
/* 我的资料修改密码按钮 */
.mybtn {
    width: 210px;
    height: 45px;
    border-radius: 12px;
    font-size: 18px;
    margin-left: 100px;
}
/* 我的资料修改密码按钮 */
.changepassword {
    
    margin-top: 150px;
    /* background-color: #007AFF;
    color: #fff; */
}

/* 我的资料退出登录按钮 */
.exitlogin {
    /* margin-left: 0px; */
    margin-top: 50px;
    color: #fff;
    background-color: #DE868F;
}
</style>
