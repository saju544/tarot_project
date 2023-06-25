<script>
  import Bar from './Bar.svelte'
</script>

<nav
  class="col-start-1 col-end-13 mt-8 flex flex-col items-center  md:mt-auto   md:flex-row md:gap-8 md:justify-self-center  md:pt-14">
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
