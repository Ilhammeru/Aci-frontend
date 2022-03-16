<template>
    <div class="main_login">
        <div class="main_login_image">
            <p class="main_login_image_text">
                PT. Aku Indonesia Raya
            </p>
            <img src="@/assets/login.png" alt="">
        </div>
        <div class="main_login_form">
            <p class="main_login_form_title">
                PT. Aku Indonesia Raya
            </p>
            <div class="card-login">
                <p class="main_login_form_text">
                    Welcome to Super Platform
                </p>
                <p class="main_login_form_helper">
                    Start your journey
                </p>
                <div class="form-group aci_group">
                    <label for="">Name</label>
                    <input type="text" v-model="form.user" class="form-control aci_input">
                </div>
                <div class="form-group aci_group">
                    <label for="">Password</label>
                    <div class="password-group">
                        <input type="password" v-model="form.password" 
                            id="password" class="form-control aci_input">
                        <div class="icon-password">
                            <font-awesome-icon icon="fa-solid fa-low-vision"
                                v-if="!isShow"
                                @click.prevent="togglePassword('show')"/>
                            <font-awesome-icon icon="fa-solid fa-eye"
                                v-if="isShow"
                                @click.prevent="togglePassword('hide')"/>
                        </div>
                    </div>
                </div>
                <button class="btn_login" @click.prevent="save">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            isShow: false,
            form: {
                user: "",
                password: ""
            }
        }
    },
    methods: {
        togglePassword(action) {
            if (action == 'show') {
                this.isShow = true;
                document.getElementById('password').setAttribute('type', 'text');
            } else {
                this.isShow = false;
                document.getElementById('password').setAttribute('type', 'password');
            }
        },
        async save() {
            let payload = {
                user: this.form.user,
                password: this.form.password
            };
            console.log('payload', payload);
            await this.$store.dispatch('auth/login', payload);
        }
    }
}
</script>

<style lang="scss" scoped>
.btn_login {
    border-radius: 20px;
    padding: 8px 20px;
    width: 30%;
    font-size: 18px;
    background: #7139FF;
    color: #fff;
    border: 1px solid #804EFF;
    box-shadow: 0 3px 8px #692EFE;
    transition: all .5s;

    &:hover {
        transform: scale(1.1);
    }
}

.password-group {
    position: relative;
    .icon-password {
        position: absolute;
        right: 15px;
        bottom: 12px;
        cursor: pointer;
    }

    .aci_input {
        padding-right: 50px;
    }
}

.card-login {
    position: relative;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 719px;
}

.main_login {
    display: flex;
    align-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    &_image {
        width: 40%;
        display: flex;
        align-items: center;
        height: 100%;
        background: #F3ECFF;

        &_text {
            position: absolute;
            top: 40px;
            left: 40px;
            font-family: 'roboto-bold';
            color: #AE90FE;
            font-size: 20px;
        }

        img {
            width: 100%;
            height: auto;
        }
    }

    &_form {
        padding: 80px 20px 20px 50px;
        text-align: left;
        width: 60%;
        background-color: #F6F3FC;
        transition: all .3s;

        &_title {
            display: none;
        }
        
        &_text {
            font-family: 'poppins-bold';
            color: #000;
            font-size: 28px;
        }

        &_helper {
            font-family: 'poppins-regular';
            color: #BABABA;
            font-size: 20px;
            margin-bottom: 80px !important;
        }
    }
}

@media screen and(max-width: 579px) {
    .btn_login {
        width: 100%;
    }

    .main_login {
        &_image {
            display: none;
        }

        &_form {
            padding: 20px;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #F3ECFF;

            &_title {
                display: block;
                font-family: 'roboto-bold';
                color: #AE90FE;
                font-size: 20px;
                text-align: center;
            }
        }
    }

    .card-login {
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
}

@media screen and(min-width: 580px) and (max-width: 1200px) {
    .main_login {
        display: block;

        &_image {
            display: none;
        }

        &_form {
            padding: 20px 60px 20px 60px;
            width: 100%;
            height: 100%;
            overflow: hidden;

            &_title {
                display: block;
                font-family: 'roboto-bold';
                color: #AE90FE;
                font-size: 20px;
                text-align: center;
            }
        }
    }
    
    .card-login {
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
}
</style>