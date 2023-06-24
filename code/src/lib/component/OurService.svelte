<script>
  import Bar from './Bar.svelte'
  import Section from './Section.svelte'
  import tarotReading from '../../assets/image/tarot_reading.webp'
  import astrologer from '../../assets/image/astrologer-2.webp'
  import vastu from '../../assets/image/vastu.webp'
  import healing from '../../assets/image/healing.webp'
  import workshop from '../../assets/image/workshops_and_classes.webp'
  import starSky from '../../assets/image/start_sky.webp'
  import moonRight from '../../assets/image/moon_right.webp'
  import chakra from '../../assets/image/chakra.webp'
</script>

<div class="relative">
  <img
    loading="lazy"
    class="star-sky absolute top-20 -z-10 h-60  w-full object-cover object-bottom"
    src={starSky}
    alt="night sky with stars" />

  <img
    loading="lazy"
    class="star-sky absolute  -top-40 -z-10 h-60 w-full  rotate-180 object-cover object-bottom"
    src={starSky}
    alt="night sky with stars" />

  <img
    loading="lazy"
    class="absolute right-0 -top-28 h-60 object-contain "
    src={moonRight}
    alt="moon in right side" />

  <img
    loading="lazy"
    class="absolute top-1/4 left-1/2 w-1/2 -translate-x-1/2 object-contain"
    src={chakra}
    alt="moon in right side" />

  <img
    loading="lazy"
    class="absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2 object-contain"
    src={chakra}
    alt="moon in right side" />

  <header
    class="col-start-1  col-end-13 my-20 flex flex-col  items-center  text-center">
    <h1 class="head ">Our Service</h1>
    <Bar />
  </header>

  <Section>
    <article
      class="intro relative col-start-1  col-end-6  flex flex-col items-start justify-center">
      <h1 class="head mb-4 leading-normal text-orange">Tarot Reading</h1>

      <p class="para pb-4 leading-loose">
        Our Tarot readings provide deep insights and guidance into various
        aspects of your life, including love, career, relationships, and
        personal growth. Through the ancient wisdom of the Tarot cards, we tap
        into the universal energies to help you gain clarity, make informed
        decisions, and navigate life's challenges.
      </p>
    </article>

    <div class="col-start-8 col-end-13 flex items-center ">
      <img
        loading="lazy"
        class="object-cover"
        src={tarotReading}
        alt="Geetanjali Sharma" />
    </div>

    <Bar className={'col-start-1 col-end-13 w-full my-8 '} />
  </Section>

  <Section>
    <div class="col-start-1  col-end-6 flex items-center ">
      <img
        loading="lazy"
        class="object-cover"
        src={astrologer}
        alt="Geetanjali Sharma" />
    </div>

    <article
      class="intro relative col-start-8 col-end-13  flex flex-col items-start justify-center">
      <h1 class="head mb-4 leading-normal text-orange">Astrology</h1>

      <p class="para pb-4 leading-loose">
        Unlock the secrets of the stars and planets with our expert astrology
        services. By analyzing your birth chart and planetary alignments, we
        provide personalized astrology readings that shed light on your unique
        personality traits, life purpose, and potential future events. Our
        astrological guidance empowers you to make the most of your strengths
        and navigate the cosmic energies influencing your life.
      </p>
    </article>

    <Bar className={'col-start-1 col-end-13 w-full my-8 '} />
  </Section>

  <Section>
    <article
      class="intro relative col-start-1  col-end-6  flex flex-col items-start justify-center">
      <h1 class="head mb-4 leading-normal text-orange">Vastu</h1>

      <p class="para pb-4 leading-loose">
        Harmonize your living and workspaces with the principles of Vastu
        Shastra. Our Vastu consultations help create an environment that
        promotes positive energy flow, balance, and abundance. From residential
        properties to commercial spaces, we offer practical Vastu solutions to
        enhance overall well-being, prosperity, and success.
      </p>
    </article>
    <div class="col-start-8 col-end-13 flex items-center ">
      <img
        loading="lazy"
        class="object-cover"
        src={vastu}
        alt="Geetanjali Sharma" />
    </div>

    <Bar className={'col-start-1 col-end-13 w-full my-8 '} />
  </Section>

  <Section>
    <div class="col-start-1  col-end-6 flex items-center ">
      <img
        loading="lazy"
        class="object-cover"
        src={healing}
        alt="Geetanjali Sharma" />
    </div>

    <article
      class="intro relative col-start-8 col-end-13  flex flex-col items-start justify-center">
      <h1 class="head mb-4 leading-normal text-orange">Healing</h1>

      <p class="para pb-4 leading-loose">
        Experience profound healing and rejuvenation through our holistic
        healing practices. Whether you're seeking physical, emotional, or
        spiritual healing, our skilled practitioners utilize various modalities
        such as energy healing, chakra balancing, and mindfulness techniques to
        restore harmony and promote overall wellness. Our healing sessions are
        tailored to address your specific needs and support your personal
        transformation.
      </p>
    </article>

    <Bar className={'col-start-1 col-end-13 w-full my-8 '} />
  </Section>

  <Section>
    <article
      class="intro relative col-start-1  col-end-6  flex flex-col items-start justify-center">
      <h1 class="head mb-4 leading-normal text-orange">
        Workshops and Classes
      </h1>

      <p class="para pb-4 leading-loose">
        We believe in sharing knowledge and empowering others. Join our Tarot
        workshops and classes to explore the mystical world of divination.
        Whether you're a beginner or an experienced practitioner, our
        comprehensive courses provide in-depth insights, practical techniques,
        and hands-on experience to enhance your intuitive abilities and develop
        a deeper connection with the Tarot.
      </p>
    </article>
    <div class="col-start-8 col-end-13 flex items-center ">
      <img
        loading="lazy"
        class="object-cover"
        src={workshop}
        alt="Geetanjali Sharma" />
    </div>
  </Section>

  <Section>
    <p class="para col-start-1 col-end-13 my-8 leading-normal">
      We actively participate in state-level exhibitions, organize events, and
      collaborate with esteemed organizations to spread awareness and promote
      the understanding of astrological sciences. Through partnerships with
      reputable institutions and corporations like Kotak Mahindra and IDFC
      banks, we bring the magic of Tarot and astrology to a wider audience,
      creating meaningful experiences and valuable insights.
    </p>
  </Section>
</div>

<style>
  .star-sky:nth-child(1) {
    animation: shine 5s alternate infinite;
  }
  .star-sky:nth-child(2) {
    animation: shine 5s alternate infinite reverse;
  }

  @keyframes shine {
    from {
      filter: brightness(0.5);
    }

    to {
      filter: brightness(1.5);
    }
  }
</style>
