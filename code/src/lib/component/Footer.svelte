<script>
  import Button from './Button.svelte'
  import Section from './Section.svelte'
  import logo from '../../assets/image/logo.webp'
  import socials from '../../assets/svg/socials.svg'
  import starSky from '../../assets/image/start_sky.webp'
  import fullMoon from '../../assets/image/full_moon.webp'
</script>

<Section>
  <div
    class="relative col-start-1 col-end-13 flex flex-col items-center justify-between gap-8  md:flex-row  md:items-start md:justify-between">
    <article class="flex  flex-col items-center gap-4 text-center">
      <h1 class="para text-2xl text-[#D9D9D9]">
        Tarot, Astology and Hosroscope
      </h1>
      <Button>Fix Appointment</Button>
    </article>

    <article
      class="order-2  flex flex-col items-center   gap-4 text-center  md:order-1 md:mt-20 md:mb-4 ">
      <div class="flex items-center gap-4">
        <img loading="lazy" src={logo} alt="website logo" class="h-14" />
        <h1 class="head text-orange">TAROT</h1>
      </div>

      <p class="para">Astrology reveals the will of the gods</p>

      <p class="para text-dark">
        © 2023. All Right Reversed | Geetanjali Sharma
      </p>
    </article>

    <article class="order-1 flex flex-col items-center  gap-4 md:order-2">
      <h1 class="para text-2xl text-[#D9D9D9]">Follow Us On Social</h1>
      <img loading="lazy" src={socials} alt="social media icons" />
    </article>

    <img
      loading="lazy"
      class="star-sky"
      src={starSky}
      alt="night sky full of stars" />
    <img loading="lazy" class="full-moon" src={fullMoon} alt="full moon" />
  </div>
</Section>

<style>
  .star-sky {
    position: absolute;
    z-index: -10;
    height: 128%;
    width: 100%;
    bottom: 0;
    object-fit: cover;
    object-position: center bottom;
    min-width: calc(100vw - 1.3rem);
    left: calc(((100vw - 1.3rem) - 100%) / -2);
    top: -4rem;
    rotate: 180deg;
  }

  .full-moon {
    position: absolute;
    width: 40%;
    object-fit: contain;
    z-index: -11;
    top: -22rem;
    left: -5rem;
    scale: 1.3;
  }
</style>
