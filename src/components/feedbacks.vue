<template>
    <div class="feedback">

        
        <div v-if="feedbacks!=null" style="width: 92%">
        <div class="feedback__column" v-for="(feedback,index) in feedbacks" :key="index"  >
             <iframe width="94%" height="315"
                        :src="get_by_url(feedback.url_video)">
            </iframe>

            <div class="feedback__row">
                <div class="feedback__info" >
                
                    <p class="feedback__title">{{feedback.title}}</p>
                    <p class="feedback__text">{{feedback.description}}</p>
                    <p class="feedback__date">{{feedback.date}}</p>

                </div>

                <div class="feedback__action">

                    <i class="fas fa-pencil-alt" ></i>
                    <i class="far fa-trash-alt" @click="delete_feedback(feedback.id)"></i>

                </div>
            </div>
          
        </div>

        </div>
       

        <div class="feedback__row" v-else>
            <div class="feedback__info" >
                    
                <p class="feedback__title">Обратная связь</p>
                <p class="feedback__text">Пример</p>
                <p class="feedback__date">Пример</p>

            </div>

            <!-- <div class="feedback__action">

                <i class="fas fa-pencil-alt"></i>
                <i class="far fa-trash-alt "></i>

            </div> -->
        </div>
        
    </div>
</template>

<script>

import axios from 'axios';
    export default {
        data() {
            return {
                feedbacks: null,
                feedback: {
                    url_video: '',
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
        mounted() {
            this.get_feedback();

        },
        methods: {
            get_by_url(url) {
                if(url!="") {
                    return "https://www.youtube.com/embed/"+url;
                }
                else {

                }
            },
            delete_feedback(id) {
                axios.post(process.env.VUE_APP_API+process.env.VUE_APP_API_VERSION+'user/delete/feedback',
                {
                    id:id
                      
                })
                .then(response => {   
                    this.$alert(response.data.success);
                    this.get_feedback();
                })
                .catch(error => {
                    // if(error.response.data.error.iin.length!=0) {
                    //     this.$alert("Пользователь существует");
                    // }
                });
            },
            get_feedback() {
                axios.get(process.env.VUE_APP_API+process.env.VUE_APP_API_VERSION+'get/feedback',
                {
                   
                })
                .then(response => {
                    console.log(response.data);
                    this.feedbacks=response.data.success
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

    .feedback__column {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .feedback__row {
        display:flex;
         justify-content: space-between;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
        // border-bottom: 5px solid var(--main-project-color);
        width: 90%;
        background-color:white;
        padding: 20px;
        p:nth-child(1) {
            font-size: 20px;
            font-weight: bold;
        }
        p {
            margin-bottom: 10px;
        }

        p:nth-child(3) {
            color: #ccc;

            font-size: 12px;
        }

        .feedback__info {
            display: flex;
            flex-direction: column;
        }
        .feedback__action {
           display: flex;
           flex-direction: row;
           i {
               margin-right: 10px;
           }
        }
    }




</style>