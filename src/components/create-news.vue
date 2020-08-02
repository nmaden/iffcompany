<template>
    <div class="feedback">


        <form @submit.prevent="send_news()">
            <div class="feedback__row">
                <p>Выберите рисунок для новостей</p>
                <input type="file"  @change="uploadImage"  placeholder="Ссылка для видео" required>
            </div>
            <div class="feedback__row">
                <p>Тема новости</p>
                <input type="text" v-model="feedback.title_fd" placeholder="Тема обратный связь" required>
            </div>
            <div class="feedback__row">
                <p>Текст о новости</p>
                <input type="textarea" row="5" v-model="feedback.text_fd" placeholder="Текст обратной связи" required>
            </div>
            <div class="feedback__row">
                <p>Дата новости</p>
                <input type="date" v-model="feedback.date_fd" required>
            </div>
            <button type="submit">Отправить</button>
        </form>
        
    </div>
</template>

<script>

import axios from 'axios';
    export default {
        data() {
            return {
                store_image: null,
                feedback: {
                    image: '',
                    title_fd: '',
                    text_fd: '',
                    date_fd: ''

                    
                },
                show: false,
                phone: '',
                errors: [],
                name: '',
                type: '',
                email: '',
                video: {
                sources: [{
                    src: '../assets/images/feed3.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                   
                    poster: '../assets/images/feed3.mp4'
                }
            }
            };
        },
        
        methods: {

            uploadImage (e) {
                let img = e.target.files[0]
                let fd= new FormData()

                fd.append('image', img);
               

                this.store=fd;
            },
            send_to_server(fd) {

                
                axios.post('http://127.0.0.1:8000/api/v1/user/upload/image/news',fd,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    ).then(response => {
                        console.log("image");
                        console.log(response);
                    })
                    .catch(error => {
                    this.$q.loading.hide()
                    let errors = error.response.data.error;
                   
                });
            },
            send_news() {
              
                axios.post('http://127.0.0.1:8000/api/v1/user/create/news',
                {
                    title: this.feedback.title_fd,
                    description: this.feedback.text_fd,
                    date: this.feedback.date_fd  
                })
                .then(response => {

                    
                    this.$alert(response.data.success);

                    this.send_to_server(this.store);

                    // this.$router.push('news');
                })
                .catch(error => {
                    console.log(error);
                });
            },
            onSubmit() {
             axios.post('http://127.0.0.1:8000/api/v1/user/paysender',
                {
                    name: this.register_user.name,
                    surname: this.register_user.surname,
                    patronymic: this.register_user.patronymic,
                    document_number: this.register_user.document_number,
                    date_of_given: this.register_user.date_of_given,
                    end_of_given: this.register_user.end_of_given,
                    phone: this.register_user.phone,
                    iin: this.register_user.iin,
                    type_agreement: this.register_user.type_agreement,
                    date_agreement: this.register_user.date_agreement
                      
                })
                .then(response => {
                    this.$alert(response.data.success);
                    this.$router.push('admin-only');
                })
                .catch(error => {
                    if(error.response.data.error.iin.length!=0) {
                        this.$alert("Пользователь существует");
                    }
                });
               
            },
        }
    }
</script>

<style lang="scss" scoped>

    .feedback {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    .feedback__row {
        display: column;

        input {
            width: 300px;
            padding: 10px;
            border: 1px solid var(--main-project-color);
            margin-bottom: 10px;
        }
        p {
            margin-bottom: 5px;
            font-size: 16px;
            font-weight: bold;
        }
     
    }
    button {

        background-color: var(--main-project-color);
        padding: 10px;
        color: white;
        border: none;
        outline: none;
        width: 320px;
    }
   



</style>