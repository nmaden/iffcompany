<template>
    <div class="main">
        <div class="main__body">
           
            <div class="help">
                

                <div class="help__about">
                    <p>
                        I.F.F COMPANY это — Потребительский кооператив
⠀
✨Invest For Future - инвестирую своё будущие вместе с нами. Так как мы помогаем вам купить квартиру/дом.
⠀
⚡️Еще раз хотим напомнить что. Потребительский кооператив — добровольное объединение граждан на основе членства для удовлетворения материальных и иных потребностей участников, осуществляемое путем объединения его членами имущественных (паевых) взносов
⠀
🧐У вас может сложиться вопрос как этот Компания поможет нам купить квартиру?
                    </p>

                </div>


                <div class="help__items">
                    <div class="help__item">
                        <div class="help__item_top">
                            <div class="help__item_icon">
                                <i class="fab fa-leanpub fa-2x"></i>
                                <p>Вступаешь в ПК «I.F.F Company»</p>
                            </div>
                            
                            <!-- <p class="help__top_text">Все, кто посещает занятия и выполняет домашние задания, гарантированно получают результат.</p>        -->
                        </div>
                        <div class="help__item_line"></div>
                    </div>
                    <div class="help__item">
                        <div class="help__item_top">
                            <div  class="help__item_icon">
                                <i class="fas fa-chart-area fa-2x"></i>
                                <p>Копишь себе в будущее</p>
                            </div>
                            <!-- <p class="help__top_text">Вам не придется ждать 4-6 месяцев, пока вы что-то сможете рассказать. Уже на первом занятии вы будете говорить. Через 1 месяц сможете общаться в рамках простых времен!</p> -->
                        </div>
                        
                        
                        <div class="help__item_line"></div>
                    </div>
                    <div class="help__item">
                        <div class="help__item_top">
                            <div  class="help__item_icon">
                                <i class="fab fa-artstation fa-2x"></i>
                                <p>С предвкушением ждёшь своей очереди(от 3 до 9 месяцев)</p>
                            </div>
                            <!-- <p class="help__top_text">Вы не будете зубрить слова и читать учебники, как в школе. Весь материал усваивается естественным образом по методике ESL во время разговорных упражнений.</p> -->
                        </div>
                        <div class="help__item_line"></div>
                    </div>
                    <div class="help__item">
                        <div class="help__item_top">
                            <div  class="help__item_icon">
                                <i class="far fa-comment-dots fa-2x"></i>
                                <p>Заселяешься и прописываешься в квартиру</p>
                            </div>
                            <!-- <p class="help__top_text">
                                Вы научитесь говорить и понимать английскую речь, а не только усвоите теоретический материал. Вы постоянно будете общаться, тренируя и развивая свои навыки.
                            </p> -->
                        </div>
                        <div class="help__item_line"></div>
                    </div>
                       
                    
                    <div class="help__item">
                        <div class="help__item_top">
                            <div  class="help__item_icon">
                                <i class="far fa-calendar-alt fa-2x">
                                </i><p>Раз в месяц делаешь платеж за свою квартиру</p>
                            </div>
                            <!-- <p class="help__top_text">
                                Вы можете обучаться в удобное вам время: утром, вечером после работы или выбрать время для индивидуальных занятий.
                            </p> -->
                        </div>
                        <div class="help__item_line"></div>
                    </div>
                    <!-- <div class="help__item">
                        <div class="help__item_top">
                            <div  class="help__item_icon">
                                <i class="fas fa-donate fa-2x"></i>
                                <p>Умеренные цены</p>
                            </div>
                            <p class="help__top_text">Стоимость обучения с преподавателем в группе составляет до 400 р./ак.ч. Её можно понизить, воспользовавшись нашими скидками</p>
                        </div>
     
                        <div class="help__item_line"></div>
                    </div> -->
                </div>
               
              
            </div>
        </div>
       
    </div>
</template>

<script>
import myVideo from 'vue-video';
    export default {
        data() {
            return {
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
        components: {
            myVideo
        }
    }
</script>
<style lang="scss" scoped>
    .main {
        display: flex;
        flex-direction: column;

        width: 100%;
    }
  
 
    .help {
        display: flex;
        flex-direction: column;
        margin: 30px;
        margin-left: 35px;
        justify-content: space-around;
        align-items: flex-start;
        margin-bottom: 100px;
        .help__about {
            padding:20px;
            background-color: white;
            margin-bottom: 30px;
        }
    }
    .help__title {
         font-size: 25px;
         margin-bottom: 20px;
    }
    .help__items {
       
        display: flex;
        flex-wrap: wrap;
        
    }   
    .help__item {
        width: 200px;
        border-radius: 5px;
        margin-bottom: 20px;
        margin-right: 15px;
        background-color: white;
        padding: 30px; 
     

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    .help__item_top {
        margin-bottom: 30px;
    }
    .help__top_text {
        color: grey;
    }
    .help__item_line {
        height: 3px;
        width: 200px;
        border-radius: 40px;
        background-color: var(--main-a-hover-color);
    }
    

    .help__item i {
        color: var(--main-project-color);
    }
    .help__item_icon {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: var(--main-project-color);
        margin-bottom: 20px;
    }
    .help__item_icon p {
        margin-left: 20px;
    }


    .help__videos {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

         
              
    }
   
     .help__video {
        width: 300px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        margin-bottom: 20px;
        padding: 5px;
        padding-top: 30px;
        padding-bottom: 40px;
        border-radius: 5px;
     }
    .help__video_line { 
        height: 3px;
        width: 250px;
        border-radius: 40px;
        background-color: var(--main-a-hover-color);
    }
    .help__video video {
     
        width:100%;
        height: 200px;
        display: block;
	
    }

    
     @media screen and (max-width: 600px) {
         .help {
             width: 100%;
             margin: 0;
             padding-top: 40px;
             align-items: center;
         }
        .help__item {
             width: 270px;
             margin-right: 0;
         }
         .help__title {
             align-self: flex-start;
             margin-left: 20px;
         }
         .help__items {
             width: 100%;
             flex-direction: column;
             align-items: center;
         }
         .help__item_line {
             width: 270px;
         }
       
        
         .help__videos {
             flex-direction: column;
             align-items: center;
         }
     }
    @media screen and (max-width: 320px) { 
        .help__item {
            width: 220px;
        }
        .help__item_line {
             width: 220px;
        }
        .help__video {
            width: 270px;
        }
        .help__video_line {
            width: 270px;
        }
    }

     
</style>