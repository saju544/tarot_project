<script lang="ts">
  import Bar from '$lib/component/Bar.svelte'
  import Footer from '$lib/component/Footer.svelte'
  import GetInTouch from '$lib/component/GetInTouch.svelte'
  import Header from '$lib/component/Header.svelte'
  import Product from '$lib/component/Product.svelte'
  import Section from '$lib/component/Section.svelte'
  import { items } from '$lib/shop_product/product'
  import starSky from '../../../assets/image/start_sky.webp'
  import astroEye from '../../../assets/image/astro_eye.webp'
  import { writable, type Writable } from 'svelte/store'
  import { setContext } from 'svelte'
  import Cart from '$lib/component/Cart.svelte'
  import Checkout from '$lib/component/Checkout.svelte'

  let products = writable(items)
  let productsInCart: Writable<product[]> = writable([])
  let isCartOpen = writable(false)
  let isCheckoutOpen = writable(false)

  let cart: Cart
  let checkout: Checkout

  setContext('product', products)
  setContext('product-in-cart', productsInCart)
  setContext('is-cart-open', isCartOpen)
  setContext('is-checkout-open', isCheckoutOpen)

  function addToCart(ev: CustomEvent) {
    const id = ev.detail.id
    let product = $products.find((p) => p.id === id)
    if (product) {
      product = { ...product }
      if ($productsInCart.find((p) => p.id === id)) {
        product.id = Math.floor(Math.random() * 100000)
      }
      $productsInCart.push(product)
      $productsInCart = $productsInCart
    }
  }
</script>

<title>Geetanjali Sharma | Our Products</title>

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

  <header
    class="col-start-1  col-end-13 mt-4 mb-2 flex flex-col  items-center text-center  md:my-20 md:mb-4 ">
    <h1 class="head ">Our Products</h1>
    <Bar />
  </header>

  <Section>
    <div
      class="sticky top-0 z-50  col-start-1  col-end-13 grid grid-cols-2 items-center justify-between  justify-items-center  pt-4 pb-2  backdrop-blur-lg md:grid-cols-3">
      <div class="relative  flex items-center gap-2 ">
        <svg
          class="cartIcon relative"
          height="30"
          viewBox="0 0 113 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="86.5365" cy="25.6405" r="25.6405" fill="#FE6601" />
          <path
            d="M25.0358 18.2029L24.985 18.2514L24.9805 18.2558L24.8655 18.3656L24.7065 18.3667C21.5993 18.3884 19.249 18.5252 17.1613 19.3049C14.6499 20.243 12.4678 21.8367 10.863 23.9015C9.25843 25.9718 8.49087 28.6387 7.4083 32.4418C7.40829 32.4418 7.40829 32.4418 7.40829 32.4418L7.2403 33.0321L7.23885 33.0371L7.23882 33.0371L7.231 33.0633L3.26377 47.4858L3.04506 48.2809L2.79013 47.9357C2.72028 48.0157 2.65139 48.0971 2.58401 48.1797L2.58388 48.1799C0.635237 50.5656 0.0959863 53.552 0.553275 57.8518C1.01189 62.1641 2.4626 67.7141 4.41382 75.1725L4.41391 75.1729L4.50138 75.5084C4.75107 76.4665 4.98729 77.3728 5.21689 78.2332L15.7622 66.1347L7.63665 54.7387L7.52599 54.5835L7.5766 54.3998L9.87409 46.0579L10.0977 45.2462L10.5865 45.9317L20.844 60.3142L35.66 43.3185H30.461C21.8462 43.3185 15.5887 43.3198 11.0071 44.0813L10.3893 44.184L10.5551 43.58L13.0433 34.5177L13.0444 34.5135L13.0444 34.5135C13.7042 32.2076 14.1551 30.6806 14.5424 29.6009C14.9312 28.5166 15.2652 27.8562 15.7013 27.2948C16.6371 26.0894 17.9071 25.1624 19.3645 24.6176L19.3646 24.6176C20.4404 24.2156 21.7201 24.1104 24.7133 24.0801L24.9641 24.0776L25.076 24.3022C25.6865 25.5286 26.6496 26.5672 27.8559 27.2955C29.0623 28.0239 30.4615 28.4114 31.8913 28.4116C31.8913 28.4116 31.8913 28.4116 31.8913 28.4116H50.0533C51.4831 28.4115 52.8823 28.0239 54.0887 27.2955C55.295 26.5672 56.2581 25.5286 56.8687 24.3022L56.9805 24.0776L57.2313 24.0801C60.2245 24.1104 61.5042 24.2156 62.58 24.6176L62.5804 24.6177C64.0361 25.1633 65.3045 26.0902 66.2389 27.295M25.0358 18.2029L65.9224 27.5406M25.0358 18.2029L25.0671 18.1399C26.2701 15.7169 28.8726 14.0222 31.8913 14.0222H50.0533C53.0716 14.0222 55.6701 15.7166 56.8778 18.1404L56.9874 18.3603L57.233 18.3624C60.3361 18.3884 62.6909 18.5251 64.7786 19.3049C67.2907 20.2442 69.473 21.8396 71.0772 23.9061L71.0773 23.9063C72.6862 25.9763 73.4538 28.6388 74.5317 32.4414L74.5318 32.4418L74.6997 33.0321L74.7012 33.0371L74.7079 33.059L75.0942 32.9528M25.0358 18.2029L74.7103 33.0675M66.2389 27.295L65.9224 27.5406M66.2389 27.295C66.2387 27.2946 66.2384 27.2943 66.2381 27.2939L65.9224 27.5406M66.2389 27.295C66.6774 27.8564 67.0124 28.5171 67.4011 29.6009C67.7885 30.6808 68.2382 32.208 68.8957 34.5139L68.8968 34.5175L71.3895 43.5798L71.5557 44.184L70.9375 44.0813C66.3559 43.3198 60.0984 43.3185 51.4881 43.3185H46.2846M65.9224 27.5406C66.726 28.5692 67.1937 30.0058 68.5105 34.6237L70.8863 43.261C70.9474 43.2708 71.0083 43.2808 71.0689 43.2908L71.0032 43.6861L70.6169 43.7923L70.5686 43.6168C65.9884 42.9178 59.8169 42.9178 51.4881 42.9178H45.9353L46.2846 43.3185M46.2846 43.3185L61.1006 60.3142M46.2846 43.3185H45.7531L60.8615 60.6495L61.1006 60.3142M75.0942 32.9528L78.9274 46.8881M75.0942 32.9528L75.0851 32.9224L74.9171 32.3321L78.9274 46.8881M75.0942 32.9528L74.7103 33.0675M78.9274 46.8881L78.7948 47.0678L78.7403 47.1416L79.0506 47.3707L79.0332 47.3876L78.8304 47.5857C78.9392 47.697 79.0455 47.8137 79.1505 47.9349M74.7103 33.0675L78.6763 47.4858L78.895 48.281L79.1505 47.9349M79.1505 47.9349C79.2195 48.0146 79.2879 48.0962 79.356 48.1797L79.3562 48.1799C81.3048 50.5656 81.8441 53.552 81.3868 57.8518C80.9282 62.1641 79.4775 67.7141 77.5262 75.1725L77.5262 75.1729L77.4386 75.5086C77.189 76.4666 76.9528 77.3729 76.7232 78.2332M79.1505 47.9349L79.3849 47.6175L79.3942 47.6049C79.4865 47.7095 79.577 47.8168 79.6665 47.9264C83.7575 52.935 81.8096 60.3827 77.9138 75.2739L77.8262 75.6101C77.5514 76.6647 77.2924 77.6583 77.0405 78.5973L76.7232 78.2332M76.7232 78.2332L66.1779 66.1347L74.3034 54.7387L74.414 54.5836L74.3635 54.3999L72.0706 46.0581L71.8473 45.2458L71.3581 45.9317L61.1006 60.3142M76.7232 78.2332C76.6813 78.3901 76.6396 78.5456 76.5982 78.6995L65.6681 66.1595L73.9772 54.5061L71.8212 46.6623L72.0104 46.3969L71.6843 46.1643L71.298 46.2705L71.3844 46.5848L61.3713 60.6247L61.1006 60.3142"
            fill="#D9D9D9"
            stroke="black"
            stroke-width="0.801265" />
          <path
            d="M18.5515 94.2576C15.573 93.9174 13.4501 93.2425 11.6805 91.923C10.0208 90.6826 8.8652 89.0215 7.84738 86.6124L20.2363 72.3999L36.0718 94.5995H30.4612C25.3438 94.5995 21.5396 94.5989 18.5515 94.2576ZM51.4837 94.5995H45.8731L61.7087 72.3999L74.0977 86.6083C73.0798 89.0214 71.9242 90.6826 70.2644 91.923C68.4948 93.2425 66.372 93.9174 63.3934 94.2576C60.4054 94.5989 56.6011 94.5995 51.4837 94.5995ZM56.6314 66.5751L40.9725 88.5334L25.3136 66.5751L40.9725 48.6143L56.6314 66.5751Z"
            fill="#D9D9D9"
            stroke="black"
            stroke-width="0.801265" />
        </svg>

        <p class="para absolute top-0 left-[1.4rem]">
          {$productsInCart.length}
        </p>

        <button
          class="para rounded-full border border-dashed border-dark bg-orange bg-opacity-70 px-2 py-1 text-sm md:text-base"
          on:click={() => {
            if ($isCheckoutOpen) {
              $isCheckoutOpen = false
            }
            $isCartOpen = true
            cart.scrollIntoView()
          }}>View Cart</button>
      </div>

      <img class="hidden h-10 object-contain  md:block" src={astroEye} alt="" />

      <button
        class="para rounded-full   border border-dashed border-dark bg-orange bg-opacity-70 px-2 py-1 text-sm md:text-base "
        on:click={() => {
          if ($isCartOpen) {
            $isCartOpen = false
          }
          $isCheckoutOpen = true
          checkout.scrollIntoView()
        }}>Checkout</button>
    </div>

    <div
      class="shop relative col-start-1 col-end-13 mt-2 grid  rounded-xl  border-t  border-dark p-5 shadow-2xl  shadow-slate-800 md:my-10 md:mt-0 md:gap-y-12 md:gap-x-4 md:p-10 ">
      {#each $products as product (product.id)}
        <Product
          id={product.id}
          image={product.image}
          category={product.category}
          name={product.name}
          price={product.price}
          on:click={addToCart} />
      {/each}

      <Cart bind:this={cart} />
      <Checkout bind:this={checkout} />
    </div>
  </Section>

  <GetInTouch />
</main>
<Footer />

<style>
  .shop {
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }

  @media (max-width: 768px) {
    .shop {
      grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
      gap: 1rem;
    }
  }
</style>
