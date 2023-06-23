<script>
  import Bar from './Bar.svelte'
  import Section from './Section.svelte'
  import ravi from '../../assets/image/testimonial_avatar-1.png'
  import priya from '../../assets/image/testimonial_avatar-2.png'
  import rajesh from '../../assets/image/testimonial_avatar-3.png'
  import BarVertical from './BarVertical.svelte'
</script>

<Section>
  <div class="col-start-1 col-end-13">
    <header class="flex flex-col items-center my-20 ">
      <h1 class="head">Client Testimonials</h1>
      <Bar className="mb-7 mt-2  w-80 " />
      <p class="para text-orange">Hear What Our Clients Have to Say</p>
    </header>

    <div class="flex items-center justify-between">
      <article class="flex w-1/4  flex-col items-center text-center gap-4">
        <img loading="lazy" src={ravi} alt="" class="h-24 object-cover" />
        <p class="para">
          "I have experienced a deep impact from the excellent Tarot and
          astrological guidance of Geetanjali Sharma. Her insightful readings
          and intuitive understanding have brought clarity and positive changes
          in my life. I highly recommend her services!"
        </p>
        <p class="text-orange text-2xl mt-4 relative name">Ravi Sharma</p>
      </article>

      <BarVertical />

      <article
        class="flex w-1/4 max-w-[16rem]  flex-col items-center text-center gap-4">
        <img loading="lazy" src={priya} alt="" class="h-24 object-cover " />
        <p class="para">
          "I am grateful for the profound insights I gained through my astrology
          consultation with Geetanjali Sharma. She accurately described my
          personality traits and provided valuable guidance for my future. Her
          expertise and warmth made the experience truly remarkable."
        </p>
        <p class="text-orange text-2xl mt-4 relative name">Priya Patel</p>
      </article>

      <BarVertical />

      <article class="flex w-1/4  flex-col items-center text-center gap-4">
        <img loading="lazy" src={rajesh} alt="" class="h-24 object-cover " />
        <p class="para">
          "I had a wonderful healing session with Geetanjali Sharma. Her energy
          work and chakra balancing techniques brought me deep relaxation and
          rejuvenation. I felt a profound sense of inner peace and healing.
          Thank you for your exceptional gift!"
        </p>
        <p class="text-orange text-2xl mt-4 relative name">Rajesh Kumar</p>
      </article>
    </div>
  </div>
</Section>

<style>
  .name::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 4rem;
    background-color: #d9d9d9;
    bottom: -8px;
    left: 50%;
    translate: -50%;
    border-radius: 10px;
  }
</style>
