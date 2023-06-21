<script lang="ts">
  import Section from '$lib/component/Section.svelte'
  import logo from '../../assets/image/logo.png'
  import map from '../../assets/svg/map.svg'
  import call from '../../assets/svg/call.svg'
  import astrologerAvatar from '../../assets/image/astrologer_avatar.png'
  import Nav from './Nav.svelte'
</script>

<header class="py-4">
  <Section>
    <div class="flex items-center gap-4 col-start-1">
      <img src={logo} alt="website logo" class="h-14" />
      <h1 class="head text-orange">TAROT</h1>
    </div>

    <div
      class="flex items-center justify-between gap-8 col-start-7 col-end-13 ">
      <div class="flex items-center gap-4">
        <img src={map} alt="map icon" />
        <div>
          <p class="para">Reach US</p>
          <p class="para text-dark">Bankura, WB, India</p>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <img src={call} alt="call icon" />
        <div>
          <p class="para">Talk to Astrologer</p>
          <p class="para text-dark">9855000804</p>
        </div>
      </div>

      <img src={astrologerAvatar} alt="astrologer avatar" class="h-14" />
    </div>
  </Section>
  <Section>
    <Nav />
  </Section>
</header>
