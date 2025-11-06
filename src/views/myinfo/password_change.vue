
 <template>
    <div class="PasswordChange">
      <div class="tobber">
         <van-nav-bar title="修改密码" left-arrow  @click-left="onClickLeft"/>
       </div>
      
       <!-- 输入手机号 -->
       <input type="text" placeholder="请输入学号" v-model="myId">
       <!-- 输入验证码 -->
       <!-- <div class="getcode">
        <input type="text" placeholder="请输入验证码">

       </div> -->
       <!-- 输入旧密码 -->
       <input type="password" placeholder="请输入旧密码" v-model="oldPassword">
       <!-- 输入新密码 -->
       <input type="password" placeholder="请输入新密码" v-model="newPassword">
       <!-- 确认新密码 -->
       <input type="password" placeholder="请确认新密码" v-model="confirmPassword">
       <!-- 修改密码按钮 -->
       <!-- <van-button type="primary" block font-size="18px">修改密码</van-button> -->
        <button class="mybtn" @click="changePassword">修改密码</button> 
    </div>
  </template>
  <script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { showToast } from 'vant'
    const router = useRouter()
    const onClickLeft = () => {
        router.back()
    }
    const changePassword = () => {
       if(myId.value == ''){
        showToast({
          message: '请输入学号',
          duration: 1000,
          position: 'top',
          className: 'mytoast'
        });
        return;
       }
       if(oldPassword.value == ''){
        showToast({
          message: '请输入旧密码',
          duration: 1000,
          position: 'top',
          className: 'mytoast'
        });
        return;
       }
       if(newPassword.value == ''){
        showToast({
          message: '请输入新密码',
          duration: 1000,
          position: 'top',
          className: 'mytoast'
        });
        return;
       }
       if(confirmPassword.value != newPassword.value){
        showToast({
          message: '两次输入密码不一致',
          duration: 1000,
          position: 'top',
          className: 'mytoast'
        });
        return;
       }
    }
    // 学号
    const myId = ref('');
    const oldPassword = ref('');
    const newPassword = ref('');
    const confirmPassword = ref('');
  </script>
  <style scoped>
  .PasswordChange{
    padding: 20px;
    /* background-color: #f5f5f5; */
  }
  .tobber{
    margin-bottom: 20px;
  }
input{
    width: 100%;
    height: 55px;
    /* border-radius: 12px; */
    font-size: 16px;
    /* margin-top: 20px; */
    padding: 10px 10px;
    position: relative;
    border: none;
    border-bottom: 1px solid #ccc;
    /* border-radius: 5px; */
    /* margin-top: 20px; */
}
/* .getcode{
  position: relative;
}
.getcode:after{
  content: '获取验证码';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  /* width: 10px;
  height: 10px; */

  /* background-color: #007AFF; */
  /* border-radius: 50%;} */
 

/* 按钮样式 */
.mybtn{
  width: 210px;
  height: 45px;
  border-radius: 12px;
  font-size: 18px;
  margin-top: 50px;
  margin-left: 70px;
  background-color: #007AFF;
  color: #fff;
}

  </style>
