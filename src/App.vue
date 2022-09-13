<template>
  <nav>
    <h2>{{ $store.state.name }}</h2>
    <router-link to="/login">Login</router-link>
    <router-link to="/main">Main</router-link>
    <router-view />
  </nav>
</template>

<style lang="less"></style>
