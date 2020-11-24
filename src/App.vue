<template>
  <div id="app">
    <AddPost/>
    <h1>{{countPosts}}</h1>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import AddPost from '@/components/addPost'

export default {
  name: 'App',
  computed:mapGetters(['validPosts','countPosts']),
  methods:mapActions(['fetchPosts']),
  components:{AddPost},
  mounted(){
    this.fetchPosts()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post{
  padding: 5px;
  border: 1px solid silver;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
