<script>
  import Section from './Section.svelte'
  import astrologer from '../../assets/image/astrologer-1.png'
</script>

<Section>
  <article
    class="intro relative col-start-1  col-end-6 mt-40 flex flex-col items-start justify-center  ">
    <h1 class="head leading-normal mb-4">
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
  <div class="col-start-8 col-end-13 flex items-center">
    <img
      class="col-start-8 col-end-13 mt-40 object-cover "
      src={astrologer}
      alt="Geetanjali Sharma" />
  </div>
</Section>

<style>
  .intro::before {
    content: '';
    position: absolute;
    height: 15rem;
    aspect-ratio: 1/1;
    background-image: url('src/assets/image/moon-left.png');
    background-size: contain;
    background-repeat: no-repeat;
    left: calc((100vw - (100% * 2.3)) / -2);
    top: -5rem;
  }
</style>
