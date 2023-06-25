<script lang="ts">
  import astroEye from '../../assets/image/astro_eye.webp'
  import Section from './Section.svelte'
  import StatisticCard from './StatisticCard.svelte'
  import chakra from '../../assets/image/chakra.webp'
</script>

<Section>
  <img
    loading="lazy"
    class="absolute  top-1/2 left-1/2 w-1/2 -translate-x-1/2 object-contain"
    src={chakra}
    alt="moon in right side" />

  <img
    loading="lazy"
    class="col-start-1 col-end-13 mt-7 mb-7 md:mt-14 md:mb-28"
    src={astroEye}
    alt="astrology eye symbol" />

  <div
    class="col-start-1 col-end-13 flex flex-col gap-4 md:flex-row md:justify-between  md:gap-0">
    <StatisticCard
      classname="md:w-1/4"
      info="Trusted by Thousands of Satisfied Clients"
      stat="10K+" />

    <StatisticCard classname="md:w-1/4" info="Years of Experience" stat="12+" />

    <StatisticCard
      classname="md:w-1/4"
      info="Successful workshops conducted across various cities"
      stat="50" />
  </div>
</Section>
