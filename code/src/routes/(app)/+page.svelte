<script lang="ts">
  import Footer from '$lib/component/Footer.svelte'
  import GetInTouch from '$lib/component/GetInTouch.svelte'
  import Header from '$lib/component/Header.svelte'
  import Hero from '$lib/component/Hero.svelte'
  import Intro from '$lib/component/Intro.svelte'
  import OurService from '$lib/component/OurService.svelte'
  import Statistics from '$lib/component/Statistics.svelte'
  import Testimonial from '$lib/component/Testimonial.svelte'
  import WhatWeDo from '$lib/component/WhatWeDo.svelte'
  import YouTubeChannel from '$lib/component/YouTubeChannel.svelte'
</script>

<Header />
<main>
  <Hero />
  <WhatWeDo />
  <Intro />
  <OurService />
  <Statistics />
  <Testimonial />
  <YouTubeChannel />
  <GetInTouch />
  <Footer />
</main>
