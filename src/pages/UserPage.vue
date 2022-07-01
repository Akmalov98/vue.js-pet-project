<template>
    <div>
        <h1>Страница с постами</h1>
        <my-button
            @click="showDialog"
            style="margin: 15px 0"
        >
            Создать пользователя
        </my-button>
        <my-dialog v-model:show=" dialogVisible">
            <post-form
               @create="createPost"
            />
        </my-dialog>
        <post-list 
           :posts="posts"
           @remove="removePost"
        />
        <div class="page__wrapper">
            <div
              v-for="pageNumber in totalPages"
              :key="pageNumber"
              class="page"
              :disabled="pageNumber === 0"
              :class="{
                  'current-page': page === pageNumber
              }"
              @click="changePage(pageNumber)"
            >
              {{pageNumber}}
            </div>
        </div>
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import MyButton from '@/components/UI/MyButton.vue'
import axios from 'axios'
    export default {
        components: {
            PostList, PostForm, MyButton
        },
        data() {
            return {
                posts: [],
                dialogVisible: false,
                page: 1, 
                limit: 5,
                totalPages: 0,
            }
        },
        methods: {
          createPost(post) {
              this.posts.push(post)
              this.dialogVisible = false
          },
          removePost(post) {
              this.posts = this.posts.filter(p => p.id !== post.id)
          },
          showDialog() {
             this.dialogVisible = true 
          },
          changePage(pageNumber) {
              this.page = pageNumber 
              this.fetchPosts()
          },
          async fetchPosts() {
              try {
                const response = await axios.get(`https://test-js.alef.dev/users?page=${this.page - 1}`, {
                    params: {
                    _page: this.page,
                   _limit: this.limit
                    }
                })
                this.totalPages = 4 
                this.posts = response.data.data
              } catch (e) {
                  alert('Ошибка')
              }
          }
        }, 
        mounted() {
           this.fetchPosts() 
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app {
        padding: 20px;
    }
    .page__wrapper {
        display: flex;
        margin-top: 15px;
    }
    .page {
        border: 1px solid black;
        padding: 10px;
    }
    .current-page {
        border: 2px solid blue;
    }
</style>