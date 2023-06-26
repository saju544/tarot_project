<script lang="ts">
  import Bar from './Bar.svelte'

  let isOpen = false
  $: top = isOpen
  $: middle = isOpen
  $: bottom = isOpen
  $: hide = !isOpen
</script>

<button
  class="col-start-1 col-end-13 mt-8 h-10 justify-self-center md:hidden"
  on:click={() => (isOpen = !isOpen)}>
  <svg
    height="100%"
    viewBox="0 0 294 242"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect class:top width="294" height="26" rx="13" fill="#D4D4D4" />
    <rect
      class:middle
      x="73.5"
      y="108"
      width="147"
      height="26"
      rx="13"
      fill="#D4D4D4" />
    <rect class:bottom y="216" width="294" height="26" rx="13" fill="#D4D4D4" />
  </svg>
</button>

<nav
  class="col-start-1 col-end-13 flex h-40  flex-col items-center  overflow-hidden transition-all duration-300 md:mt-auto md:h-auto  md:flex-row md:gap-8 md:justify-self-center md:pt-14 md:transition-none"
  class:hide>
  <a href="/" class="para">HOME</a>
  <Bar className="my-1 md:hidden" />
  <a href="/" class="para">SHOP</a>
  <Bar className="my-1 md:hidden" />
  <a href="/" class="para">SERVICE</a>
  <Bar className="my-1 md:hidden" />
  <a href="/" class="para">CONTACT US</a>
  <Bar className="my-1 md:hidden" />
  <a href="/" class="para">ABOUT US</a>
</nav>

<style>
  @media (max-width: 768px) {
    svg {
      animation: ping 1s alternate infinite;
    }

    .top {
      transform-box: fill-box;
      transform-origin: left center;
      rotate: 36deg;
      scale: 1.2 1;
      transition: all 0.3s;
    }

    .middle {
      transform-box: fill-box;
      transform-origin: center center;
      scale: 1.9 9;
      opacity: 0;
      border-radius: 100%;
      transition: all 1.5s;
    }

    .bottom {
      transform-box: fill-box;
      transform-origin: left center;
      rotate: -36deg;
      scale: 1.2 1;
      transition: all 0.3s;
    }

    .hide {
      height: 0;
    }
  }

  @keyframes ping {
    from {
      scale: 0.9;
      opacity: 0.5;
    }
    top {
      scale: 1;
      opacity: 1;
    }
  }
</style>
