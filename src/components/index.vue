<template lang="pug">
.container
  textarea(v-model="tweet")
  button(@click="post()")
    | post
  .list-group
    .list-item(v-for="t in timeline")
      | {{t}}
</template>

<style lang="sass">

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
