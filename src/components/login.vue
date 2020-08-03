<template>
    <div class="main">

            <form class="main__sign" @submit.prevent="onSubmit()">
                <p class="sign__title">Войти в личный кабинет</p>
                
                <div>
                    <p>Логин</p>
                    <input type="text" placeholder="" v-model="email">
                </div>
                <div>
                    <p>Пароль</p>
                    <input type="password" placeholder="" v-model="password">
                </div>
                
                <button type="submit">Войти</button>

            </form>
    </div>  
</template>


<script>
import axios from 'axios';
  export default {
    name: "Login",
    data() {
      return {
        email: null,
        password: null,
        role: null
      }
    },
    methods: {
   
      onSubmit() {
             axios.post('http://127.0.0.1:8000/api/v1/auth/login',
                {
                    email:this.email,
                    password: this.password
                })
                .then(response => {
                    console.log("sended");
                    console.log(response.data.token);
            
                    localStorage.setItem('access_token',response.data.token);

                    console.log(localStorage.getItem('access_token'));

                    
                   
                    axios.defaults.headers.common = {
                        "Authorization": "Bearer "+localStorage.getItem('access_token')
                    };
                    this.get_roles();

                  
                    
                })
                .catch(error => {
                   console.log(error);
                });   
    },

     get_roles() {
                axios.post('http://127.0.0.1:8000/api/v1/user/me',
               )
                .then(response => {
                    console.log("roles");
                    console.log(response.data);

                    this.role = response.data.roles[0].id;
                    
                    if(this.role==1 || this.role==2) {
                        this.$router.push(this.$route.query.redirect || '/admin-only');
                    }
                    else {  
                        this.$router.push(this.$route.query.redirect || '/user-only');
                    }
                })
                .catch(error => {
                   console.log(error);
                });
    }
  
  }
}
</script>

<style  scoped>
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
    }

    .main__sign {
        margin-top: 150px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;

    }

    .sign__title {
        color: #409dfa;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 20px;
    }
    .main__sign div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 10px;
        width: 275px;
    }
     .main__sign div p {
         margin-bottom: 5px;
     }
    .main__sign div input {
     
        padding: 10px;
       
        border: 1px solid var(--main-project-color);
        outline: none;
    }
    .main__sign div p {
        color: var(--main-project-color);
    }
    
    .main__sign button {
        border: none;
        
        width: 100%;
        background-color: #409dfa;
        padding: 10px;
        color: white;
    }
  

     
</style>

