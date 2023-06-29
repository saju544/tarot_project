<script lang="ts">
  import { onMount } from 'svelte'
  import Bar from './Bar.svelte'

  let isOpen = false
  $: top = isOpen
  $: middle = isOpen
  $: bottom = isOpen
  $: hide = !isOpen

  let path = '/'

  onMount(() => {
    path = location.pathname
  })
</script>

<button
  class="absolute -top-[4.7rem]  right-0 z-50 col-start-1  col-end-13 mt-8 h-6 justify-self-center md:hidden"
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
  class="col-start-1 col-end-13 flex  h-52 flex-col  items-center overflow-hidden transition-all duration-300 md:mt-auto md:h-auto  md:flex-row md:gap-8 md:justify-self-center md:pt-14 md:transition-none"
  class:hide>
  <a
    href="/"
    class={`para hover:font-bold hover:text-orange  ${
      path === '/' ? 'font-bold text-orange' : ''
    }`}>HOME</a>
  <Bar className="my-3 md:hidden" />
  <a
    href="/shop"
    class={`para hover:font-bold hover:text-orange  ${
      path === '/shop' ? 'font-bold text-orange' : ''
    }`}>SHOP</a>
  <Bar className="my-3 md:hidden" />
  <a
    href="/service"
    class={`para hover:font-bold hover:text-orange  ${
      path === '/service' ? 'font-bold text-orange' : ''
    }`}>SERVICE</a>
  <Bar className="my-3 md:hidden" />
  <a
    href="/contact"
    class={`para hover:font-bold hover:text-orange  ${
      path === '/contact' ? 'font-bold text-orange' : ''
    }`}>CONTACT US</a>
  <Bar className="my-3 md:hidden" />
  <a
    href="/about"
    class={`para hover:font-bold hover:text-orange ${
      path === '/about' ? 'font-bold text-orange' : ''
    }`}>ABOUT US</a>
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
    to {
      scale: 1;
      opacity: 1;
    }
  }
</style>
