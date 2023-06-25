<script>
  import Button from './Button.svelte'
  import Section from './Section.svelte'

  function submitForm() {}
</script>

<Section>
  <h1 class="head col-start-1 col-end-13 mt-20 mb-10">Get in Touch</h1>

  <form
    class="col-start-1 col-end-13 mb-20 flex gap-4"
    on:submit|preventDefault={submitForm}>
    <input
      class="placeholder:para w-1/4 border-b-2  border-b-dark bg-transparent text-orange  placeholder:text-orange  focus:border-b-orange focus:outline-none"
      placeholder="Name"
      type="text"
      name="name"
      id="name" />
    <input
      class="placeholder:para w-1/4 border-b-2  border-b-dark bg-transparent text-orange  placeholder:text-orange   focus:border-b-orange focus:outline-none"
      placeholder="Email"
      type="email"
      name="emial"
      id="email" />
    <Button>Get Notified</Button>
  </form>
</Section>
