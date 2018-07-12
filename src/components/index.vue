<template lang="pug">
.container
  textarea(v-model="tweet")
  div
    button(@click="post()")
      | post
    .list-group
      .list-item(v-for="t in timeline")
        | {{t}}
</template>

<style lang="sass">
  textarea
    width: 50em
    height: 10em
  .list-item
    margin: 20px
    padding: 10px
    border: solid
    border-color: skyblue
    border-radius: 10px
  button
    margin: 0 auto
    padding: 0.5em 1em
    border-radius: 10px
    text-decoration: none
    background: skyblue
    color: #fff
</style>

<script>
export default{
  data(){
    return{
      tweet: '',
      tweetList: [],
      timeline: []
    }
  },
  methods: {
    post(){
      this.tweetList.push(this.tweet)
      this.timeline = this.reverse()
      console.log(this.tweetList)
      console.log(this.timeline)
      this.clear()
    },
    clear(){
      this.tweet = ''
    },
    reverse(){
      console.log(this.tweetList)
      var copy = this.tweetList.slice()
      return copy.reverse()
    }
  }
}
</script>
