<template>
    <div class="main">

    <div class="calculation" style="align-self:center">


            <div class="calculation__top">
                <div class="">
                    <p>Сумма</p>
                    <input type="number" v-model="amount_calc" min="10000">
                </div>

                <div>
                    <p>Выберите длителность</p>
                    <select name="" id="" v-model="every_year">
                        
                        <option value="1">1 лет</option>
                        <option value="2">2 лет</option>
                        <option value="3">3 лет</option>
                        <option value="4">4 лет</option>
                        <option value="5">5 лет</option>
                        <option value="6">6 лет</option>
                        <option value="7">7 лет</option>
                        <option value="8">8 лет</option>
                    </select>
                </div>

                <div>
                    <p>Получить результат</p>
                    <button class="calculation__button" @click="calculation()">Рассчитать</button>
                </div>

            </div>
         
            <div v-if="this.for_table!=0" class="calculation__table">

                <div class="calculation__row--head">
                    <p>Процент</p>
                    <!-- <p>Сумма</p> -->
                    <p>Оплачиваете</p>
                    <p>Ежемесячно</p>
                    <p>Месяць</p>
                </div>

                <div v-for="el in this.for_table" :key="el" class="calculation__row">
                    <p>{{el.percent}}</p>
                    <!-- <p>{{el.amount}}</p> -->
                    <p>{{el.minus}}</p>
                    <p>{{el.every_month}}</p>
                    <p>{{el.month}} мес</p>
                </div>

            </div>
    </div>
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
        role: null,
        amount_calc: 0,
        every_month: {
            "percent":"",
            "amount": "",
            "minus": "",
            "result": ""  
        },
        for_table: [],
        every_year: 0,
      }
    },
    methods: {
                 calculation() {
                this.for_table=[];

                let thirty = this.amount_calc*0.3;
                let fifty = this.amount_calc*0.5;

                let every_month2 = Math.ceil((this.amount_calc - thirty)/(this.every_year*12));
                let every_month3 = Math.ceil((this.amount_calc - fifty)/(this.every_year*12));

                let obj = {
                        "percent": "30%",
                        "amount": this.amount_calc,
                        "minus": this.amount_calc - thirty,
                        "every_month": every_month2,
                        "month": this.every_year*12
                };

                let obj2 = {
                        "percent": "50%",
                        "amount": this.amount_calc,
                        "minus": this.amount_calc - fifty,
                        "every_month": every_month3,
                        "month": this.every_year*12
                };

                
                this.for_table.push(obj);
                this.for_table.push(obj2);

            },
      onSubmit() {
             axios.post(process.env.VUE_APP_API+process.env.VUE_APP_API_VERSION+'auth/login',
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
                axios.post(process.env.VUE_APP_API+process.env.VUE_APP_API_VERSION+'user/me',
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

<style  lang="scss" scoped>
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

     .calculation {
        margin-top: 50px;
        display: flex;
        flex-direction: column;

        .calculation__button {
            width: 180px;
            padding: 10px;
          
            background-color:  var(--main-project-color);
            color: white;
            outline: none;
            border: none;
        }
        .calculation__top {
            width: 700px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            div {
                display: flex;
                flex-direction: column;
                p {
                    margin-bottom: 5px;
                }
                input {
                    padding: 10px;
                }
                select {
                    padding: 10px;
                }
            }
        }
        
        .calculation__row--head {
        width: 700px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
            p {
                padding: 10px;
                font-weight: bold;
                font-size: 18px;
            }
        }

        .calculation__row {
            width: 700px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;

            p {
                padding: 10px;
            
                font-size: 16px;
            }
        }
    }

 
    @media screen and (max-width: 600px) {
         .calculation {
             width: 100%;
             flex-direction: column;
             align-items: center;
           
             .calculation__top {
                width: 100%;
                flex-direction: column;
                align-items: center;
                div {
                    width: 300px;
                    align-self: center;
                 
                }
                input {
                    padding: 30px;
                }
                p {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                button {
                       width: 300px;
                       font-size: 20px;
                }
             }
             .calculation__table {
                 display: flex;
                 flex-direction: column;
                max-width: 100%!important;
min-width: 100% !important;
                overflow-x: scroll;
             }
             .calculation__row--head {
     
            
             }
             .calculation__row {
           
             }
         }

      }


 


    
  

     
</style>

