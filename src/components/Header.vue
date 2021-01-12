<template>
  <div class="mainWrapper">
    <div class="logoBlock">
      <img class="logo" src="../assets/images/KSFLogo.png" alt="KSF Logo" />
      <div class="titleWrapper">
        <div class="mainTitle">KSF Clan</div>
        <div class="subTitle">The biggest surf community in Counter-Strike</div>
      </div>
    </div>
    <nav class="nav">
      <span class="link">MAPS</span>
      <span class="link">TOPS</span>
      <span class="link">PLAYERS</span>
    </nav>
    <div class="searchBlock">
      <div>
        <span class="smallLink">forum</span>
        <span class="smallLink">sign up</span>
      </div>
      <div class="searchBar">
        <input type="text" class="searchInput" placeholder="Search..." />
        <img src="../assets/images/searchIcon.svg" class="searchIcon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  name: "Header",
  setup() {
    console.log("heder");
  },
};
</script>

<style scoped lang="scss">
.mainWrapper {
  width: 100%;
  height: 130px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: {
    color: #181818;
    image: url(../assets/images/headerBackground.png);
    repeat: no-repeat;
    size: 70%;
    position-x: right;
    position-y: center;
  }
}

.logoBlock {
  width: 30%;
  height: 100%;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  white-space: nowrap;

  .logo {
    margin-right: 30px;
    transform: scale(0.8) translateY(-10%);
  }

  .mainTitle {
    font-size: 4em;
    font-weight: 700;
    line-height: 1;
    position: relative;
  }

  .subTitle {
    transform: translateX(-5px);
  }
}

.nav {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .link {
    font-size: 2em;
    font-weight: 700;

    &:hover {
      cursor: pointer;
      color: #ddd;
    }
  }
}

.searchBlock {
  width: 30%;
  height: 80%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

  .smallLink {
    font-weight: 500;
    padding-left: 15px;
  }

  .searchBar {
    display: flex;
    align-items: center;
    border-radius: 30px;
    background-color: #131313;
    padding: 10px 15px;
  }

  .searchInput {
    background: none;

    border: none;
    border-bottom: 2px solid #c4c4c4;

    font-size: 1.3em;
    outline: none;
  }

  .searchIcon {
    width: 30px;
    margin-left: 10px;
  }
}

@media screen and (max-width: 768px) {
  .mainWrapper {
    background-size: 150%;
  }
}
</style>
