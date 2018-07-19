<template lang="pug">
.container
  textarea.post-message(v-model="tweet" placeholder="今日もあついね。")
  div.timeline
    button.nk-tweet-push(@click="post()")
      | post
    .list-group
      .list-item-tweet-text(v-for="(t, i) in timeline")
        div.nk-time-line-text
          | {{t.tweet}}
          button.nk-tweet-like(@click="likepost(i)")
            | {{t.count}} like
        div.nk-time-line-date
          | {{t.date}}
        br
        div.nk-many-res
          input.nk-res-message(v-model="resmessage[i]" type="text")
          button.nk-res-push(@click="respost(i)")
            | res
        .list-group
          .list-item-res-text(v-for="(l, k) in t.resList")
            | {{l.res}}
            div.res-like-button-pos
              button.nk-res-like-button(@click="reslikepost(i, k)")
                | {{l.count}}　like
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
  .list-item-tweet-text
    margin: 20px
    padding: 10px
    border: solid
    text-align: left
    border-color: skyblue
    border-radius: 10px
  .timeline
    text-align: center
  .nk-tweet-push
    width: 100px
    font-size: 15px
    padding: 0.5em 1em
    border: 0 none
    padding-bottom: 1em
    border-radius: 10px
    overflow: hidden
    text-decoration: none
    background: linear-gradient(aquamarine, aqua)
    color: #fff
    cursor: pointer
    &:hover
      background: linear-gradient(aqua, blue)
  .nk-time-line-text
    border-bottom: solid 1px
    border-color: orange
    padding: 0 0 15px 0
  .list-item-res-text
    padding: 10px
    margin-top: 15px
    border-top: solid 0.5px
    border-color: #dcdcdc
  .nk-many-res
    text-align: right
    margin: 0 0 10px 0
  .nk-time-line-date
    text-align: right
  .nk-tweet-like
    margin: 0 0 0 10px
    padding: 6px
    border: 0 none
    font-size: 14px
    border-radius: 15px
    overflow: hidden
    background: linear-gradient(pink, hotpink)
    color: #fff
    cursor: pointer
    &:hover
      background: deeppink
  .nk-res-push
    margin: 0 0 0 10px
    padding: 5px 15px
    border-color: skyblue
    font-size: 14px
    border-radius: 5px
    overflow: hidden
    background: none
    color: skyblue
    cursor: pointer
    &:hover
      background: linear-gradient(lightskyblue, deepskyblue)
      color: #fff
  .nk-res-like-button
    background: linear-gradient(pink, hotpink)
  .res-like-button-pos
    display: inline-block
    text-align: right
</style>

<script>
import moment from 'moment'

export default{
  data(){
    return{
      tweet: '',
      tweetList: [],
      timeline: [],
      resmessage: []
    }
  },
  methods: {
    post(){
      if (this.isTweetPresent()){
        this.tweetList.push({
          tweet: this.tweet,
          date: this.tweetTime(),
          resList: [],
          count: 0
        })
        this.resmessage.push('')
        this.timeline = this.reverse(this.tweetList)
        this.clear()
      }
    },
    respost(i){
      if (this.isresPresent(i)){
        this.timeline[i].resList.push({
          res: this.resmessage[i],
          count: 0
        })
        console.log(this.resList)
        console.log(this.resmessage)
        this.resmessage[i] = ''
      }
    },
    likepost(i){
      count: this.timeline[i].count++
    },
    reslikepost(i, k){
      count: this.timeline[i].resList[k].count++
    },
    clear(){
      this.tweet = ''
    },
    reverse(list){
      var copy = list.slice()
      return copy.reverse()
    },
    isTweetPresent() {
      return this.tweet !== ''
    },
    isresPresent(i) {
      return this.resmessage[i] !== ''
    },
    tweetTime(){
      var date = moment()
      return date.format("HH:mm")
    }
  }
}
</script>
