<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItem" v-bind:key="item.id" class="post">
        <!-- point area -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- other information -->
        <div>
          <!--  title of list item area  -->
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/` + item.id" >
              {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-if="item.user" v-bind:to="'/users/' +  item.user" class="link-text">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain}}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script scoped>
export default {
    created() {
        // const name = this.$route.name;
        // console.log('name = ' + name);
        // if(name === 'news') {
        //     this.$store.dispatch('FETCH_NEWS');

        // } else if(name === 'ask') {
        //     this.$store.dispatch('FETCH_ASKS');

        // } else if (name === 'jobs') {
        //     this.$store.dispatch('FETCH_JOBS');
        // }
    },

    computed: {
      listItem() {
        return this.$store.state.list;
        // const name = this.$route.name;
        // // console.log('name = ' + name)
        // if(this.$route.name === 'news') {
        //   return this.$store.state.news;

        // } else if(this.$route.name === 'ask') {
        //   return this.$store.state.asks;

        // } else if(this.$route.name === 'jobs') {
        //   return this.$store.state.jobs;

        // }
        // return console.log('name = ' +  name);

      }
    }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}


</style>
