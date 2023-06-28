<script>
  import Bar from '$lib/component/Bar.svelte'
  import Header from '$lib/component/Header.svelte'
  import Section from '$lib/component/Section.svelte'
  import starSky from '../../../assets/image/start_sky.webp'
  import moonRight from '../../../assets/image/moon_right.webp'
  import astrologer from '../../../assets/image/astrologer-hero.webp'
  import Button from '$lib/component/Button.svelte'
  import GetInTouch from '$lib/component/GetInTouch.svelte'
  import Footer from '$lib/component/Footer.svelte'
</script>

<title>Geetanjali Sharma | Contact</title>

<Header />
<main class="relative">
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
    class="absolute right-0 -top-28 h-60 object-contain"
    src={moonRight}
    alt="moon in right side" />

  <header
    class="col-start-1 col-end-13  mt-8 flex flex-col items-center text-center  md:my-20">
    <h1 class="head ">Contact Us</h1>
    <Bar />
  </header>

  <Section>
    <div
      class="col-start-1 col-end-13 mt-10 flex flex-col gap-10  md:mt-0  md:mb-36 md:flex-row md:gap-10">
      <form class="grid grow grid-cols-1  gap-4 md:grid-cols-2 md:gap-10">
        <input
          class="placeholder:para col-span-1 rounded-t-xl  border-b-2 border-b-dark  bg-gray-800  bg-opacity-70 py-4 px-4  text-orange  placeholder:text-orange focus:border-b-orange focus:outline-none md:col-span-2 "
          placeholder="Your Subject"
          type="text"
          name="subject"
          id="subject" />

        <input
          class="placeholder:para border-b-dabg-transpar bg-opacity-70ent col-span-1  rounded-none border-b-2 bg-gray-800 bg-opacity-70 py-4  px-4  text-orange placeholder:text-orange  focus:border-b-orange focus:outline-none md:rounded-l-xl"
          placeholder="Name"
          type="text"
          name="name"
          id="name" />

        <input
          class="placeholder:para  border-b-dabg-transpar bg-opacity-70ent col-span-1  border-b-2 bg-gray-800 bg-opacity-70 py-4   px-4   text-orange placeholder:text-orange  focus:border-b-orange focus:outline-none md:rounded-r-xl"
          placeholder="Email"
          type="email"
          name="emial"
          id="email" />

        <textarea
          class="placeholder:para border-b-darbg-transpar bg-opacity-70ent  col-span-1 rounded-b-xl border-b-2 bg-gray-800 bg-opacity-70  py-4  px-4 text-orange  placeholder:text-orange focus:border-b-orange focus:outline-none md:col-span-2 md:h-36"
          placeholder="Tell Your Message..."
          name="message"
          id="message" />

        <Button>Send Message</Button>
      </form>

      <section
        class="relative space-y-4 rounded-xl border-dark md:border md:p-8 ">
        <article>
          <h1 class="head text-orange">Call Us</h1>
          <p class="para text-dark">9855000804</p>
        </article>

        <article>
          <h1 class="head text-orange">Email Us</h1>
          <a href="/" class="para text-dark">geetanjalisharma@gmail.com</a>
        </article>
        <img
          src={astrologer}
          class="absolute -bottom-10 right-0 left-0 md:bottom-0 "
          role="presentation"
          alt="astrologer geetanjali sharma" />
      </section>

      <Bar className="w-full md:hidden" />
    </div>
  </Section>

  <GetInTouch />
</main>
<Footer />
