<template>
  <div id="LoginVerify">
    <span :class="{ on: isActive }" @click="isActive = true">短信登录 </span>
    <span :class="{ on: !isActive }" @click="isActive = false"> 密码登录</span>
    <div class="verify" v-if="isActive">
      <input type="text" placeholder="手机号" />
      <button>发送验证码</button>
      <input type="text" placeholder="验证码" />
      <div class="resign">
        <p>
          温馨提示:未注册硅谷外卖的手机号，登录时将自动注册，且代表已同意<span class="serve" >《用户服务》</span
          >
        </p>
      </div>
      <button class="login-button"> 登录</button>
    </div>

    <div class="verify" id="message-verify"  v-else>
       <input type="text" placeholder="手机/邮箱/用户名" />
      
      <input type="password" placeholder="密码" />
      <input type="text" placeholder="验证码">
      <!-- <button>发送验证码</button> -->
      <!-- <div class="resign">
        <p>
          温馨提示:未注册硅谷外卖的手机号，登录时将自动注册，且代表已同意<span class="serve" >《用户服务》</span
          >
        </p>
      </div> -->
      <button class="login-button2"> 登录</button>
    </div>
    <span class="foot-text">关于我们</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
};
</script>
<style scoped>
span {
  font-size: 20px;
  padding-bottom: 5px;
  margin: 20px;
}
.on {
  color: rgb(2, 158, 41);
  border-bottom: 2px solid green;
}
.verify {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
input {
  display: block;
  padding-left: 10px;
  width: 70%;
  margin-top: 20px;
  height: 40px;
  border: 1px solid rgb(167, 167, 167);
  border-radius: 5px;
}
button {
  position: absolute;
  top: 21px;
  border: none;
  height: 40px;
  right: 15%;
  background-color: #fff;
  color: rgb(146, 144, 144);
}
p {
  /* position: absolute; */
  color: rgb(158, 158, 158);
  font-size: 15px;
  /* margin-left: 20px; */
  /* bottom: -50px; */
  /* left: 60px; */
}

.serve {
  font-size: 15px;
  color: green;
}

.resign{
  padding: 0px;
  padding-left: 30px;
  padding-right: 30px;
  
  /* display: flex; */
  /* justify-content: space-around; */
  text-align: left;

}

.login-button{
  position:initial;
  color: #fff;
  background-color: rgb(2, 158, 41);
  width: 70%;
border-radius: 5px;
}
.login-button2{
  position:static;
  color: #fff;
  background-color: rgb(2, 158, 41);
  width: 70%;
  margin-top: 30px;
border-radius: 5px;
}

.foot-text{
  display: block;
  /* padding-top: 50px; */
  margin-top: 10px;
  font-size: 15px;
  color: rgb(156, 156, 156);
}
</style>