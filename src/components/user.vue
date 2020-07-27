    <template>
    <div class="main" style="overflow-y: scroll; height: 100%">

            <div class="main__user user">

                 <button class="main__logout" @click="logout()">Выйти из системы</button>

                 <div class="user__welcome">
                        <p class="user__title">Добро пожаловать в личный кабинет!</p>
                        <p class="user__name"> {{client.name+' '+client.surname}}</p>
                </div>
               
                <div class="user__agreement">
                    <div class="user__start">
                        
                        <p class="user__agree-title">Договор</p>

                        
                        <a>Посмотреть договор</a>

                        <p>Дата состовление договора: {{client.date}}</p>
                        
                        <i class="fas fa-file-contract"></i>
                        
                    </div>

                    <div class="user__start">

                        <p class="user__agree-title">Вступительный взнос</p>

                        <p style="color: green" v-if="welcome_payment!=null">Оплачено</p>
                        <p  style="color: red" v-else>Неоплачено</p>
                        <p  v-if="welcome_payment!=null">{{welcome_payment.amount}} тнг.</p>
                        
                        <i class="fas fa-vote-yea"></i>
                        
                    </div>

                    <div class="user__start">

                        <p class="user__agree-title" >Очередь</p>

                        <p style="color: green">{{current_order}} из {{all_order}}</p>

                        <p>Дата получение ключа от квартиры: {{(parseInt(client.date.split("-")[0])+1)+"-"+client.date.split("-")[1]+"-"+client.date.split("-")[2]}}</p>
                     
                        <p v-if="client.warning>0">{{client.warning}} замечания</p>
                        <p v-if="client.warning>0">Ваш очередь продлен на {{client.warning}} месяць</p>
                        
                        <i class="fas fa-sort-amount-up"></i>
                        
                    </div>
                </div>
                
                
                <p class="user__title">Cписок ваших транзакций</p>
                
                <div class="list__table">
                    <div class="list__head">

                        <div>
                            <p>№</p>
                        </div>

                         <div>
                            <p>СУММА</p>
                        </div>

                         <div>
                            <p>Тип соглашение</p>
                        </div>

                         <div>
                            <p>Адрес</p>
                        </div>
                        
                         <div>
                            <p>ДАТА ТРАНЗАКЦИЙ</p>
                        </div>

                    </div>

                    <div class="list__scroll">
                     
                        <div class="list__row" v-for="(item,index) in transactions" :key="index">
                            <div>
                                <p>{{index+1}}</p>
                            </div>
  
                            <div>
                                <p>{{item.amount}}</p>
                            </div>

                            <div >
                                <p v-if="item.type_of_transaction==1">Вступительный взнос</p>
                                <p v-else>Паевый взнос</p>
                            </div>
                            <div>
                                 <p>{{item.street_of_bank}}</p>
                            </div>
                             <div>
                                <p>{{item.date_of_transaction}}</p>
                            </div>

                        </div>
                      
                
                    </div>
                 

                </div>
            </div>
    </div>
    
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                current_order: null,
                show: false,
                phone: '',
                errors: [],
                name: '',
                type: '',
                email: '',
                client: {
                    name: null,
                    surname: null,
                    date: null,
                    warning:null
                },
                transactions: null,
                welcome_payment: null,
                all_order: null
             
            };
        },
        mounted() {
            this.get_profile();
          
        },
        methods: {
            logout() {
                localStorage.removeItem('access_token');
                this.$router.go(0);
                this.$router.push('/');
            },
            get_profile() {
                axios.post('http://127.0.0.1:8000/api/v1/user/me',
                {
                    
                })
                .then(response => {
                     
                        this.getClient(response.data.client_id);
                        this.getTransactions(response.data.client_id);
                        this.get_order(response.data.client_id);
                })
                .catch(error => {
                   console.log(error);
                });
            },
            getClient(id) {
                axios.get('http://127.0.0.1:8000/api/v1/user/get/client?id='+id,
                {
                  
                })
                .then(response => {
                     this.client.name = response.data.name
                     this.client.surname = response.data.surname
                     this.client.date = response.data.date_agreement
                     this.client.warning = response.data.warning

                })
                .catch(error => {
                   console.log(error);
                });
            },
            get_order(id) {
                
                axios.get('http://127.0.0.1:8000/api/v1/user/paysender/list?type='+1
                )
                .then(response => {
                   
                        this.clients = response.data;

                        console.log("clients thereeee");
                        console.log(this.clients);

                        this.all_order = this.clients.length;
                        
                        for (let index = 0; index < this.clients.length; index++) {
                                if(this.clients[index].id==id) {
                                    this.current_order = index+1;
                                }
                        }
                    
                })
                .catch(error => {
                   console.log(error);
                });
            },
            getTransactions(id) {
                axios.get('http://127.0.0.1:8000/api/v1/user/get/transactions?id='+id,
                {
                  
                })
                .then(response => {
                
                     this.transactions = response.data;
                    console.log("transactions printed:");
                    console.log(this.transactions);

                    for (let index = 0; index < this.transactions.length; index++) {
                            if(this.transactions[index].type_of_transaction=='1') {
                                this.welcome_payment = this.transactions[index];
                            }
                        
                    }

                    console.log(this.welcome_payment);
                })
                .catch(error => {
                   console.log(error);
                });
            },
        }

    }
</script>
<style lang="scss" scoped>
    .main {
        display: flex;
        flex-direction: column;
        width: 100%;
        .main__logout {
            padding: 10px;
            margin-top: 10px;
            background-color: var(--main-a-hover-color);
            align-self: flex-end;
            color: white;
            border: none;
            outline: none;
            margin-right: 20px;
        }
    }  
    .main__user {
        display: flex;
        flex-direction: column;
        .user__welcome {
            margin-top: 20px;
            border-radius: 10px;
            width: 680px;
            background-color: white;
            box-shadow: rgba(74, 92, 184, 0.4) 0px 0px 20px;

            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            align-self: center;
            font-weight: bold;
            text-align: center;
            
            padding: 10px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .user__agreement {
            width: 75%;
            display: flex;
            flex-direction: row;
            align-self: center;
            justify-content: space-between;
            
        
        .user__agree {
            border-radius: 10px;
            width: 200px;
            height: 200px;
            background-color: white;
            box-shadow: rgba(74, 92, 184, 0.4) 0px 0px 20px;

            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            text-align: center;
            font-weight: bold;
            
            padding: 10px;
            i {
            color: #4c6ef5;
            align-self: flex-end;
            font-size: 30px;
            }
            a {
                cursor: pointer;
                text-decoration: underline;
                color: #4c6ef5;
            }
        }
        
        .user__start {
            border-radius: 10px;
            width: 200px;
            height: 200px;
            background-color: white;
            box-shadow: rgba(74, 92, 184, 0.4) 0px 0px 20px;

            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            font-weight: bold;
            text-align: center;
            
            padding: 10px;
            i {
            color: #4c6ef5;
            align-self: flex-end;
            font-size: 30px;
            }
            .user__agree-title {
                color: #4c6ef5;
                font-size: 18px;
            }
        }


    }
        
    }
    .user__title {
        display: flex;
        align-self: center;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .user__name {
        align-self: center;
        margin-bottom: 10px;
    }
    
    
    .list__create {
        width: 200px;
        padding: 10px;
        background-color: var(--main-project-color);
        color: white;
        font-size: 14px;
        border: none;
        align-self: center;
    }
    .main__list {
        display: flex;
        flex-direction: column;
        .list__title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
            align-self: center;
        }
    }

    .list__table {
        width: 100%;
        display: flex;
        flex-direction: column;
        .list__head {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            
            div {
                width: 100%;
                padding: 20px;
                font-weight: bold;
                border-right: 1px solid #ccc;
                text-align: center;
            }
        }

        .list__scroll {
            height: 100%;
            overflow-y: scroll;
        }
        .list__row {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            div {
                width: 100%;
                padding: 20px;
            
                border-right: 1px solid #ccc;
                text-align: center;
            }
        }
    }
     
</style>