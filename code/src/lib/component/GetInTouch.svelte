<script>
  import Button from './Button.svelte'
  import Section from './Section.svelte'

  function submitForm() {}
</script>

<Section>
  <h1 class="head col-start-1 col-end-13 mt-20 mb-10">Get in Touch</h1>

  <form
    class="flex col-start-1 col-end-13 gap-20 mb-20 "
    on:submit|preventDefault={submitForm}>
    <input
      class="bg-transparent border-b-dark w-72  text-orange border-b-2 focus:outline-none  focus:border-b-orange  placeholder:text-orange placeholder:para"
      placeholder="Name"
      type="text"
      name="name"
      id="name" />
    <input
      class="bg-transparent border-b-dark w-72  text-orange border-b-2 focus:outline-none  focus:border-b-orange   placeholder:text-orange placeholder:para"
      placeholder="Email"
      type="email"
      name="emial"
      id="email" />
    <Button>Get Notified</Button>
  </form>
</Section>
