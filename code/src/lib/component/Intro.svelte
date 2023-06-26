<script>
  import Section from './Section.svelte'
  import astrologer from '../../assets/image/astrologer-1.webp'
</script>

<Section>
  <article
    class="intro relative col-start-1 col-end-13 row-start-1 row-end-2  md:mt-10 mt-20 flex  flex-col items-start justify-center   md:col-start-1 md:col-end-6 md:row-start-auto md:row-end-auto  ">
    <h1 class="head mb-4 leading-normal">
      GETANJALI SHARMA | THE TAROR READER
    </h1>

    <p class="para pb-4 leading-loose">
      An experienced and intuitive Tarot Reader, Astrologer, Vastu practitioner,
      and healer. With over 12 years of mastery in the mystical arts, she guides
      individuals towards self-discovery, empowerment, and spiritual growth.
      Through transformative readings, personalized astrology insights, Vastu
      consultations, and holistic healing practices, she helps clients find
      clarity, balance, and healing on their life's journey. Passionate about
      sharing her knowledge, Getanjali Sharma also offers workshops and classes,
      empowering others to tap into their intuitive abilities and deepen their
      connection with the divine. Join her to uncover the wisdom and magic that
      lie within.
    </p>
  </article>
  <div
    class="col-start-1 col-end-13 row-start-2 row-end-3 md:mt-10 flex items-center md:col-start-8 md:col-end-13 md:row-start-auto md:row-end-auto">
    <img
      loading="lazy"
      class="col-start-8 col-end-13 object-cover md:mt-40 "
      src={astrologer}
      alt="Geetanjali Sharma" />
  </div>
</Section>

<style>
  .intro::before {
    content: '';
    position: absolute;
    height: 10rem;
    aspect-ratio: 1/1;
    background-image: url('../../assets/image/moon-left.webp');
    background-size: contain;
    background-repeat: no-repeat;
    left: 0;
    top: 0;
  }

  @media (min-width: 768px) {
    .intro::before {
      height: 15rem;
      left: calc((100vw - (100% * 2.3)) / -2);
      top: -5rem;
    }
  }
</style>
