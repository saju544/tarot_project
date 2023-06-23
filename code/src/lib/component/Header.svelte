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
    <a href="/">
      <div class="flex items-center gap-4 col-start-1">
        <img
          loading="lazy"
          src={logo}
          alt="website logo"
          class="h-14 object-contain " />
        <h1 class="head text-orange">TAROT</h1>
      </div>
    </a>

    <div
      class="flex items-center justify-between gap-8 col-start-7 col-end-13 ">
      <a href="/">
        <div class="flex items-center gap-4">
          <img loading="lazy" src={map} alt="map icon" />
          <div>
            <p class="para">Reach US</p>
            <address class="para text-dark not-italic">
              Bankura, WB, India
            </address>
          </div>
        </div>
      </a>
      <a href="/">
        <div class="flex items-center gap-4">
          <img loading="lazy" src={call} alt="call icon" />
          <div>
            <p class="para">Talk to Astrologer</p>
            <a href="tel:+919855000804" class="para text-dark">9855000804</a>
          </div>
        </div>
      </a>

      <a href="/">
        <img
          loading="lazy"
          src={astrologerAvatar}
          alt="astrologer avatar"
          class="h-14 object-contain" />
      </a>
    </div>
  </Section>
  <Section>
    <Nav />
  </Section>
</header>
