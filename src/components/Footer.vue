<template>
  <div class="footer">
    <div class="info">
      <div class="title">About</div>
      <div class="text">
        KSFClan is a collection of most highly skilled surfers on Counter-Strike
        Source. We bring players premium quality servers with customized plugins
        and consistently update them with new features.
      </div>
    </div>
    <FooterLink v-for="link in links" :key="link.text" :data="link" />
  </div>
</template>

<script>
import FooterLink from "./FooterLink.vue";

export default {
  components: {
    FooterLink,
  },
  setup() {
    const links = [
      {
        img: "servers.png",
        text: "Connect to the servers",
      },
      {
        img: "discordLogo.png",
        text: "Join the discord",
      },
      {
        img: "youtubeLogo.png",
        text: "Subscribe to the Youtube channel",
      },
      {
        img: "mobileApp.png",
        text: "Download our Mobile App",
      },
    ];

    return { links };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.info {
  width: 30%;
}

.title {
  font-size: 1.2rem;
  font-weight: 700;
  transform: translateX(-5px);
}

.text {
  font-size: 1rem;
}
</style>
