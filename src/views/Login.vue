<template>
  <main class="login">
    <section class="forms" style="">
        
        <div class="register" @submit.prevent="register">
            
        </div>

        <form class="login" @submit.prevent="login">
            <h2 class="text-center">Login</h2>
            <hr>
            <!--<div class="card">
                
                 <div class="card-header bg-primary">
                    <h5 class="card-title text-white">Login</h5>
                </div>
                
                <div class="card-body">
                -->
                <!-- Floating Labels Form -->
                
                <div class="col-md-12" style="margin-top: 1%;">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="floatingName" placeholder="Username" v-model="gross_total" >
                    <label for="floatingName">Username</label>
                  </div>
                </div>
                <div class="col-md-12" style="margin-top: 1%;">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="floatingEmail" placeholder="Password" v-model="discount">
                    <label for="floatingEmail">Password</label>
                  </div>
                </div>

                <input type="submit" value="login" style="margin-top: 3%;"/>
                <!--
                <div class="text-center" style="margin-top: 2%;">
                  <button type="submit" class="btn btn-primary">Make Payment</button>
                  <button type="reset" class="btn btn-secondary">Next Payment</button>
                </div>
               End floating Labels Form -->
            <!--
              </div>
            </div>
            
            <input type="email" placeholder="Username" v-model="login_form.email"/>
            <input type="password" placeholder="password" v-model="login_form.password"/>
            <input type="submit" value="login"/>
            -->
        </form>
    </section>
  </main>
</template>

<script>
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    import axios from '../axios'; 
    export default {
        setup()
        {
            const login_form = ref({});
            const register_form = ref({});
            // const store = useStore();

            const login = async () => {
                try {
                    const response = await axios.get('https://reqres.in/api/users?page=2');
                    console.log(response);
                    // alert('User registered successfully!');
                } catch (error) {
                    alert('Error registering user: ' + error);
                }
            }

            const register = () => {
                // store.dispatch('register', register_form.value)

                try{
                    const response = axios.post("https://reqres.in/api/users",{
                            "name": "Umar Dachia",
                            "job": "Software Developer"
                    })
                    console.log(response);
                }
                catch(error)
                {
                    alert(error);
                }
            }

            return{
                login_form,
                register_form,
                login,
                register
            }
        },
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .forms {
        display: flex;
        min-height: 100vh;
    }

    form, .register {
        flex: 1 1 0%;
        padding: 8rem 1rem 1rem;
    }

    div.register {
        color: #FFF;
        background-color: rgb(7, 25, 82);
        background-image: linear-gradient(
            to bottom right,
            rgb(7, 25, 82) 0%,
            rgb(7, 25, 82) 100%
        );
    }

    /* h2 {
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom: 2rem;
    }
*/
    input[type="submit"] {
        appearance: none;
        border: none;
        outline: none;
        background: none;

        display: block;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        padding: 0.5rem 0rem;
    }
/*
    input:not([type="submit"]) {
        opacity: 0.8;
        transition: 0.4s;
    }

    input:focus:not([type="submit"]) {
        opacity: 1;
    }

    input::placeholder {
        color: inherit;
    }

    div.register input:not([type="submit"]) {
        color: #FFF;
        border-bottom: 2px solid #FFF;
    }

    form.login input:not([type="submit"]) {
        color: #2c3e50;
        border-bottom: 2px solid #2c3e50;
    }
    */
    form.login input[type="submit"] {
        background-color: rgb(7, 25, 82);
        color: #FFF;
        font-weight: 700;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
        text-transform: uppercase;
    }

    /*
    div.register input[type="submit"] {
        background-color: #FFF;
        color: rgb(245, 66, 101);
        font-weight: 700;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
        text-transform: uppercase;
    } */
</style>