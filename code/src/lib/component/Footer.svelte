<script>
  import Button from './Button.svelte'
  import Section from './Section.svelte'
  import logo from '../../assets/image/logo.png'
  import socials from '../../assets/svg/socials.svg'
  import starSky from '../../assets/image/start_sky.png'
  import fullMoon from '../../assets/image/full_moon.png'
</script>

<Section>
  <article class="col-start-1 col-end-5 flex flex-col items-center gap-4 mt-28">
    <h1 class="para text-2xl text-[#D9D9D9]">Tarot, Astology and Hosroscope</h1>
    <Button>Fix Appointment</Button>
  </article>

  <article
    class="col-start-5 col-end-9 flex flex-col items-center gap-4 mt-52 mb-12">
    <div class="flex items-center gap-4">
      <img loading="lazy" src={logo} alt="website logo" class="h-14" />
      <h1 class="head text-orange">TAROT</h1>
    </div>

    <p class="para">Astrology reveals the will of the gods</p>

    <p class="para text-dark">© 2023. All Right Reversed | Geetanjali Sharma</p>
  </article>

  <article
    class="col-start-9 col-end-13 flex flex-col items-center gap-4 mt-28">
    <h1 class="para text-2xl text-[#D9D9D9]">Follow Us On Social</h1>
    <img loading="lazy" src={socials} alt="social media icons" />
  </article>

  <img
    loading="lazy"
    class="star-sky"
    src={starSky}
    alt="night sky full of stars" />
  <img loading="lazy" class="full-moon" src={fullMoon} alt="full moon" />
</Section>

<style>
  .star-sky {
    position: absolute;
    z-index: -10;
    min-width: calc(100vw - 1.3rem);
    height: 110%;
    object-fit: cover;
    object-position: center bottom;
    bottom: 0;
    left: calc(((100vw - 1.3rem) - 100%) / -2);
    rotate: 180deg;
  }

  .full-moon {
    position: absolute;
    width: 55%;
    object-fit: contain;
    z-index: -11;
    top: -20rem;
    left: -8rem;
  }
</style>
