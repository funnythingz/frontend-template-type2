<template lang="pug">
.container
  textarea.post-message(v-model="tweet")
  div.postbutton
    button(@click="post()")
      | post
    .list-group
      .list-item(v-for="t in timeline")
        | {{t.tweet}}
        | {{t.date}}
</template>

<style lang="sass">
  *:focus
    outline: none
  .container
    margin: 0 auto
    width: 40em
  .post-message
    width: 50em
    height: 10em
  .list-item
    margin: 20px
    padding: 10px
    border: solid
    text-align: left
    border-color: skyblue
    border-radius: 10px
  .postbutton
    text-align: center
  button
    width: 100px
    font-size: 15px
    padding: 0.5em 1em
    border: 0 none
    padding-bottom: 1em
    border-radius: 10px
    overflow: hidden
    text-decoration: none
    background: skyblue
    color: #fff
    cursor: pointer
    &:hover
      background-color: orange

</style>

<script>
import moment from 'moment'

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
      if (this.isTweetPresent()){
        this.tweetList.push({
          tweet: this.tweet,
          date: this.tweetTime()
        })
        console.log(this.tweetList)
        this.timeline = this.reverse()
        this.clear()
      }
    },
    clear(){
      this.tweet = ''
    },
    reverse(){
      var copy = this.tweetList.slice()
      return copy.reverse()
    },
    isTweetPresent() {
      return this.tweet !== ''
    },
    tweetTime(){
      var date = moment()
      return date.format("HH:mm")
    }
  }
}
</script>
