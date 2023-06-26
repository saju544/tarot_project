<script>
  import Button from './Button.svelte'
  import Section from './Section.svelte'

  function submitForm() {}
</script>

<Section>
  <h1 class="head col-start-1 col-end-13 mt-8 md:mb-10  md:mt-20">
    Get in Touch
  </h1>

  <form
    class="col-start-1 col-end-13 mb-10 flex flex-col  gap-4 md:mb-20  md:flex-row md:gap-12 "
    on:submit|preventDefault={submitForm}>
    <input
      class="placeholder:para border-b-2 border-b-dark  bg-transparent text-orange placeholder:text-orange  focus:border-b-orange  focus:outline-none md:w-1/4"
      placeholder="Name"
      type="text"
      name="name"
      id="name" />
    <input
      class="placeholder:para border-b-2 border-b-dark  bg-transparent text-orange placeholder:text-orange  focus:border-b-orange   focus:outline-none md:w-1/4"
      placeholder="Email"
      type="email"
      name="emial"
      id="email" />
    <Button>Get Notified</Button>
  </form>
</Section>
