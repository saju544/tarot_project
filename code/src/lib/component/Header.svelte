<script lang="ts">
  import Section from '$lib/component/Section.svelte'
  import logo from '../../assets/image/logo.webp'
  import map from '../../assets/svg/map.svg'
  import call from '../../assets/svg/call.svg'
  import astrologerAvatar from '../../assets/image/astrologer_avatar.webp'
  import Nav from './Nav.svelte'
</script>

<header class="py-4">
  <Section>
    <div
      class="col-start-1 col-end-13 flex flex-col items-center gap-3 md:flex-row  md:justify-between  md:gap-0">
      <a href="/" class="hidden items-center gap-4 md:flex ">
        <img
          loading="lazy"
          src={logo}
          alt="website logo"
          class="h-14 object-contain " />
        <h1 class="head font-sans text-orange">TAROT</h1>
      </a>

      <div class="hidden items-center justify-between gap-8 md:flex ">
        <div class="flex items-center gap-4">
          <img loading="lazy" src={map} alt="map icon" />
          <div>
            <p class="para">Reach US</p>
            <address class="para not-italic text-dark">
              Bankura, WB, India
            </address>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <img loading="lazy" src={call} alt="call icon" />
          <div>
            <p class="para">Talk to Astrologer</p>
            <a href="tel:+919855000804" class="para text-dark">9855000804</a>
          </div>
        </div>

        <img
          loading="lazy"
          src={astrologerAvatar}
          alt="astrologer avatar"
          class="h-14 object-contain" />
      </div>

      <div class="flex  w-full items-center justify-center  gap-4   md:hidden">
        <div class="flex items-center gap-2">
          <img class="h-5" loading="lazy" src={map} alt="map icon" />
          <div>
            <address class="para text-xs  not-italic text-dark">
              Bankura, WB, India
            </address>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <div>
            <a href="tel:+919855000804" class="para text-xs  text-dark"
              >9855000804</a>
          </div>
          <img class="h-5" loading="lazy" src={call} alt="call icon" />
        </div>
      </div>

      <div class="flex w-full items-center justify-between  md:hidden">
        <div class="flex items-center gap-2">
          <img
            loading="lazy"
            src={logo}
            alt="website logo"
            class="h-14 object-contain " />
          <h1 class="head font-sans  text-orange">TAROT</h1>
        </div>
      </div>
    </div>
  </Section>
  <Section>
    <Nav />
  </Section>
</header>
