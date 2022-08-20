<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="reply_to" />
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send" />
  </form>
</template>

<script></script>
